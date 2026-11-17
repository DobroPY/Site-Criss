import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { type LegalSection } from '@/components/LegalPage';
import { ANSPDCP, COMPANY, LEGAL_LINKS } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate | CXC Software',
  description: `Cum prelucrează ${COMPANY.legalName} (${COMPANY.brand}) datele cu caracter personal, conform GDPR.`,
};

const mail = <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;

const intro = (
  <p className="cxc-legal-lead">
    Această politică explică ce date personale prelucrăm atunci când folosești site-ul {COMPANY.website} sau ne contactezi, de ce le
    prelucrăm, cât timp le păstrăm și ce drepturi ai. Respectăm Regulamentul (UE) 2016/679 privind protecția datelor („GDPR”) și Legea
    nr. 190/2018.
  </p>
);

const sections: LegalSection[] = [
  {
    id: 'operator',
    title: 'Cine este operatorul datelor',
    content: (
      <>
        <p>Operatorul datelor tale este:</p>
        <ul>
          <li>{COMPANY.legalName} ({COMPANY.brand}), {COMPANY.legalForm}</li>
          <li>CUI: {COMPANY.cui}</li>
          <li>Email pentru protecția datelor: {mail}</li>
          <li>Telefon: <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a></li>
        </ul>
        <p>Nu am desemnat un responsabil cu protecția datelor (DPO), deoarece activitatea noastră nu o impune.</p>
      </>
    ),
  },
  {
    id: 'date',
    title: 'Ce date prelucrăm',
    content: (
      <>
        <p><strong>Date pe care ni le trimiți prin formularul „Programează o discuție”:</strong></p>
        <ul>
          <li>numele și prenumele, numele firmei și, opțional, CUI-ul acesteia;</li>
          <li>numărul de telefon și adresa de email;</li>
          <li>domeniul de activitate, serviciile care te interesează și intervalul preferat pentru apel;</li>
          <li>mesajul opțional și acordul tău de a fi contactat.</li>
        </ul>
        <p><strong>Date din corespondența directă</strong> – informațiile pe care ni le transmiți prin email sau telefon.</p>
        <p>
          <strong>Date din relația contractuală</strong> – dacă devii client: datele de facturare și datele persoanelor de contact desemnate.
        </p>
        <p>
          <strong>Date tehnice</strong> – când accesezi site-ul, serverul care îl găzduiește înregistrează automat date precum adresa IP, tipul
          browserului, data și ora accesării și pagina solicitată, necesare pentru funcționarea și securitatea site-ului.
        </p>
        <p>
          Nu solicităm categorii speciale de date (de exemplu date despre sănătate). Te rugăm să nu le incluzi în mesajele trimise.
        </p>
      </>
    ),
  },
  {
    id: 'scopuri',
    title: 'De ce prelucrăm datele și pe ce temei legal',
    content: (
      <>
        <ul>
          <li>
            <strong>Pentru a răspunde solicitării tale și a programa discuția</strong> – temei: demersurile făcute la cererea ta înainte de
            încheierea unui contract (art. 6 alin. (1) lit. b) GDPR) și consimțământul pe care ți-l exprimi bifând caseta din formular
            (art. 6 alin. (1) lit. a) GDPR).
          </li>
          <li>
            <strong>Pentru încheierea și executarea contractului</strong> – temei: executarea contractului (art. 6 alin. (1) lit. b) GDPR).
          </li>
          <li>
            <strong>Pentru îndeplinirea obligațiilor legale</strong>, de exemplu cele fiscale și contabile – temei: obligația legală
            (art. 6 alin. (1) lit. c) GDPR).
          </li>
          <li>
            <strong>Pentru securitatea site-ului și prevenirea abuzurilor</strong> (jurnale tehnice, filtre anti-spam) și pentru apărarea
            drepturilor noastre în eventuale litigii – temei: interesul nostru legitim (art. 6 alin. (1) lit. f) GDPR).
          </li>
        </ul>
        <p>
          Nu folosim datele tale pentru marketing fără un acord separat, nu le vindem și nu luăm decizii bazate exclusiv pe prelucrarea
          automată (inclusiv crearea de profiluri) care să producă efecte juridice asupra ta.
        </p>
      </>
    ),
  },
  {
    id: 'pastrare',
    title: 'Cât timp păstrăm datele',
    content: (
      <ul>
        <li>
          <strong>Solicitările care nu se finalizează cu un contract</strong> – cel mult 12 luni de la ultima comunicare cu tine, apoi le
          ștergem.
        </li>
        <li>
          <strong>Datele contractuale și documentele financiar-contabile</strong> – pe durata contractului și, după încetarea acestuia, pe
          perioada impusă de legislația financiar-contabilă și fiscală.
        </li>
        <li>
          <strong>Jurnalele tehnice ale serverului</strong> – pentru o perioadă limitată, stabilită de furnizorul de găzduire, după care sunt
          șterse automat.
        </li>
      </ul>
    ),
  },
  {
    id: 'destinatari',
    title: 'Cui transmitem datele',
    content: (
      <>
        <p>Accesul la datele tale este limitat la persoanele care au nevoie de ele. Le putem transmite doar către:</p>
        <ul>
          <li>furnizorul serviciului de email prin care primim mesajele (cererile din formular ne sunt transmise prin email);</li>
          <li>furnizorul de găzduire a site-ului;</li>
          <li>
            Google, prin serviciul Google Fonts: pentru afișarea corectă a textului, browserul tău descarcă fonturile site-ului de pe
            serverele Google, ceea ce presupune transmiterea adresei IP și a unor informații despre browser;
          </li>
          <li>consultanți externi (de exemplu contabil sau avocat), care au obligația de a păstra confidențialitatea;</li>
          <li>autorități publice, atunci când legea ne obligă.</li>
        </ul>
        <p>Furnizorii noștri prelucrează datele numai pe baza instrucțiunilor noastre și cu măsuri de securitate adecvate.</p>
      </>
    ),
  },
  {
    id: 'transferuri',
    title: 'Transferuri în afara Spațiului Economic European',
    content: (
      <p>
        Unii furnizori (de exemplu Google) pot prelucra date și în afara Spațiului Economic European, inclusiv în SUA. În aceste cazuri,
        transferul are la bază garanții adecvate prevăzute de GDPR: decizii de adecvare ale Comisiei Europene (inclusiv EU–US Data Privacy
        Framework, pentru companiile certificate) sau clauze contractuale standard aprobate de Comisia Europeană.
      </p>
    ),
  },
  {
    id: 'drepturi',
    title: 'Drepturile tale',
    content: (
      <>
        <p>Potrivit GDPR, ai următoarele drepturi:</p>
        <ul>
          <li><strong>dreptul de acces</strong> – să afli dacă și ce date prelucrăm despre tine (art. 15);</li>
          <li><strong>dreptul la rectificare</strong> – să corectăm datele inexacte sau incomplete (art. 16);</li>
          <li><strong>dreptul la ștergere</strong> („dreptul de a fi uitat”, art. 17);</li>
          <li><strong>dreptul la restricționarea prelucrării</strong> (art. 18);</li>
          <li><strong>dreptul la portabilitatea datelor</strong> (art. 20);</li>
          <li><strong>dreptul de opoziție</strong> la prelucrările bazate pe interesul legitim (art. 21);</li>
          <li>
            <strong>dreptul de a-ți retrage consimțământul</strong> oricând, fără a afecta legalitatea prelucrării făcute înainte de retragere
            (art. 7 alin. (3));
          </li>
          <li>
            <strong>dreptul de a depune o plângere</strong> la {ANSPDCP.name}, {ANSPDCP.address}, email{' '}
            <a href={`mailto:${ANSPDCP.email}`}>{ANSPDCP.email}</a>,{' '}
            <a href={ANSPDCP.site} target="_blank" rel="noopener noreferrer">dataprotection.ro</a>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'exercitare',
    title: 'Cum îți exerciți drepturile',
    content: (
      <p>
        Scrie-ne la {mail}. Îți răspundem fără întârzieri nejustificate și în cel mult o lună de la primirea cererii. Pentru cereri complexe,
        termenul poate fi prelungit cu încă două luni, caz în care te anunțăm. Exercitarea drepturilor este gratuită. Putem să îți cerem
        informații suplimentare pentru a-ți confirma identitatea.
      </p>
    ),
  },
  {
    id: 'securitate',
    title: 'Securitatea datelor',
    content: (
      <p>
        Folosim măsuri tehnice și organizatorice adecvate pentru a proteja datele împotriva accesului neautorizat, pierderii sau modificării:
        transmiterea datelor prin conexiuni criptate, acces limitat la persoanele care au nevoie de ele și conturi protejate prin parole și
        autentificare.
      </p>
    ),
  },
  {
    id: 'minori',
    title: 'Minori',
    content: (
      <p>
        Site-ul se adresează firmelor și profesioniștilor. Nu colectăm cu bună știință date despre persoane sub 16 ani. Dacă afli că un minor
        ne-a transmis date, scrie-ne și le vom șterge.
      </p>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookie-uri',
    content: (
      <p>
        Informațiile despre cookie-uri și tehnologii similare sunt în <Link href={LEGAL_LINKS.cookies}>Politica de cookies</Link>.
      </p>
    ),
  },
  {
    id: 'modificari',
    title: 'Modificări ale acestei politici',
    content: (
      <p>
        Putem actualiza această politică atunci când se schimbă modul în care prelucrăm datele sau legislația. Versiunea în vigoare este cea
        publicată pe această pagină, cu data ultimei actualizări afișată la început.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Politica de confidențialitate" intro={intro} sections={sections} />;
}
