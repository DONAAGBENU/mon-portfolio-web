'use client'

import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import heroAnimation from '../animations/hero.json'
import ControlledLottie from './components/ControlledLottie'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
 
 
export default function App() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
 
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section id="accueil" className="hero-section">
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
            Je conçois et développe des applications web utiles, claires et adaptées à vos besoins.
          </p>
 
          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#projets" className="cta-primary">
              <span className="cta-primary-bg" />
              <span className="cta-primary-content">
                <ArrowRight size={16} />
                Voir mes projets
              </span>
            </a>
            <a href="#contact" className="cta-ghost">
              Me contacter
            </a>
            <a
              href="/CV_2026-09-14_DONATIEN%20KOSSI_AGBENU.pdf"
              download="CV-Donatien-Agbenu.pdf"
              className="cta-ghost cta-download"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
          </div>
 
          {/* Socials */}
          <div className="hero-socials">
            <a href="https://github.com/DONAAGBENU" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/dona-agbenu-406a10280" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:donaagbenu2000@gmail.com" className="social-btn" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait de Donatien AGBENU">
          <img src="/images/dona.jpeg" alt="Donatien AGBENU" className="hero-photo" />
          <ControlledLottie animationData={heroAnimation} className="hero-lottie" label="l'animation d'accueil" />
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
      <Projects />
      <Skills />
      <Contact />
 
      {/* ── Styles ── */}
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
          min-height: min(860px, 100svh);
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.95fr);
          align-items: center;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
          padding: 112px 2rem 72px;
        }
        .hero-lottie {
          position: absolute;
          right: -28px;
          bottom: -28px;
          width: 150px;
          height: 150px;
          z-index: 2;
          pointer-events: none;
        }
        .hero-visual {
          position: relative;
          width: min(100%, 440px);
          aspect-ratio: 0.86;
          justify-self: center;
          background: #dce8e1;
          border-radius: 48% 48% 8px 8px;
          overflow: visible;
        }
        .hero-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
          border-radius: inherit;
        }
        .hero-content {
          position: relative; z-index: 3;
          display: flex; flex-direction: column; align-items: flex-start;
          text-align: left;
          padding: 0;
          max-width: 650px;
          width: 100%; min-width: 0;
          container-type: inline-size;
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
          margin-bottom: 1.5rem;
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
          font-weight: 800;
          line-height: 1;
          margin: 0;
          display: flex; flex-direction: column; gap: 0.1em;
          width: 100%; min-width: 0;
        }
        .hero-title-line {
          display: block;
          white-space: nowrap;
          animation: titleSlide 0.9s cubic-bezier(0.16,1,0.3,1) both;
        }
        .line-1 {
          font-size: clamp(2.25rem, 12cqi, 6.5rem);
          color: rgba(255,255,255,0.85);
          letter-spacing: -0.02em;
          animation-delay: 0.15s;
        }
        .line-2 {
          font-size: clamp(2.25rem, 13cqi, 7rem);
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
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--c-muted);
          margin-bottom: 1.1rem;
          animation: heroReveal 0.9s 0.35s cubic-bezier(0.16,1,0.3,1) both;
        }
        .role-bar { flex: 1; max-width: 60px; height: 1px; background: var(--c-border); }
 
        /* Tagline */
        .hero-tagline {
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          max-width: 500px;
          margin-bottom: 2rem;
          animation: heroReveal 0.9s 0.45s cubic-bezier(0.16,1,0.3,1) both;
        }
 
        /* CTAs */
        .hero-ctas {
          display: flex; gap: 1rem; flex-wrap: wrap; justify-content: flex-start;
          margin-bottom: 1.5rem;
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
          transition: opacity 0.3s;
        }
        .cta-primary:hover .cta-primary-bg { opacity: 0.9; }
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
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }
        .cta-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          color: #fff;
        }
        .cta-download { display: inline-flex; align-items: center; gap: 8px; }
 
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
        @media (max-width: 820px) {
          .hero-section { grid-template-columns: minmax(0, 1fr); gap: 2.5rem; padding: 132px 1.5rem 4rem; }
          .hero-content { align-items: center; text-align: center; margin: 0 auto; }
          .hero-ctas { justify-content: center; }
          .hero-visual { width: min(72vw, 340px); grid-row: 1; }
          .hero-lottie { width: 112px; height: 112px; }
          .scroll-indicator { display: none; }
        }

        @media (max-width: 480px) {
          .hero-section { gap: 2rem; padding: 124px 1rem 3rem; }
          .hero-visual { width: min(78vw, 300px); }
          .hero-badge { max-width: 100%; padding: 6px 12px; font-size: 0.7rem; }
          .hero-role { gap: 8px; letter-spacing: 0.12em; font-size: 0.75rem; }
          .hero-tagline { font-size: 0.95rem; line-height: 1.65; }
          .hero-ctas { width: 100%; gap: 0.7rem; }
          .cta-primary, .cta-ghost { padding: 12px 16px; font-size: 0.85rem; }
          .cta-download { flex-basis: 100%; justify-content: center; }
        }
      `}</style>
    </main>
  )
}
 