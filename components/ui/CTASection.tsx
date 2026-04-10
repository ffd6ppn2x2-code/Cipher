'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTASectionProps {
  headline?: string
  subtext?: string
  ctaLabel?: string
  ctaHref?: string
  label?: string
}

export function CTASection({
  headline = 'Ready to strengthen your security posture?',
  subtext = 'Our team of experts is ready to help you assess risks, build resilience, and protect what matters most.',
  ctaLabel = 'Get in Touch',
  ctaHref = '/contact',
  label = 'Take Action',
}: CTASectionProps) {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative p-10 rounded-2xl bg-cipher-card border border-cipher-border overflow-hidden"
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,212,255,0.08) 0%, transparent 70%)',
            }}
          />
          <p className="section-label relative">{label}</p>
          <h2 className="relative text-3xl font-bold text-cipher-text mb-4">{headline}</h2>
          <p className="relative text-cipher-subtle mb-8 max-w-xl mx-auto leading-relaxed">{subtext}</p>
          <Link href={ctaHref} className="btn-primary relative">
            {ctaLabel}
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
