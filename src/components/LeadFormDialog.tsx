'use client';

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import {
  HiCalendar,
  HiXMark,
  HiCheck,
  HiCheckCircle,
  HiLockClosed,
  HiExclamationCircle,
} from 'react-icons/hi2';
import { useLanguage } from '@/context/LanguageContext';
import { submitLead } from '@/app/actions/lead';
import { LEGAL_LINKS } from '@/lib/company';
import {
  CALL_TIME_KEYS,
  EMPTY_LEAD,
  INDUSTRY_KEYS,
  INTEREST_KEYS,
  LEAD_FIELDS,
  validateLead,
  type Interest,
  type LeadErrors,
  type LeadField,
  type LeadInput,
} from '@/lib/lead';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type TextField = 'name' | 'company' | 'cui' | 'phone' | 'email';

/**
 * "Programează o discuție" request form in a native modal <dialog>.
 * Closing keeps what was typed (in case it was accidental); only a successful send resets it.
 */
export default function LeadFormDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const f = t.leadForm;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const openedAt = useRef(0);
  const pressedOnBackdrop = useRef(false);
  const [values, setValues] = useState<LeadInput>(EMPTY_LEAD);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [website, setWebsite] = useState(''); // honeypot, hidden from people

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      openedAt.current = Date.now();
      formRef.current?.querySelector<HTMLElement>('[name="name"]')?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const close = () => dialogRef.current?.close();

  // Fires for Esc, the close buttons and backdrop clicks alike.
  const handleDialogClose = () => {
    if (status === 'sent') {
      setValues(EMPTY_LEAD);
      setErrors({});
      setWebsite('');
      setStatus('idle');
    }
    onClose();
  };

  const set = <K extends keyof LeadInput>(key: K, value: LeadInput[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      if (!(key in e)) return e;
      const next = { ...e };
      delete next[key as LeadField];
      return next;
    });
  };

  // "Nu știu încă" is exclusive with the concrete options.
  const toggleInterest = (k: Interest) => {
    const has = values.interests.includes(k);
    if (has) return set('interests', values.interests.filter((x) => x !== k));
    if (k === 'unsure') return set('interests', ['unsure']);
    set('interests', [...values.interests.filter((x) => x !== 'unsure'), k]);
  };

  const focusFirstError = (errs: LeadErrors) => {
    const first = LEAD_FIELDS.find((k) => errs[k]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const { errors: found } = validateLead(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      focusFirstError(found);
      return;
    }
    setStatus('sending');
    try {
      const res = await submitLead(values, { website, elapsedMs: Date.now() - openedAt.current });
      if (res.ok) {
        setStatus('sent');
      } else if (res.error === 'invalid') {
        setErrors(res.fields);
        setStatus('idle');
        focusFirstError(res.fields);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const errorText = (field: LeadField) => {
    const code = errors[field];
    return code ? f.errors[code] : undefined;
  };

  const textInput = (name: TextField) => ({
    id: `lead-${name}`,
    name,
    value: values[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => set(name, e.target.value),
    placeholder: f[name].placeholder,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `lead-${name}-error` : undefined,
    className: 'cxc-input',
  });

  return (
    <dialog
      ref={dialogRef}
      className="cxc-lead-dialog"
      aria-labelledby="lead-title"
      onClose={handleDialogClose}
      onMouseDown={(e) => { pressedOnBackdrop.current = e.target === e.currentTarget; }}
      onClick={(e) => {
        // Only a click that both starts and ends on the backdrop closes (not a text-selection drag).
        if (pressedOnBackdrop.current && e.target === e.currentTarget) close();
      }}
    >
      <div className="cxc-lead-panel">
        <div className="cxc-lead-head">
          <div className="cxc-lead-icon"><HiCalendar size={20} aria-hidden /></div>
          <div>
            <h2 id="lead-title">{f.title}</h2>
            <p>{f.sub}</p>
          </div>
          <button type="button" className="cxc-lead-close" aria-label={f.close} onClick={close}>
            <HiXMark size={20} aria-hidden />
          </button>
        </div>

        {status === 'sent' ? (
          <div className="cxc-lead-success" role="status">
            <div className="cxc-lead-success-icon"><HiCheckCircle size={36} aria-hidden /></div>
            <h3>{f.successTitle.replace('{name}', values.name.split(' ')[0] || values.name)}</h3>
            <p>{f.successBody}</p>
            <button type="button" className="cxc-lead-secondary" onClick={close}>{f.successClose}</button>
          </div>
        ) : (
          <form ref={formRef} className="cxc-lead-form" onSubmit={onSubmit} noValidate>
            <div className="cxc-lead-grid">
              <Field id="lead-name" label={f.name.label} error={errorText('name')}>
                <input {...textInput('name')} autoComplete="name" maxLength={80} />
              </Field>
              <Field id="lead-company" label={f.company.label} error={errorText('company')}>
                <input {...textInput('company')} autoComplete="organization" maxLength={120} />
              </Field>
              <Field id="lead-cui" label={f.cui.label} optional={f.optional} error={errorText('cui')}>
                <input {...textInput('cui')} autoComplete="off" maxLength={14} />
              </Field>
              <Field id="lead-industry" label={f.industry.label} error={errorText('industry')}>
                <select
                  id="lead-industry"
                  name="industry"
                  value={values.industry}
                  onChange={(e) => set('industry', e.target.value as LeadInput['industry'])}
                  aria-invalid={errors.industry ? true : undefined}
                  aria-describedby={errors.industry ? 'lead-industry-error' : undefined}
                  className={`cxc-input${values.industry ? '' : ' is-placeholder'}`}
                >
                  <option value="" disabled>{f.industry.placeholder}</option>
                  {INDUSTRY_KEYS.map((k) => (
                    <option key={k} value={k}>{f.industries[k]}</option>
                  ))}
                </select>
              </Field>
              <Field id="lead-phone" label={f.phone.label} error={errorText('phone')}>
                <input {...textInput('phone')} type="tel" inputMode="tel" autoComplete="tel" maxLength={24} />
              </Field>
              <Field id="lead-email" label={f.email.label} error={errorText('email')}>
                <input {...textInput('email')} type="email" inputMode="email" autoComplete="email" maxLength={254} />
              </Field>

              <fieldset className="cxc-fieldset cxc-field-full">
                <legend className="cxc-field-label">
                  {f.interestsLabel}<span className="cxc-optional">{f.interestsHint}</span>
                </legend>
                <div className="cxc-chips">
                  {INTEREST_KEYS.map((k) => (
                    <label key={k} className="cxc-chip">
                      <input
                        type="checkbox"
                        name="interests"
                        value={k}
                        checked={values.interests.includes(k)}
                        onChange={() => toggleInterest(k)}
                      />
                      <HiCheck size={14} className="cxc-chip-check" aria-hidden />
                      {f.interests[k]}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="cxc-fieldset cxc-field-full">
                <legend className="cxc-field-label">{f.callTimeLabel}</legend>
                <div className="cxc-chips">
                  {CALL_TIME_KEYS.map((k) => (
                    <label key={k} className="cxc-chip">
                      <input
                        type="radio"
                        name="callTime"
                        value={k}
                        checked={values.callTime === k}
                        onChange={() => set('callTime', k)}
                      />
                      <HiCheck size={14} className="cxc-chip-check" aria-hidden />
                      {f.callTimes[k]}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field id="lead-message" label={f.message.label} optional={f.optional} error={errorText('message')} full>
                <textarea
                  id="lead-message"
                  name="message"
                  value={values.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder={f.message.placeholder}
                  rows={3}
                  maxLength={1000}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? 'lead-message-error' : undefined}
                  className="cxc-input"
                />
              </Field>

              <div className="cxc-field cxc-field-full">
                <label className="cxc-consent">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={values.consent}
                    onChange={(e) => set('consent', e.target.checked)}
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={errors.consent ? 'lead-consent-error' : undefined}
                  />
                  <span>
                    {f.consent}{' '}
                    {/* New tab, so following the link doesn't lose what was typed. */}
                    <a href={LEGAL_LINKS.privacy} target="_blank" rel="noopener noreferrer">{f.consentLink}</a>.
                  </span>
                </label>
                {errors.consent && <p id="lead-consent-error" className="cxc-field-error">{errorText('consent')}</p>}
              </div>
            </div>

            {/* Honeypot: invisible to people, tempting to bots. */}
            <div className="cxc-hp" aria-hidden="true">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </label>
            </div>

            {status === 'error' && (
              <div className="cxc-lead-alert" role="alert">
                <HiExclamationCircle size={18} aria-hidden style={{ flexShrink: 0, marginTop: '1px' }} />
                <span>
                  {f.sendError}{' '}
                  <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>{' '}
                  · <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`}>{t.contact.phone}</a>
                </span>
              </div>
            )}

            <button type="submit" className="cxc-lead-submit" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <>
                  <span className="cxc-spinner" aria-hidden />
                  {f.sending}
                </>
              ) : (
                f.submit
              )}
            </button>
            <div className="cxc-lead-note">
              <HiLockClosed size={13} aria-hidden />
              {t.contact.security}
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}

function Field({ id, label, optional, error, full, children }: {
  id: string;
  label: string;
  optional?: string;
  error?: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`cxc-field${full ? ' cxc-field-full' : ''}`}>
      <label htmlFor={id} className="cxc-field-label">
        {label}
        {optional && <span className="cxc-optional">{optional}</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="cxc-field-error">{error}</p>}
    </div>
  );
}
