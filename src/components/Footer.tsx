'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ANPC, COMPANY, LEGAL_LINKS } from '@/lib/company';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="cxc-footer">
      <div className="cxc-wrap cxc-footer-grid">
        <div className="cxc-footer-brand">
          {/* Light variant of the logo (white + light purple) for the dark footer. */}
          <Image src="/assets/cxc-logo-light.png" alt="CXC Software" width={84} height={44} style={{ height: '44px', width: 'auto', display: 'block' }} />
          <p className="cxc-footer-tagline">{f.tagline}</p>
        </div>

        <nav className="cxc-footer-col" aria-label={f.companyTitle}>
          <h3>{f.companyTitle}</h3>
          <ul>
            <li><Link href={LEGAL_LINKS.about}>{f.about}</Link></li>
            <li><Link href="/#services">{f.services}</Link></li>
            <li><Link href="/#portfolio">{f.results}</Link></li>
          </ul>
        </nav>

        <nav className="cxc-footer-col" aria-label={f.legalTitle}>
          <h3>{f.legalTitle}</h3>
          <ul>
            <li><Link href={LEGAL_LINKS.terms}>{f.terms}</Link></li>
            <li><Link href={LEGAL_LINKS.privacy}>{f.privacy}</Link></li>
            <li><Link href={LEGAL_LINKS.cookies}>{f.cookies}</Link></li>
            <li><a href={ANPC.site} target="_blank" rel="noopener noreferrer">{f.anpc}</a></li>
          </ul>
        </nav>

        <div className="cxc-footer-col">
          <h3>{f.contactTitle}</h3>
          <ul>
            <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li><a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a></li>
          </ul>
          <div className="cxc-footer-badges">
            <SalBadge alt={f.salAlt} />
          </div>
        </div>
      </div>

      <div className="cxc-wrap cxc-footer-bottom">
        <p>&copy; 2026 {COMPANY.brand}</p>
        <p>{f.rights}</p>
      </div>
    </footer>
  );
}

/**
 * ANPC SAL pictogram (Order 449/2022 as amended by Order 270/2026): a 250×50 px slot linking to
 * the SAL complaints platform. ANPC's official file is 201×50, so it sits left-aligned in the slot.
 */
function SalBadge({ alt }: { alt: string }) {
  return (
    <a href={ANPC.salPlatform} target="_blank" rel="noopener noreferrer" className="cxc-sal">
      <Image
        src="/assets/anpc-sal.png"
        alt={alt}
        width={250}
        height={50}
        unoptimized
        style={{ width: '250px', height: '50px', objectFit: 'contain', objectPosition: 'left center', display: 'block' }}
      />
    </a>
  );
}
