'use client';

import {
  HiCodeBracket,
  HiGlobeEuropeAfrica,
  HiMapPin,
  HiPuzzlePiece,
  HiShieldCheck,
  HiCheckCircle,
  HiCalendar,
  HiLockClosed,
} from 'react-icons/hi2';
import { TbTruckDelivery, TbHeadset } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/context/LanguageContext';

const purple = '#8A5CF5';
const purpleDark = '#6D28D9';

const itemIcons: IconType[] = [HiCodeBracket, HiGlobeEuropeAfrica, HiMapPin, TbTruckDelivery, HiPuzzlePiece, HiShieldCheck];
const bottomIcons: IconType[] = [HiShieldCheck, HiCalendar, HiLockClosed, TbHeadset];

export default function Guarantees() {
  const { t } = useLanguage();

  return (
    <section className="cxc-section" style={{ background: '#05050A', color: '#fff' }}>
      <div className="cxc-wrap">
        {/* Header */}
        <div style={{ maxWidth: '640px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: purple,
            textTransform: 'uppercase',
          }}>{t.guarantees.eyebrow}</div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            letterSpacing: '-0.025em',
            marginTop: '14px',
          }}>
            {t.guarantees.title}
            <span style={{ color: purple }}>.</span>
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#9A94B0', marginTop: '14px' }}>{t.guarantees.sub}</p>
          <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#9A94B0', marginTop: '4px' }}>{t.guarantees.subLine2}</p>
        </div>

        {/* Grid */}
        <div className="cxc-grid-3" style={{ marginTop: '44px' }}>
          {t.guarantees.items.map((item, i) => {
            const Icon = itemIcons[i];
            return (
              <div key={i} style={{
                background: '#0E0E1A',
                border: '1px solid #1E1A32',
                borderRadius: '14px',
                padding: '24px 22px',
                position: 'relative',
              }}>
                <HiCheckCircle
                  size={18}
                  color={purple}
                  style={{ position: 'absolute', top: '18px', right: '18px' }}
                  aria-hidden
                />
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(138,92,245,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={20} color={purple} aria-hidden />
                </div>
                <div style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#fff',
                  marginTop: '16px',
                }}>{item.title}</div>
                <p style={{
                  fontSize: '13px',
                  lineHeight: 1.55,
                  color: '#9A94B0',
                  marginTop: '8px',
                }}>{item.body}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="cxc-bar-3-bottom" style={{
          marginTop: '20px',
          background: '#0E0E1A',
          border: '1px solid #1E1A32',
          borderRadius: '14px',
        }}>
          {t.guarantees.bottom.map((item, i) => {
            const Icon = bottomIcons[i];
            const isHighlight = i === 0;
            return (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '22px 24px',
              }}>
                <div style={{
                  width: isHighlight ? '48px' : '36px',
                  height: isHighlight ? '48px' : '36px',
                  borderRadius: '50%',
                  background: isHighlight ? purpleDark : 'rgba(138,92,245,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: isHighlight ? `0 0 24px rgba(138,92,245,0.4)` : 'none',
                }}>
                  <Icon size={isHighlight ? 24 : 18} color={isHighlight ? '#fff' : purple} aria-hidden />
                </div>
                <div>
                  <div style={{
                    fontSize: isHighlight ? '15px' : '13px',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.35,
                  }}>{item.title}</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#9A94B0',
                    lineHeight: 1.45,
                    marginTop: '4px',
                  }}>{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
