'use client'

import Link from 'next/link'
import { serviceCategories } from '@/lib/services'
import { useLanguage } from '@/lib/i18n/context'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-cipher-surface border-t border-cipher-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-cipher-primary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="#08111f" strokeWidth="1.5" fill="none"/>
                  <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="#08111f"/>
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight text-cipher-text">Cipher</span>
            </Link>
            <p className="text-sm text-cipher-muted leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-cipher-primary tracking-widest uppercase mb-4">
              {t.footer.servicesLabel}
            </h3>
            <ul className="space-y-2">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services#${cat.slug}`}
                    className="text-sm text-cipher-muted hover:text-cipher-primary transition-colors duration-150"
                  >
                    {cat.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-cipher-primary tracking-widest uppercase mb-4">
              {t.footer.companyLabel}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-cipher-muted hover:text-cipher-primary transition-colors duration-150">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-cipher-muted hover:text-cipher-primary transition-colors duration-150">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-xs font-semibold text-cipher-primary tracking-widest uppercase mb-4">
              {t.footer.getStarted}
            </h3>
            <p className="text-sm text-cipher-muted mb-4 leading-relaxed">{t.footer.getStartedDesc}</p>
            <Link
              href="/contact"
              className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold
                         bg-cipher-primary/10 border border-cipher-primary/30 text-cipher-primary
                         hover:bg-cipher-primary hover:text-cipher-bg transition-all duration-200"
            >
              {t.footer.contactUs}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glow-line mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cipher-muted">
            &copy; {new Date().getFullYear()} Cipher. {t.footer.copyright}
          </p>
          <p className="text-xs text-cipher-muted">{t.footer.taglineBottom}</p>
        </div>
      </div>
    </footer>
  )
}
