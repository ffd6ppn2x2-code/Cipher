'use client'

import { serviceCategories } from '@/lib/services'
import { SmoothScrollLink } from './ui/SmoothScrollLink'

export function OfferingsList() {
  return (
    <nav className="sticky top-20 hidden lg:block">
      <p className="text-xs font-semibold text-cipher-primary uppercase tracking-widest mb-3">
        Jump To
      </p>
      <ul className="space-y-1">
        {serviceCategories.map((cat) => (
          <li key={cat.slug}>
            <SmoothScrollLink
              href={`#${cat.slug}`}
              className="text-sm text-cipher-muted hover:text-cipher-primary transition-colors duration-150 block py-1"
            >
              {cat.shortTitle}
            </SmoothScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
