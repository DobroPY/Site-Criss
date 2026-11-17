// Shared by the "Programează o discuție" form (client) and its Server Action, so both
// validate the same way. Labels live in the dictionary under `leadForm`, keyed by these ids.

export const INDUSTRY_KEYS = [
  'construction',
  'transport',
  'retail',
  'hr',
  'manufacturing',
  'healthcare',
  'services',
  'other',
] as const;
export const INTEREST_KEYS = ['erp', 'mobile', 'shopify', 'ai', 'unsure'] as const;
export const CALL_TIME_KEYS = ['anytime', 'morning', 'afternoon'] as const;

export type Industry = (typeof INDUSTRY_KEYS)[number];
export type Interest = (typeof INTEREST_KEYS)[number];
export type CallTime = (typeof CALL_TIME_KEYS)[number];

export type LeadInput = {
  name: string;
  company: string;
  cui: string;
  phone: string;
  email: string;
  industry: Industry | '';
  interests: Interest[];
  callTime: CallTime;
  message: string;
  consent: boolean;
};

export type LeadField = 'name' | 'company' | 'cui' | 'phone' | 'email' | 'industry' | 'message' | 'consent';
export type LeadErrorCode = 'required' | 'email' | 'phone' | 'cui' | 'consent' | 'tooLong';
export type LeadErrors = Partial<Record<LeadField, LeadErrorCode>>;

/** Field order, used to focus the first invalid field. */
export const LEAD_FIELDS: LeadField[] = ['name', 'company', 'cui', 'industry', 'phone', 'email', 'message', 'consent'];

export const EMPTY_LEAD: LeadInput = {
  name: '',
  company: '',
  cui: '',
  phone: '',
  email: '',
  industry: '',
  interests: [],
  callTime: 'anytime',
  message: '',
  consent: false,
};

const MAX = { name: 80, company: 120, message: 1000 };

/**
 * Romanian CUI/CIF check digit: optional "RO" prefix, 2–10 digits, last digit is the
 * control digit computed with the key 753217532 over the left-padded remaining digits.
 */
export function isValidCui(raw: string): boolean {
  const s = raw.trim().toUpperCase().replace(/^RO/, '').replace(/\s+/g, '');
  if (!/^\d{2,10}$/.test(s)) return false;
  const digits = s.split('').map(Number);
  const control = digits.pop()!;
  const key = [7, 5, 3, 2, 1, 7, 5, 3, 2];
  const padded = [...Array(9 - digits.length).fill(0), ...digits];
  const sum = padded.reduce((acc, d, i) => acc + d * key[i], 0);
  const check = ((sum * 10) % 11) % 10;
  return check === control;
}

export function isValidPhone(raw: string): boolean {
  if (!/^[+\d\s().-]+$/.test(raw.trim())) return false;
  const digits = raw.replace(/\D/g, '');
  return digits.length >= 9 && digits.length <= 15;
}

export function isValidEmail(raw: string): boolean {
  const s = raw.trim();
  return s.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const pick = <T extends string>(v: unknown, allowed: readonly T[], fallback: T) =>
  allowed.includes(v as T) ? (v as T) : fallback;

/** Coerces untrusted input into a LeadInput and reports field errors. */
export function validateLead(input: unknown): { data: LeadInput; errors: LeadErrors } {
  const o = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>;
  const interests = Array.isArray(o.interests)
    ? INTEREST_KEYS.filter((k) => (o.interests as unknown[]).includes(k))
    : [];
  const data: LeadInput = {
    name: str(o.name),
    company: str(o.company),
    cui: str(o.cui),
    phone: str(o.phone),
    email: str(o.email),
    industry: pick(o.industry, INDUSTRY_KEYS, '' as Industry),
    interests,
    callTime: pick(o.callTime, CALL_TIME_KEYS, 'anytime'),
    message: str(o.message),
    consent: o.consent === true,
  };

  const errors: LeadErrors = {};
  if (!data.name) errors.name = 'required';
  else if (data.name.length > MAX.name) errors.name = 'tooLong';
  if (!data.company) errors.company = 'required';
  else if (data.company.length > MAX.company) errors.company = 'tooLong';
  if (data.cui && !isValidCui(data.cui)) errors.cui = 'cui';
  if (!data.industry) errors.industry = 'required';
  if (!data.phone) errors.phone = 'required';
  else if (!isValidPhone(data.phone)) errors.phone = 'phone';
  if (!data.email) errors.email = 'required';
  else if (!isValidEmail(data.email)) errors.email = 'email';
  if (data.message.length > MAX.message) errors.message = 'tooLong';
  if (!data.consent) errors.consent = 'consent';

  return { data, errors };
}
