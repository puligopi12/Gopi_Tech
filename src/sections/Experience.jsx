import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience({ id }) {
  return (
    <section id={id} className="section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Briefcase size={13} aria-hidden="true" />
            Career Journey
          </span>
          <h2 className="section-title" id="experience-heading">
            Professional Experience
          </h2>
          <p className="section-subtitle">
            Applying Java backend engineering and full-stack development skills in industry workflows.
          </p>
        </div>

        {experience.map((exp) => (
          <article
            key={exp.id}
            className="card experience-card"
            aria-labelledby={`exp-${exp.id}-role`}
          >
            <div className="experience-header">
              {/* JT Company Monogram */}
              <div className="experience-logo" aria-hidden="true">
                JT
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 className="experience-role" id={`exp-${exp.id}-role`}>
                    {exp.role}
                  </h3>
                  {exp.status === 'Active' && (
                    <span className="pulse-badge" style={{ margin: 0, padding: '0.2rem 0.75rem', fontSize: '0.75rem' }}>
                      <span className="pulse-dot" />
                      Active Role
                    </span>
                  )}
                </div>

                <p className="experience-company">{exp.company}</p>

                <div className="experience-meta">
                  <span className="experience-meta-item">
                    <Calendar size={14} aria-hidden="true" />
                    {exp.period}
                  </span>
                  <span className="experience-meta-item">
                    <Building2 size={14} aria-hidden="true" />
                    Software Engineering Training
                  </span>
                </div>
              </div>
            </div>

            <p className="experience-description">{exp.description}</p>

            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <div style={{ marginTop: '1.25rem' }}>
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  Key Contributions &amp; Responsibilities
                </p>
                <ul className="experience-responsibilities" aria-label="Responsibilities">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
