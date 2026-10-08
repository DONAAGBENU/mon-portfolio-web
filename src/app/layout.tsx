import './globals.css'
import { ReactNode } from 'react'
 
interface RootLayoutProps {
  children: ReactNode
}
 
export const metadata = {
  title: 'Donatien AGBENU — Développeur',
  description: 'Portfolio de Donatien AGBENU - Développeur Full Stack passionné',
}
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="portfolio-body min-h-screen font-body overflow-x-hidden">
 
        {/* ── Navigation ── */}
        <header className="nav-shell">
          <nav className="nav-inner">
            {/* Logo */}
            <a href="#accueil" className="nav-logo">
              <span className="logo-ring">
                <span className="logo-letter">A</span>
              </span>
              <span className="logo-text">AGBENU</span>
            </a>
 
            {/* Links */}
            <ul className="nav-links">
              {[
                { label: 'Accueil', id: 'accueil' },
                { label: 'À propos', id: 'apropos' },
                { label: 'Projets', id: 'projets' },
                { label: 'Compétences', id: 'competences' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="nav-link"
                  >
                    <span className="nav-link-text">{label}</span>
                    <span className="nav-link-line" />
                  </a>
                </li>
              ))}
            </ul>
 
            {/* CTA */}
            <a href="#contact" className="nav-cta">
              <span>Disponible</span>
              <span className="cta-dot" />
            </a>
          </nav>
        </header>
 
        {/* ── Main ── */}
        <main className="relative z-10">
          {children}
        </main>
 
        {/* ── Footer ── */}
        <footer className="footer-shell">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="footer-name">Donatien AGBENU</span>
              <span className="footer-role">Développeur Full Stack</span>
            </div>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/dona-agbenu-406a10280/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://github.com/DONAAGBENU" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="mailto:donaagbenu2000@gmail.com" className="footer-link">Email</a>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Donatien AGBENU</p>
          </div>
        </footer>
 
        <style>{`
          /* ── Fonts ── */
          :root {
            --font-display: 'Syne', sans-serif;
            --font-body: 'DM Sans', sans-serif;
            --c-bg: #050508;
            --c-surface: #0d0d14;
            --c-border: rgba(255,255,255,0.06);
            --c-accent: #7c6bff;
            --c-accent2: #00d4ff;
            --c-text: #e8e8f0;
            --c-muted: #6b6b80;
          }

          .portfolio-body {
            background: #f5f5f0;
            color: #17211d;
          }
 
          .font-body { font-family: var(--font-body); }
 
          /* ── Ambient blobs ── */
          /* ── Navigation ── */
          .nav-shell {
            position: fixed; top: 0; left: 0; right: 0;
            z-index: 1000;
            padding: 0 2rem;
            background: rgba(245,245,240,0.94);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(23,33,29,0.12);
            animation: slideDown 0.8s cubic-bezier(0.16,1,0.3,1) both;
          }
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
          }
          .nav-inner {
            max-width: 1200px; margin: 0 auto;
            height: 72px;
            display: flex; align-items: center; justify-content: space-between;
          }
          .nav-logo {
            display: flex; align-items: center; gap: 10px;
            text-decoration: none; color: inherit;
          }
          .logo-ring {
            width: 38px; height: 38px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 0 20px rgba(124,107,255,0.4);
          }
          .logo-letter { font-family: var(--font-display); font-weight: 800; font-size: 1rem; color: #fff; }
          .logo-text {
            font-family: var(--font-display); font-weight: 700; font-size: 1.1rem;
            background: linear-gradient(90deg, #fff, var(--c-muted));
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            letter-spacing: 0.08em;
          }
          .nav-links { display: flex; gap: 2.5rem; list-style: none; margin: 0; padding: 0; }
          .nav-link {
            position: relative; text-decoration: none;
            color: #58635d; font-size: 0.875rem; font-weight: 400; letter-spacing: 0.04em;
            transition: color 0.3s;
            display: flex; flex-direction: column; align-items: center;
          }
          .nav-link:hover { color: #17211d; }
          .nav-link-line {
            position: absolute; bottom: -4px; left: 0; right: 100%;
            height: 1px;
            background: #c75b3c;
            transition: right 0.4s cubic-bezier(0.16,1,0.3,1);
          }
          .nav-link:hover .nav-link-line { right: 0; }
 
          .nav-cta {
            display: flex; align-items: center; gap: 8px;
            padding: 8px 18px;
            border-radius: 100px;
            border: 1px solid rgba(23,33,29,0.2);
            background: transparent;
            text-decoration: none; color: #17211d;
            font-size: 0.8rem; font-weight: 500;
            transition: background 0.3s, border-color 0.3s;
          }
          .nav-cta:hover { background: rgba(199,91,60,0.08); border-color: #c75b3c; }
          .cta-dot {
            width: 7px; height: 7px; border-radius: 50%;
            background: #64846e;
          }
          /* ── Footer ── */
          .footer-shell {
            position: relative; z-index: 10;
            border-top: 1px solid rgba(23,33,29,0.12);
            padding: 3rem 2rem;
            background: #ecece5;
          }
          .footer-inner {
            max-width: 1200px; margin: 0 auto;
            display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
          }
          .footer-brand { display: flex; flex-direction: column; align-items: center; gap: 4px; }
          .footer-name { font-family: var(--font-display); font-weight: 700; font-size: 1.2rem; }
          .footer-role { font-size: 0.8rem; color: #58635d; }
          .footer-links { display: flex; gap: 2rem; }
          .footer-link {
            color: #58635d; text-decoration: none; font-size: 0.875rem;
            transition: color 0.3s;
          }
          .footer-link:hover { color: #c75b3c; }
          .footer-copy { color: #58635d; font-size: 0.75rem; }

          @media (max-width: 820px) {
            .nav-inner {
              height: auto;
              min-height: 72px;
              flex-wrap: wrap;
              column-gap: 1rem;
              padding: 0.55rem 0;
            }
            .nav-links {
              order: 3;
              flex: 0 0 100%;
              justify-content: space-between;
              gap: 0.4rem;
              padding: 0.15rem 0 0.25rem;
            }
            .nav-link { font-size: 0.78rem; }
            .nav-cta { margin-left: auto; }
            .footer-shell { padding: 2.5rem 1.25rem; }
            .footer-links { gap: 1.25rem; }
          }

          @media (max-width: 480px) {
            .nav-shell { padding: 0 1rem; }
            .nav-links { gap: 0.25rem; }
            .nav-link { font-size: 0.68rem; letter-spacing: 0; }
            .nav-cta { padding: 7px 11px; font-size: 0.72rem; }
            .logo-text { font-size: 0.95rem; }
            .footer-shell { padding: 2rem 1rem; }
            .footer-links { gap: 1rem; }
          }
        `}</style>
      </body>
    </html>
  )
}