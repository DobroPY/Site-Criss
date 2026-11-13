'use client';

import { useLanguage } from '@/context/LanguageContext';
import {
  HiClipboardDocumentList,
  HiCalculator,
  HiCube,
  HiIdentification,
  HiCalendar,
  HiChartBarSquare,
  HiCursorArrowRays,
  HiUserMinus,
  HiHeart,
  HiDevicePhoneMobile,
  HiClock,
  HiDocumentText,
  HiDocumentDuplicate,
  HiBuildingOffice2,
  HiClipboardDocumentCheck,
  HiArrowTrendingUp,
} from 'react-icons/hi2';
import {
  TbCrane,
  TbTruckDelivery,
  TbShoppingCart,
  TbUsers,
  TbTruck,
  TbRoute,
  TbChartLine,
} from 'react-icons/tb';
import type { IconType } from 'react-icons';

const purple = '#7A3AE3';
const purpleDark = '#5B2589';

const cardIcons: IconType[] = [TbCrane, TbTruckDelivery, TbShoppingCart, TbUsers];

const badgeIcons: IconType[][] = [
  [HiClipboardDocumentList, HiCalculator, HiCube, HiIdentification],
  [TbTruck, HiCalendar, TbRoute, TbChartLine],
  [HiChartBarSquare, HiCursorArrowRays, HiUserMinus, HiHeart],
  [HiDevicePhoneMobile, HiClock, HiDocumentText, HiDocumentDuplicate],
];

const statIcons: IconType[] = [HiBuildingOffice2, HiClipboardDocumentCheck, HiArrowTrendingUp, HiClock];

export default function Industries() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="cxc-section cxc-section-tight-bottom" style={{ background: '#F9F9FB' }}>
      <div className="cxc-wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: purple,
            textTransform: 'uppercase',
          }}>{t.ind.eyebrow}</div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            letterSpacing: '-0.025em',
            color: '#16141E',
            marginTop: '16px',
            lineHeight: 1.15,
          }}>
            {t.ind.titleLine1}{' '}
            <span style={{ color: purple }}>{t.ind.titleHighlight}</span>
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#5F5872',
            marginTop: '16px',
          }}>{t.ind.sub}</p>
        </div>

        {/* Industry cards */}
        <div className="cxc-grid-2" style={{ marginTop: '48px' }}>
          {t.ind.items.map((item, i) => {
            const MainIcon = cardIcons[i];
            const badges = badgeIcons[i];
            return (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '28px 28px 24px',
                border: '1px solid #EDE8F4',
                boxShadow: '0 2px 16px -4px rgba(30,15,60,0.06)',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '18px',
                }}>
                  <span style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: '14px',
                    color: purple,
                  }}>{item.no}</span>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: '#F3EDFA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <MainIcon size={28} color={purpleDark} aria-hidden />
                  </div>
                </div>

                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#16141E',
                }}>{item.name}</h3>

                <div style={{
                  width: '36px',
                  height: '3px',
                  background: purple,
                  borderRadius: '2px',
                  marginTop: '10px',
                }} />

                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: '#5F5872',
                  marginTop: '12px',
                }}>{item.body}</p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '20px',
                }}>
                  {item.points.map((pt, j) => {
                    const BadgeIcon = badges[j];
                    return (
                      <span key={j} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#F3EDFA',
                        color: '#4A3070',
                        fontSize: '12px',
                        fontWeight: 500,
                        padding: '7px 12px',
                        borderRadius: '100px',
                      }}>
                        <BadgeIcon size={14} color={purpleDark} aria-hidden />
                        {pt}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats bar */}
      <div className="cxc-stat-bar-wrap">
        <div className="cxc-wrap cxc-bar-4 cxc-bar-4-ind">
          {t.ind.stats.map((stat, i) => {
            const StatIcon = statIcons[i];
            return (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '28px 20px',
              }}>
                <StatIcon size={26} color={purple} style={{ flexShrink: 0 }} aria-hidden />
                <div>
                  <div style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: '22px',
                    color: '#16141E',
                    lineHeight: 1.2,
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: '13px',
                    color: '#5F5872',
                    lineHeight: 1.4,
                    marginTop: '2px',
                  }}>{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
