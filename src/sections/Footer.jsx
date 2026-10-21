import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/portfolioData'

const year = new Date().getFullYear()

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer({ onNavClick }) {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-initials" aria-hidden="true">PG</div>
            <div>
              <p className="footer-name">{profile.name}</p>
              <p className="footer-title">{profile.title}</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer quick links">
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', listStyle: 'none', justifyContent: 'center' }}>
              {FOOTER_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault()
                      if (onNavClick) onNavClick(link.href)
                    }}
                    style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="footer-links" aria-label="Social and contact links">
            <a
              href={`mailto:${profile.email}`}
              className="footer-link"
              aria-label={`Email ${profile.name}`}
            >
              <Mail size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub profile (opens in new tab)"
            >
              <GithubIcon size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <LinkedinIcon size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="footer-divider" />

          <p className="footer-copy">
            &copy; {year} {profile.name}. Crafted with React, Vite &amp; Vanilla CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
