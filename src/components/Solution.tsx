'use client';

import { useLanguage } from '@/context/LanguageContext';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';
import { HiBuildingLibrary, HiXMark, HiCheckCircle, HiInformationCircle, HiSparkles } from 'react-icons/hi2';
import { TbTarget, TbShieldCheck, TbHeadset } from 'react-icons/tb';
import { IoRocketOutline } from 'react-icons/io5';

const purple = '#7A3AE3';
const purpleDark = '#5B2589';

function CardIcon({ type }: { type: 'excel' | 'cxc' | 'erp' }) {
  if (type === 'excel') {
    return (
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        background: '#E8F5E9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <PiMicrosoftExcelLogo size={26} color="#217346" aria-hidden />
      </div>
    );
  }
  if (type === 'cxc') {
    return (
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#F3EDFA',
        border: '1.5px solid #DDD6EA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Sora', sans-serif",
        fontWeight: 800,
        fontSize: '13px',
        color: purpleDark,
        letterSpacing: '-0.02em',
      }}>CXC</div>
    );
  }
  return (
    <div style={{
      width: '44px',
      height: '44px',
      borderRadius: '10px',
      background: '#F3EDFA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <HiBuildingLibrary size={24} color={purple} aria-hidden />
    </div>
  );
}

export default function Solution() {
  const { t } = useLanguage();
  const cardIcons = ['excel', 'cxc', 'erp'] as const;
  const featureIcons = [TbTarget, TbShieldCheck, IoRocketOutline, TbHeadset] as const;

  return (
    <section id="solution" className="cxc-section cxc-section-flush-top" style={{ background: '#fff' }}>
      <div className="cxc-wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: purple,
            textTransform: 'uppercase',
          }}>{t.solution.eyebrow}</div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            color: '#16141E',
            marginTop: '16px',
          }}>
            {t.solution.titleLine1}{' '}
            <span style={{ color: purple }}>{t.solution.titleHighlight}</span>
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#5F5872',
            marginTop: '18px',
          }}>{t.solution.sub}</p>
        </div>

        {/* Comparison cards */}
        <div className="cxc-grid-3" style={{ marginTop: '52px' }}>
          {t.solution.cols.map((col, i) => {
            const isRec = col.rec;
            return (
              <div key={i} className={isRec ? 'cxc-card-rec' : undefined} style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '28px 26px 24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: isRec ? `2px solid ${purpleDark}` : '1px solid #E8E3F0',
                boxShadow: isRec
                  ? '0 24px 48px -20px rgba(91,37,137,0.35)'
                  : '0 2px 12px -4px rgba(30,15,60,0.06)',
              }}>
                {col.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: purpleDark,
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    padding: '5px 14px',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                  }}>{col.badge}</div>
                )}

                <CardIcon type={cardIcons[i]} />

                <div style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#16141E',
                  marginTop: '16px',
                }}>{col.tag}</div>

                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: purple,
                  marginTop: '5px',
                }}>{col.price}</div>

                <div style={{ height: '1px', background: '#EDE8F4', margin: '20px 0' }} />

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  flex: 1,
                }}>
                  {col.points.map((pt, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'flex-start',
                      fontSize: '14px',
                      lineHeight: 1.45,
                      color: '#403A55',
                    }}>
                      {isRec ? (
                        <HiCheckCircle size={18} color={purple} style={{ flexShrink: 0, marginTop: '1px' }} aria-hidden />
                      ) : (
                        <HiXMark size={18} color={purple} style={{ flexShrink: 0, marginTop: '1px' }} aria-hidden />
                      )}
                      {pt}
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '20px',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: col.footerStyle === 'highlight' ? '#F3EDFA' : '#F7F5FB',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: col.footerStyle === 'highlight' ? purpleDark : '#5F5872',
                  lineHeight: 1.4,
                }}>
                  {col.footerStyle === 'highlight' ? (
                    <HiSparkles size={18} color={purple} aria-hidden />
                  ) : (
                    <HiInformationCircle size={18} color={purple} aria-hidden />
                  )}
                  {col.footer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom feature bar */}
        <div className="cxc-bar-4" style={{
          marginTop: '40px',
          background: '#FAFAFC',
          borderRadius: '14px',
          border: '1px solid #EDE8F4',
        }}>
          {t.solution.features.map((feat, i) => {
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
