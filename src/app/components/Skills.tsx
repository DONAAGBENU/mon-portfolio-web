'use client'

import { useEffect, useRef, useState } from 'react'

const skills = {
  langages: [
    { name: 'JavaScript', level: 50, color: '#f7df1e' },
    { name: 'PHP', level: 55, color: '#8892be' },
    { name: 'HTML / CSS', level: 95, color: '#00d4ff' },
    { name: 'Python', level: 45, color: '#4cc9f0' },
    { name: 'Dart', level: 40, color: '#54c5f8' },
  ],
  frameworks: [
    { name: 'React', level: 90, color: '#00d4ff' },
    { name: 'Next.js', level: 85, color: '#ffffff' },
    { name: 'React Native', level: 55, color: '#4cc9f0' },
    { name: 'Node.js', level: 75, color: '#6fcf3d' },
    { name: 'Laravel', level: 40, color: '#ff5a5f' },
    { name: 'Flutter', level: 45, color: '#54c5f8' },
  ],
  basesDonnees: [
    { name: 'MySQL', level: 70, color: '#00aff0' },
    { name: 'MongoDB', level: 60, color: '#4db33d' },
    { name: 'PostgreSQL', level: 55, color: '#8892be' },
    { name: 'Firebase', level: 65, color: '#ffca28' },
  ],
  gestionProjet: [
    { name: 'Git', level: 55, color: '#f05032' },
    { name: 'GitHub', level: 70, color: '#e0e0e0' },
    { name: 'Trello', level: 75, color: '#0079bf' },
  ],
  analyseDonnees: [
    { name: 'Excel', level: 40, color: '#1d6f42' },
    { name: 'Power BI', level: 65, color: '#f2c811' },
    { name: 'Tableau', level: 50, color: '#e8762d' },
    { name: 'Google Analytics', level: 70, color: '#ff5722' },
  ],
}

const categories = [
  {
    title: 'Langages',
    key: 'langages' as const,
    icon: '⌨️',
    description: 'Les fondamentaux du développement',
  },
  {
    title: 'Frameworks & Bibliothèques',
    key: 'frameworks' as const,
    icon: '⚡',
    description: 'Mon environnement de prédilection',
  },
  {
    title: 'Bases de données',
    key: 'basesDonnees' as const,
    icon: '🗄️',
    description: 'Gestion et persistance des données',
  },
  {
    title: 'Gestion de projet',
    key: 'gestionProjet' as const,
    icon: '📋',
    description: 'Méthodologies et collaboration',
  },
  {
    title: 'Analyse de données',
    key: 'analyseDonnees' as const,
    icon: '📊',
    description: 'Visualisation et prise de décision',
  },
]

function SkillBar({ 
  name, 
  level, 
  color, 
  visible 
}: { 
  name: string
  level: number
  color: string
  visible: boolean 
}) {
  return (
    <div className="skill-bar-group">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
      </div>
      <div className="skill-track">
        <div 
          className="skill-fill" 
          style={{ 
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}30, ${color})`,
          }}
        />
      </div>
    </div>
  )
}

function SkillCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          setVisible(true)
          obs.disconnect() 
        } 
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const catSkills = skills[cat.key]
  const topSkills = [...catSkills]
    .sort((a, b) => b.level - a.level)
    .slice(0, 2)

  return (
    <div 
      ref={ref}
      className="skill-card"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="skill-card-header">
        <div className="skill-card-icon">{cat.icon}</div>
        <div>
          <h3 className="skill-card-title">{cat.title}</h3>
          <p className="skill-card-desc">{cat.description}</p>
        </div>
      </div>

      <div className="skill-expertise">
        <span className="skill-expertise-label">Maîtrise avancée</span>
        <div className="skill-expertise-tags">
          {topSkills.map((s) => (
            <span 
              key={s.name}
              className="skill-expertise-tag"
              style={{ 
                background: `${s.color}15`,
                borderColor: `${s.color}30`,
                color: s.color 
              }}
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div className="skill-bars">
        {catSkills.map((s) => (
          <SkillBar 
            key={s.name} 
            name={s.name} 
            level={s.level} 
            color={s.color} 
            visible={visible} 
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="competences" className="skills-section">
      <div className="skills-container">
        <div className="skills-intro">
          <div className="skills-tag-wrapper">
            <span className="skills-tag">Expertise</span>
          </div>
          <h2 className="skills-heading">
            Technologies <span>maîtrisées</span>
          </h2>
          <p className="skills-text">
            Un éventail de compétences techniques acquises à travers des projets
            concrets, alliant rigueur et créativité.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <SkillCard key={cat.key} cat={cat} index={i} />
          ))}
        </div>

        <div className="skills-footer">
          <p>En constante évolution · Veille technologique permanente</p>
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 6rem 1.5rem;
          background: #0a0e1a;
          min-height: 100vh;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Intro */
        .skills-intro {
          margin-bottom: 4rem;
          max-width: 700px;
        }

        .skills-tag-wrapper {
          margin-bottom: 1.2rem;
        }

        .skills-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.08);
          padding: 0.3rem 1.2rem;
          border-radius: 100px;
          border: 1px solid rgba(0, 212, 255, 0.12);
        }

        .skills-heading {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.8rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .skills-heading span {
          background: linear-gradient(135deg, #00d4ff, #4cc9f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skills-text {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.45);
          max-width: 520px;
          line-height: 1.8;
        }

        /* Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        /* Card */
        .skill-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 1.8rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .skill-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .skill-card-icon {
          font-size: 1.6rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          flex-shrink: 0;
        }

        .skill-card-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.1rem;
          letter-spacing: -0.01em;
        }

        .skill-card-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.3);
          margin: 0;
          font-weight: 400;
        }

        /* Expertise */
        .skill-expertise {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 0.8rem 1rem;
          margin-bottom: 1.4rem;
        }

        .skill-expertise-label {
          display: block;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.2);
          margin-bottom: 0.5rem;
        }

        .skill-expertise-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .skill-expertise-tag {
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.2rem 0.8rem;
          border-radius: 6px;
          border: 1px solid;
          transition: all 0.3s ease;
        }

        .skill-expertise-tag:hover {
          transform: scale(1.05);
        }

        /* Bars */
        .skill-bars {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-bar-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .skill-bar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
        }

        .skill-track {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.7;
        }

        .skill-card:hover .skill-fill {
          opacity: 1;
        }

        /* Footer */
        .skills-footer {
          margin-top: 4rem;
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.15);
          letter-spacing: 0.05em;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: 2rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .skills-section {
            padding: 4rem 1rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            padding: 1.5rem;
          }

          .skills-intro {
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 480px) {
          .skills-heading {
            font-size: 1.8rem;
          }

          .skills-text {
            font-size: 0.9rem;
          }

          .skill-expertise-tag {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  )
}