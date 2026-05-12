'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, ChevronDown, Code2, TrendingUp, Linkedin } from 'lucide-react';
import { profileData } from '@/lib/data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const} },
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // premier ouvert par défaut

  const toggle = (i: number) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden"
      style={{ paddingBlock: 'var(--section-padding)' }}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 100% 50%, oklch(0.65 0.15 200 / 0.06) 0%, transparent 65%)',
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
            <Briefcase size={12} />
            Parcours professionnel
          </span>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="font-display font-800 tracking-[-0.03em]" style={{ color: 'var(--foreground)' }}>
              Expérience
            </h2>

            {/* Inline stats */}
            <div className="flex items-center gap-6 pb-1">
              {[
                { v: '16+', l: 'ans' },
                { v: '7', l: 'missions' },
                { v: '8', l: 'ans PO' },
              ].map(({ v, l }, i) => (
                <div key={i} className="text-center">
                  <p className="font-display font-800 text-2xl leading-none" style={{ color: 'var(--accent)' }}>
                    {v}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), var(--border) 40%, transparent)' }} />
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[22px] top-2 bottom-2 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, var(--accent) 0%, var(--border) 60%, transparent 100%)' }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {profileData.experience.map((job, index) => {
              const isExpanded = expandedIndex === index;
              const isFirst = index === 0;

              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="sm:pl-14 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-[45px] h-[45px]"
                  >
                    <div
                      className="w-3 h-3 rounded-full border-2 transition-all duration-300"
                      style={{
                        background: isFirst || isExpanded ? 'var(--accent)' : 'var(--card)',
                        borderColor: isFirst || isExpanded ? 'var(--accent)' : 'var(--border)',
                        boxShadow: isExpanded ? '0 0 0 4px oklch(0.82 0.22 128 / 0.2)' : 'none',
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                    style={{
                      background: 'var(--card)',
                      border: `1px solid ${isExpanded ? 'oklch(0.68 0.16 128 / 0.5)' : 'var(--border)'}`,
                      boxShadow: isExpanded ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
                    }}
                    onClick={() => toggle(index)}
                  >
                    {/* Card header — always visible */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          {/* Title row */}
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3
                              className="font-display font-700 text-lg sm:text-xl leading-tight"
                              style={{ color: 'var(--foreground)' }}
                            >
                              {job.title}
                            </h3>
                            <span
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-500 flex-shrink-0"
                              style={{
                                background: 'var(--accent-subtle)',
                                color: 'oklch(0.25 0.12 128)',
                                border: '1px solid oklch(0.68 0.16 128 / 0.35)',
                              }}
                            >
                              {job.duration}
                            </span>
                          </div>

                          {/* Meta row */}
                          <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                            <span className="flex items-center gap-1.5">
                              <Briefcase size={13} strokeWidth={1.5} />
                              {job.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} strokeWidth={1.5} />
                              {job.period}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                            {job.description}
                          </p>
                        </div>

                        {/* Chevron toggle */}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex-shrink-0 mt-1"
                        >
                          <ChevronDown
                            size={18}
                            strokeWidth={2}
                            style={{ color: isExpanded ? 'var(--accent)' : 'var(--muted-foreground)' }}
                          />
                        </motion.div>
                      </div>

                      {/* Stack preview (collapsed) */}
                      {!isExpanded && job.stack && (
                        <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                          <Code2 size={12} style={{ color: 'var(--accent)' }} strokeWidth={2} />
                          <span className="text-xs" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>
                            {job.stack.slice(0, 4).join(' · ')}{job.stack.length > 4 ? ` +${job.stack.length - 4}` : ''}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-5 pb-6 sm:px-6 sm:pb-7 space-y-6"
                            style={{ borderTop: '1px solid var(--border)' }}
                          >
                            {/* Réalisations */}
                            {job.bullets?.length > 0 && (
                              <div className="pt-5">
                                <div className="flex items-center gap-2 mb-3">
                                  <TrendingUp size={14} style={{ color: 'var(--accent)' }} strokeWidth={2} />
                                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--muted-foreground)' }}>
                                    Réalisations clés
                                  </span>
                                </div>
                                <ul className="space-y-2.5">
                                  {job.bullets.map((bullet, i) => (
                                    <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                                      <span
                                        className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                                        style={{ background: 'var(--accent)' }}
                                      />
                                      <span style={{ lineHeight: '1.6' }}>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Stack */}
                            {job.stack?.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <Code2 size={14} style={{ color: 'var(--accent)' }} strokeWidth={2} />
                                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--muted-foreground)' }}>
                                    Stack & Outils
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {job.stack.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-2.5 py-1 rounded-lg text-xs font-mono"
                                      style={{
                                        background: 'var(--accent-subtle)',
                                        color: 'oklch(0.25 0.12 128)',
                                        border: '1px solid oklch(0.68 0.16 128 / 0.3)',
                                      }}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={profileData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-500 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
              boxShadow: 'var(--shadow-sm)',
              fontFamily: 'var(--font-body)',
            }}
          >
            <Linkedin size={16} strokeWidth={2} style={{ color: 'var(--accent)' }} />
            Profil complet sur LinkedIn
            <span
              className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5"
              style={{ color: 'var(--muted-foreground)' }}
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}