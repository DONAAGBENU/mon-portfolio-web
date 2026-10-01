'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Github, Linkedin, ArrowRight } from 'lucide-react'
import ControlledLottie from './ControlledLottie'
import contactAnimation from '../../animations/contact.json'

const infos = [
  {
    icon: <Phone size={20} />,
    label: 'Téléphone',
    value: '+228 93 95 48 18',
    href: 'tel:+22893954818',
    accent: '#7c6bff',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'donaagbenu2000@gmail.com',
    href: 'mailto:donaagbenu2000@gmail.com',
    accent: '#00d4ff',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Localisation',
    value: 'Lomé, Togo',
    href: 'https://maps.google.com/?q=Lomé,Togo',
    accent: '#ff5080',
  },
]

const socials = [
  { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/DONAAGBENU' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dona-agbenu-406a10280' },
  { icon: <Mail size={18} />, label: 'Email', href: 'mailto:donaagbenu2000@gmail.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Veuillez remplir tous les champs requis')
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi du message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section">

      {/* ── Section label ── */}
      <div className="section-label">
        <span className="label-line" />
        <span>Contact</span>
        <span className="label-line" />
      </div>

      {/* ── Header ── */}
      <div className="contact-header">
        {/* Lottie Animation */}
        <ControlledLottie animationData={contactAnimation} className="contact-lottie" label="l'animation Contact" />

        <h2 className="contact-title">
          Travaillons<br />
          <em>ensemble</em>
        </h2>
        <p className="contact-sub">
          Un projet en tête ? Une idée à concrétiser ? N'hésitez pas —
          je réponds sous 24h.
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="contact-grid">

        {/* ── Left: Info panel ── */}
        <div className="info-panel">

          {/* Info cards */}
          <div className="info-cards">
            {infos.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === 'Localisation' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="info-card"
              >
                <div
                  className="info-icon"
                  style={{
                    color: info.accent,
                    borderColor: `${info.accent}30`,
                    background: `${info.accent}10`,
                  }}
                >
                  {info.icon}
                </div>
                <div className="info-text">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
                <div className="info-arrow">
                  <ArrowRight size={14} />
                </div>
                <div className="info-card-glow" style={{ background: info.accent }} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="info-divider" />

          {/* Availability badge */}
          <div className="availability">
            <span className="avail-dot" />
            <div>
              <p className="avail-title">Disponible maintenant</p>
              <p className="avail-sub">Freelance & CDI · Réponse sous 24h</p>
            </div>
          </div>

          {/* Socials */}
          <div className="social-row">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>

          {/* Decorative map placeholder */}
          <div className="map-placeholder">
            <div className="map-inner">
              <div className="map-pin-wrap">
                <div className="map-pin">
                  <MapPin size={20} />
                </div>
                <div className="map-pulse" />
              </div>
              <p className="map-city">Lomé, Togo</p>
              <p className="map-coords">6.1375° N, 1.2123° E</p>
            </div>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="form-panel">
          {sent ? (
            <div className="success-state">
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="success-title">Message envoyé !</h3>
              <p className="success-sub">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
              <button className="success-reset" onClick={() => { setSent(false); setForm({ name:'', email:'', subject:'', message:'' }) }}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <div className="form-fields">
              <h3 className="form-title">Envoyer un message</h3>

              {error && (
                <div className="form-error">
                  <span className="error-icon">⚠</span>
                  <span>{error}</span>
                </div>
              )}

              {/* Row: name + email */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nom complet <span className="req">*</span></label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Votre nom"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email <span className="req">*</span></label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="votre@email.com"
                    type="email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label className="form-label">Sujet</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="De quoi s'agit-il ?"
                  type="text"
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message <span className="req">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={6}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className={`btn-submit ${loading ? 'btn-loading' : ''}`}
                disabled={loading}
              >
                <span className="btn-submit-bg" />
                <span className="btn-submit-content">
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Envoyer le message
                    </>
                  )}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Styles ── */}
      <style>{`
        :root {
          --c-accent: #7c6bff;
          --c-accent2: #00d4ff;
          --c-border: rgba(255,255,255,0.06);
          --c-muted: #6b6b80;
          --c-surface: rgba(255,255,255,0.025);
        }

        .contact-section {
          position: relative;
          padding: 8rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Label */
        .section-label {
          display: flex; align-items: center; gap: 16px;
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--c-accent);
          margin-bottom: 3.5rem;
          justify-content: center;
        }
        .label-line { flex: 1; max-width: 80px; height: 1px; background: rgba(124,107,255,0.3); }

        /* Header */
        .contact-header { text-align: center; margin-bottom: 4rem; }
        .contact-lottie {
          width: 250px;
          height: 250px;
          margin: 0 auto 2rem;
        }
        .contact-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800; line-height: 1.1;
          color: #fff; margin: 0 0 1.2rem;
        }
        .contact-title em {
          font-style: normal;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .contact-sub {
          color: rgba(255,255,255,0.4);
          font-size: 1rem; line-height: 1.7;
          max-width: 460px; margin: 0 auto;
        }

        /* Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }

        /* ── Info panel ── */
        .info-panel {
          display: flex; flex-direction: column; gap: 1.4rem;
        }

        /* Info cards */
        .info-cards { display: flex; flex-direction: column; gap: 10px; }
        .info-card {
          position: relative; overflow: hidden;
          display: flex; align-items: center; gap: 16px;
          padding: 18px 20px;
          border-radius: 16px;
          border: 1px solid var(--c-border);
          background: var(--c-surface);
          text-decoration: none;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s, border-color 0.35s;
          animation: cardReveal 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        .info-card:nth-child(1) { animation-delay: 0.05s; }
        .info-card:nth-child(2) { animation-delay: 0.12s; }
        .info-card:nth-child(3) { animation-delay: 0.19s; }
        @keyframes cardReveal {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .info-card:hover {
          transform: translateY(-5px) translateX(4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          border-color: rgba(255,255,255,0.1);
        }
        .info-card:hover .info-card-glow { opacity: 0.06; }
        .info-card-glow {
          position: absolute; inset: 0; opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }

        .info-icon {
          width: 44px; height: 44px; border-radius: 12px;
          border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        .info-card:hover .info-icon { transform: scale(1.1) rotate(-4deg); }

        .info-text { flex: 1; display: flex; flex-direction: column; gap: 2px; }
        .info-label { font-size: 0.7rem; color: var(--c-muted); letter-spacing: 0.1em; text-transform: uppercase; }
        .info-value { font-size: 0.9rem; color: #fff; font-weight: 500; }

        .info-arrow { color: var(--c-muted); transition: color 0.3s, transform 0.3s; }
        .info-card:hover .info-arrow { color: #fff; transform: translateX(4px); }

        /* Divider */
        .info-divider { height: 1px; background: var(--c-border); }

        /* Availability */
        .availability {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          border-radius: 14px;
          border: 1px solid rgba(0,255,136,0.15);
          background: rgba(0,255,136,0.05);
        }
        .avail-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 10px #00ff88;
          flex-shrink: 0;
          animation: availPulse 2s ease infinite;
        }
        @keyframes availPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.6; transform:scale(1.3); }
        }
        .avail-title { font-size: 0.88rem; font-weight: 600; color: #00ff88; margin: 0 0 2px; }
        .avail-sub { font-size: 0.75rem; color: rgba(255,255,255,0.4); margin: 0; }

        /* Socials */
        .social-row { display: flex; gap: 10px; }
        .social-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid var(--c-border);
          background: var(--c-surface);
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

        /* Map placeholder */
        .map-placeholder {
          border-radius: 16px;
          border: 1px solid var(--c-border);
          background: linear-gradient(135deg, rgba(124,107,255,0.05), rgba(0,212,255,0.03));
          overflow: hidden;
          height: 160px;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .map-placeholder::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .map-inner { display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative; z-index: 1; }
        .map-pin-wrap { position: relative; display: flex; align-items: center; justify-content: center; }
        .map-pin {
          width: 44px; height: 44px; border-radius: 50%;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
          display: flex; align-items: center; justify-content: center;
          color: #fff;
        }
        .map-pulse {
          position: absolute; inset: -8px; border-radius: 50%;
          border: 2px solid rgba(124,107,255,0.4);
          animation: mapPulse 2s ease infinite;
        }
        @keyframes mapPulse {
          0%   { transform:scale(1); opacity:0.8; }
          100% { transform:scale(1.6); opacity:0; }
        }
        .map-city { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; color: #fff; margin: 0; }
        .map-coords { font-size: 0.72rem; color: var(--c-muted); margin: 0; }

        /* ── Form panel ── */
        .form-panel {
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--c-border);
          background: var(--c-surface);
          backdrop-filter: blur(20px);
          animation: cardReveal 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) both;
        }

        .form-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem; font-weight: 700;
          color: #fff; margin: 0 0 2rem;
        }

        .form-fields { display: flex; flex-direction: column; gap: 1.2rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }

        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-label { font-size: 0.78rem; color: var(--c-muted); letter-spacing: 0.08em; text-transform: uppercase; }
        .req { color: var(--c-accent); }

        .form-input {
          width: 100%; box-sizing: border-box;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--c-border);
          background: rgba(255,255,255,0.03);
          color: #fff;
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
          resize: none;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.2); }
        .form-input:focus {
          border-color: rgba(124,107,255,0.5);
          background: rgba(124,107,255,0.05);
          box-shadow: 0 0 0 3px rgba(124,107,255,0.1);
        }
        .form-textarea { min-height: 140px; }

        /* Submit button */
        .btn-submit {
          position: relative; overflow: hidden;
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 0.95rem;
          transition: transform 0.3s, box-shadow 0.3s, opacity 0.3s;
          margin-top: 0.5rem;
        }
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(124,107,255,0.4);
        }
        .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .btn-submit-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #7c6bff, #00d4ff);
        }
        .btn-submit-content {
          position: relative; z-index: 1;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }

        /* Spinner */
        .spinner {
          width: 16px; height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success state */
        .success-state {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: 1.2rem;
          padding: 2rem 0;
        }
        .success-icon {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,212,255,0.1));
          border: 1px solid rgba(0,255,136,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #00ff88;
          animation: successPop 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes successPop {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        .success-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem; font-weight: 800; color: #fff; margin: 0;
        }
        .success-sub { color: rgba(255,255,255,0.45); font-size: 0.9rem; line-height: 1.6; max-width: 320px; margin: 0; }
        .success-reset {
          padding: 11px 28px; border-radius: 100px;
          border: 1px solid rgba(124,107,255,0.3);
          background: rgba(124,107,255,0.1);
          color: #b8aaff; cursor: pointer;
          font-size: 0.85rem; font-weight: 600;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }
        .success-reset:hover {
          background: rgba(124,107,255,0.2);
          border-color: rgba(124,107,255,0.5);
          color: #fff;
        }

        /* Error message */
        .form-error {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255,80,80,0.1);
          border: 1px solid rgba(255,80,80,0.3);
          color: #ff6b6b;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          animation: errorSlideIn 0.3s ease;
        }
        @keyframes errorSlideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .error-icon { font-weight: bold; font-size: 1.1rem; }

        /* Mobile responsivité améliorée */
        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 1.5rem;
          }
          .contact-title {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
          }
          .contact-grid {
            gap: 1.5rem;
          }
          .form-panel {
            padding: 1.5rem;
          }
          .form-title {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
          }
          .info-card {
            padding: 15px 16px;
          }
          .map-placeholder {
            height: 140px;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 2.5rem 1rem;
          }
          .section-label {
            gap: 8px;
            margin-bottom: 2rem;
          }
          .label-line {
            max-width: 40px;
          }
          .contact-header {
            margin-bottom: 2rem;
          }
          .contact-title {
            font-size: clamp(1.5rem, 3vw, 2rem);
            margin-bottom: 0.8rem;
          }
          .contact-sub {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          .contact-grid {
            gap: 1rem;
          }
          .form-panel {
            padding: 1.2rem;
            border-radius: 16px;
          }
          .form-title {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .form-row {
            gap: 0.8rem;
          }
          .form-input {
            padding: 10px 12px;
            font-size: 0.85rem;
          }
          .form-textarea {
            min-height: 100px;
          }
          .btn-submit {
            padding: 12px;
            font-size: 0.9rem;
          }
          .info-card {
            padding: 12px 14px;
            gap: 12px;
          }
          .info-icon {
            width: 40px;
            height: 40px;
          }
          .info-label {
            font-size: 0.65rem;
          }
          .info-value {
            font-size: 0.85rem;
          }
          .social-btn {
            width: 38px;
            height: 38px;
          }
          .success-reset {
            padding: 9px 24px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  )
}