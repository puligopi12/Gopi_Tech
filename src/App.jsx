import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import ScrollTopButton from './components/ScrollTopButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gopi_theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('gopi_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV_LINKS.map(l => l.href.slice(1))
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Dynamic Ambient Background with Floating Light Orbs */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
        <div className="ambient-grid-overlay" />
      </div>

      <a
        href="#main-content"
        className="btn btn-primary"
        style={{
          position: 'fixed',
          top: '-100px',
          left: '16px',
          zIndex: 200,
          transition: 'top 0.2s',
        }}
        onFocus={e => (e.target.style.top = '16px')}
        onBlur={e => (e.target.style.top = '-100px')}
      >
        Skip to main content
      </a>

      <Navbar
        links={NAV_LINKS}
        activeSection={activeSection}
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
        onMobileToggle={() => setMobileOpen(v => !v)}
        onNavClick={handleNavClick}
      />

      <MobileNav
        links={NAV_LINKS}
        activeSection={activeSection}
        open={mobileOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavClick={handleNavClick}
      />

      <main id="main-content">
        <Hero id="home" onNavClick={handleNavClick} />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Education id="education" />
        <Contact id="contact" />
      </main>

      <Footer onNavClick={handleNavClick} />
      <ScrollTopButton />
    </>
  )
}

export default App
