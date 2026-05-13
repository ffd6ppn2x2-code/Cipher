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
      <path d="M17.5 18H6.5C3.46 18 1 15.54 1 12.5C1 9.73 3.04 7.43 5.69 7.07C6.5 4.64 8.87 3 11.67 3C14.99 3 17.73 5.6 17.97 8.86C20.68 9.49 22.6 11.95 22.6 14.85C22.6 18.26 19.86 21 16.46 21H6.5" />
    </svg>
  )
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="#00d4ff" fill="none" strokeWidth="1.5" />
      <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#00d4ff">?</text>
    </svg>
  )
}
