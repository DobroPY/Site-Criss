'use server';

import nodemailer from 'nodemailer';
import { DICT } from '@/lib/dictionary';
import { validateLead, type LeadErrors, type LeadInput } from '@/lib/lead';

export type LeadResult =
  | { ok: true }
  | { ok: false; error: 'invalid'; fields: LeadErrors }
  | { ok: false; error: 'unavailable' };

// Humans need a few seconds to fill the form; bots that post instantly are ignored.
const MIN_FILL_MS = 2500;

/**
 * Receives a "Programează o discuție" request and emails it to the team.
 * Public endpoint: everything from the client is treated as untrusted and re-validated.
 */
export async function submitLead(raw: unknown, meta: { website?: unknown; elapsedMs?: unknown }): Promise<LeadResult> {
  // Honeypot filled or submitted too fast: pretend success so bots don't retry.
  const elapsed = typeof meta?.elapsedMs === 'number' ? meta.elapsedMs : 0;
  if ((typeof meta?.website === 'string' && meta.website.trim() !== '') || elapsed < MIN_FILL_MS) {
    return { ok: true };
  }

  const { data, errors } = validateLead(raw);
  if (Object.keys(errors).length > 0) return { ok: false, error: 'invalid', fields: errors };

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;
  const mail = buildEmail(data);

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    if (process.env.NODE_ENV !== 'production') {
      // Lets the form be tried locally before email delivery is configured.
      console.log('[lead] SMTP is not configured; request not emailed:\n' + mail.text);
      return { ok: true };
    }
    console.error('[lead] SMTP_HOST / SMTP_USER / SMTP_PASS are missing; request could not be delivered.');
    return { ok: false, error: 'unavailable' };
  }

  try {
    const port = Number(SMTP_PORT) || 465;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: { name: 'Site CXC Software', address: SMTP_FROM || SMTP_USER },
      to: CONTACT_TO || DICT.ro.contact.email,
      replyTo: { name: data.name, address: data.email },
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    return { ok: true };
  } catch (err) {
    console.error('[lead] Sending failed:', err);
    return { ok: false, error: 'unavailable' };
  }
}

function buildEmail(d: LeadInput) {
  const f = DICT.ro.leadForm;
  const rows: [string, string][] = [
    [f.name.label, d.name],
    [f.company.label, d.company],
    [f.cui.label, d.cui || '—'],
    [f.industry.label, d.industry ? f.industries[d.industry] : '—'],
    [f.phone.label, d.phone],
    [f.email.label, d.email],
    [f.interestsLabel, d.interests.map((k) => f.interests[k]).join(', ') || '—'],
    [f.callTimeLabel, f.callTimes[d.callTime]],
    [f.message.label, d.message || '—'],
  ];

  const subject = `Cerere discuție: ${d.company} (${d.industry ? f.industries[d.industry] : 'domeniu nespecificat'})`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html =
    `<h2 style="font-family:Arial,sans-serif;color:#16141E">Cerere nouă de discuție</h2>` +
    `<table cellpadding="8" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="color:#8A83A0;vertical-align:top;white-space:nowrap">${esc(k)}</td>` +
          `<td style="color:#16141E;white-space:pre-wrap">${esc(v)}</td></tr>`
      )
      .join('') +
    `</table><p style="font-family:Arial,sans-serif;font-size:12px;color:#8A83A0">` +
    `Trimis din formularul de pe site. Răspunde direct la acest email ca să-i scrii clientului.</p>`;

  return { subject, text, html };
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}
