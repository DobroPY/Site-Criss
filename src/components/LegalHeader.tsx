'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LEGAL_UPDATED } from '@/lib/company';

export default function LegalHeader({ title }: { title: string }) {
  const { lang, t } = useLanguage();

  return (
    <header className="cxc-legal-header">
      <nav className="cxc-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">{t.legal.home}</Link>
        <span aria-hidden>›</span>
        <span aria-current="page">{title}</span>
      </nav>
      <h1>{title}</h1>
      <p className="cxc-legal-updated">{t.legal.updated}: {LEGAL_UPDATED[lang]}</p>
      {t.legal.roOnly && <p className="cxc-legal-note" lang="en">{t.legal.roOnly}</p>}
    </header>
  );
}
