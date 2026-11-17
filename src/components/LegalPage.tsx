import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalHeader from '@/components/LegalHeader';

export type LegalSection = { id: string; title: string; content: ReactNode };

/** Shared layout for the legal documents (written in Romanian, the legally binding version). */
export default function LegalPage({ title, intro, sections }: { title: string; intro?: ReactNode; sections: LegalSection[] }) {
  return (
    <>
      <Navbar />
      <main className="cxc-legal-main">
        <article className="cxc-legal">
          <LegalHeader title={title} />
          {intro}
          <nav className="cxc-legal-toc" aria-label="Cuprins">
            <p className="cxc-legal-toc-title">Cuprins</p>
            <ol>
              {sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
              ))}
            </ol>
          </nav>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
              <h2 id={`${s.id}-title`}>{i + 1}. {s.title}</h2>
              {s.content}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
