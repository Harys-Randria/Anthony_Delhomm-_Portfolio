'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calendar, Mail, Linkedin, Clock,
  CheckCircle, Sparkles, ArrowRight, Shield, MessageSquare, Phone,
} from 'lucide-react';
import Image from 'next/image';
import { profileData } from '@/lib/data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const} },
};

const benefits = [
  { icon: Clock,         text: '30 min chrono'  },
  { icon: MessageSquare, text: 'Sans engagement' },
  { icon: Shield,        text: 'Confidentiel'    },
];

// icon = composant Lucide | img = chemin PNG dans /public
const altLinks = [
  { href: `mailto:${profileData.email}`,  icon: Mail,     img: null,              label: profileData.email, mono: true  },
  { href: profileData.social.linkedin,    icon: Linkedin,  img: null,             label: 'LinkedIn',        mono: false },
  { href: profileData.social.malt,        icon: null,      img: '/malt.png',      label: 'Malt',            mono: false },
  { href: profileData.social.collective,  icon: null,      img: '/collective.png', label: 'Collective',     mono: false },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{ paddingBlock: 'var(--section-padding)' }}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 50% 100%, oklch(0.82 0.14 128 / 0.10) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 10% 20%, oklch(0.65 0.15 200 / 0.05) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">

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
            <Sparkles size={12} style={{ color: 'oklch(0.22 0.12 128)' }} />
            Commençons la conversation
          </span>

          <h2 className="font-display font-800 tracking-[-0.03em]" style={{ color: 'var(--foreground)' }}>
            Parlons de<br />
            <span className="text-gradient">vos projets</span>
          </h2>

          <div className="mt-6 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), var(--border) 40%, transparent)' }} />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-[1fr_320px] gap-6"
        >
          {/* ── Main Calendly card ── */}
          <motion.div variants={item}>
            <div
              className="group relative rounded-2xl overflow-hidden h-full"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: 'var(--gradient-data)', opacity: 0.7 }} />
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.82 0.14 128 / 0.10), transparent)' }}
              />

              <div className="relative p-8 sm:p-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-600"
                    style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
                  >
                    <CheckCircle size={12} strokeWidth={2.5} />
                    RECOMMANDÉ
                  </span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  transition={{ type: 'spring', bounce: 0.4 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 overflow-hidden"
                  style={{ border: '1px solid oklch(0.68 0.16 128 / 0.4)' }}
                >
                  <img src="/calendly.png" alt="Calendly" className="w-14 h-14 object-contain" />
                </motion.div>

                <h3 className="font-display font-700 text-2xl mb-3" style={{ color: 'var(--foreground)' }}>
                  Premier échange gratuit
                </h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--muted-foreground)' }}>
                  Discutons de vos besoins, de vos défis data et de la façon dont je peux vous aider à les transformer en résultats concrets.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {benefits.map(({ icon: Icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-500"
                      style={{
                        background: 'var(--accent-subtle)',
                        color: 'oklch(0.28 0.12 128)',
                        border: '1px solid oklch(0.68 0.16 128 / 0.3)',
                      }}
                    >
                      {/* ✅ icône sur fond vert pâle → vert foncé */}
                      <Icon size={12} strokeWidth={2} style={{ color: 'oklch(0.28 0.12 128)' }} />
                      {text}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={profileData.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-600 text-base overflow-hidden transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: 'var(--accent)',
                      color: 'var(--accent-foreground)',
                      boxShadow: '0 4px 20px oklch(0.75 0.20 128 / 0.40)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <Calendar size={18} strokeWidth={2} />
                    Réserver un créneau
                    <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <span className="absolute inset-0 bg-white/25 translate-x-[-110%] group-hover/btn:translate-x-[110%] skew-x-[-20deg] transition-transform duration-500" />
                  </a>
                  <p className="text-center text-xs mt-3" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>
                    Sans engagement · Visio ou présentiel
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <div className="space-y-3">

            {/* Contact links */}
            {altLinks.map(({ href, icon: Icon, img, label, mono }, i) => (
              <motion.a
                key={i}
                variants={item}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                {/* ── Icon : PNG ou Lucide ── */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden transition-transform duration-200 group-hover:scale-110"
                  style={{ background: 'var(--accent-subtle)' }}
                >
                  {img ? (
                    <Image
                      src={img}
                      alt={label}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  ) : Icon ? (
                    /* ✅ Lucide sur fond vert pâle → vert foncé lisible */
                    <Icon size={16} strokeWidth={2} style={{ color: 'oklch(0.22 0.14 128)' }} />
                  ) : null}
                </div>

                <span
                  className={`text-sm font-500 truncate transition-colors duration-150 group-hover:text-[var(--accent)] ${mono ? 'font-mono text-xs' : ''}`}
                  style={{ color: 'var(--foreground)' }}
                >
                  {label}
                </span>

                <ArrowRight
                  size={14}
                  className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5"
                  style={{ color: 'var(--accent)' }}
                />
              </motion.a>
            ))}

            {/* Téléphone */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-subtle)' }}
              >
                <Phone size={16} strokeWidth={2} style={{ color: 'oklch(0.22 0.14 128)' }} />
              </div>
              <div>
                <p className="text-[11px] font-mono" style={{ color: 'var(--muted-foreground)' }}>Téléphone</p>
                <a
                  href={`tel:${profileData.phone.replace(/\s/g, '')}`}
                  className="text-sm font-600 transition-colors hover:text-[var(--accent)]"
                  style={{ color: 'var(--foreground)' }}
                >
                  {profileData.phone}
                </a>
              </div>
            </motion.div>

            {/* Disponibilité */}
            <motion.div
              variants={item}
              className="p-5 rounded-xl"
              style={{ background: 'var(--accent-subtle)', border: '1px solid oklch(0.68 0.16 128 / 0.4)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'oklch(0.25 0.18 128)' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'oklch(0.25 0.18 128)' }} />
                </span>
                <span className="text-xs font-mono font-600 uppercase tracking-wide" style={{ color: 'oklch(0.22 0.14 128)' }}>
                  Disponible
                </span>
              </div>
              <p className="text-sm font-600" style={{ color: 'var(--foreground)' }}>Missions freelance — immédiat</p>
              <p className="text-xs mt-1" style={{ color: 'oklch(0.35 0.10 128)' }}>Paris & remote · TJM sur demande</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}