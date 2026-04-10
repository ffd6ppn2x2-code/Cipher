'use client'

import { ContactForm } from '@/components/ContactForm'
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll'
import { useLanguage } from '@/lib/i18n/context'

export default function ContactPage() {
  const { t } = useLanguage()

  const details = [
    { label: t.contact.responseTime, value: t.contact.responseTimeValue },
    { label: t.contact.consultation, value: t.contact.consultationValue },
    { label: t.contact.coverageLabel, value: t.contact.coverageValue },
  ]

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
      />
      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - info */}
          <FadeInOnScroll>
            <p className="section-label">{t.contact.label}</p>
            <h1 className="text-4xl font-bold text-cipher-text mb-4">{t.contact.heading}</h1>
            <p className="text-cipher-subtle leading-relaxed mb-8">{t.contact.desc}</p>
            <div className="space-y-4">
              {details.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-md bg-cipher-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#00d4ff" strokeWidth="1.5">
                      <path d="M2 7l3.5 3.5L12 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-cipher-muted">{item.label}</p>
                    <p className="text-sm font-semibold text-cipher-text">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>

          {/* Right - form */}
          <FadeInOnScroll delay={0.15} direction="left">
            <div className="card">
              <ContactForm />
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
