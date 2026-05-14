'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/context'

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
    const [errorMsg, setErrorMsg] = useState('')
    const { t } = useLanguage()
    const f = t.contact.form

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setStatus('sending')
      setErrorMsg('')

      const form = e.currentTarget
      const data = {
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
        company: (form.elements.namedItem('company') as HTMLInputElement).value,
        service: (form.elements.namedItem('service') as HTMLSelectElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      }

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        const json = await res.json()
        if (!res.ok) {
          setErrorMsg(json.error || 'Failed to send')
          setStatus('error')
          return
        }
        setStatus('sent')
      } catch {
        setErrorMsg('Network error. Check your connection and try again.')
        setStatus('error')
      }
    }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-cipher-subtle uppercase tracking-wide mb-2">
            {f.name}
          </label>
           <input
            type="text"
            name="name"
            required
            placeholder={f.namePlaceholder}
            className="w-full px-4 py-3 rounded-lg bg-cipher-card border border-cipher-border
                       text-cipher-text placeholder:text-cipher-muted text-sm
                       focus:outline-none focus:border-cipher-primary/60 transition-colors duration-150"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-cipher-subtle uppercase tracking-wide mb-2">
            {f.email}
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder={f.emailPlaceholder}
            className="w-full px-4 py-3 rounded-lg bg-cipher-card border border-cipher-border
                       text-cipher-text placeholder:text-cipher-muted text-sm
                       focus:outline-none focus:border-cipher-primary/60 transition-colors duration-150"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-cipher-subtle uppercase tracking-wide mb-2">
          {f.phone}
        </label>
        <input
          type="tel"
          name="phone"
          placeholder={f.phonePlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-cipher-card border border-cipher-border
                     text-cipher-text placeholder:text-cipher-muted text-sm
                     focus:outline-none focus:border-cipher-primary/60 transition-colors duration-150"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-cipher-subtle uppercase tracking-wide mb-2">
          {f.company}
        </label>
        <input
          type="text"
          name="company"
          placeholder={f.companyPlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-cipher-card border border-cipher-border
                     text-cipher-text placeholder:text-cipher-muted text-sm
                     focus:outline-none focus:border-cipher-primary/60 transition-colors duration-150"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-cipher-subtle uppercase tracking-wide mb-2">
          {f.serviceInterest}
        </label>
        <select
          name="service"
          className="w-full px-4 py-3 rounded-lg bg-cipher-card border border-cipher-border
                     text-cipher-text text-sm focus:outline-none focus:border-cipher-primary/60
                     transition-colors duration-150"
        >
          <option value="">{f.serviceSelectDefault}</option>
          {f.services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-cipher-subtle uppercase tracking-wide mb-2">
          {f.message}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={f.messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-cipher-card border border-cipher-border
                     text-cipher-text placeholder:text-cipher-muted text-sm resize-none
                     focus:outline-none focus:border-cipher-primary/60 transition-colors duration-150"
        />
      </div>

      {status === 'sent' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-lg bg-cipher-primary/10 border border-cipher-primary/30 text-cipher-primary text-sm text-center"
        >
          {f.sent}
        </motion.div>
      ) : status === 'error' ? (
        <div>
          <p className="mb-3 text-sm text-red-400 text-center">
            {errorMsg || 'Failed to send. Please try again.'}
          </p>
          <button
            type="submit"
            className="w-full btn-primary justify-center"
          >
            {f.send}
          </button>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? f.sending : f.send}
        </button>
      )}
    </form>
  )
}
