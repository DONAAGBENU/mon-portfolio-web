'use client'

import { ArrowRight } from 'lucide-react'
import ControlledLottie from './ControlledLottie'
import aboutAnimation from '../../animations/about.json'

export default function About() {
  return (
    <section id="apropos" className="about-section">
 
      {/* Section label */}
      <div className="section-label">
        <span className="label-line" />
        <span>À propos</span>
        <span className="label-line" />
      </div>
 
      <div className="about-grid">
 
        {/* ── Left: Identity card ── */}
        <div className="identity-card">
          <div className="identity-avatar-wrap">
            <div className="avatar-ring" />
            <div className="avatar-core">
              <img
                src="/images/dona.jpeg"
                alt="Donatien AGBENU"
                className="avatar-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <span className="avatar-initials hidden">DA</span>
            </div>
            <div className="avatar-orbit">
              <span className="orbit-dot" />
            </div>
          </div>
 
          <h2 className="identity-name">Donatien AGBENU</h2>
          <p className="identity-title">Développeur Full Stack</p>
 
          <ul className="identity-meta">
            {[
              { icon: '📍', text: 'Lomé, Togo' },
              { icon: '🎓', text: 'Licence Informatique' },
              { icon: '💼', text: 'Open to work' },
            ].map((item) => (
              <li key={item.text} className="meta-item">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
 
          <div className="identity-divider" />
 
        </div>
 
        {/* ── Right: Text content ── */}
        <div className="about-text">
          {/* Lottie Animation */}
          <ControlledLottie animationData={aboutAnimation} className="about-lottie" label="l'animation À propos" />

          <h3 className="about-heading">
            Construire le web<br />
            <em>de demain</em>
          </h3>
 
          <p className="about-body">
            Je suis développeur full stack à Lomé. Je réalise des applications web et mobiles,
            de la conception de l'interface jusqu'à leur mise en ligne.
          </p>
          <p className="about-body">
            Je travaille avec React, Next.js, Node.js et des bases de données. J'aime comprendre
            le besoin, choisir une solution adaptée et livrer un résultat simple à utiliser.
          </p>
 
          {/* Highlights */}
          <div className="highlights-grid">
            {[
              { icon: '⚡', title: 'Performance', desc: 'Des pages rapides et un code facile à maintenir' },
              { icon: '🎨', title: 'Interface', desc: 'Des parcours pensés pour les besoins du projet' },
              { icon: '🔒', title: 'Fiabilité', desc: 'Une attention portée à la qualité et aux bonnes pratiques' },
              { icon: '🤝', title: 'Échange', desc: 'Un suivi clair à chaque étape du projet' },
            ].map((h) => (
              <div key={h.title} className="highlight-card">
                <span className="highlight-icon">{h.icon}</span>
                <div>
                  <p className="highlight-title">{h.title}</p>
                  <p className="highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
 
          <a href="#contact" className="about-cta">
            Travaillons ensemble
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
 
      <style>{`
        .about-section {
          position: relative;
          padding: 8rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
 
        /* Section label */
        .section-label {
          display: flex; align-items: center; gap: 16px;
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: #7c6bff;
          margin-bottom: 4rem;
          justify-content: center;
        }
        .label-line { flex: 1; max-width: 80px; height: 1px; background: rgba(124,107,255,0.3); }
 
        /* Grid */
        .about-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }
 
        /* Identity card */
        .identity-card {
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(20px);
          display: flex; flex-direction: column; align-items: center;
          position: sticky; top: 100px;
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .identity-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(124,107,255,0.1);
        }
 
        /* Avatar */
        .identity-avatar-wrap {
          position: relative;
          width: 110px; height: 110px;
          margin-bottom: 1.5rem;
        }
        .avatar-ring {
          position: absolute; inset: -4px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #7c6bff, #00d4ff, #ff5080, #7c6bff);
          animation: ringRotate 4s linear infinite;
          mask: radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px));
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px));
        }
        @keyframes ringRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .avatar-core {
          position: absolute; inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .avatar-initials {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem; font-weight: 800;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hidden { display: none; }
        .avatar-orbit {
          position: absolute; inset: -12px;
          border-radius: 50%;
          animation: orbitSpin 6s linear infinite;
        }
        .orbit-dot {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 8px; height: 8px; border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 10px #00d4ff;
        }
        @keyframes orbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
 
        .identity-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem; font-weight: 700;
          color: #fff; margin: 0 0 4px;
        }
        .identity-title {
          font-size: 0.8rem; color: #7c6bff;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin: 0 0 1.5rem;
        }
 
        .identity-meta { list-style: none; padding: 0; margin: 0; width: 100%; }
        .meta-item {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 0; font-size: 0.85rem; color: rgba(255,255,255,0.55);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .meta-item:last-child { border-bottom: none; }
 
        .identity-divider { width: 100%; height: 1px; background: rgba(255,255,255,0.06); margin: 1.5rem 0; }
 
        .mini-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; width: 100%; }
        .mini-stat { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .mini-stat-val {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.3rem;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .mini-stat-label { font-size: 0.7rem; color: rgba(255,255,255,0.4); }
 
        /* Text content */
        .about-lottie {
          width: 100%;
          max-width: 400px;
          height: 300px;
          margin: 0 auto 2rem;
        }
        .about-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; line-height: 1.1;
          color: #fff; margin: 0 0 2rem;
        }
        .about-heading em {
          font-style: normal;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
 
        .about-body {
          color: rgba(255,255,255,0.5);
          line-height: 1.8; font-size: 1rem;
          margin: 0 0 1.2rem;
        }
        .about-body strong { color: rgba(255,255,255,0.8); font-weight: 500; }
 
        .highlights-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
          margin: 2rem 0 2.5rem;
        }
        @media (max-width: 600px) { .highlights-grid { grid-template-columns: 1fr; } }
 
        .highlight-card {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.02);
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .highlight-card:hover {
          background: rgba(124,107,255,0.07);
          border-color: rgba(124,107,255,0.2);
          transform: translateY(-4px);
        }
        .highlight-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
        .highlight-title { font-weight: 600; font-size: 0.9rem; color: #fff; margin: 0 0 4px; }
        .highlight-desc { font-size: 0.78rem; color: rgba(255,255,255,0.4); margin: 0; line-height: 1.5; }
 
        .about-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(124,107,255,0.2), rgba(0,212,255,0.1));
          border: 1px solid rgba(124,107,255,0.3);
          color: #b8aaff; text-decoration: none;
          font-weight: 600; font-size: 0.9rem;
          transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s;
        }
        .about-cta:hover {
          background: linear-gradient(135deg, rgba(124,107,255,0.35), rgba(0,212,255,0.2));
          border-color: rgba(124,107,255,0.5);
          color: #fff;
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .about-section { padding: 4rem 1.25rem; }
          .section-label { gap: 10px; margin-bottom: 2.5rem; letter-spacing: 0.18em; }
          .about-grid { gap: 2rem; }
          .identity-card { position: static; padding: 1.75rem; }
          .about-lottie { height: 220px; }
        }

        @media (max-width: 480px) {
          .about-section { padding: 3rem 1rem; }
          .identity-card { padding: 1.4rem; }
          .mini-stats { gap: 6px; }
          .mini-stat-label { font-size: 0.62rem; }
          .about-lottie { height: 180px; }
          .highlight-card { padding: 15px; }
        }
      `}</style>
    </section>
  )
}
 