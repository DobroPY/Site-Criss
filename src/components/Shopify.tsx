'use client';

import {
  HiBell,
  HiChartBar,
  HiUserGroup,
  HiTag,
  HiArrowTrendingUp,
  HiCheckCircle,
} from 'react-icons/hi2';
import { SiShopify } from 'react-icons/si';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/context/LanguageContext';

const purple = '#A855F7';
const purpleLight = '#B98BEA';
const green = '#22C55E';

const featureIcons: IconType[] = [HiBell, HiChartBar, HiUserGroup, HiTag, HiArrowTrendingUp];

function DashboardMockup() {
  return (
    <div style={{
      background: '#12101C',
      borderRadius: '14px',
      border: '1px solid #2A2440',
      padding: '16px',
      marginTop: '20px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Dashboard</span>
        <span style={{
          fontSize: '10px',
          color: '#9A94B0',
          background: '#1E1A2E',
          padding: '4px 10px',
          borderRadius: '6px',
        }}>Ultimele 30 zile</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '12px' }}>
        {[
          { label: 'Vânzări Totale', value: '238.410 €', change: '+28%' },
          { label: 'Comenzi', value: '1.842', change: '+24%' },
          { label: 'Rată de Conversie', value: '3,62%', change: '+18%' },
          { label: 'Valoarea Medie Coș', value: '129 €', change: '+15%' },
        ].map((s) => (
          <div key={s.label} style={{ background: '#1A1728', borderRadius: '8px', padding: '10px 8px' }}>
            <div style={{ fontSize: '8px', color: '#6A6486', marginBottom: '4px' }}>{s.label}</div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '11px', color: '#fff' }}>{s.value}</div>
            <div style={{ fontSize: '8px', color: green, marginTop: '2px' }}>{s.change}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: '8px' }}>
        <div style={{ background: '#1A1728', borderRadius: '8px', padding: '12px 10px' }}>
          <div style={{ fontSize: '9px', color: '#6A6486', marginBottom: '8px' }}>Vânzări</div>
          <svg viewBox="0 0 180 60" width="100%" height="60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="shopifyLineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,45 C25,42 45,38 70,30 C95,22 120,18 145,12 L180,8 L180,60 L0,60 Z" fill="url(#shopifyLineGrad)" />
            <path d="M0,45 C25,42 45,38 70,30 C95,22 120,18 145,12 L180,8" fill="none" stroke="#A855F7" strokeWidth="2" />
            <circle cx="120" cy="18" r="3" fill="#A855F7" />
          </svg>
          <div style={{ fontSize: '8px', color: '#9A94B0', marginTop: '4px' }}>22 Apr · 24.540 €</div>
        </div>

        <div style={{ background: '#1A1728', borderRadius: '8px', padding: '12px 10px' }}>
          <div style={{ fontSize: '9px', color: '#6A6486', marginBottom: '8px' }}>Surse de comenzi</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="16" fill="none" stroke="#2A2440" strokeWidth="6" />
              <circle cx="22" cy="22" r="16" fill="none" stroke="#A855F7" strokeWidth="6" strokeDasharray="65 35" strokeDashoffset="0" transform="rotate(-90 22 22)" />
              <circle cx="22" cy="22" r="16" fill="none" stroke="#7C3AED" strokeWidth="6" strokeDasharray="22 78" strokeDashoffset="-65" transform="rotate(-90 22 22)" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {[
                { label: 'Canal propriu', pct: '64.7%' },
                { label: 'Social media', pct: '21.5%' },
                { label: 'Email', pct: '9.3%' },
                { label: 'Altele', pct: '4.5%' },
              ].map((item) => (
                <div key={item.label} style={{ fontSize: '7px', color: '#9A94B0' }}>
                  {item.label} {item.pct}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shopify() {
  const { t } = useLanguage();

  return (
    <section id="shopify" className="cxc-section" style={{ background: '#0A0A0F', color: '#fff' }}>
      <div className="cxc-wrap cxc-grid-split">
        {/* Left column */}
        <div>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: purpleLight,
            textTransform: 'uppercase',
          }}>{t.shopify.eyebrow}</div>

          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            letterSpacing: '-0.025em',
            lineHeight: 1.12,
            marginTop: '16px',
          }}>
            {t.shopify.titleLine1}{' '}
            <span style={{
              background: 'linear-gradient(120deg, #C084FC, #A855F7)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>{t.shopify.titleHighlight}</span>
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.65,
            color: '#94A3B8',
            marginTop: '18px',
            maxWidth: '540px',
          }}>{t.shopify.body}</p>

          <div style={{ marginTop: '28px' }}>
            {t.shopify.features.map((feat, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={i}>
                  {i > 0 && <div style={{ height: '1px', background: '#1E1A2E', margin: '0' }} />}
                  <div style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    padding: '16px 0',
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: `1.5px solid ${purple}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color={purpleLight} aria-hidden />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', lineHeight: 1.35 }}>{feat.title}</div>
                      <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.45, marginTop: '3px' }}>{feat.sub}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{
            marginTop: '24px',
            background: 'linear-gradient(135deg, #2A1F42, #1A1530)',
            border: '1px solid #3D2E5C',
            borderRadius: '12px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <HiCheckCircle size={20} color={purpleLight} aria-hidden />
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#E4E0F0' }}>{t.shopify.highlight}</span>
          </div>
        </div>

        {/* Right column — results card */}
        <div style={{
          background: 'linear-gradient(160deg, #1A1530 0%, #0F0D18 100%)',
          border: '1px solid rgba(168,85,247,0.35)',
          borderRadius: '20px',
          padding: '32px 28px 24px',
          boxShadow: '0 0 40px -8px rgba(168,85,247,0.25)',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#1E1A2E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
          }}>
            <SiShopify size={20} color="#95BF47" aria-hidden />
          </div>

          <div style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(52px, 7vw, 72px)',
            lineHeight: 1,
            background: 'linear-gradient(120deg, #C084FC, #A855F7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>{t.shopify.stat}</div>

          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#fff',
            marginTop: '16px',
            lineHeight: 1.4,
          }}>{t.shopify.statHeadline}</div>

          <p style={{
            fontSize: '14px',
            lineHeight: 1.5,
            color: '#94A3B8',
            marginTop: '8px',
          }}>{t.shopify.statSub}</p>

          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
