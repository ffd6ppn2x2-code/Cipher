import { serviceCategories } from '@/lib/services'
import { SectionBlocks } from '@/components/SectionBlocks'
import { ServiceCategoryNav } from '@/components/ServiceCategoryNav'
import { CTASection } from '@/components/ui/CTASection'
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,212,255,0.05) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative">
          <FadeInOnScroll>
            <p className="section-label">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-cipher-text mb-4">
              Our Services
            </h1>
            <p className="text-cipher-subtle max-w-2xl mx-auto leading-relaxed mb-10">
              Comprehensive cybersecurity solutions designed to protect your enterprise at every layer —
              from strategic consulting to active threat response and cloud security.
            </p>
            <ServiceCategoryNav />
          </FadeInOnScroll>
        </div>
      </section>

      {/* All service categories */}
      {serviceCategories.map((cat) => (
        <SectionBlocks key={cat.slug} category={cat} />
      ))}

      <CTASection />
    </>
  )
}
