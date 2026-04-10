'use client'

import { ReactNode } from 'react'

export function DirectionWrapper({ children, dir = 'ltr' }: { children: ReactNode; dir?: 'ltr' | 'rtl' }) {
  return <div dir={dir}>{children}</div>
}
