'use client';

import { useLanguage } from '@/context/LanguageContext';
import {
  HiArrowRight,
  HiPlayCircle,
  HiBolt,
  HiShieldCheck,
  HiLockClosed,
  HiCog6Tooth,
  HiComputerDesktop,
  HiArrowRightCircle,
} from 'react-icons/hi2';
import { TbInfinity } from 'react-icons/tb';
import { TECH_STACK } from '@/lib/techStack';
import TechLogo from '@/components/TechLogo';

const iconPurple = '#7A3AE3';

function DashboardMockup() {
  return (
    <div style={{
      background: '#13111C',
      borderRadius: '18px',
      border: '1px solid #2A2640',
      boxShadow: '0 32px 64px -20px rgba(30, 15, 60, 0.5)',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', minHeight: '420px' }}>
        {/* Sidebar */}
        <div style={{
          width: '52px',
          background: '#0E0D15',
          borderRight: '1px solid #252035',
          padding: '16px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
        }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #8A3FD1, #5B2589)' }} />
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{
              width: '22px',
              height: '4px',
              borderRadius: '2px',
              background: i === 0 ? '#8A3FD1' : '#2E2940',
            }} />
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '18px 20px 16px' }}>
          {/* Top bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#6A6486', letterSpacing: '0.06em' }}>DASHBOARD</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '60px', height: '8px', borderRadius: '4px', background: '#2A2640' }} />
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2A2640' }} />
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '14px' }}>
            <div style={{ background: '#1C1929', borderRadius: '10px', padding: '12px 14px', border: '1px solid #2A2640' }}>
              <div style={{ fontSize: '10px', color: '#6A6486', marginBottom: '4px' }}>Revenue</div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '18px', color: '#fff' }}>€ 842,500</div>
              <div style={{ fontSize: '10px', color: '#4ADE80', marginTop: '2px' }}>↑ 12.4%</div>
            </div>
            <div style={{ background: '#1C1929', borderRadius: '10px', padding: '12px 14px', border: '1px solid #2A2640' }}>
              <div style={{ fontSize: '10px', color: '#6A6486', marginBottom: '4px' }}>Orders</div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '18px', color: '#B98BEA' }}>1,247</div>
              <div style={{ fontSize: '10px', color: '#4ADE80', marginTop: '2px' }}>↑ 8.2%</div>
            </div>
            <div style={{ background: '#1C1929', borderRadius: '10px', padding: '12px 14px', border: '1px solid #2A2640' }}>
              <div style={{ fontSize: '10px', color: '#6A6486', marginBottom: '4px' }}>Efficiency</div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '18px', color: '#fff' }}>94%</div>
              <div style={{ fontSize: '10px', color: '#4ADE80', marginTop: '2px' }}>↑ 3.1%</div>
            </div>
          </div>

          {/* Charts row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: '10px', marginBottom: '14px' }}>
            {/* Line chart */}
            <div style={{ background: '#1C1929', borderRadius: '10px', padding: '14px', border: '1px solid #2A2640' }}>
              <div style={{ fontSize: '10px', color: '#6A6486', marginBottom: '10px' }}>Performance</div>
              <svg viewBox="0 0 200 70" width="100%" height="70" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8A3FD1" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8A3FD1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,55 C20,50 40,45 60,38 C80,30 100,25 120,20 C140,15 160,10 180,8 L200,5 L200,70 L0,70 Z" fill="url(#lineGrad)" />
                <path d="M0,55 C20,50 40,45 60,38 C80,30 100,25 120,20 C140,15 160,10 180,8 L200,5" fill="none" stroke="#8A3FD1" strokeWidth="2" />
              </svg>
            </div>

            {/* Donut chart */}
            <div style={{ background: '#1C1929', borderRadius: '10px', padding: '14px', border: '1px solid #2A2640' }}>
              <div style={{ fontSize: '10px', color: '#6A6486', marginBottom: '8px' }}>Sources of Sales</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="52" height="52" viewBox="0 0 52 52">
                  <circle cx="26" cy="26" r="20" fill="none" stroke="#2A2640" strokeWidth="8" />
                  <circle cx="26" cy="26" r="20" fill="none" stroke="#8A3FD1" strokeWidth="8" strokeDasharray="50 75" strokeDashoffset="0" transform="rotate(-90 26 26)" />
                  <circle cx="26" cy="26" r="20" fill="none" stroke="#5B2589" strokeWidth="8" strokeDasharray="30 95" strokeDashoffset="-50" transform="rotate(-90 26 26)" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9px', color: '#9A94B0' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8A3FD1' }} />Direct
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9px', color: '#9A94B0' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5B2589' }} />Referral
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: projects + AI chat */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ background: '#1C1929', borderRadius: '10px', padding: '12px 14px', border: '1px solid #2A2640' }}>
              <div style={{ fontSize: '10px', color: '#6A6486', marginBottom: '10px' }}>Projects</div>
              {[{ w: '78%', label: 'ERP Migration' }, { w: '55%', label: 'Mobile App' }, { w: '32%', label: 'AI Bot' }].map((p) => (
                <div key={p.label} style={{ marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#9A94B0', marginBottom: '3px' }}>
                    <span>{p.label}</span>
                  </div>
                  <div style={{ height: '4px', background: '#2A2640', borderRadius: '2px' }}>
                    <div style={{ height: '100%', width: p.w, background: 'linear-gradient(90deg, #8A3FD1, #5B2589)', borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#1C1929', borderRadius: '10px', padding: '12px 14px', border: '1px solid #2A2640' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80' }} />
                <div style={{ fontSize: '10px', color: '#6A6486' }}>AI Assistant</div>
              </div>
              <div style={{ background: '#252035', borderRadius: '8px', padding: '8px 10px', marginBottom: '6px' }}>
                <div style={{ fontSize: '9px', color: '#C4BBD8', lineHeight: 1.4 }}>Am generat raportul lunar. Vrei să-l trimit?</div>
              </div>
              <div style={{ background: '#2A1F45', borderRadius: '8px', padding: '8px 10px', alignSelf: 'flex-end' }}>
                <div style={{ fontSize: '9px', color: '#B98BEA', lineHeight: 1.4 }}>Da, trimite-l echipei.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const trustIcons = [HiBolt, HiShieldCheck, HiLockClosed] as const;
  const featureIcons = [HiCog6Tooth, HiComputerDesktop, TbInfinity, HiArrowRightCircle] as const;

  return (
    <section id="hero" style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #F3EDFA 0%, #FBFAFD 45%, #FFFFFF 100%)',
    }}>
      {/* Main hero grid */}
      <div className="cxc-wrap cxc-hero-main cxc-grid-hero">
        {/* Left column */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#EBE0F7',
            color: '#5B2589',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            padding: '6px 14px',
            borderRadius: '100px',
          }}>{t.hero.eyebrow}</div>

          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(42px, 5.4vw, 62px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#16141E',
            marginTop: '24px',
          }}>
            {t.hero.titleLine1}
            <br />
            <span style={{ color: '#7A3AE3' }}>{t.hero.titleHighlight}</span>{' '}
            {t.hero.titleLine2}
          </h1>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#5F5872',
            marginTop: '22px',
            maxWidth: '520px',
          }}>{t.hero.sub}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#5B2589',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 600,
              padding: '14px 24px',
              borderRadius: '10px',
              boxShadow: '0 12px 28px -10px rgba(91,37,137,0.55)',
            }}>
              {t.hero.ctaPrimary}
              <HiArrowRight size={16} aria-hidden />
            </a>
            <a href="#method" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#fff',
              color: '#16141E',
              fontSize: '15px',
              fontWeight: 600,
              padding: '13px 22px',
              borderRadius: '10px',
              border: '1px solid #DDD6EA',
            }}>
              <HiPlayCircle size={22} color="#5B2589" aria-hidden />
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', marginTop: '36px' }}>
            {t.hero.trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Icon size={22} color={iconPurple} aria-hidden />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#16141E', lineHeight: 1.3 }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: '#8A83A0', lineHeight: 1.3 }}>{item.sub}</div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Right column — dashboard */}
        <div>
          <DashboardMockup />
        </div>
      </div>

      {/* Tech stack */}
      <div className="cxc-wrap cxc-hero-sub">
        <div style={{
          textAlign: 'center',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: '#9A94B0',
          marginBottom: '28px',
        }}>{t.hero.techStack}</div>
        <div className="cxc-tech-grid">
          {TECH_STACK.map((tech) => (
            <TechLogo key={tech.name} {...tech} />
          ))}
        </div>
      </div>

      {/* Feature bar */}
      <div className="cxc-wrap cxc-hero-feature-wrap">
        <div className="cxc-bar-4" style={{
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 4px 24px -4px rgba(30, 15, 60, 0.08)',
          border: '1px solid #EDE8F4',
        }}>
          {t.hero.features.map((feat, i) => {
            const Icon = featureIcons[i];
            return (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '22px 24px',
            }}>
              <Icon size={24} color={iconPurple} aria-hidden />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#16141E', lineHeight: 1.35 }}>{feat.title}</div>
                <div style={{ fontSize: '13px', color: '#8A83A0', lineHeight: 1.35 }}>{feat.sub}</div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
