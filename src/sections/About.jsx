import { User, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/portfolioData'

export default function About({ id }) {
  return (
    <section id={id} className="section section-alt" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <User size={13} aria-hidden="true" />
            About Me
          </span>
          <h2 className="section-title" id="about-heading">
            Background &amp; Engineering Philosophy
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science graduate combining academic foundations with real-world software trainee experience.
          </p>
        </div>

        <div className="about-grid">
          {/* Sidebar Card */}
          <aside aria-label="Profile summary" className="about-sidebar">
            <div className="about-avatar" aria-hidden="true">
              <span className="about-avatar-text">{profile.initials}</span>
            </div>

            <div className="about-info-card">
              <div className="about-info-item">
                <span className="about-info-label">Full Name</span>
                <span className="about-info-value">{profile.name}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Current Role</span>
                <span className="about-info-value" style={{ color: 'var(--color-emerald)', fontWeight: 600 }}>
                  Software Trainee
                </span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Organization</span>
                <span className="about-info-value">Jagan Technologies</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Education</span>
                <span className="about-info-value">B.Tech CSE (2021–2025)</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Direct Email</span>
                <a
                  className="about-info-value"
                  href={`mailto:${profile.email}`}
                  style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)' }}
                >
                  {profile.email}
                </a>
              </div>
              <div className="about-info-item" style={{ borderBottom: 'none' }}>
                <span className="about-info-label">Professional Profiles</span>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ padding: '6px 12px', fontSize: 'var(--text-xs)' }}
                    aria-label="GitHub profile (opens in new tab)"
                  >
                    <GithubIcon size={14} aria-hidden="true" /> GitHub
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ padding: '6px 12px', fontSize: 'var(--text-xs)' }}
                    aria-label="LinkedIn profile (opens in new tab)"
                  >
                    <LinkedinIcon size={14} aria-hidden="true" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Story Content */}
          <article className="about-content">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {/* Career Objective Banner */}
            <div className="about-objective">
              <p className="about-objective-label">
                <Sparkles size={12} style={{ display: 'inline', marginRight: '6px' }} />
                Career Objective
              </p>
              <p>"{profile.objective}"</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
