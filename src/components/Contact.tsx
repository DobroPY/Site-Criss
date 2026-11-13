'use client';

import {
  HiGift,
  HiClock,
  HiShieldCheck,
  HiPhone,
  HiCalendar,
  HiLockClosed,
} from 'react-icons/hi2';
import { TbHeadset } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/context/LanguageContext';

const purple = '#7A3AE3';
const purpleDark = '#5B2589';

const chipIcons: IconType[] = [HiGift, HiClock, HiShieldCheck, TbHeadset];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="cxc-section" style={{ background: '#F9F9FB' }}>
      <div className="cxc-wrap cxc-grid-split">
        {/* Left column */}
        <div>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: purple,
            textTransform: 'uppercase',
          }}>{t.contact.eyebrow}</div>
          <div style={{
            width: '32px',
            height: '3px',
            background: purpleDark,
            borderRadius: '2px',
            marginTop: '10px',
          }} />
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 48px)',
            letterSpacing: '-0.025em',
            color: '#16141E',
            marginTop: '16px',
            lineHeight: 1.1,
          }}>
            {t.contact.title}
            <span style={{ color: purple }}>.</span>
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.65,
            color: '#5F5872',
            marginTop: '16px',
            maxWidth: '480px',
          }}>{t.contact.sub}</p>

          {/* Feature chips */}
          <div className="cxc-grid-chips" style={{ marginTop: '32px' }}>
            {t.contact.chips.map((chip, i) => {
              const Icon = chipIcons[i];
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#F3EDFA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                  }}>
                    <Icon size={20} color={purpleDark} aria-hidden />
                  </div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#403A55',
                    marginTop: '8px',
                    lineHeight: 1.35,
                  }}>{chip}</div>
                </div>
              );
            })}
          </div>

          {/* Founder banner */}
          <div style={{
            marginTop: '28px',
            background: '#F3EDFA',
            borderRadius: '12px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8A3FD1, #5B2589)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: '16px',
              color: '#fff',
              flexShrink: 0,
            }}>CXC</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#16141E' }}>{t.contact.founderTitle}</div>
              <div style={{ fontSize: '13px', color: '#5F5872', marginTop: '2px' }}>{t.contact.founderSub}</div>
            </div>
          </div>
        </div>

        {/* Right column — contact card */}
        <div style={{
          background: '#fff',
          border: '1px solid #EDE8F4',
          borderRadius: '18px',
          padding: '32px 28px',
          boxShadow: '0 24px 48px -24px rgba(30,15,60,0.15)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#F3EDFA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <HiPhone size={20} color={purpleDark} aria-hidden />
            </div>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '18px', color: '#16141E' }}>
                {t.contact.cardTitle}
              </div>
              <div style={{ fontSize: '13px', color: '#8A83A0', marginTop: '2px' }}>{t.contact.cardSub}</div>
            </div>
          </div>

          <div style={{ paddingBottom: '20px', borderBottom: '1px solid #F0ECF6' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: purple }}>
              {t.contact.emailLabel}
            </div>
            <a href={`mailto:${t.contact.email}`} style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: '17px',
              color: '#16141E',
              display: 'block',
              marginTop: '6px',
            }}>{t.contact.email}</a>
          </div>

          <div style={{ padding: '20px 0', borderBottom: '1px solid #F0ECF6' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: purple }}>
              {t.contact.phoneLabel}
            </div>
            <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: '17px',
              color: '#16141E',
              display: 'block',
              marginTop: '6px',
            }}>{t.contact.phone}</a>
          </div>

          <a href={`mailto:${t.contact.email}`} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: purpleDark,
            color: '#fff',
            fontSize: '15px',
            fontWeight: 600,
            padding: '14px 24px',
            borderRadius: '10px',
            marginTop: '24px',
            width: '100%',
          }}>
            <HiCalendar size={18} aria-hidden />
            {t.contact.cta}
          </a>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '16px',
          }}>
            <HiLockClosed size={14} color="#9A94B0" aria-hidden />
            <span style={{ fontSize: '12px', color: '#9A94B0' }}>{t.contact.security}</span>
          </div>
          <div style={{ textAlign: 'center', fontSize: '12px', color: '#B7B1CA', marginTop: '6px' }}>
            {t.contact.loc}
          </div>
        </div>
      </div>
    </section>
  );
}
