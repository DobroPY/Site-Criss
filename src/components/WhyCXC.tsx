'use client';

import { HiRocketLaunch, HiUsers, HiCalendar, HiShieldCheck } from 'react-icons/hi2';
import { TbMapPin } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/context/LanguageContext';
import { TECH_STACK } from '@/lib/techStack';
import TechLogo from '@/components/TechLogo';

const purple = '#7A3AE3';
const purpleDark = '#5B2589';

const statIcons: IconType[] = [HiRocketLaunch, HiUsers, HiCalendar, TbMapPin];

export default function WhyCXC() {
  const { t } = useLanguage();

  return (
    <section className="cxc-section" style={{ background: '#fff' }}>
      <div className="cxc-wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: purple,
            textTransform: 'uppercase',
          }}>{t.why.eyebrow}</div>
          <div style={{
            width: '32px',
            height: '3px',
            background: purpleDark,
            borderRadius: '2px',
            margin: '10px auto 0',
          }} />
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            letterSpacing: '-0.025em',
            color: '#16141E',
            marginTop: '16px',
          }}>{t.why.title}</h2>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#5F5872',
            marginTop: '14px',
          }}>{t.why.sub}</p>
        </div>

        {/* Stats cards */}
        <div className="cxc-grid-4" style={{ marginTop: '44px' }}>
          {t.why.stats.map((item, i) => {
            const Icon = statIcons[i];
            return (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #EDE8F4',
                borderRadius: '16px',
                padding: '28px 24px',
                boxShadow: '0 2px 16px -4px rgba(30,15,60,0.06)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#F3EDFA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}>
                  <Icon size={24} color={purpleDark} aria-hidden />
                </div>
                <div style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 4vw, 48px)',
                  lineHeight: 1,
                  color: purpleDark,
                  marginTop: '18px',
                }}>{item.n}</div>
                <div style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#16141E',
                  marginTop: '10px',
                }}>{item.label}</div>
                <p style={{
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: '#8A83A0',
                  marginTop: '10px',
                }}>{item.body}</p>
              </div>
            );
          })}
        </div>

        {/* Trust card: partner blurb on top, tech stack grid below */}
        <div className="cxc-trust-card" style={{
          marginTop: '28px',
          background: '#F7F5FB',
          borderRadius: '14px',
          border: '1px solid #EDE8F4',
        }}>
          <div className="cxc-trust-head">
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: purpleDark,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <HiShieldCheck size={22} color="#fff" aria-hidden />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#16141E' }}>{t.why.trustTitle}</div>
              <div style={{ fontSize: '13px', color: '#5F5872', marginTop: '2px' }}>{t.why.trustSub}</div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #E6E0F0', marginTop: '20px', paddingTop: '18px' }}>
            <div style={{ fontSize: '13px', color: '#8A83A0', marginBottom: '14px', textAlign: 'center' }}>{t.why.trustLabel}</div>
            <div className="cxc-trust-tech-grid">
              {TECH_STACK.map((tech) => (
                <TechLogo key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
