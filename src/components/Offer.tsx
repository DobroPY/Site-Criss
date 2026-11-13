'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Offer() {
  const { t } = useLanguage();

  return (
    <section id="offer" className="cxc-section" style={{ background: '#fff' }}>
      <div className="cxc-offer-inner" style={{
        background: 'linear-gradient(180deg, #6B3FA0 0%, #2B124A 100%)',
        borderRadius: '24px',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 32px 64px -24px rgba(43,18,74,0.45)',
      }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: '#D8C2F0',
          textTransform: 'uppercase',
        }}>{t.offer.eyebrow}</div>

        <h2 style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 44px)',
          letterSpacing: '-0.025em',
          marginTop: '16px',
          lineHeight: 1.15,
        }}>{t.offer.title}</h2>

        <p style={{
          fontSize: '16px',
          lineHeight: 1.65,
          color: '#E0D3F0',
          marginTop: '18px',
          maxWidth: '620px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>{t.offer.body}</p>

        <div className="cxc-offer-stats" style={{ marginTop: '40px' }}>
          {t.offer.stats.map((item, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 52px)',
                lineHeight: 1,
                color: '#fff',
              }}>{item.n}</div>
              <div style={{ fontSize: '14px', color: '#CBB6E6', marginTop: '8px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" style={{
          display: 'inline-block',
          background: '#fff',
          color: '#2B124A',
          fontSize: '15px',
          fontWeight: 700,
          padding: '14px 32px',
          borderRadius: '100px',
          marginTop: '40px',
        }}>{t.nav.cta}</a>
      </div>
    </section>
  );
}
