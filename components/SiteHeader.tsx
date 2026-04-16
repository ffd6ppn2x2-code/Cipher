'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { serviceCategories } from '@/lib/services'

// Fallback translations in case useLanguage hook fails
const fallbackTranslations = {
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    getInTouch: 'Get in Touch'
  },
  langToggle: 'عربي'
}

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  
  // Safely use the language hook with fallbacks
  let lang = 'en'
  let setLang = (l: string) => {}
  let t = fallbackTranslations
  
  try {
    // Dynamically import to avoid circular dependencies during build
    const { useLanguage } = require('@/lib/i18n/context')
    const languageData = useLanguage()
    if (languageData) {
      lang = languageData.lang || 'en'
      setLang = languageData.setLang || (() => {})
      t = languageData.t || fallbackTranslations
    }
  } catch (error) {
    console.warn('Language context not available, using fallback translations')
  }

  const navLinks = [
    { href: '/', label: t?.nav?.home || 'Home' },
    { href: '/services', label: t?.nav?.services || 'Services' },
    { href: '/about', label: t?.nav?.about || 'About' },
    { href: '/contact', label: t?.nav?.contact || 'Contact' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cipher-bg/95 backdrop-blur-md border-b border-cipher-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded bg-cipher-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="#08111f" strokeWidth="1.5" fill="none"/>
                <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="#08111f"/>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-cipher-text">Cipher</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              if (link.href === '/services') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavItem href={link.href} label={link.label} isActive={isActive} hasDropdown />
                    <AnimatePresence>
                      {servicesOpen && <ServicesDropdown lang={lang} />}
                    </AnimatePresence>
                  </div>
                )
              }
              return <NavItem key={link.href} href={link.href} label={link.label} isActive={isActive} />
            })}
          </nav>

          {/* CTA area — language toggle + button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => {
                if (setLang) {
                  setLang(lang === 'en' ? 'ar' : 'en')
                }
              }}
              className="px-3 py-1.5 rounded-md text-sm font-semibold border border-cipher-border
                         text-cipher-subtle hover:text-cipher-primary hover:border-cipher-primary/50
                         transition-all duration-200"
              aria-label="Switch language"
            >
              {t?.langToggle || 'عربي'}
            </button>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-cipher-primary text-cipher-bg
                         transition-all duration-200 hover:bg-cipher-accent"
              style={{ boxShadow: '0 0 16px rgba(0,212,255,0.25)' }}
            >
              {t?.nav?.getInTouch || 'Get in Touch'}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-0.5 bg-cipher-subtle rounded-full origin-center"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-cipher-subtle rounded-full"
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-cipher-subtle rounded-full origin-center"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-cipher-surface border-b border-cipher-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2.5 text-sm font-medium text-cipher-subtle hover:text-cipher-primary
                             transition-colors duration-150 border-b border-cipher-border/50 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile language toggle */}
              <button
                onClick={() => {
                  if (setLang) {
                    setLang(lang === 'en' ? 'ar' : 'en')
                  }
                }}
                className="mt-2 py-2.5 text-sm font-semibold text-cipher-primary text-left
                           border-b border-cipher-border/50"
              >
                {t?.langToggle || 'عربي'}
              </button>
              <Link
                href="/contact"
                className="mt-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-center
                           bg-cipher-primary text-cipher-bg"
              >
                {t?.nav?.getInTouch || 'Get in Touch'}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// NavItem — resize bug fix: font-weight always 600, only color + opacity vary
// ─────────────────────────────────────────────────────────────────────────────
function NavItem({
  href,
  label,
  isActive,
  hasDropdown,
}: {
  href: string
  label: string
  isActive: boolean
  hasDropdown?: boolean
}) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 text-sm font-semibold rounded-md group transition-colors duration-150"
      style={{ color: isActive ? '#00d4ff' : '#94a3b8' }}
    >
      <span
        className="absolute inset-0 rounded-md bg-cipher-primary/0 group-hover:bg-cipher-primary/8
                   transition-colors duration-150"
        aria-hidden
      />
      <span className="relative flex items-center gap-1">
        <span className="group-hover:text-cipher-primary transition-colors duration-150">
          {label}
        </span>
        {hasDropdown && (
          <svg
            className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 group-hover:text-cipher-primary"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M2 4l4 4 4-4" />
          </svg>
        )}
      </span>
      <span
        className="absolute bottom-0 left-3 right-3 h-px rounded-full transition-opacity duration-150"
        style={{
          background: 'linear-gradient(90deg, #00d4ff, #0099cc)',
          opacity: isActive ? 1 : 0,
        }}
        aria-hidden
      />
    </Link>
  )
}

function ServicesDropdown({ lang }: { lang: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72"
    >
      <div className="bg-cipher-surface border border-cipher-border rounded-xl shadow-2xl
                      shadow-black/40 overflow-hidden">
        {serviceCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/services#${cat.slug}`}
            className="flex items-start gap-3 px-4 py-3 hover:bg-cipher-card
                       transition-colors duration-150 group border-b border-cipher-border/50 last:border-0"
          >
            <div className="mt-0.5 w-7 h-7 rounded-md bg-cipher-primary/10 flex items-center
                            justify-center flex-shrink-0 group-hover:bg-cipher-primary/20
                            transition-colors duration-150">
              <ServiceIcon name={cat.icon} />
            </div>
            <div>
              <p className="text-sm font-semibold text-cipher-text group-hover:text-cipher-primary
                            transition-colors duration-150">
                {cat.shortTitle}
              </p>
              <p className="text-xs text-cipher-muted mt-0.5 leading-snug line-clamp-2">
                {cat.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

function ServiceIcon({ name }: { name: string }) {
  const props = { width: 14, height: 14, stroke: '#00d4ff', fill: 'none', strokeWidth: 1.5 }
  if (name === 'shield') return (
    <svg {...props} viewBox="0 0 16 16">
      <path d="M8 1L14 4V9C14 12 11 14.5 8 15.5C5 14.5 2 12 2 9V4L8 1Z" />
    </svg>
  )
  if (name === 'target') return (
    <svg {...props} viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="6" /><circle cx="8" cy="8" r="3" /><circle cx="8" cy="8" r="1" fill="#00d4ff" />
    </svg>
  )
  if (name === 'search') return (
    <svg {...props} viewBox="0 0 16 16">
      <circle cx="7" cy="7" r="4.5" /><path d="M10.5 10.5L14 14" strokeLinecap="round" />
    </svg>
  )
  if (name === 'cloud') return (
    <svg {...props} viewBox="0 0 16 16">
      <path d="M12 11H11.5A3.5 3.5 0 0 0 8.4 6.1 4 4 0 1 0 4 11H12Z" />
    </svg>
  )
  return null
}
