'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Linkedin, Mail, Calendar, ArrowUp,
  Briefcase, Award, Users, Sparkles,
} from 'lucide-react';
import { profileData } from '@/lib/data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const} },
};

const quickLinks = [
  { label: 'Accueil',    id: 'home',       icon: Sparkles  },
  { label: 'Expérience', id: 'experience', icon: Briefcase },
  { label: 'Expertise',  id: 'expertise',  icon: Award     },
  { label: 'Contact',    id: 'contact',    icon: Users     },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      ref={ref}
      className="relative mt-12 overflow-hidden"
      style={{ background: 'var(--foreground)' }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.07]" />

      {/* Accent glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[250px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.82 0.22 128 / 0.08) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Top CTA band */}
      <div
        className="relative border-b"
        style={{ borderColor: 'oklch(1 0 0 / 0.08)' }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div>
              <p className="font-display font-700 text-lg" style={{ color: 'white' }}>
                Prêt à collaborer sur votre prochain projet data ?
              </p>
              <p className="text-sm mt-0.5" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
                Un premier échange de 30 min pour explorer vos besoins.
              </p>
            </div>
            <a
              href={profileData.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-xl font-600 text-sm overflow-hidden transition-all duration-200 hover:scale-[1.04] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={{
                background: 'var(--accent)',
                color: 'var(--accent-foreground)',
                boxShadow: '0 4px 20px oklch(0.75 0.20 128 / 0.35)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <Calendar size={15} strokeWidth={2} />
              Prendre rendez-vous
              <span className="absolute inset-0 bg-white/25 translate-x-[-110%] group-hover:translate-x-[110%] skew-x-[-20deg] transition-transform duration-500" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-12 lg:py-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >

          {/* Brand */}
          <motion.div variants={item} className="space-y-5 lg:col-span-1">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 focus-visible:outline-none"
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-800 text-sm flex-shrink-0"
                style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
              >
                AD
              </span>
              <span className="font-display font-700 text-base" style={{ color: 'white' }}>
                Anthony Delhommé
              </span>
            </button>

            <p className="text-sm leading-relaxed" style={{ color: 'oklch(1 0 0 / 0.48)' }}>
              Consultant Project Manager<br />
              Chef de Projet Data & IA
            </p>

            <div className="flex items-center gap-2 pt-1">
              {[
                { href: profileData.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${profileData.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'oklch(1 0 0 / 0.07)',
                    color: 'oklch(1 0 0 / 0.55)',
                    border: '1px solid oklch(1 0 0 / 0.10)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                    (e.currentTarget as HTMLElement).style.background = 'oklch(1 0 0 / 0.12)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'oklch(1 0 0 / 0.55)';
                    (e.currentTarget as HTMLElement).style.background = 'oklch(1 0 0 / 0.07)';
                  }}
                >
                  <Icon size={15} strokeWidth={2} />
                </a>
              ))}

              {/* Malt */}
              <a
                href={profileData.social.malt}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 h-9 rounded-lg text-xs font-600 transition-all duration-200 hover:scale-105"
                style={{
                  background: 'oklch(1 0 0 / 0.07)',
                  color: 'oklch(1 0 0 / 0.55)',
                  border: '1px solid oklch(1 0 0 / 0.10)',
                  fontFamily: 'var(--font-mono)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(1 0 0 / 0.55)'; }}
              >
                Malt
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={item}>
            <p
              className="text-[10px] font-mono uppercase tracking-widest mb-5"
              style={{ color: 'oklch(1 0 0 / 0.35)' }}
            >
              Navigation
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, id, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="group flex items-center gap-2 text-sm transition-all duration-150 hover:translate-x-1"
                    style={{ color: 'oklch(1 0 0 / 0.50)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(1 0 0 / 0.50)'; }}
                  >
                    <Icon size={12} strokeWidth={2} style={{ color: 'var(--accent)', opacity: 0.8 }} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <p
              className="text-[10px] font-mono uppercase tracking-widest mb-5"
              style={{ color: 'oklch(1 0 0 / 0.35)' }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-start gap-2 text-sm transition-colors"
                  style={{ color: 'oklch(1 0 0 / 0.50)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(1 0 0 / 0.50)'; }}
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="font-mono break-all">{profileData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'oklch(1 0 0 / 0.50)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(1 0 0 / 0.50)'; }}
                >
                  <span>📞</span>
                  {profileData.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: 'oklch(1 0 0 / 0.35)' }}>
                <span>📍</span>
                Paris, France
              </li>
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={item}>
            <p
              className="text-[10px] font-mono uppercase tracking-widest mb-5"
              style={{ color: 'oklch(1 0 0 / 0.35)' }}
            >
              Certifications
            </p>
            <div className="flex flex-wrap gap-1.5">
              {profileData.certifications.slice(0, 3).map((cert, i) => (
                <span
                  key={i}
                  className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-mono"
                  style={{
                    background: 'oklch(1 0 0 / 0.08)',
                    color: 'oklch(1 0 0 / 0.60)',
                    border: '1px solid oklch(1 0 0 / 0.12)',
                  }}
                >
                  {cert.name.length > 24 ? cert.name.slice(0, 22) + '…' : cert.name}
                </span>
              ))}
              <span
                className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-mono"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                }}
              >
                +{profileData.certifications.length - 3}
              </span>
            </div>

            <div
              className="mt-6 pt-5"
              style={{ borderTop: '1px solid oklch(1 0 0 / 0.08)' }}
            >
              {[
                { l: 'Expérience', v: '+16 ans' },
                { l: 'Clients ref.', v: '3 grands comptes' },
              ].map(({ l, v }) => (
                <div key={l} className="flex justify-between text-sm py-1">
                  <span style={{ color: 'oklch(1 0 0 / 0.40)' }}>{l}</span>
                  <span className="font-600" style={{ color: 'white' }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.08)' }}
        >
          <p className="text-xs" style={{ color: 'oklch(1 0 0 / 0.30)', fontFamily: 'var(--font-mono)' }}>
            © {year} Anthony Delhomme — Tous droits réservés
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: 'oklch(1 0 0 / 0.25)', fontFamily: 'var(--font-mono)' }}>
              Next.js · Tailwind · Framer Motion
            </span>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-500 transition-all duration-200 hover:scale-105"
              style={{
                background: 'oklch(1 0 0 / 0.08)',
                color: 'oklch(1 0 0 / 0.50)',
                border: '1px solid oklch(1 0 0 / 0.10)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(1 0 0 / 0.50)'; }}
            >
              <ArrowUp size={12} strokeWidth={2} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
              Haut
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}