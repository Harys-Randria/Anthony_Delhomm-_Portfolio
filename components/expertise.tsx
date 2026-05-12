'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  TrendingUp, Database, Brain, Shield, BarChart3,
  FileText, Users, Layers, Sparkles, Award, ChevronRight,
} from 'lucide-react';
import { profileData } from '@/lib/data';

const getCategoryIcon = (cat: string) => {
  if (cat.includes('Pilotage') || cat.includes('Product'))              return TrendingUp;
  if (cat.includes('Gouvernance') || cat.includes('Migration'))         return Shield;
  if (cat.includes('Business Intelligence') || cat.includes('Analyti')) return BarChart3;
  if (cat.includes('Data Analysis') || cat.includes('Engineering'))     return Database;
  if (cat.includes('IA') || cat.includes('Prompt'))                     return Brain;
  if (cat.includes('Spécifications') || cat.includes('Documentation'))  return FileText;
  if (cat.includes('Outils'))                                            return Users;
  return Layers;
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="expertise"
      ref={ref}
      className="relative overflow-hidden"
      style={{ paddingBlock: 'var(--section-padding)' }}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 45% 50% at 0% 50%, oklch(0.82 0.14 128 / 0.07) 0%, transparent 65%),
            radial-gradient(ellipse 45% 50% at 100% 80%, oklch(0.65 0.18 260 / 0.05) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-500 tracking-wide mb-5"
            style={{
              background: 'var(--accent-subtle)',
              color: 'oklch(0.22 0.12 128)',
              border: '1px solid oklch(0.68 0.16 128 / 0.4)',
            }}
          >
            <Sparkles size={12} />
            Expertise & Compétences
          </span>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display font-800 tracking-[-0.03em]" style={{ color: 'var(--foreground)' }}>
              Ce que je maîtrise
            </h2>
            <p className="sm:text-right text-sm max-w-xs pb-1" style={{ color: 'var(--muted-foreground)' }}>
              Double compétence{' '}
              <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>
                technique & fonctionnelle
              </span>
            </p>
          </div>

          <div className="mt-6 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), var(--border) 40%, transparent)' }} />
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {profileData.expertise.map((area, i) => {
            const Icon = getCategoryIcon(area.category);
            const isHov = hovered === i;
            const isPrimary = i < 4;

            return (
              <motion.div
                key={i}
                variants={card}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl overflow-hidden"
                style={{
                  background: 'var(--card)',
                  border: `1px solid ${isHov ? 'oklch(0.68 0.16 128 / 0.6)' : 'var(--border)'}`,
                  boxShadow: isHov ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                {/* Subtle glow fill */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.82 0.14 128 / 0.12), transparent)',
                    opacity: isHov ? 1 : 0,
                  }}
                />

                <div className="relative p-6">
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: isPrimary ? 'var(--accent)' : 'var(--accent-subtle)',
                        color: isPrimary ? 'var(--accent-foreground)' : 'oklch(0.25 0.14 128)',
                      }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    {isPrimary && (
                      <span
                        className="text-[10px] font-mono font-600 px-2 py-0.5 rounded-full tracking-wide"
                        style={{
                          background: 'var(--accent-subtle)',
                          color: 'oklch(0.22 0.14 128)',
                          border: '1px solid oklch(0.68 0.16 128 / 0.35)',
                        }}
                      >
                        EXPERT
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-700 text-base mb-2 leading-tight"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {area.category}
                  </h3>

                  {/* Description */}
                  {area.description && (
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {area.description}
                    </p>
                  )}

                  {/* Divider */}
                  <div
                    className="h-px mb-4"
                    style={{ background: 'var(--border)' }}
                  />

                  {/* Skills list */}
                  <div className="space-y-1.5">
                    {area.skills.slice(0, 6).map((skill, si) => (
                      <div
                        key={si}
                        className="flex items-center gap-2 text-sm group/s"
                      >
                        <ChevronRight
                          size={11}
                          className="flex-shrink-0 transition-transform duration-150 group-hover/s:translate-x-0.5"
                          style={{ color: 'var(--accent)' }}
                        />
                        <span style={{ color: 'var(--foreground)' }}>{skill}</span>
                      </div>
                    ))}
                    {area.skills.length > 6 && (
                      <p className="text-xs pt-1 pl-4" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>
                        +{area.skills.length - 6} autres
                      </p>
                    )}
                  </div>
                </div>

                {/* Animated bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left transition-transform duration-300"
                  style={{
                    background: 'var(--gradient-data)',
                    transform: isHov ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Certifications banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 p-6 sm:p-8 rounded-2xl"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-subtle)', color: 'oklch(0.25 0.14 128)' }}
              >
                <Award size={22} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display font-700 text-lg" style={{ color: 'var(--foreground)' }}>
                  Certifications & Formation continue
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {profileData.certifications.length} certifications actives — toutes récentes (2025/2026)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {profileData.certifications.map((cert, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-500 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: i === 0 ? 'var(--accent)' : 'var(--accent-subtle)',
                    color: i === 0 ? 'var(--accent-foreground)' : 'oklch(0.25 0.12 128)',
                    border: i === 0 ? 'none' : '1px solid oklch(0.68 0.16 128 / 0.35)',
                  }}
                >
                  {cert.name.length > 28 ? cert.name.slice(0, 26) + '…' : cert.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}