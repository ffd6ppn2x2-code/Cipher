'use client'

import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll'
import { CTASection } from '@/components/ui/CTASection'
import { useLanguage } from '@/lib/i18n/context'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <FadeInOnScroll>
            <p className="section-label">{t.about.heroLabel}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-cipher-text mb-5">
              {t.about.heroHeading}
            </h1>
            <p className="text-lg text-cipher-subtle leading-relaxed">
              {t.about.heroDesc}
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 lg:px-8 bg-cipher-surface/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInOnScroll>
              <p className="section-label">{t.about.missionLabel}</p>
              <h2 className="text-3xl font-bold text-cipher-text mb-5">
                {t.about.missionHeading}
              </h2>
              <p className="text-cipher-subtle leading-relaxed mb-4">{t.about.missionP1}</p>
              <p className="text-cipher-subtle leading-relaxed">{t.about.missionP2}</p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.15} direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.about.values.map((v) => (
                  <div key={v.title} className="card">
                    <h3 className="font-semibold text-cipher-primary mb-2">{v.title}</h3>
                    <p className="text-sm text-cipher-muted leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <CTASection
        headline={t.about.ctaHeadline}
        subtext={t.about.ctaSubtext}
        ctaLabel={t.about.ctaLabel}
        label={t.cta.label}
      />
    </>
  )
}
