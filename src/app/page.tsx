'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Capabilities from '@/components/Capabilities';
import Industries from '@/components/Industries';
import Shopify from '@/components/Shopify';
import Method from '@/components/Method';
import Offer from '@/components/Offer';
import Portfolio from '@/components/Portfolio';
import WhyCXC from '@/components/WhyCXC';
import Guarantees from '@/components/Guarantees';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solution />
      <Problem />
      <Capabilities />
      <Industries />
      <Shopify />
      <Method />
      <Offer />
      <Portfolio />
      <WhyCXC />
      <Guarantees />
      <Contact />
      <Footer />
    </>
  );
}
