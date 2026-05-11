'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  opacity: number
  baseSpeed: number
}

const COUNT = 120
const CONNECT_DIST = 150
const MOUSE_RADIUS = 250
const MOUSE_FORCE = 0.10
const REPEL_FORCE = 2.5
const REPEL_DURATION = 20

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const repelRef = useRef(0)
  const rafRef = useRef(0)
  const dimsRef = useRef({ w: 0, h: 0 })

  const initParticles = useCallback((w: number, h: number) => {
    const arr: Particle[] = []
    for (let i = 0; i < COUNT; i++) {
      const bs = 0.2 + Math.random() * 0.8
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.50 * bs,
        vy: (Math.random() - 0.5) * 0.50 * bs,
        r: 1 + Math.random() * 2,
        opacity: 0.15 + Math.random() * 0.45,
        baseSpeed: bs,
      })
    }
    particlesRef.current = arr
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dimsRef.current = { w, h }
      if (particlesRef.current.length === 0) {
        initParticles(w, h)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('touchmove', handleTouch, { passive: true })

    const handleClick = () => {
      repelRef.current = REPEL_DURATION
    }
    window.addEventListener('mousedown', handleClick)

    const loop = () => {
      const { w, h } = dimsRef.current
      const particles = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse interaction — repulsion on click, attraction otherwise
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const proximity = dist < MOUSE_RADIUS && dist > 1
          ? (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          : 0

        const repel = repelRef.current
        if (repel > 0 && proximity > 0 && dist > 0) {
          // Strong repulsion away from cursor
          const force = proximity * REPEL_FORCE * (repel / REPEL_DURATION)
          p.vx -= (dx / dist) * force
          p.vy -= (dy / dist) * force
          p.vx *= 0.96
          p.vy *= 0.96
        } else if (proximity > 0) {
          // Pull toward cursor — stronger pull when closer
          const force = proximity * MOUSE_FORCE
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Heavy dampening near cursor so particles cluster, not fly through
        const damp = proximity > 0 && repel === 0
          ? 0.93 - proximity * 0.13
          : 0.996
        p.vx *= damp
        p.vy *= damp

        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const cdx = p.x - q.x
          const cdy = p.y - q.y
          const cdist = cdx * cdx + cdy * cdy
          if (cdist < CONNECT_DIST * CONNECT_DIST) {
            const alpha = (1 - Math.sqrt(cdist) / CONNECT_DIST) * 0.08
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0,212,255,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${p.opacity})`
        ctx.fill()
      }

      // Decay repulsion
      if (repelRef.current > 0) repelRef.current--

      rafRef.current = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('touchmove', handleTouch)
      window.removeEventListener('mousedown', handleClick)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
