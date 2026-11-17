import type { IconType } from 'react-icons';
import {
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiApple,
  SiAndroid,
  SiShopify,
  SiStripe,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si';

export type Tech = { name: string; Icon: IconType; color: string };

// Official brand colors (as published by Simple Icons).
export const TECH_STACK: Tech[] = [
  { name: 'GitHub', Icon: SiGithub, color: '#181717' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Vercel', Icon: SiVercel, color: '#000000' },
  { name: 'iOS', Icon: SiApple, color: '#000000' },
  { name: 'Android', Icon: SiAndroid, color: '#3DDC84' },
  { name: 'Shopify', Icon: SiShopify, color: '#7AB55C' },
  { name: 'Stripe', Icon: SiStripe, color: '#635BFF' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
];
