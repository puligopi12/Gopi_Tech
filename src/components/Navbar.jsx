import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Navbar({
  links,
  activeSection,
  scrolled,
  mobileOpen,
  theme,
  onToggleTheme,
  onMobileToggle,
  onNavClick,
}) {
  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container">
        <nav className="navbar-inner" aria-label="Main navigation">
          {/* Brand */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={e => {
              e.preventDefault()
              onNavClick('#home')
            }}
            aria-label={`${profile.name} – Back to top`}
          >
            <div className="navbar-initials" aria-hidden="true">
              {profile.initials}
            </div>
            <div className="navbar-name">
              {profile.name}
              <span>Java &amp; Full Stack</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="navbar-nav" role="list">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar-link${
                    activeSection === link.href.slice(1) ? ' active' : ''
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    onNavClick(link.href)
                  }}
                  aria-current={
                    activeSection === link.href.slice(1) ? 'true' : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="navbar-actions">
            {/* Theme Toggle Button */}
            <button
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume CTA */}
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="btn btn-primary navbar-cta"
              aria-label="Download resume PDF"
            >
              <Download size={15} aria-hidden="true" />
              Resume
            </a>

            {/* Mobile toggle */}
            <button
              className="menu-btn"
              onClick={onMobileToggle}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
