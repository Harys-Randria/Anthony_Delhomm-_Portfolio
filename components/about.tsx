'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Target, Shield, Zap, Brain, Award } from 'lucide-react';
import { profileData } from '@/lib/data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const coreValues = [
  { icon: Target, title: 'Business-driven',   description: 'Les enjeux business et utilisateurs au cœur de chaque décision data.' },
  { icon: Shield, title: 'Data Gouvernance',  description: '+16 ans d\'expertise en gouvernance et qualité des données.' },
  { icon: Zap,    title: 'Agilité',            description: 'SCRUM, SAFe 6 Agilist — adaptation rapide aux changements.' },
  { icon: Brain,  title: 'IA & Innovation',   description: 'Certifié Manager avec l\'IA & Prompt Engineering 2026.' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const paragraphs = profileData.aboutText.split('\n\n');

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden"
      style={{ paddingBlock: 'var(--section-padding)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-25" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.82 0.14 128 / 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 lg:mb-18"
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-500 tracking-wide"
              style={{
                background: 'var(--accent-subtle)',
                color: 'oklch(0.22 0.12 128)',
                border: '1px solid oklch(0.68 0.16 128 / 0.4)',
              }}
            >
              <User size={12} />
              Qui suis-je ?
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-display leading-[1.05] tracking-[-0.03em]"
              style={{ fontWeight: 800, color: 'var(--foreground)' }}
            >
              À propos
            </h2>
            <div
              className="hidden sm:block h-px flex-1 max-w-xs ml-6 mb-3"
              style={{ background: 'linear-gradient(90deg, var(--border), transparent)' }}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">

          {/* ── LEFT — Bio ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Bio card */}
            <motion.div
              variants={item}
              className="relative rounded-2xl p-7 sm:p-9 overflow-hidden"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {/* Accent strip top */}
              <div
                className="absolute top-0 left-8 right-8 h-px"
                style={{ background: 'var(--gradient-data)', opacity: 0.6 }}
              />

              <div className="space-y-5">
                <p
                  className="text-base sm:text-lg leading-relaxed font-medium"
                  style={{ color: 'var(--foreground)' }}
                >
                  {paragraphs[0]}
                </p>
                {paragraphs.slice(1, 3).map((p, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Certifications tags */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {profileData.certifications.map((cert, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-500 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                  {cert.name}
                </span>
              ))}
            </motion.div>

            {/* Disponibilité card */}
            <motion.div
              variants={item}
              className="flex items-center justify-between gap-4 p-5 rounded-2xl"
              style={{
                background: 'var(--accent-subtle)',
                border: '1px solid oklch(0.68 0.16 128 / 0.35)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
                >
                  <Award size={18} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'oklch(0.30 0.10 128)', fontFamily: 'var(--font-mono)' }}>
                    Disponibilité
                  </p>
                  <p className="font-600 text-sm" style={{ color: 'var(--foreground)' }}>
                    Immédiate — Missions freelance
                  </p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p
                  className="font-display font-800 text-3xl leading-none"
                  style={{ color: 'oklch(0.25 0.14 128)' }}
                >
                  +16
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'oklch(0.35 0.10 128)' }}>
                  ans data
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Valeurs + Points forts ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Valeurs clés */}
            <motion.div variants={item}>
              <p
                className="text-xs font-mono uppercase tracking-widest mb-5"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Mes valeurs
              </p>
              <div className="grid grid-cols-2 gap-3">
                {coreValues.map(({ icon: Icon, title, description }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="group relative p-4 rounded-xl overflow-hidden cursor-default transition-shadow duration-300"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow-xs)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.68 0.16 128 / 0.5)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-xs)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    }}
                  >
                    {/* Bottom accent bar on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ background: 'var(--accent)' }}
                    />
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: 'var(--accent-subtle)', color: 'oklch(0.25 0.14 128)' }}
                    >
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <p className="text-sm font-600 mb-1" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>
                      {title}
                    </p>
                    <p className="text-xs leading-snug" style={{ color: 'var(--muted-foreground)' }}>
                      {description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Points forts */}
            <motion.div variants={item}>
              <p
                className="text-xs font-mono uppercase tracking-widest mb-5"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Points forts
              </p>
              <div className="space-y-2">
                {profileData.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.07, duration: 0.45 }}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:translate-x-1 cursor-default"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-150"
                      style={{ background: 'var(--accent)' }}
                    />
                    <span className="text-sm" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
                      {h}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Langues */}
            <motion.div variants={item} className="flex gap-4 pt-1">
              {profileData.languages.map((l, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <span className="text-lg">{l.flag}</span>
                  <div>
                    <p className="text-sm font-600 leading-none" style={{ color: 'var(--foreground)' }}>
                      {l.language}
                    </p>
                    <p className="text-[11px] mt-0.5" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>
                      {l.level}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}