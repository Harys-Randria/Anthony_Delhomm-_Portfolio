'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { profileData } from '@/lib/data';

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const certificationsByYear = profileData.certifications.reduce((acc, cert) => {
    if (!acc[cert.year]) acc[cert.year] = [];
    acc[cert.year].push(cert);
    return acc;
  }, {} as Record<number, typeof profileData.certifications>);

  const years = Object.keys(certificationsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section
      id="certifications"
      className="relative overflow-hidden"
      style={{ paddingBlock: 'var(--section-padding)' }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 100% 30%, oklch(0.82 0.14 128 / 0.07) 0%, transparent 65%)',
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
            {/* ✅ icône sur fond vert subtle → couleur sombre explicite */}
            <Award size={12} style={{ color: 'oklch(0.22 0.12 128)' }} />
            Formation continue
          </span>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display font-800 tracking-[-0.03em]" style={{ color: 'var(--foreground)' }}>
              Certifications
            </h2>
            <p className="sm:text-right text-sm pb-1" style={{ color: 'var(--muted-foreground)' }}>
              {profileData.certifications.length} certifications —{' '}
              <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>Dataiku · SAFe 6</span>
            </p>
          </div>

          <div className="mt-6 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), var(--border) 40%, transparent)' }} />
        </motion.div>

        {/* ── Timeline par année ── */}
        <div className="space-y-10">
          {years.map((year, yearIndex) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: yearIndex * 0.1, duration: 0.5 }}
            >
              {/* Année */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 rounded-lg text-sm font-700 font-mono flex-shrink-0"
                  style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
                >
                  {year}
                </span>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--border), transparent)' }} />
                <span className="text-xs font-mono flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                  {certificationsByYear[Number(year)].length} cert.
                </span>
              </div>

              {/* Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {certificationsByYear[Number(year)].map((cert, idx) => {
                  const key = idx + yearIndex * 10;
                  const isHov = hoveredIndex === key;

                  return (
                    <motion.div
                      key={idx}
                      variants={cardVariants}
                      onMouseEnter={() => setHoveredIndex(key)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ y: -4 }}
                      className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                      style={{
                        background: 'var(--card)',
                        border: `1px solid ${isHov ? 'oklch(0.68 0.16 128 / 0.6)' : 'var(--border)'}`,
                        boxShadow: isHov ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
                      }}
                    >
                      {/* Subtle glow */}
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                        style={{
                          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.82 0.14 128 / 0.10), transparent)',
                          opacity: isHov ? 1 : 0,
                        }}
                      />

                      <div className="relative p-6">
                        {/* Icon + badge */}
                        <div className="flex items-start justify-between mb-5">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: 'var(--accent-subtle)',
                              // ✅ couleur sombre lisible sur fond vert pâle
                              color: 'oklch(0.22 0.14 128)',
                            }}
                          >
                            <Award size={20} strokeWidth={2} />
                          </div>

                          <span
                            className="text-[11px] font-mono font-600 px-2.5 py-1 rounded-full"
                            style={{
                              background: 'var(--card)',
                              color: 'var(--muted-foreground)',
                              border: '1px solid var(--border)',
                            }}
                          >
                            {cert.year}
                          </span>
                        </div>

                        {/* Titre */}
                        <h3
                          className="font-display font-700 text-base mb-1 leading-tight"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {cert.name}
                        </h3>

                        {/* Émetteur */}
                        <p
                          className="text-sm font-600 mb-3"
                          style={{ color: 'oklch(0.28 0.14 128)' }}
                        >
                          {cert.issuer}
                        </p>

                        {/* Description */}
                        {cert.description && (
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                            {cert.description}
                          </p>
                        )}

                        {/* Divider */}
                        <div className="h-px my-4" style={{ background: 'var(--border)' }} />

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            {/* ✅ CheckCircle sur fond clair → couleur sombre du vert */}
                            <CheckCircle size={14} style={{ color: 'oklch(0.28 0.14 128)' }} strokeWidth={2} />
                            <span className="text-xs font-mono" style={{ color: 'var(--muted-foreground)' }}>
                              Certifié
                            </span>
                          </div>

                          <ExternalLink
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            // ✅ icône de survol → muted sur fond card blanc
                            style={{ color: 'var(--muted-foreground)' }}
                          />
                        </div>
                      </div>

                      {/* Bottom accent bar */}
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
            </motion.div>
          ))}
        </div>

        {/* Dernière mise à jour */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-xs)',
            }}
          >
            {/* ✅ Calendar sur fond card (clair) → foreground */}
            <Calendar size={14} style={{ color: 'var(--foreground)' }} strokeWidth={2} />
            <span className="text-sm font-mono" style={{ color: 'var(--muted-foreground)' }}>
              Dernière mise à jour :
            </span>
            <span className="text-sm font-700" style={{ color: 'var(--foreground)' }}>
              {Math.max(...profileData.certifications.map(c => c.year))}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}