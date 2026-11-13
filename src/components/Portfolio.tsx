'use client';

import {
  HiUsers,
  HiArrowTrendingUp,
  HiClock,
  HiChartBar,
  HiArrowTrendingDown,
  HiChartPie,
  HiCube,
  HiUserCircle,
} from 'react-icons/hi2';
import { TbHeartbeat, TbTruckDelivery, TbUserCog, TbPackage, TbTarget, TbShieldCheck } from 'react-icons/tb';
import { IoRocketOutline } from 'react-icons/io5';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/context/LanguageContext';

const purple = '#7A3AE3';
const purpleDark = '#5B2589';

const projectIcons: IconType[] = [TbHeartbeat, TbTruckDelivery, TbUserCog, TbPackage];
const metricIcons: IconType[][] = [
  [HiUsers, HiArrowTrendingUp],
  [HiClock, HiChartBar],
  [HiArrowTrendingDown, HiChartPie],
  [HiArrowTrendingDown, HiCube],
];
const featureIcons: IconType[] = [TbTarget, TbShieldCheck, IoRocketOutline, HiArrowTrendingUp];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="cxc-section" style={{ background: '#F9F9FB' }}>
      <div className="cxc-wrap">
        <div className="cxc-header-row">
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: purple,
              textTransform: 'uppercase',
            }}>{t.portfolio.eyebrow}</div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              letterSpacing: '-0.025em',
              color: '#16141E',
              marginTop: '14px',
            }}>{t.portfolio.title}</h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#5F5872',
              marginTop: '12px',
              maxWidth: '520px',
            }}>{t.portfolio.sub}</p>
          </div>

          <div style={{
            background: '#fff',
            border: '1px solid #EDE8F4',
            borderRadius: '12px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 2px 12px -4px rgba(30,15,60,0.06)',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#F3EDFA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <HiUserCircle size={22} color={purpleDark} aria-hidden />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#16141E' }}>{t.portfolio.badge}</div>
              <div style={{ fontSize: '13px', color: '#8A83A0' }}>{t.portfolio.badgeSub}</div>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="cxc-grid-2" style={{ marginTop: '40px' }}>
          {t.portfolio.items.map((item, i) => {
            const ProjectIcon = projectIcons[i];
            const metrics = metricIcons[i];
            return (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #EDE8F4',
                borderRadius: '16px',
                padding: '26px 28px',
                boxShadow: '0 2px 16px -4px rgba(30,15,60,0.05)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: '#F3EDFA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <ProjectIcon size={22} color={purpleDark} aria-hidden />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '17px', color: '#16141E' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: purple, marginTop: '2px' }}>{item.sector}</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: purple,
                    background: '#F3EDFA',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    textTransform: 'uppercase',
                  }}>{t.portfolio.tag}</span>
                </div>

                <div className="cxc-grid-metrics" style={{
                  marginTop: '22px',
                  paddingTop: '20px',
                  borderTop: '1px solid #F0ECF6',
                }}>
                  {[0, 1].map((j) => {
                    const MetricIcon = metrics[j];
                    return (
                      <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <MetricIcon size={18} color={purple} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden />
                        <div>
                          <div style={{
                            fontFamily: "'Sora', sans-serif",
                            fontWeight: 800,
                            fontSize: '26px',
                            color: '#16141E',
                            lineHeight: 1,
                          }}>{j === 0 ? item.m1 : item.m2}</div>
                          <div style={{ fontSize: '12px', color: '#8A83A0', marginTop: '4px' }}>
                            {j === 0 ? item.m1l : item.m2l}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.55,
                  color: '#5F5872',
                  marginTop: '18px',
                }}>{item.body}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="cxc-bar-4 cxc-bar-4-purple" style={{
          marginTop: '28px',
          background: '#F3EDFA',
          borderRadius: '14px',
          border: '1px solid #E8DFF5',
        }}>
          {t.portfolio.features.map((feat, i) => {
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
