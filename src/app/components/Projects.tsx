'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import ControlledLottie from './ControlledLottie'
import projectsAnimation from '../../animations/projects.json'

interface Project {
  id: number
  title: string
  description: string
  language: string
  category: string
  demoUrl: string
  githubUrl: string
  image: string
  images?: string[]
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Platform de gestion des examens',
    description: 'Une plateforme de examen électronique complète avec panier, paiement et gestion des examens.',
    language: 'React',
    category: 'Web',
    demoUrl: 'https://www.conseiluxtraining.com',
    githubUrl: 'https://github.com/DONAAGBENU/conseiluxtraining2026',
    image: '/images/conseilux1.png',
    images: ['/images/conseilux1.png', '/images/conseilux2.png', '/images/conseilux3.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'Mobile App Fitness',
    description: 'Application mobile pour le suivi des entraînements et de la nutrition.',
    language: 'Flutter',
    category: 'Mobile',
    demoUrl: 'https://play.google.com/store',
    githubUrl: 'https://github.com/username/fitness-app',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: "Tableau de bord interactif pour l'analyse des données d'entreprise.",
    language: 'Next.js',
    category: 'Web',
    demoUrl: 'https://analytics-dashboard.com',
    githubUrl: 'https://github.com/username/analytics',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'API RESTful',
    description: 'API RESTful pour la gestion des utilisateurs et des ressources.',
    language: 'Node.js',
    category: 'Backend',
    demoUrl: 'https://api-docs.com',
    githubUrl: 'https://github.com/username/api-rest',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
  },
  {
    id: 5,
    title: 'Portfolio Personnel',
    description: 'Site web portfolio responsive avec animations et design moderne.',
    language: 'React',
    category: 'Web',
    demoUrl: 'https://portfolio-demo.com',
    githubUrl: 'https://github.com/username/portfolio',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 6,
    title: 'Site Florence2026',
    description: 'Application de vente de produit bio  avec fonctionnalités avancées.',
    language: 'Next.js',
    category: 'Web',
    demoUrl: 'https://siteflorence2026.netlify.app/',
    githubUrl: 'https://github.com/DONAAGBENU/siteflorence2026' ,
    image: '/images/florence (1).png',
    images: ['/images/florence (1).png', '/images/florence (2).png', '/images/florence (3).png', '/images/florence (4).png'],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Supabase'],
  },
]

const categories = ['Tous', 'Web', 'Mobile', 'Backend']

const langColor: Record<string, string> = {
  React: '#00d4ff',
  Flutter: '#54c5f8',
  'Next.js': '#ffffff',
  'Node.js': '#6fcf3d',
  'React Native': '#4cc9f0',
  TypeScript: '#7c6bff',
  JavaScript: '#f7df1e',
  Python: '#4cc9f0',
  PHP: '#7c6bff',
  Dart: '#54c5f8',
}

