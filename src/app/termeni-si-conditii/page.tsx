import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { type LegalSection } from '@/components/LegalPage';
import { ANPC, COMPANY, LEGAL_LINKS } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Termeni și condiții | CXC Software',
  description: `Termenii și condițiile de utilizare a site-ului ${COMPANY.website}, administrat de ${COMPANY.legalName}.`,
};

const mail = <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;

const sections: LegalSection[] = [
  {
    id: 'operator',
    title: 'Informații despre operatorul site-ului',
    content: (
      <>
        <p>
          Site-ul <strong>{COMPANY.website}</strong> („Site-ul”) este administrat de <strong>{COMPANY.legalName}</strong> („Prestatorul” sau
          „noi”), {COMPANY.legalForm}, care activează sub numele comercial <strong>{COMPANY.brand}</strong>.
        </p>
        <ul>
          <li>Denumire: {COMPANY.legalName}</li>
          <li>Cod unic de înregistrare (CUI): {COMPANY.cui}</li>
          <li>Email: {mail}</li>
          <li>Telefon: <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a></li>
        </ul>
      </>
    ),
  },
  {
    id: 'definitii',
    title: 'Definiții',
    content: (
      <ul>
        <li><strong>Utilizator</strong> – orice persoană fizică sau juridică ce accesează Site-ul.</li>
        <li><strong>Client</strong> – Utilizatorul care încheie cu Prestatorul un contract de prestări servicii.</li>
        <li>
          <strong>Servicii</strong> – serviciile de dezvoltare software prezentate pe Site: ERP-uri și software la comandă, aplicații web și
          mobile, aplicații Shopify, automatizări și integrări.
        </li>
        <li><strong>Conținut</strong> – texte, imagini, grafică, logo-uri, elemente de design și cod sursă ale Site-ului.</li>
      </ul>
    ),
  },
  {
    id: 'acceptare',
    title: 'Acceptarea termenilor',
    content: (
      <p>
        Prin accesarea și utilizarea Site-ului accepți acești Termeni și condiții. Dacă nu ești de acord cu ei, te rugăm să nu folosești
        Site-ul. Termenii se aplică împreună cu <Link href={LEGAL_LINKS.privacy}>Politica de confidențialitate</Link> și{' '}
        <Link href={LEGAL_LINKS.cookies}>Politica de cookies</Link>.
      </p>
    ),
  },
  {
    id: 'informatii',
    title: 'Natura informațiilor de pe Site',
    content: (
      <>
        <p>
          Site-ul are rol de prezentare a Serviciilor. Pe Site nu se vând produse și nu se încheie contracte online.
        </p>
        <p>
          Informațiile despre Servicii, termenele de livrare (de exemplu „MVP în 6–12 săptămâni”), rezultatele și studiile de caz au
          caracter informativ și orientativ. Ele nu reprezintă o ofertă fermă și nu garantează obținerea unui anumit rezultat, care depinde
          de specificul fiecărui proiect. Proiectele marcate cu „Exemplu” sunt ilustrative.
        </p>
        <p>Prețul, termenele și condițiile fiecărui proiect se stabilesc individual, printr-o ofertă scrisă.</p>
      </>
    ),
  },
  {
    id: 'solicitari',
    title: 'Solicitări prin formular și încheierea contractelor',
    content: (
      <>
        <p>
          Trimiterea formularului „Programează o discuție” sau a unui mesaj prin email ori telefon nu creează obligații contractuale pentru
          niciuna dintre părți. Ne propunem să răspundem în cel mult 24 de ore, dar acest termen este orientativ.
        </p>
        <p>
          Contractul de prestări servicii se încheie numai în formă scrisă (inclusiv în format electronic), pe baza unei oferte acceptate de
          ambele părți. Contractul stabilește obiectul, prețul, termenele, drepturile de proprietate intelectuală asupra livrabilelor și
          obligațiile de confidențialitate. În caz de neconcordanță între contract și acești Termeni, prevalează contractul.
        </p>
        <p>Te rugăm să ne transmiți date corecte și complete și să nu trimiți date ale altor persoane fără a avea dreptul să o faci.</p>
      </>
    ),
  },
  {
    id: 'proprietate',
    title: 'Proprietate intelectuală',
    content: (
      <>
        <p>
          Conținutul Site-ului, inclusiv numele și logo-ul {COMPANY.brand}, aparține Prestatorului sau este folosit cu acordul titularilor
          și este protejat de Legea nr. 8/1996 privind dreptul de autor și drepturile conexe. Este interzisă copierea, reproducerea,
          distribuirea sau modificarea Conținutului fără acordul nostru scris, cu excepția utilizării în scop personal, necomercial.
        </p>
        <p>
          Denumirile și logo-urile tehnologiilor și platformelor afișate pe Site (de exemplu GitHub, Next.js, React, TypeScript, Node.js,
          Vercel, iOS, Android, Shopify, Stripe, PostgreSQL, Docker) sunt mărci ale titularilor lor. Ele sunt menționate doar pentru a indica
          tehnologiile cu care lucrăm și nu sugerează un parteneriat, o afiliere sau o recomandare din partea acestora.
        </p>
        <p>Drepturile asupra software-ului dezvoltat pentru Clienți se stabilesc prin contractul încheiat cu fiecare Client.</p>
      </>
    ),
  },
  {
    id: 'utilizare',
    title: 'Utilizarea Site-ului',
    content: (
      <>
        <p>Când folosești Site-ul, te obligi să nu:</p>
        <ul>
          <li>îl folosești în scopuri ilegale sau care încalcă drepturile altor persoane;</li>
          <li>încerci să obții acces neautorizat la Site, la server sau la datele altor utilizatori;</li>
          <li>transmiți programe malițioase sau conținut care poate afecta funcționarea Site-ului;</li>
          <li>trimiți mesaje automate, nesolicitate (spam) sau date false prin formularul de contact.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'raspundere',
    title: 'Limitarea răspunderii',
    content: (
      <>
        <p>
          Depunem eforturi ca informațiile de pe Site să fie corecte și actuale, însă nu garantăm că Site-ul este lipsit de erori sau că va
          funcționa fără întreruperi. În limitele permise de lege, nu răspundem pentru prejudicii indirecte rezultate din utilizarea Site-ului
          sau din imposibilitatea de a-l utiliza.
        </p>
        <p>
          Nicio prevedere din acești Termeni nu limitează răspunderea care, potrivit legii, nu poate fi limitată și nu afectează drepturile pe
          care le ai în calitate de consumator.
        </p>
      </>
    ),
  },
  {
    id: 'linkuri',
    title: 'Linkuri către alte site-uri',
    content: (
      <p>
        Site-ul poate conține linkuri către site-uri ale unor terți (de exemplu ANPC). Nu controlăm conținutul și politicile acestor site-uri
        și nu răspundem pentru ele.
      </p>
    ),
  },
  {
    id: 'date-personale',
    title: 'Date cu caracter personal',
    content: (
      <p>
        Prelucrăm datele tale personale conform Regulamentului (UE) 2016/679 (GDPR) și Legii nr. 190/2018. Detaliile sunt în{' '}
        <Link href={LEGAL_LINKS.privacy}>Politica de confidențialitate</Link> și în <Link href={LEGAL_LINKS.cookies}>Politica de cookies</Link>.
      </p>
    ),
  },
  {
    id: 'litigii',
    title: 'Legea aplicabilă și soluționarea litigiilor',
    content: (
      <>
        <p>
          Acești Termeni sunt guvernați de legea română. Orice neînțelegere se rezolvă mai întâi pe cale amiabilă: scrie-ne la {mail} și îți
          răspundem cât mai repede.
        </p>
        <p>
          Dacă nu ajungem la o înțelegere, litigiul va fi soluționat de instanțele competente din România. În cazul în care ești consumator,
          această prevedere nu îți restrânge dreptul de a te adresa instanței competente potrivit legii.
        </p>
        <p>
          Consumatorii se pot adresa Autorității Naționale pentru Protecția Consumatorilor (ANPC),{' '}
          <a href={ANPC.site} target="_blank" rel="noopener noreferrer">anpc.ro</a>, și pot folosi procedura de soluționare alternativă a
          litigiilor (SAL), potrivit Ordonanței Guvernului nr. 38/2015, prin platforma{' '}
          <a href={ANPC.salPlatform} target="_blank" rel="noopener noreferrer">reclamatiisal.anpc.ro</a>.
        </p>
      </>
    ),
  },
  {
    id: 'modificari',
    title: 'Modificarea termenilor',
    content: (
      <p>
        Putem actualiza acești Termeni atunci când se schimbă Serviciile sau legislația. Versiunea în vigoare este cea publicată pe această
        pagină, iar data ultimei actualizări este afișată la început. Continuarea utilizării Site-ului după publicarea modificărilor
        înseamnă acceptarea lor.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <p>
        Pentru orice întrebare despre acești Termeni ne poți scrie la {mail} sau ne poți suna la{' '}
        <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return <LegalPage title="Termeni și condiții" sections={sections} />;
}
