'use client';

import {
  HiCurrencyEuro,
  HiClock,
  HiChartBar,
  HiLightBulb,
  HiCheckCircle,
} from 'react-icons/hi2';
import { TbTarget } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/context/LanguageContext';

const purple = '#8A5CF5';
const purpleLight = '#B98BEA';

const itemIcons: IconType[] = [HiClock, HiChartBar, HiLightBulb];

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="cxc-section" style={{ background: '#05050C', color: '#EEEBF6' }}>
      <div className="cxc-wrap">
        {/* Header */}
        <div style={{ maxWidth: '820px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: purple,
            textTransform: 'uppercase',
          }}>{t.problem.eyebrow}</div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#fff',
            marginTop: '16px',
          }}>
            {t.problem.titleStart}{' '}
            <span style={{ color: purpleLight }}>{t.problem.titleHighlight}</span>{' '}
            {t.problem.titleEnd}
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#9A94B0',
            marginTop: '16px',
          }}>{t.problem.sub}</p>
        </div>

        {/* Cards row */}
        <div className="cxc-grid-4-cards" style={{ marginTop: '48px' }}>
          {/* Stat card — highlighted */}
          <div style={{
            background: 'linear-gradient(160deg, #2A1F42 0%, #1A1530 100%)',
            border: `1px solid ${purple}`,
            borderRadius: '16px',
            padding: '24px 22px',
            boxShadow: `0 0 24px -4px rgba(138,92,245,0.25)`,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: purple,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <HiCurrencyEuro size={20} color="#fff" aria-hidden />
            </div>
            <div style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: purpleLight,
              marginTop: '18px',
              textTransform: 'uppercase',
            }}>{t.problem.statLabel}</div>
            <div style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1,
              color: '#fff',
              marginTop: '8px',
            }}>{t.problem.stat}</div>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.5,
              color: '#B7B1CA',
              marginTop: '12px',
            }}>{t.problem.statSub}</p>
          </div>

          {/* Problem items */}
          {t.problem.items.map((item, i) => {
            const Icon = itemIcons[i];
            return (
              <div key={i} style={{
                background: '#0B0B1E',
                border: '1px solid #1E1A32',
                borderRadius: '16px',
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: `1.5px solid ${purple}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={18} color={purpleLight} aria-hidden />
                </div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#fff',
                  marginTop: '18px',
                }}>{item.title}</h3>
                <div style={{
                  width: '28px',
                  height: '2px',
                  background: purple,
                  borderRadius: '1px',
                  marginTop: '8px',
                }} />
                <p style={{
                  fontSize: '13px',
                  lineHeight: 1.55,
                  color: '#9A94B0',
                  marginTop: '12px',
                }}>{item.body}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom solution bar */}
        <div className="cxc-flex-bar" style={{
          marginTop: '24px',
          background: '#0B0B1E',
          border: `1px solid #2A2448`,
          borderRadius: '14px',
          padding: '20px 28px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 280px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: purple,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <TbTarget size={20} color="#fff" aria-hidden />
            </div>
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>{t.problem.solutionText}</span>
          </div>

          <div className="cxc-bar-divider" style={{ width: '1px', height: '36px', background: '#2A2448', flexShrink: 0 }} />

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px 28px',
            flex: '1 1 320px',
          }}>
            {t.problem.benefits.map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HiCheckCircle size={18} color={purple} aria-hidden />
                <span style={{ fontSize: '14px', color: '#D4CFE8' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
