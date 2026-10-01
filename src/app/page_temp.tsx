'use client'

import { useEffect, useRef } from 'react'
import About from './components/About'
import Skills from './components/Skills'

function useStarfield(canvasRef: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.6 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,200,255,${s.opacity})`
        ctx.fill()
        s.y += s.speed
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width }
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [canvasRef])
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useStarfield(canvasRef as React.RefObject<HTMLCanvasElement>)

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero-section">

        {/* Canvas starfield */}
        <canvas ref={canvasRef as any} className="hero-canvas" />

        {/* Radial glow */}
        <div className="hero-glow" />

        {/* Grid */}
        <div className="hero-grid" />

        {/* Content */}
        <div className="hero-content">

          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Disponible pour nouveaux projets</span>
          </div>

          {/* Name */}
          <div className="hero-title-wrap">
            <h1 className="hero-title">
              <span className="hero-title-line line-1">donatien</span>
              <span className="hero-title-line line-2 gradient-text">AGBENU</span>
            </h1>
          </div>

          {/* Role */}
          <p className="hero-role">
            <span className="role-bar" />
            Développeur Full Stack
            <span className="role-bar" />
          </p>

          {/* Tagline */}
          <p className="hero-tagline">
            Développeur passionné par la création de solutions innovantes<br />
            <span className="tagline-accent">et d'expériences digitales exceptionnelles</span>
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#accueil" className="cta-primary">
              <span className="cta-primary-bg" />
              <span className="cta-primary-content">
                {/* Rocket icon */}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
                Voir mes projets
              </span>
            </a>
            <a href="#contact" className="cta-ghost">
              Me contacter
            </a>
          </div>

          {/* Socials */}
          <div className="hero-socials">
            {[
              { label: 'GitHub', d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
              { label: 'LinkedIn', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              { label: 'Email', d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6' },
            ].map((s) => (
              <a key={s.label} href="#" className="social-btn" aria-label={s.label}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="stat-card stat-card-1">
          <span className="stat-num">3+</span>
          <span className="stat-label">Années d'XP</span>
        </div>
        <div className="stat-card stat-card-2">
          <span className="stat-num">20+</span>
          <span className="stat-label">Projets livrés</span>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Défiler</span>
        </div>
      </section>

      {/* ── Sections ── */}
      <About />
      <Skills />

      <style>{`
        :root {
          --c-accent: #7c6bff;
          --c-accent2: #00d4ff;
          --c-border: rgba(255,255,255,0.07);
          --c-muted: #6b6b80;
          --c-surface: rgba(255,255,255,0.03);
        }

        /* ── Hero ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 72px;
        }
        .hero-canvas {
          position: absolute; inset: 0; z-index: 0;
          pointer-events: none;
        }
        .hero-glow {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(ellipse 80% 60% at 50% 30%, rgba(124,107,255,0.18) 0%, transparent 70%);
        }
        .hero-grid {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 100%);
        }

        .hero-content {
          position: relative; z-index: 10;
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 900px;
          animation: heroReveal 1.2s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Badge */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          border: 1px solid rgba(124,107,255,0.3);
          background: rgba(124,107,255,0.08);
          font-size: 0.78rem; color: #b8aaff;
          margin-bottom: 2.5rem;
          animation: heroReveal 1s 0.1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #7c6bff;
          box-shadow: 0 0 8px #7c6bff;
          animation: pulseDot 2s ease infinite;
        }
        @keyframes pulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(1.4); }
        }

        /* Title */
        .hero-title-wrap { overflow: hidden; margin-bottom: 1rem; }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800; line-height: 1;
          margin: 0;
          display: flex; flex-direction: column; gap: 0.1em;
        }
        .hero-title-line {
          display: block;
          animation: titleSlide 0.9s cubic-bezier(0.16,1,0.3,1) both;
        }
        .line-1 {
          font-size: clamp(3.5rem, 9vw, 7rem);
          color: rgba(255,255,255,0.85);
          letter-spacing: -0.02em;
          animation-delay: 0.15s;
        }
        .line-2 {
          font-size: clamp(4rem, 11vw, 9rem);
          letter-spacing: -0.03em;
          animation-delay: 0.25s;
        }
        @keyframes titleSlide {
          from { opacity:0; transform: translateY(60px) skewY(3deg); }
          to   { opacity:1; transform: translateY(0) skewY(0deg); }
        }
        .gradient-text {
          background: linear-gradient(135deg, #7c6bff 0%, #00d4ff 50%, #7c6bff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: gradientShift 4s linear infinite, titleSlide 0.9s 0.25s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes gradientShift {
          from { background-position: 0% center; }
          to   { background-position: 200% center; }
        }

        /* Role */
        .hero-role {
          display: flex; align-items: center; gap: 14px;
          font-family: 'Syne', sans-serif;
          font-size: clamp(0.85rem, 2vw, 1rem);
          letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--c-muted);
          margin-bottom: 1.5rem;
          animation: heroReveal 0.9s 0.35s cubic-bezier(0.16,1,0.3,1) both;
        }
        .role-bar { flex: 1; max-width: 60px; height: 1px; background: var(--c-border); }

        /* Tagline */
        .hero-tagline {
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          max-width: 560px;
          margin-bottom: 3rem;
          animation: heroReveal 0.9s 0.45s cubic-bezier(0.16,1,0.3,1) both;
        }
        .tagline-accent { color: var(--c-accent2); }

        /* CTAs */
        .hero-ctas {
          display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
          margin-bottom: 2.5rem;
          animation: heroReveal 0.9s 0.55s cubic-bezier(0.16,1,0.3,1) both;
        }
        .cta-primary {
          position: relative; overflow: hidden;
          padding: 14px 32px;
          border-radius: 12px;
          text-decoration: none; color: #fff;
          font-weight: 600; font-size: 0.95rem;
          letter-spacing: 0.02em;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .cta-primary:hover { transform: translateY(-3px); box-shadow: 0 20px 60px rgba(124,107,255,0.4); }
        .cta-primary-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
        }
        .cta-primary-content {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 8px;
        }
        .cta-ghost {
          padding: 13px 32px;
          border-radius: 12px;
          border: 1px solid var(--c-border);
          background: rgba(255,255,255,0.04);
          text-decoration: none; color: rgba(255,255,255,0.7);
          font-weight: 500; font-size: 0.95rem;
          backdrop-filter: blur(10px);
          transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s;
        }
        .cta-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          color: #fff;
          transform: translateY(-3px);
        }

        /* Socials */
        .hero-socials {
          display: flex; gap: 12px;
          animation: heroReveal 0.9s 0.65s cubic-bezier(0.16,1,0.3,1) both;
        }
        .social-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid var(--c-border);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: center;
          color: var(--c-muted); text-decoration: none;
          transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s;
        }
        .social-btn:hover {
          background: rgba(124,107,255,0.15);
          border-color: rgba(124,107,255,0.4);
          color: #b8aaff;
          transform: translateY(-3px);
        }

        /* Stat cards */
        .stat-card {
          position: absolute; z-index: 10;
          padding: 16px 22px;
          border-radius: 16px;
          border: 1px solid var(--c-border);
          background: rgba(13,13,20,0.8);
          backdrop-filter: blur(20px);
          display: flex; flex-direction: column; gap: 2px;
          animation: floatCard 6s ease-in-out infinite alternate;
        }
        .stat-card-1 { left: 5%; top: 30%; animation-delay: 0s; }
        .stat-card-2 { right: 5%; top: 45%; animation-delay: -3s; }
        @media (max-width: 768px) { .stat-card { display: none; } }
        @keyframes floatCard {
          from { transform: translateY(0); }
          to   { transform: translateY(-12px); }
        }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem; font-weight: 800;
          background: linear-gradient(90deg, var(--c-accent), var(--c-accent2));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .stat-label { font-size: 0.75rem; color: var(--c-muted); }

        /* Scroll */
        .scroll-indicator {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          color: var(--c-muted); font-size: 0.7rem; letter-spacing: 0.15em;
          text-transform: uppercase;
          animation: scrollFade 2s 1.5s ease both;
        }
        @keyframes scrollFade { from { opacity:0; } to { opacity:1; } }
        .scroll-mouse {
          width: 22px; height: 36px;
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          display: flex; justify-content: center; padding-top: 6px;
        }
        .scroll-wheel {
          width: 3px; height: 7px;
          background: rgba(255,255,255,0.4);
          border-radius: 4px;
          animation: scrollWheel 1.8s ease infinite;
        }
        @keyframes scrollWheel {
          0%   { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
      `}</style>
    </main>
  )
}