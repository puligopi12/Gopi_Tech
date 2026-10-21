import { Sun, Moon, Download } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function MobileNav({ links, activeSection, open, theme, onToggleTheme, onNavClick }) {
  return (
    <nav
      id="mobile-navigation"
      className={`mobile-nav${open ? ' open' : ''}`}
      aria-label="Mobile navigation"
      aria-hidden={!open}
    >
      <ul className="mobile-nav-list" role="list">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`mobile-nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
              onClick={e => {
                e.preventDefault()
                onNavClick(link.href)
              }}
              tabIndex={open ? 0 : -1}
              aria-current={activeSection === link.href.slice(1) ? 'true' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}

        {/* Mobile Actions */}
        <li style={{ padding: '0.75rem 1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            style={{ width: '44px', height: '44px' }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="btn btn-primary"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <Download size={16} />
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  )
}
