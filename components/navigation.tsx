'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { profileData } from '@/lib/data';

const menuItems = [
  { label: 'Accueil',      id: 'home' },
  { label: 'À propos',     id: 'about' },
  { label: 'Expérience',   id: 'experience' },
  { label: 'Compétences',  id: 'expertise' },
  { label: 'Contact',      id: 'contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId]   = useState('home');
  const navRef = useRef<HTMLElement>(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section tracking ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    menuItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* ── Close mobile menu on outside click ── */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-full top-0 z-50"
    >
      {/* ── Backdrop ── */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-[var(--shadow-sm)]'
            : 'bg-transparent'
        }`}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo / Monogram ── */}
          <button
            onClick={() => scrollToSection('home')}
            className="group relative flex items-center gap-2.5 focus-visible:outline-none"
            aria-label="Retour en haut"
          >
            {/* Monogram pill */}
            <span className="relative flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden">
              <img
                src="/anthony.jpg"
                alt="Anthony Delhomme"
                className="w-full h-full object-cover"
              />
              {/* Shimmer on hover */}
              <span className="absolute inset-0 bg-white/20 translate-x-[-110%] group-hover:translate-x-[110%] skew-x-[-20deg] transition-transform duration-500" />
            </span>
            {/* Name — hidden on very small screens */}
            <span
              className="hidden sm:block font-display font-700 text-sm tracking-tight"
              style={{ color: 'var(--foreground)' }}
            >
              Anthony Delhomme
            </span>
          </button>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  style={{
                    color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border)' }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <a
            href={profileData.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{
              background: 'var(--accent)',
              color: 'var(--accent-foreground)',
              fontFamily: 'var(--font-body)',
              boxShadow: '0 2px 8px oklch(0.82 0.22 128 / 0.35)',
            }}
          >
            <CalendarCheck size={15} strokeWidth={2} />
            Prendre rendez-vous
          </a>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ color: 'var(--foreground)', background: isOpen ? 'var(--accent-subtle)' : 'transparent' }}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden relative"
            style={{
              background: 'var(--background)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {menuItems.map((item, i) => {
                const isActive = activeId === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    style={{
                      background: isActive ? 'var(--accent-subtle)' : 'transparent',
                      color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                    )}
                  </motion.button>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05 + 0.05 }}
                className="pt-2 pb-1"
              >
                <a
                  href={profileData.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  style={{
                    background: 'var(--accent)',
                    color: 'var(--accent-foreground)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <CalendarCheck size={15} strokeWidth={2} />
                  Prendre rendez-vous
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}