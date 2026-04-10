'use client'

export function WorldMap() {
  return (
    <div className="relative w-full h-48 rounded-xl bg-cipher-card border border-cipher-border
                    flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #1e3a5f 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <p className="text-cipher-muted text-sm relative">Global Operations</p>
    </div>
  )
}
