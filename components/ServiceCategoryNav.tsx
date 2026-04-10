'use client'

import { serviceCategories } from '@/lib/services'
import { SmoothScrollLink } from './ui/SmoothScrollLink'

export function ServiceCategoryNav() {
  return (
    <nav className="flex flex-wrap gap-2 justify-center">
      {serviceCategories.map((cat) => (
        <SmoothScrollLink
          key={cat.slug}
          href={`#${cat.slug}`}
          className="px-4 py-2 rounded-full text-sm border border-cipher-border text-cipher-subtle
                     hover:border-cipher-primary hover:text-cipher-primary transition-all duration-150"
        >
          {cat.shortTitle}
        </SmoothScrollLink>
      ))}
    </nav>
  )
}
