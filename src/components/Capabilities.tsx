'use client';

import { useLanguage } from '@/context/LanguageContext';
import { HiDevicePhoneMobile, HiBolt } from 'react-icons/hi2';
import { TbDeviceDesktopAnalytics, TbShoppingCart, TbRobot, TbTarget, TbShieldCheck, TbHeadset } from 'react-icons/tb';

const purple = '#7A3AE3';
const purpleDark = '#5B2589';

const cardIcons = [TbDeviceDesktopAnalytics, HiDevicePhoneMobile, TbShoppingCart, TbRobot] as const;
const featureIcons = [TbTarget, TbShieldCheck, HiBolt, TbHeadset] as const;

export default function Capabilities() {
  const { t } = useLanguage();

  return (
    <section id="services" className="cxc-section" style={{ background: '#F9F8FF' }}>
      <div className="cxc-wrap">
        <div className="cxc-grid-header">
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: purple,
              textTransform: 'uppercase',
            }}>{t.caps.eyebrow}</div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 46px)',
              letterSpacing: '-0.025em',
              color: purpleDark,
              marginTop: '14px',
              lineHeight: 1.1,
            }}>
              <span style={{
                display: 'inline-block',
                borderBottom: `4px solid ${purpleDark}`,
                paddingBottom: '4px',
              }}>{t.caps.titlePart1}</span>{' '}
              {t.caps.titlePart2}
            </h2>
          </div>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#5F5872',
            maxWidth: '420px',
            justifySelf: 'end',
          }}>{t.caps.sub}</p>
        </div>

        {/* Cards grid */}
        <div className="cxc-grid-2" style={{ marginTop: '44px' }}>
          {t.caps.items.map((item, i) => {
            const Icon = cardIcons[i];
            return (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '14px',
                padding: '24px 26px',
                boxShadow: '0 2px 16px -4px rgba(30,15,60,0.07)',
                border: '1px solid #EDE8F4',
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#F3EDFA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={24} color={purpleDark} aria-hidden />
                </div>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: '15px',
                      color: purple,
                    }}>{item.no}</span>
                    <span style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: '17px',
                      color: '#16141E',
                    }}>{item.title}</span>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#5F5872',
                    marginTop: '8px',
                  }}>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom benefits bar */}
        <div className="cxc-bar-4" style={{
          marginTop: '28px',
          background: '#fff',
          borderRadius: '14px',
          border: '1px solid #EDE8F4',
          boxShadow: '0 2px 12px -4px rgba(30,15,60,0.06)',
        }}>
          {t.caps.features.map((feat, i) => {
            const Icon = featureIcons[i];
            return (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '20px 22px',
              }}>
                <Icon size={22} color={purple} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#16141E', lineHeight: 1.35 }}>{feat.title}</div>
                  <div style={{ fontSize: '13px', color: '#8A83A0', lineHeight: 1.4, marginTop: '2px' }}>{feat.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
