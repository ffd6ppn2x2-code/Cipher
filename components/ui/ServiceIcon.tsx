export function ServiceIcon({ name, size = 20 }: { name: string; size?: number }) {
  const props = { width: size, height: size, stroke: '#00d4ff', fill: 'none', strokeWidth: 1.5 }
  if (name === 'shield') return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M12 2L20 6V12C20 16.4 16.5 20.5 12 22C7.5 20.5 4 16.4 4 12V6L12 2Z" strokeLinejoin="round"/>
    </svg>
  )
  if (name === 'target') return (
    <svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="#00d4ff"/>
    </svg>
  )
  if (name === 'search') return (
    <svg {...props} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7"/><path d="M16 16L21 21" strokeLinecap="round"/>
    </svg>
  )
  if (name === 'monitor') return (
    <svg {...props} viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8" strokeLinecap="round"/><path d="M12 17v4" strokeLinecap="round"/>
    </svg>
  )
  if (name === 'cloud') return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M18 10C18 7.24 15.76 5 13 5C10.79 5 8.93 6.43 8.24 8.41C6.4 8.77 5 10.41 5 12.38C5 14.38 6.62 16 8.62 16H18C19.66 16 21 14.66 21 13C21 11.34 19.66 10 18 10Z"/>
    </svg>
  )
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="#00d4ff" fill="none" strokeWidth="1.5" />
      <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#00d4ff">?</text>
    </svg>
  )
}
