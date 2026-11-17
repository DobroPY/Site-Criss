import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { type LegalSection } from '@/components/LegalPage';
import { COMPANY, LEGAL_LINKS } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Politica de cookies | CXC Software',
  description: `Ce cookie-uri și tehnologii similare folosește site-ul ${COMPANY.website}.`,
};

// Keep this page in sync with what the site actually does. Today: no cookies, no localStorage
// (the RO/EN choice lives only in React state), and fonts loaded from Google Fonts.
// Adding analytics or marketing tools later requires a consent banner and an update here.

const sections: LegalSection[] = [
  {
    id: 'ce-sunt',
    title: 'Ce sunt cookie-urile',
    content: (
      <p>
        Cookie-urile sunt fișiere text de mici dimensiuni pe care un site le salvează în browserul tău. Tehnologii similare, precum
        stocarea locală (local storage), permit și ele păstrarea unor informații pe dispozitivul tău. Ele pot fi folosite, de exemplu, pentru
        a ține minte preferințe, pentru statistici de trafic sau pentru publicitate.
      </p>
    ),
  },
  {
    id: 'ce-folosim',
    title: 'Ce cookie-uri folosește acest site',
    content: (
      <>
        <p>
          În prezent, site-ul {COMPANY.website} <strong>nu folosește cookie-uri</strong> de analiză, de marketing sau de publicitate și nu
          salvează informații în browserul tău. Alegerea limbii (RO/EN) este păstrată doar cât timp pagina este deschisă și se pierde când o
          închizi.
        </p>
        <p>
          Din acest motiv nu îți cerem consimțământul printr-un banner de cookie-uri. Dacă vom introduce cookie-uri care nu sunt strict
          necesare, îți vom cere acordul înainte de a le folosi și vom actualiza această politică.
        </p>
      </>
    ),
  },
  {
    id: 'terti',
    title: 'Servicii terțe',
    content: (
      <p>
        Fonturile site-ului sunt încărcate prin serviciul Google Fonts, de pe serverele Google (fonts.googleapis.com și fonts.gstatic.com).
        Pentru aceasta, browserul tău transmite către Google adresa IP și informații tehnice despre browser. Detalii despre modul în care
        Google prelucrează aceste date găsești în{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politica de confidențialitate Google</a>.
      </p>
    ),
  },
  {
    id: 'control',
    title: 'Cum poți controla cookie-urile',
    content: (
      <p>
        Poți vedea, bloca sau șterge cookie-urile din setările browserului, de regulă în secțiunea „Confidențialitate” sau „Privacy”.
        Blocarea cookie-urilor nu afectează funcționarea acestui site.
      </p>
    ),
  },
  {
    id: 'temei',
    title: 'Temei legal',
    content: (
      <p>
        Această politică respectă Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal și protecția vieții private în
        sectorul comunicațiilor electronice (art. 4 alin. (5)) și Regulamentul (UE) 2016/679 (GDPR). Mai multe despre datele personale găsești
        în <Link href={LEGAL_LINKS.privacy}>Politica de confidențialitate</Link>.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <p>
        Pentru întrebări despre această politică ne poți scrie la <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return <LegalPage title="Politica de cookies" sections={sections} />;
}
