'use client';

import {
  HiLightBulb,
  HiCodeBracket,
  HiShieldCheck,
  HiRocketLaunch,
  HiCheckCircle,
  HiChartBarSquare,
  HiLockClosed,
} from 'react-icons/hi2';
import { TbTarget, TbHeadset } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/context/LanguageContext';

const purple = '#7A3AE3';
const purpleDark = '#5B2589';

const stepIcons: IconType[] = [HiLightBulb, HiCodeBracket, HiShieldCheck, HiRocketLaunch];
const featureIcons: IconType[] = [TbTarget, HiChartBarSquare, HiLockClosed, TbHeadset];

export default function Method() {
  const { t } = useLanguage();

  return (
    <section id="method" className="cxc-section" style={{ background: '#F9F9FB' }}>
      <div className="cxc-wrap">
        <div className="cxc-grid-header">
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: purple,
              textTransform: 'uppercase',
            }}>{t.method.eyebrow}</div>
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
              }}>{t.method.titleUnderline}</span>{' '}
              {t.method.titleRest}{' '}
              <span style={{ color: purple }}>{t.method.titleHighlight}</span>
            </h2>
          </div>
          <div style={{ justifySelf: 'end', maxWidth: '340px' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#5F5872' }}>{t.method.subLine1}</p>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#5F5872', marginTop: '4px' }}>{t.method.subLine2}</p>
          </div>
        </div>

        {/* Process cards */}
        <div className="cxc-grid-4-wide" style={{ marginTop: '44px' }}>
          {t.method.steps.map((step, i) => {
            const StepIcon = stepIcons[i];
            return (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '14px',
                padding: '24px 22px',
                border: '1px solid #EDE8F4',
                boxShadow: '0 2px 16px -4px rgba(30,15,60,0.06)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '16px',
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: '48px',
                  lineHeight: 1,
                  color: '#EBDFF8',
                  pointerEvents: 'none',
                }}>{step.k}</div>

                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#F3EDFA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <StepIcon size={22} color={purpleDark} aria-hidden />
                </div>

                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '17px',
                  color: purpleDark,
                  marginTop: '16px',
                }}>{step.name}</h3>

                <div style={{
                  width: '32px',
                  height: '3px',
                  background: purple,
                  borderRadius: '2px',
                  marginTop: '8px',
                }} />

                <div style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#fff',
                  background: purpleDark,
                  padding: '5px 12px',
                  borderRadius: '100px',
                  marginTop: '12px',
                }}>{step.time}</div>

                <p style={{
                  fontSize: '13px',
                  lineHeight: 1.55,
                  color: '#5F5872',
                  marginTop: '14px',
                }}>{step.body}</p>

                <ul style={{
                  listStyle: 'none',
                  marginTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  flex: 1,
                }}>
                  {step.points.map((pt, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '13px',
                      lineHeight: 1.4,
                      color: '#403A55',
                    }}>
                      <HiCheckCircle size={16} color={purple} style={{ flexShrink: 0, marginTop: '1px' }} aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="cxc-bar-4 cxc-bar-4-purple" style={{
          marginTop: '28px',
          background: '#F3EDFA',
          borderRadius: '14px',
          border: '1px solid #E8DFF5',
        }}>
          {t.method.features.map((feat, i) => {
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
                  <div style={{ fontSize: '13px', color: '#5F5872', lineHeight: 1.4, marginTop: '2px' }}>{feat.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
