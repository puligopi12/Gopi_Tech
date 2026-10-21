import { Download, ArrowRight, Briefcase, Mail, GraduationCap, Server } from 'lucide-react'
import { profile, techLine } from '../data/portfolioData'

export default function Hero({ id, onNavClick }) {
  return (
    <section id={id} className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Content Column */}
          <div className="hero-content">
            {/* Live Availability Badge */}
            <div className="pulse-badge" aria-label="Open to Java and Full Stack opportunities">
              <span className="pulse-dot" aria-hidden="true" />
              <span>Available for Java &amp; Full Stack Roles</span>
            </div>

            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name" id="hero-heading">
              Phanindra<br />
              Ratna <span className="gradient-text">Gopi</span>
            </h1>

            <p className="hero-headline">
              {profile.heroHeadline}
            </p>

            <p className="hero-subtext">
              {profile.heroSubtext}
            </p>

            {/* Quick Stats Bar */}
            <div className="hero-stats-row" aria-label="Professional highlights">
              <div className="hero-stat-pill">
                <GraduationCap size={15} aria-hidden="true" />
                <span><strong>B.Tech CSE</strong> (7.9 CGPA)</span>
              </div>
              <div className="hero-stat-pill">
                <Briefcase size={15} aria-hidden="true" />
                <span><strong>Software Trainee</strong> @ Jagan Tech</span>
              </div>
              <div className="hero-stat-pill">
                <Server size={15} aria-hidden="true" />
                <span><strong>Spring Boot</strong> &amp; REST</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => onNavClick('#projects')}
                aria-label="View my projects section"
              >
                Explore Projects
                <ArrowRight size={17} aria-hidden="true" />
              </button>

              <a
                href={profile.resumePath}
                download={profile.resumeFileName}
                className="btn btn-outline btn-lg"
                aria-label="Download resume PDF"
              >
                <Download size={17} aria-hidden="true" />
                Download Resume
              </a>

              <button
                className="btn btn-ghost btn-lg"
                onClick={() => onNavClick('#contact')}
                aria-label="Go to contact section"
              >
                <Mail size={17} aria-hidden="true" />
                Get in Touch
              </button>
            </div>

            {/* Technologies list */}
            <div className="tech-line" aria-label="Core technologies">
              <span className="tech-line-label">Stack:</span>
              {techLine.map((tech, idx) => {
                const colorClasses = [
                  'tag-amber',
                  'tag-emerald',
                  'tag',
                  'tag',
                  'tag-violet',
                  'tag-rose',
                  'tag-amber',
                  'tag',
                ]
                return (
                  <span key={tech} className={`tag ${colorClasses[idx % colorClasses.length]}`}>
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Visual Column: Profile Photo Frame */}
          <div className="hero-visual" aria-label="Profile photo frame">
            <div className="hero-photo-wrapper">
              <div className="hero-photo-card">
                {/* Photo image element */}
                <img
                  src="/assets/profile.jpg"
                  alt={profile.name}
                  className="hero-photo-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />

                {/* Elegant Photo Placeholder Frame (Ready for your photo) */}
                <div className="hero-photo-placeholder">
                  <div className="photo-avatar-ring">
                    <span className="photo-avatar-initials">{profile.initials}</span>
                  </div>
                  <h3 className="photo-placeholder-name">{profile.name}</h3>
                  <span className="photo-placeholder-tag">Java &amp; Full Stack Developer</span>
                  <div className="photo-status-badge">
                    <span className="status-dot" style={{ background: '#10b981' }} />
                    <span>Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