/* ── Image Slider Component ── */
function ImageSlider({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="image-slider">
      <div className="slider-container">
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="slider-image"
        />
        {images.length > 1 && (
          <>
            <button
              className="slider-btn slider-btn-prev"
              onClick={prevImage}
              aria-label="Image précédente"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="slider-btn slider-btn-next"
              onClick={nextImage}
              aria-label="Image suivante"
            >
              <ChevronRight size={20} />
            </button>
            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentIndex ? 'slider-dot-active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('Tous')
  const [visible, setVisible] = useState(projects)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    setAnimKey((k) => k + 1)
    setVisible(active === 'Tous' ? projects : projects.filter((p) => p.category === active))
  }, [active])

  return (
    <section id="projets" className="projects-section">

      {/* Section label */}
      <div className="section-label">
        <span className="label-line" />
        <span>Projets</span>
        <span className="label-line" />
      </div>

      {/* Header */}
      <div className="projects-header">
        {/* Lottie Animation */}
        <ControlledLottie animationData={projectsAnimation} className="projects-lottie" label="l'animation Projets" />

        <h2 className="projects-title">
          Ce que j'ai<br />
          <em>construit</em>
        </h2>
        <p className="projects-sub">
          Une sélection de réalisations concrètes — chaque projet raconte une histoire de problème résolu.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`filter-tab ${active === cat ? 'filter-tab-active' : ''}`}
          >
            {active === cat && <span className="tab-pip" />}
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid" key={animKey}>
        {visible.map((p, i) => {
          const lc = langColor[p.language] || '#7c6bff'
          return (
            <article
              key={p.id}
              className="project-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="card-image-wrap">
                {p.images && p.images.length > 0 ? (
                  <>
                    <ImageSlider images={p.images} title={p.title} />
                    <div className="card-image-overlay" />
                  </>
                ) : (
                  <>
                    <img src={p.image} alt={p.title} className="card-image" />
                    <div className="card-image-overlay" />
                  </>
                )}

                {/* Language badge */}
                <span
                  className="card-lang-badge"
                  style={{ color: lc, borderColor: `${lc}40`, background: `${lc}12` }}
                >
                  {p.language}
                </span>

                {/* Category badge */}
                <span className="card-cat-badge">{p.category}</span>
              </div>

              {/* Body */}
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.description}</p>

                {/* Tech stack */}
                <div className="card-techs">
                  {p.technologies.map((t) => (
                    <span key={t} className="card-tech">{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="card-actions">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-demo"
                  >
                    <span className="btn-demo-bg" />
                    <span className="btn-demo-content">
                      <ExternalLink size={15} />
                      Démo
                    </span>
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <Github size={15} />
                    Code
                  </a>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="card-bottom-accent" style={{ background: `linear-gradient(90deg, transparent, ${lc}, transparent)` }} />
            </article>
          )
        })}
      </div>

      <style>{`
        :root {
          --c-accent: #7c6bff;
          --c-accent2: #00d4ff;
          --c-border: rgba(255,255,255,0.06);
          --c-muted: #6b6b80;
          --c-surface: rgba(255,255,255,0.025);
        }

        .projects-section {
          position: relative;
          padding: 8rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Label ── */
        .section-label {
          display: flex; align-items: center; gap: 16px;
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--c-accent);
          margin-bottom: 3.5rem;
          justify-content: center;
        }
        .label-line { flex: 1; max-width: 80px; height: 1px; background: rgba(124,107,255,0.3); }

        /* ── Header ── */
        .projects-header { text-align: center; margin-bottom: 3.5rem; }
        .projects-lottie {
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
        }
        .projects-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800; line-height: 1.1;
          color: #fff; margin: 0 0 1.2rem;
        }
        .projects-title em {
          font-style: normal;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .projects-sub {
          color: rgba(255,255,255,0.4);
          font-size: 1rem; line-height: 1.7;
          max-width: 480px; margin: 0 auto;
        }

        /* ── Filters ── */
        .filter-tabs {
          display: flex; justify-content: center; gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .filter-tab {
          position: relative;
          display: flex; align-items: center; gap: 7px;
          padding: 9px 22px;
          border-radius: 100px;
          border: 1px solid var(--c-border);
          background: var(--c-surface);
          color: var(--c-muted);
          font-family: 'Syne', sans-serif;
          font-size: 0.82rem; font-weight: 600;
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s;
        }
        .filter-tab:hover {
          background: rgba(124,107,255,0.1);
          border-color: rgba(124,107,255,0.3);
          color: #fff;
          transform: translateY(-2px);
        }
        .filter-tab-active {
          background: rgba(124,107,255,0.15);
          border-color: rgba(124,107,255,0.4);
          color: #c4bcff;
        }
        .tab-pip {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--c-accent);
          box-shadow: 0 0 8px var(--c-accent);
          animation: pipPulse 2s ease infinite;
        }
        @keyframes pipPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.4); }
        }

        /* ── Grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .projects-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .project-card {
          position: relative;
          border-radius: 20px;
          border: 1px solid var(--c-border);
          background: var(--c-surface);
          backdrop-filter: blur(20px);
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s;
          animation: cardReveal 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes cardReveal {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,107,255,0.15);
          border-color: rgba(255,255,255,0.1);
        }

        /* Image */
        .card-image-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .card-image {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .project-card:hover .card-image { transform: scale(1.08); }
        .card-image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(5,5,8,0.85) 100%);
        }

        .card-lang-badge {
          position: absolute; top: 14px; right: 14px;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid;
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.05em;
          z-index: 20;
        }
        .card-cat-badge {
          position: absolute; top: 14px; left: 14px;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(5,5,8,0.6);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 0.68rem; color: rgba(255,255,255,0.5);
          backdrop-filter: blur(8px);
          letter-spacing: 0.08em; text-transform: uppercase;
          z-index: 20;
        }

        /* Body */
        .card-body {
          padding: 1.5rem;
          display: flex; flex-direction: column; gap: 0;
          flex: 1;
        }
        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem; font-weight: 700;
          color: #fff; margin: 0 0 0.6rem;
          transition: color 0.3s;
        }
        .project-card:hover .card-title { color: #c4bcff; }
        .card-desc {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          margin: 0 0 1.2rem;
          flex: 1;
        }

        /* Techs */
        .card-techs {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 1.4rem;
        }
        .card-tech {
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid rgba(124,107,255,0.25);
          background: rgba(124,107,255,0.08);
          color: #b8aaff;
          font-size: 0.7rem; font-weight: 500;
        }

        /* Actions */
        .card-actions {
          display: flex; gap: 10px;
        }

        /* Demo button */
        .btn-demo {
          position: relative; overflow: hidden;
          flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 10px 18px;
          border-radius: 10px;
          text-decoration: none; color: #fff;
          font-weight: 600; font-size: 0.82rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .btn-demo:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(124,107,255,0.35); }
        .btn-demo-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
          transition: opacity 0.3s;
        }
        .btn-demo:hover .btn-demo-bg { opacity: 0.85; }
        .btn-demo-content {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 7px;
        }

        /* Ghost button */
        .btn-ghost {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 10px 18px;
          border-radius: 10px;
          border: 1px solid var(--c-border);
          background: rgba(255,255,255,0.04);
          text-decoration: none; color: rgba(255,255,255,0.6);
          font-weight: 600; font-size: 0.82rem;
          backdrop-filter: blur(10px);
          transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.18);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Bottom accent line */
        .card-bottom-accent {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; opacity: 0.4;
          transition: opacity 0.4s;
        }
        .project-card:hover .card-bottom-accent { opacity: 1; }

        /* ── Image Slider Styles ── */
        .image-slider {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(5,5,8,0.7);
          backdrop-filter: blur(8px);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
        }
        .slider-btn:hover {
          background: rgba(124,107,255,0.8);
          border-color: rgba(124,107,255,0.6);
          transform: translateY(-50%) scale(1.1);
        }
        .slider-btn-prev { left: 12px; }
        .slider-btn-next { right: 12px; }
        .slider-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s;
        }
        .slider-dot:hover {
          background: rgba(255,255,255,0.6);
        }
        .slider-dot-active {
          background: #7c6bff;
          border-color: #7c6bff;
          box-shadow: 0 0 8px rgba(124,107,255,0.6);
        }

        @media (max-width: 768px) {
          .projects-section { padding: 4rem 1.25rem; }
          .section-label { gap: 10px; margin-bottom: 2.5rem; letter-spacing: 0.18em; }
          .projects-header, .filter-tabs { margin-bottom: 2.5rem; }
          .filter-tabs { gap: 8px; }
          .filter-tab { padding: 8px 16px; }
        }

        @media (max-width: 480px) {
          .projects-section { padding: 3rem 1rem; }
          .projects-lottie { width: 160px; height: 160px; }
          .project-card { border-radius: 8px; }
          .card-body { padding: 1.2rem; }
          .card-actions { gap: 8px; }
          .btn-demo, .btn-ghost { padding: 10px 12px; font-size: 0.76rem; }
        }
      `}</style>
    </section>
  )
}