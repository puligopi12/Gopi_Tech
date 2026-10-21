import { GraduationCap, Star, CheckCircle2, Award } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education({ id }) {
  return (
    <section id={id} className="section section-alt" aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Award size={13} aria-hidden="true" />
            Academic Foundations
          </span>
          <h2 className="section-title" id="education-heading">
            Education &amp; Qualifications
          </h2>
          <p className="section-subtitle">
            Formal education in Computer Science and Engineering with a focus on core computer systems and software development.
          </p>
        </div>

        {education.map((edu) => (
          <article
            key={edu.id}
            className="card education-card"
            aria-labelledby={`edu-${edu.id}-degree`}
          >
            <div className="education-header">
              <div className="education-icon" aria-hidden="true">
                <GraduationCap size={28} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 className="education-degree" id={`edu-${edu.id}-degree`}>
                    {edu.degree}
                  </h3>
                  <div className="education-cgpa-pill" aria-label={`CGPA: ${edu.cgpa}`}>
                    <Star size={14} fill="currentColor" aria-hidden="true" />
                    <span>{edu.cgpa} / {edu.cgpaMax || '10.0'} CGPA</span>
                  </div>
                </div>

                <p className="education-branch">{edu.branch}</p>
                <p className="education-institution">{edu.institution}</p>
              </div>
            </div>

            <div className="education-stats">
              <div className="education-stat">
                <span className="education-stat-label">Academic Duration</span>
                <span className="education-stat-value" style={{ fontSize: 'var(--text-xl)' }}>
                  {edu.period}
                </span>
              </div>
              <div className="education-stat">
                <span className="education-stat-label">Performance Metric</span>
                <span className="education-stat-value" style={{ color: 'var(--color-amber)' }}>
                  {edu.cgpa} CGPA (Distinction)
                </span>
              </div>
            </div>

            {edu.highlights && edu.highlights.length > 0 && (
              <div className="education-highlights" aria-label="Academic highlights">
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                  Key Highlights &amp; Coursework
                </p>
                {edu.highlights.map((h, i) => (
                  <div key={i} className="education-highlight-item">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
