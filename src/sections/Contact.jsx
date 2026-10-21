import { useState } from 'react'
import { Mail, Send, Info, CheckCircle, MessageSquare } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/portfolioData'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }
const INITIAL_ERRORS = { name: '', email: '', subject: '', message: '' }

function validate(fields) {
  const errors = { ...INITIAL_ERRORS }
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.'
  if (!fields.message.trim()) errors.message = 'Message is required.'
  return errors
}

export default function Contact({ id }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate(form)
    const hasErrors = Object.values(newErrors).some(Boolean)
    if (hasErrors) {
      setErrors(newErrors)
      const firstErrorField = Object.keys(newErrors).find(k => newErrors[k])
      document.getElementById(`contact-${firstErrorField}`)?.focus()
      return
    }

    // Open mail client with pre-filled data
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id={id} className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <MessageSquare size={13} aria-hidden="true" />
            Get In Touch
          </span>
          <h2 className="section-title" id="contact-heading">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="section-subtitle">
            Whether you have an opportunity, project collaboration, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact info cards */}
          <aside aria-label="Contact information">
            <h3 className="contact-info-title">Contact Channels</h3>
            <p className="contact-info-subtitle">
              Reach out directly via email or connect through professional networks.
            </p>

            <div className="contact-info">
              <a
                href={`mailto:${profile.email}`}
                className="contact-link-card"
                aria-label={`Email me at ${profile.email}`}
              >
                <div className="contact-link-icon email" aria-hidden="true">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="contact-link-label">Direct Email</p>
                  <p className="contact-link-value">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
                aria-label="GitHub profile (opens in new tab)"
              >
                <div className="contact-link-icon github" aria-hidden="true">
                  <GithubIcon size={22} />
                </div>
                <div>
                  <p className="contact-link-label">GitHub</p>
                  <p className="contact-link-value">github.com/puligopi12</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <div className="contact-link-icon linkedin" aria-hidden="true">
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <p className="contact-link-label">LinkedIn</p>
                  <p className="contact-link-value">P. Phanindra Ratna Gopi</p>
                </div>
              </a>
            </div>
          </aside>

          {/* Contact form */}
          <div className="card contact-form-card">
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-subtitle">Fill in the details below to initiate contact directly.</p>

            <div className="form-notice" role="note" aria-label="How this form works">
              <Info size={16} className="form-notice-icon" aria-hidden="true" />
              <span>
                Submitting this form launches your email client with your message pre-populated.
                No third-party server tracking. You can also email directly at{' '}
                <a href={`mailto:${profile.email}`} style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{profile.email}</a>.
              </span>
            </div>

            {submitted && (
              <div className="form-success" role="alert" aria-live="polite" style={{ marginBottom: '1.5rem' }}>
                <CheckCircle size={18} aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>
                  Thank you! Your default email client has opened with your message ready to send.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">
                    Your Name <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="e.g. John Doe"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">
                    Your Email <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="e.g. john@example.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">
                  Subject <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                  placeholder="e.g. Full Stack Developer Opportunity"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <span id="subject-error" className="form-error" role="alert">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">
                  Message <span className="required" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell me about your team, project, or opportunity..."
                  rows={5}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="form-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Send size={17} aria-hidden="true" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
