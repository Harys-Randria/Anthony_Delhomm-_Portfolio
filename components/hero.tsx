'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowDown, CalendarCheck, Linkedin, Mail,
  Briefcase, Award, Users, ExternalLink,
} from 'lucide-react';
import { profileData } from '@/lib/data';

/* ── Animation variants ── */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};
const item = {
  hidden:   { opacity: 0, y: 22 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const} },
};

const keyStats = [
  { value: '+16', label: "ans d'expérience", icon: Briefcase },
  { value: '8',   label: 'ans Product Owner', icon: Award    },
  { value: '3',   label: 'secteurs clés',     icon: Users    },
];

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingBlock: 'var(--section-padding)' }}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" />

      {/* Gradient bands diagonaux */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 80% 20%, oklch(0.82 0.14 128 / 0.12) 0%, transparent 65%),
            radial-gradient(ellipse 50% 60% at 10% 80%, oklch(0.65 0.15 200 / 0.07) 0%, transparent 60%)
          `,
        }}
      />

      {/* Bande verticale accent — motif architectural */}
      <div
        className="absolute top-0 bottom-0 left-[58%] w-px hidden lg:block"
        style={{ background: 'linear-gradient(180deg, transparent, var(--border) 20%, var(--border) 80%, transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">

          {/* ════════════════════════════════
              LEFT — Contenu principal
          ════════════════════════════════ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Badge disponibilité */}
            <motion.div variants={item}>
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-500 tracking-wide"
                style={{
                  background: 'var(--accent-subtle)',
                  color: 'oklch(0.22 0.12 128)',
                  border: '1px solid oklch(0.68 0.16 128 / 0.45)',
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: 'var(--accent)' }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-1.5 w-1.5"
                    style={{ background: 'var(--accent)' }}
                  />
                </span>
                Disponible pour missions
              </span>
            </motion.div>

            {/* Nom — typographie éditoriale */}
            <motion.div variants={item} className="space-y-1">
              {/* Prénom — grand, display */}
              <h1
                className="font-display leading-[0.95] tracking-[-0.04em]"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  fontWeight: 800,
                  color: 'var(--foreground)',
                }}
              >
                Anthony
              </h1>

              {/* Nom — creux avec stroke + gradient data */}
              <div
                className="font-display leading-[0.95] tracking-[-0.04em] text-gradient"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  fontWeight: 800,
                }}
              >
                Delhomme
              </div>
            </motion.div>

            {/* Ligne de séparation avec accent */}
            <motion.div variants={item} className="flex items-center gap-3">
              <div
                className="h-[2px] w-8 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              <p
                className="text-sm font-mono tracking-wide uppercase"
                style={{ color: 'oklch(0.25 0.12 128)', fontWeight: 600 }}
              >
                Data & AI Project Manager
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={item}>
              <p
                className="text-base sm:text-lg leading-relaxed max-w-xl"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {profileData.subtitle}
              </p>
            </motion.div>

            {/* Key stats */}
            <motion.div variants={item} className="grid grid-cols-3 gap-3 pt-2">
              {keyStats.map(({ value, label, icon: Icon }, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {/* Accent corner */}
                  <div
                    className="absolute top-0 right-0 w-8 h-8 rounded-tr-2xl rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'var(--accent-subtle)' }}
                  />
                  <Icon
                    size={18}
                    className="mb-2"
                    style={{ color: 'var(--accent)' }}
                    strokeWidth={2}
                  />
                  <span
                    className="font-display font-800 text-2xl leading-none"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-[11px] mt-1 leading-tight"
                    style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-body)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              {/* Primary CTA */}
              <a
                href={profileData.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-600 overflow-hidden transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                  fontFamily: 'var(--font-body)',
                  boxShadow: '0 2px 12px oklch(0.75 0.20 128 / 0.40)',
                }}
              >
                <CalendarCheck size={16} strokeWidth={2} />
                Prendre rendez-vous
                <span className="absolute inset-0 bg-white/25 translate-x-[-110%] group-hover:translate-x-[110%] skew-x-[-20deg] transition-transform duration-500" />
              </a>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollTo('experience')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-500 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={{
                  background: 'var(--card)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                  fontFamily: 'var(--font-body)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                Voir mon parcours
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-3 pt-1">
              {[
                { href: profileData.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${profileData.email}`, icon: Mail,     label: 'Email'    },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted-foreground)',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  <Icon size={16} strokeWidth={2} />
                </a>
              ))}

              <div
                className="h-4 w-px mx-1"
                style={{ background: 'var(--border)' }}
              />
              <a
                href={`mailto:${profileData.email}`}
                className="text-xs transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}
              >
                {profileData.email}
              </a>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════
              RIGHT — Photo + badges
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Photo container */}
            <div className="relative">
              {/* Cadre décoratif décalé */}
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--border)',
                  transform: 'rotate(2deg)',
                  zIndex: 0,
                }}
              />
              {/* Second cadre */}
              <div
                className="absolute -inset-1.5 rounded-2xl"
                style={{
                  background: 'var(--accent-subtle)',
                  border: '1px solid oklch(0.68 0.16 128 / 0.3)',
                  transform: 'rotate(-1deg)',
                  zIndex: 0,
                }}
              />

              {/* Image */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden" style={{ zIndex: 1 }}>
                <Image
                  src="/anthony.jpg"
                  alt={`${profileData.name} — Consultant Data & IA`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                {/* Overlay gradient subtil en bas */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{
                    background: 'linear-gradient(to top, oklch(0.10 0.012 250 / 0.5), transparent)',
                  }}
                />
              </div>

              {/* Badge flottant — Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 -left-5 z-20"
              >
                <div
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  <Award size={15} style={{ color: 'var(--accent)' }} strokeWidth={2} />
                  <div>
                    <p
                      className="text-[10px] leading-none mb-0.5"
                      style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}
                    >
                      Certifié
                    </p>
                    <p
                      className="text-xs font-600 leading-none"
                      style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
                    >
                      SAFe 6 · Dataiku MLP
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Badge flottant — Expérience */}
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.85, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-5 -right-5 z-20"
              >
                <div
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl"
                  style={{
                    background: 'var(--accent)',
                    boxShadow: '0 4px 16px oklch(0.75 0.20 128 / 0.40)',
                  }}
                >
                  <span
                    className="font-display font-800 text-lg leading-none"
                    style={{ color: 'var(--accent-foreground)' }}
                  >
                    +16
                  </span>
                  <span
                    className="text-[10px] font-600 leading-tight"
                    style={{ color: 'var(--accent-foreground)', opacity: 0.8 }}
                  >
                    ans<br />data
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Clients référence */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-10 pt-5"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <p
                className="text-[11px] uppercase tracking-widest mb-3 text-center"
                style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}
              >
                Références clients
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {profileData.clients.slice(0, 3).map((client, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-500 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                      fontFamily: 'var(--font-body)',
                      boxShadow: 'var(--shadow-xs)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                    {client.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] uppercase tracking-widest"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}
          >
            scroll
          </span>
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll vers À propos"
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2 transition-opacity hover:opacity-60"
            style={{ border: '1px solid var(--border)' }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}