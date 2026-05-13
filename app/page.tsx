'use client'

import Link from 'next/link'
import { serviceCategories } from '@/lib/services'
import { ServiceCard } from '@/components/ServiceCard'
import { CTASection } from '@/components/ui/CTASection'
import { HeroParticles } from '@/components/ui/HeroParticles'
import { useLanguage } from '@/lib/i18n/context'

export default function HomePage() {
  const { t } = useLanguage()

  const stats = [
    { value: '24/7', label: t.stats.threatMonitoring },
    { value: '5', label: t.stats.servicePillars },
    { value: '100%', label: t.stats.clientFocus },
    { value: 'Global', label: t.stats.coverage },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(30,58,95,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)' }}
        />
        <HeroParticles />
        <div className="relative max-w-5xl mx-auto text-center pt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                       border border-cipher-border bg-cipher-surface/60 text-xs text-cipher-subtle mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cipher-primary animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-cipher-text">{t.hero.headline1}</span>
            <br />
            <span className="gradient-text">{t.hero.headline2}</span>
            <br />
            <span className="text-cipher-text">{t.hero.headline3}</span>
          </h1>

          <p className="text-lg text-cipher-subtle max-w-2xl mx-auto leading-relaxed mb-10">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link href="/services" className="btn-primary">
              {t.hero.exploreServices}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-ghost">
              {t.hero.contactUs}
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-cipher-border/40 rounded-xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-cipher-surface py-6 px-4 text-center">
                <p className="text-2xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs text-cipher-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="section-label text-center">{t.servicesSection.label}</p>
          <h2 className="text-3xl font-bold text-cipher-text text-center mb-3">
            {t.servicesSection.heading}
          </h2>
          <p className="text-cipher-subtle text-center max-w-2xl mx-auto leading-relaxed mb-12">
            {t.servicesSection.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((cat, i) => (
              <ServiceCard key={cat.slug} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Cipher */}
      <section className="py-24 px-6 lg:px-8 bg-cipher-surface/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">{t.whyCipher.label}</p>
              <h2 className="text-3xl font-bold text-cipher-text mb-5">
                {t.whyCipher.heading}
              </h2>
              <p className="text-cipher-subtle leading-relaxed mb-6">{t.whyCipher.p1}</p>
              <p className="text-cipher-subtle leading-relaxed">{t.whyCipher.p2}</p>
            </div>

            <div>
              <div className="grid grid-cols-1 gap-4">
                {t.whyCipher.points.map((point) => (
                  <div
                    key={point.title}
                    className="flex gap-4 p-4 rounded-xl bg-cipher-card border border-cipher-border/60"
                  >
                    <div className="w-8 h-8 rounded-md bg-cipher-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#00d4ff" strokeWidth="1.5">
                        <path d="M2 7l3.5 3.5L12 3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-cipher-text text-sm">{point.title}</p>
                      <p className="text-cipher-muted text-xs mt-0.5 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={t.cta.headline}
        subtext={t.cta.subtext}
        ctaLabel={t.cta.button}
        label={t.cta.label}
      />
    </>
  )
}
