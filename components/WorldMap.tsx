'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { geoEquirectangular, geoPath, GeoProjection } from 'd3-geo'
import { feature } from 'topojson-client'
import type { Topology } from 'topojson-specification'
import { useLanguage } from '@/lib/i18n/context'

interface Office {
  name: string
  lat: number
  lng: number
}

const W = 1200
const H = 500

const DATA_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'

function OfficeMarker({
  x,
  y,
  label,
  index,
}: {
  x: number
  y: number
  label: string
  index: number
}) {
  return (
    <g>
      <motion.circle
        cx={x}
        cy={y}
        r={5}
        fill="#ef4444"
        initial={{ opacity: 0.6, r: 2 }}
        animate={{ opacity: [0.6, 1, 0.6], r: [3, 6, 3] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.4, ease: 'easeInOut' }}
      />
      <motion.circle
        cx={x}
        cy={y}
        r={10}
        fill="none"
        stroke="#ef4444"
        strokeWidth={1.5}
        initial={{ opacity: 0, r: 4 }}
        animate={{ opacity: [0, 0.5, 0], r: [4, 18, 4] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.4, ease: 'easeInOut' }}
      />
      <text
        x={x}
        y={y + 22}
        textAnchor="middle"
        className="fill-cipher-subtle"
        fontSize={11}
        fontFamily="Inter, sans-serif"
      >
        {label}
      </text>
    </g>
  )
}

export function WorldMap() {
  const { t } = useLanguage()
  const [paths, setPaths] = useState<string[]>([])
  const [loaded, setLoaded] = useState(false)
  const projectionRef = useRef<GeoProjection | null>(null)

  const offices: Office[] = [
    { name: t.contact.ottawa, lat: 45.4, lng: -75.7 },
    { name: t.contact.tripoli, lat: 32.9, lng: 13.2 },
  ]

  useEffect(() => {
    let cancelled = false
    fetch(DATA_URL)
      .then((r) => r.json())
      .then((topology: Topology) => {
        if (cancelled) return
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const geojson: any = feature(topology, topology.objects.land as any)
        const proj = geoEquirectangular().fitSize([W, H], geojson)
        projectionRef.current = proj
        const generator = geoPath(proj)
        const generated = geojson.features.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (f: any) => generator(f) ?? ''
        )
        setPaths(generated)
        setLoaded(true)
      })
      .catch(() => {
        if (!cancelled) setLoaded(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const gridLines = []
  for (let i = 0; i <= 20; i++) {
    const y = (i / 20) * H
    gridLines.push(
      <line
        key={`h${i}`}
        x1={0}
        y1={y}
        x2={W}
        y2={y}
        stroke="#1e3a5f"
        strokeWidth={0.5}
        strokeOpacity={0.25}
      />
    )
  }
  for (let i = 0; i <= 30; i++) {
    const x = (i / 30) * W
    gridLines.push(
      <line
        key={`v${i}`}
        x1={x}
        y1={0}
        x2={x}
        y2={H}
        stroke="#1e3a5f"
        strokeWidth={0.5}
        strokeOpacity={0.25}
      />
    )
  }

  return (
    <div className="w-full rounded-xl bg-cipher-card border border-cipher-border overflow-hidden">
      <div className="px-5 py-3 border-b border-cipher-border">
        <p className="text-xs font-semibold text-cipher-subtle uppercase tracking-wide">
          {t.contact.offices}
        </p>
      </div>
      <div className="p-4 sm:p-6">
        <motion.svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <rect width={W} height={H} fill="#0d1b2e" />

          {gridLines}

          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="#111f33"
              stroke="#1e3a5f"
              strokeWidth={0.75}
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.005 }}
            />
          ))}

          {Array.from({ length: 30 }).map((_, i) => {
            const ox = 60 + (i * 43) % (W - 120)
            const oy = 20 + (i * 53) % (H - 40)
            return (
              <motion.circle
                key={`od${i}`}
                cx={ox}
                cy={oy}
                r={1}
                fill="#00d4ff"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.25, 0] }}
                transition={{
                  duration: 2.5 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: 'easeInOut',
                }}
              />
            )
          })}

          {offices.map((office, i) => {
            const proj = projectionRef.current
            if (!proj) return null
            const pt = proj([office.lng, office.lat])
            if (!pt) return null
            return (
              <OfficeMarker
                key={office.name}
                x={pt[0]}
                y={pt[1]}
                label={office.name}
                index={i}
              />
            )
          })}

          <line
            x1={0}
            y1={H / 2}
            x2={W}
            y2={H / 2}
            stroke="#00d4ff"
            strokeWidth={0.5}
            strokeOpacity={0.10}
          />
        </motion.svg>
      </div>
    </div>
  )
}
