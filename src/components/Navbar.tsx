'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight, HiBars3, HiXMark } from 'react-icons/hi2';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const isRo = lang === 'ro';

  const btnBase: React.CSSProperties = {
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '12px',
    fontWeight: 800,
    padding: '5px 11px',
    borderRadius: '7px',
    letterSpacing: '0.04em',
  };

  const btnOn: React.CSSProperties = { ...btnBase, background: '#5B2589', color: '#fff' };
  const btnOff: React.CSSProperties = { ...btnBase, background: 'transparent', color: '#8A83A0' };

  const links = [
    { href: '/#services', label: t.nav.services },
    { href: '/#industries', label: t.nav.industries },
    { href: '/#method', label: t.nav.method },
    { href: '/#portfolio', label: t.nav.portfolio },
  ];

  const close = () => setOpen(false);

  return (
    <div style={{
      background: 'rgba(251,250,253,0.82)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid #E8E3F0',
      position: 'sticky',
      top: 0,
      zIndex: 60,
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '13px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div className="cxc-nav-side">
          <Link href="/#hero" style={{ display: 'flex', alignItems: 'center' }} onClick={close}>
            <Image src="/assets/cxc-logo-transparent.png" alt="CXC Software" width={77} height={40} loading="eager" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </Link>
        </div>

        <div className="cxc-nav-desktop">
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: '14px', fontWeight: 700, color: '#3A3552' }}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="cxc-nav-side cxc-nav-right">
          <div className="cxc-hide-mobile" style={{
            alignItems: 'center',
            gap: '2px',
            background: '#F1EDF8',
            padding: '3px',
            borderRadius: '9px',
          }}>
            <button onClick={() => setLang('ro')} style={isRo ? btnOn : btnOff}>RO</button>
            <button onClick={() => setLang('en')} style={isRo ? btnOff : btnOn}>EN</button>
          </div>

          <Link href="/#contact" className="cxc-nav-cta-desktop" style={{
            alignItems: 'center',
            gap: '6px',
            background: '#5B2589',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 600,
            padding: '10px 18px',
            borderRadius: '9px',
            whiteSpace: 'nowrap',
          }}>
            {t.nav.cta}
            <HiArrowRight size={14} aria-hidden />
          </Link>

          <button
            type="button"
            className="cxc-nav-toggle"
            aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </nav>

      <div className={`cxc-nav-mobile${open ? ' open' : ''}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>
        ))}
        <div className="cxc-nav-mobile-actions">
          <div style={{
            display: 'flex',
            gap: '2px',
            background: '#F1EDF8',
            padding: '3px',
            borderRadius: '9px',
          }}>
            <button onClick={() => setLang('ro')} style={isRo ? btnOn : btnOff}>RO</button>
            <button onClick={() => setLang('en')} style={isRo ? btnOff : btnOn}>EN</button>
          </div>
          <Link href="/#contact" onClick={close} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#5B2589',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 600,
            padding: '10px 18px',
            borderRadius: '9px',
          }}>
            {t.nav.cta}
            <HiArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
