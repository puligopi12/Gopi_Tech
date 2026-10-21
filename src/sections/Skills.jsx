import { Code2, Server, Monitor, Database, Wrench, Sparkles } from 'lucide-react'
import { skillGroups } from '../data/portfolioData'

const ICON_MAP = {
  Code2: Code2,
  Server: Server,
  Monitor: Monitor,
  Database: Database,
  Wrench: Wrench,
}

export default function Skills({ id }) {
  return (
    <section id={id} className="section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Sparkles size={13} aria-hidden="true" />
            Technical Expertise
          </span>
          <h2 className="section-title" id="skills-heading">
            Technologies &amp; Engineering Skills
          </h2>
          <p className="section-subtitle">
            A specialized toolkit focused on robust Java backend architecture, modern RESTful APIs, relational databases, and interactive frontend interfaces.
          </p>
        </div>

        <div className="skills-grid" role="list">
          {skillGroups.map((group) => {
            const Icon = ICON_MAP[group.icon] || Code2
            const theme = group.theme || 'cyan'

            return (
              <article
                key={group.category}
                className={`card skill-card skill-card-${theme}`}
                role="listitem"
                aria-label={`${group.category} skills`}
              >
                {/* Header */}
                <div className="skill-card-header">
                  <div className="skill-card-header-left">
                    <div className={`skill-icon-wrap skill-icon-${theme}`} aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <h3 className="skill-category">{group.category}</h3>
                  </div>

                  {group.badge && (
                    <span className={`skill-badge-label tag tag-${theme}`}>
                      {group.badge}
                    </span>
                  )}
                </div>

                {/* Skills tags list */}
                <div
                  className="skill-list"
                  role="list"
                  aria-label={`${group.category} technologies`}
                >
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`tag tag-${theme}`}
                      role="listitem"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
