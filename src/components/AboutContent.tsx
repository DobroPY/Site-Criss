'use client';

import { useState } from 'react';
import { HiArrowRight, HiChatBubbleLeftRight, HiCodeBracket, HiRocketLaunch, HiShieldCheck } from 'react-icons/hi2';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/context/LanguageContext';
import LeadFormDialog from '@/components/LeadFormDialog';
import { COMPANY } from '@/lib/company';

const howIcons: IconType[] = [HiChatBubbleLeftRight, HiRocketLaunch, HiCodeBracket, HiShieldCheck];

export default function AboutContent() {
  const { lang, t } = useLanguage();
  const [formOpen, setFormOpen] = useState(false);
  const a = t.about;

  const details: [string, string][] = [
    [a.legalName, COMPANY.legalName],
    [a.legalForm, lang === 'ro' ? 'Persoană fizică autorizată (PFA)' : 'Authorised self-employed person (PFA)'],
    [a.brand, COMPANY.brand],
    [t.footer.cui, COMPANY.cui],
  ];

  return (
    <main>
      <section className="cxc-about-hero">
        <div className="cxc-wrap">
          <div className="cxc-about-eyebrow">{a.eyebrow}</div>
          <h1>
            {a.title} <span>{a.titleHighlight}</span>
          </h1>
          <p>{a.intro}</p>
        </div>
      </section>

      <section className="cxc-about-body">
        <div className="cxc-wrap cxc-about-grid">
          <div>
            <h2>{a.whoTitle}</h2>
            <p className="cxc-about-text">{a.who}</p>

            <h2 style={{ marginTop: '40px' }}>{a.howTitle}</h2>
            <div className="cxc-about-how">
              {a.how.map((item, i) => {
                const Icon = howIcons[i];
                return (
                  <div key={item.title} className="cxc-about-card">
                    <div className="cxc-about-icon"><Icon size={20} aria-hidden /></div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                );
              })}
            </div>

            <h2 style={{ marginTop: '40px' }}>{a.areasTitle}</h2>
            <ul className="cxc-about-areas">
              {a.areas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>

          <aside className="cxc-about-data" aria-labelledby="about-data-title">
            <h2 id="about-data-title">{a.dataTitle}</h2>
            <dl>
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <div>
                <dt>{a.email}</dt>
                <dd><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></dd>
              </div>
              <div>
                <dt>{a.phone}</dt>
                <dd><a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a></dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="cxc-about-cta">
        <div className="cxc-wrap">
          <h2>{a.ctaTitle}</h2>
          <p>{a.ctaSub}</p>
          <button type="button" aria-haspopup="dialog" className="cxc-about-cta-btn" onClick={() => setFormOpen(true)}>
            {a.cta}
            <HiArrowRight size={16} aria-hidden />
          </button>
        </div>
      </section>
      <LeadFormDialog open={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
