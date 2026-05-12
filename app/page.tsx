'use client';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Expertise } from '@/components/expertise';
import { Certifications } from '@/components/certifications';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
