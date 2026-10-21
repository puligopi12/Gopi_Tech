import { ExternalLink, CheckCircle2, FolderGit2 } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { projects } from '../data/portfolioData'

function ProjectCard({ project }) {
  const statusClass = project.status === 'Completed' ? 'completed' : 'in-progress'
  const theme = project.theme || 'cyan'

  const checkColors = {
    amber: '#f59e0b',
    violet: '#a855f7',
    emerald: '#10b981',
  }
  const checkColor = checkColors[theme] || '#38bdf8'

  return (
    <article
      className={`card project-card project-card-${theme}`}
      aria-labelledby={`project-${project.id}-name`}
    >
      {/* Header */}
      <div className="project-header">
        <span className="project-category-badge">{project.category}</span>
        <span className={`project-status ${statusClass}`} aria-label={`Status: ${project.status}`}>
          <span className="status-dot" aria-hidden="true" />
          {project.status}
        </span>
      </div>

      {/* Name */}
      <h3 className="project-name" id={`project-${project.id}-name`}>
        {project.name}
      </h3>

      {/* Tagline */}
      {project.tagline && (
        <p className="project-tagline">{project.tagline}</p>
      )}

      {/* Description */}
      <p className="project-description">{project.description}</p>

      {/* Features */}
      <div className="project-features">
        <p className="project-features-label">Key Capabilities &amp; Architecture</p>
        <ul aria-label={`Features of ${project.name}`}>
          {project.features.map((feature, i) => (
            <li key={i}>
              <CheckCircle2 size={16} color={checkColor} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="project-tech" aria-label="Technologies used">
        {project.technologies.map(tech => (
          <span key={tech} className={`tag tag-${theme}`}>
            {tech}
          </span>
        ))}
      </div>

      {/* Note (if any) */}
      {project.note && (
        <div className="project-note" aria-label="Project note">
          <strong>Note:</strong> {project.note}
        </div>
      )}

      {/* Actions */}
      <div className="project-actions">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label={`View ${project.name} repository on GitHub (opens in new tab)`}
          >
            <GithubIcon size={15} aria-hidden="true" />
            GitHub Repository
          </a>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label={`View ${project.name} live demo (opens in new tab)`}
          >
            <ExternalLink size={15} aria-hidden="true" />
            Live Preview
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default function Projects({ id }) {
  return (
    <section id={id} className="section section-alt" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <FolderGit2 size={13} aria-hidden="true" />
            Featured Work
          </span>
          <h2 className="section-title" id="projects-heading">
            Full-Stack Projects &amp; Architecture
          </h2>
          <p className="section-subtitle">
            Demonstrating end-to-end software engineering proficiency, from relational database schemas and Spring Boot REST backends to responsive web client frontends.
          </p>
        </div>

        <div className="projects-grid" role="list">
          {projects.map((project) => (
            <div key={project.id} role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
