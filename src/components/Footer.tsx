'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="cxc-section" style={{ background: '#0F0E16', color: '#fff', paddingTop: '52px', paddingBottom: '52px' }}>
      <div className="cxc-wrap" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '28px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: "'Sora'",
            fontWeight: 800,
            fontSize: '24px',
            letterSpacing: '-0.01em',
          }}>
            C<span style={{ color: '#8A3FD1' }}>X</span>C{' '}
            <span style={{
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.34em',
              color: '#7A7496',
              marginLeft: '4px',
            }}>SOFTWARE</span>
          </div>
          <div style={{
            fontSize: '14px',
            color: '#8A849E',
            marginTop: '12px',
            maxWidth: '420px',
            lineHeight: 1.5,
          }}>{t.footer.tagline}</div>
        </div>
        <div style={{ fontSize: '13px', color: '#6A6484', textAlign: 'right' }} className="cxc-footer-copy">
          &copy; 2026 CXC Software &middot; {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
