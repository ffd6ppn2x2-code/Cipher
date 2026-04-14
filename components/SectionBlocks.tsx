'use client'

import { motion } from 'framer-motion'
import { ServiceCategory, ServiceOffering } from '@/lib/services/types'
import { ServiceIcon } from './ui/ServiceIcon'
import { FadeInOnScroll } from './ui/FadeInOnScroll'

export function SectionBlocks({ category }: { category: ServiceCategory }) {
  // Validate category data
  if (!category || !category.offerings) {
    return null
  }

  return (
    <section id={category.slug} className="py-20 px-6 lg:px-8 border-b border-cipher-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeInOnScroll>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-lg bg-cipher-primary/10 flex items-center justify-center">
              <ServiceIcon name={category.icon} size={20} />
            </div>
            <p className="section-label">{category.shortTitle}</p>
          </div>
          <h2 className="text-3xl font-bold text-cipher-text mb-3">{category.title}</h2>
          <p className="text-cipher-subtle max-w-2xl leading-relaxed mb-12">{category.description}</p>
        </FadeInOnScroll>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.offerings.map((offering: ServiceOffering, i: number) => {
            // Validate offering data
            if (!offering) return null
            
            return (
              <FadeInOnScroll key={offering.title || i} delay={i * 0.08}>
                <div className="card h-full flex flex-col">
                  <h3 className="font-semibold text-cipher-text mb-2">{offering.title}</h3>
                  <p className="text-sm text-cipher-muted leading-relaxed mb-4 flex-1">{offering.description}</p>

                  {offering.whyItMatters && offering.whyItMatters.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-cipher-border/50">
                      <p className="text-xs font-semibold text-cipher-primary mb-2 uppercase tracking-wide">
                        Why It Matters
                      </p>
                      <ul className="space-y-1">
                        {offering.whyItMatters.map((item: string, index: number) => (
                          <li key={index} className="text-xs text-cipher-muted flex gap-2">
                            <span className="text-cipher-primary mt-0.5 flex-shrink-0">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {offering.capabilities && offering.capabilities.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-cipher-border/50">
                      <p className="text-xs font-semibold text-cipher-primary mb-2 uppercase tracking-wide">
                        Capabilities
                      </p>
                      <ul className="space-y-1">
                        {offering.capabilities.slice(0, 4).map((item: string, index: number) => (
                          <li key={index} className="text-xs text-cipher-muted flex gap-2">
                            <span className="text-cipher-primary mt-0.5 flex-shrink-0">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </FadeInOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
