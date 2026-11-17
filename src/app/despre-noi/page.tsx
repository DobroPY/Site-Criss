import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';
import { COMPANY } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Despre noi | CXC Software',
  description: `${COMPANY.brand} (${COMPANY.legalName}) construiește ERP-uri, aplicații web și mobile, aplicații Shopify și automatizări AI pentru firme din România.`,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  );
}
