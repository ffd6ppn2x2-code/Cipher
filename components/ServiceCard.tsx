'use client'

import Link from 'next/link'
import { ServiceCategory } from '@/lib/services/types'
import { ServiceIcon } from './ui/ServiceIcon'

export function ServiceCard({ category, index = 0 }: { category: ServiceCategory; index?: number }) {
  return (
    <Link
      href={`/services#${category.slug}`}
      className="group block card hover:scale-[1.02] active:scale-[0.99] h-full"
      style={{ transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease' }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                     bg-cipher-primary/10 group-hover:bg-cipher-primary/20 transition-colors duration-200"
        >
          <ServiceIcon name={category.icon} size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-cipher-text group-hover:text-cipher-primary transition-colors duration-150 mb-1">
            {category.shortTitle}
          </h3>
          <p className="text-sm text-cipher-muted leading-relaxed">{category.tagline}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-cipher-border/50">
        <p className="text-xs text-cipher-muted">
          {category.offerings.length} service{category.offerings.length !== 1 ? 's' : ''}
        </p>
      </div>
    </Link>
  )
}
