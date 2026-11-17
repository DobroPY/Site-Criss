// Legal identification data shown on "Despre noi" and in the legal pages. Edit it here only.
// The trade register number and registered office are deliberately not published.

export const COMPANY = {
  legalName: 'CRISTEA CRISTIAN PFA',
  legalForm: 'persoană fizică autorizată',
  brand: 'CXC Software',
  cui: '55125168',
  email: 'cxc@dive-software.ro',
  phone: '+40 752 315 343',
  website: 'cxcsoftware.ro',
} as const;

/** Date shown as "Ultima actualizare" on the legal pages. */
export const LEGAL_UPDATED = { ro: '14 noiembrie 2026', en: '14 November 2026' } as const;

export const ANPC = {
  site: 'https://anpc.ro',
  /** ANPC Order 449/2022 as amended by Order 270/2026: SAL pictogram, 250×50 px, linking here. */
  salPlatform: 'https://reclamatiisal.anpc.ro',
} as const;

export const ANSPDCP = {
  name: 'Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)',
  address: 'B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, cod poștal 010336, București',
  email: 'anspdcp@dataprotection.ro',
  site: 'https://www.dataprotection.ro',
} as const;

export const LEGAL_LINKS = {
  about: '/despre-noi',
  terms: '/termeni-si-conditii',
  privacy: '/politica-de-confidentialitate',
  cookies: '/politica-cookies',
} as const;
