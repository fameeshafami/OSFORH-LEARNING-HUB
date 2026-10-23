import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  COURSE_NAMES,
  EMAIL,
  MAPS_URL,
  PHONE_TEL,
  PHONE_TEXT,
  WHATSAPP,
} from '../data/site.js'
import './Contact.css'

const OPTIONS = [...COURSE_NAMES, 'Not sure yet']
const DEFAULT_STATUS =
  'Your details open in WhatsApp so you can send them to us directly.'

const WHY_CHOOSE = [
  {
    title: 'Industry-Relevant Curriculum',
    text: 'Continuously updated syllabus matching modern company demands and AI algorithms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Expert Trainers with Real-World Skills',
    text: 'Direct coaching from working digital professionals with live campaign insights.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Practical Projects & Tools',
    text: 'Work on active live client projects, ad budgets, SEO audits, and social creatives.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: 'Certification & Career Support',
    text: 'Recognized course completion certificate with placement interview support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
]

// pick the option matching ?course=... (same matching rule as original page)
function initialCourse(param) {
  if (!param) return OPTIONS[0]
  const p = param.toLowerCase()
  return OPTIONS.find((o) => o.toLowerCase().indexOf(p) !== -1) || OPTIONS[0]
}

export default function Contact() {
  const [params] = useSearchParams()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [course, setCourse] = useState(() => initialCourse(params.get('course')))
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({ name: '', phone: '' })
  const [status, setStatus] = useState(DEFAULT_STATUS)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const n = name.trim()
    let p = phone.replace(/\D/g, '')
    if (p.length === 12 && p.startsWith('91')) p = p.slice(2) // allow +91 prefix
    if (p.length === 11 && p.startsWith('0')) p = p.slice(1)
    const next = {
      name: n.length < 2 ? 'Please enter your name.' : '',
      phone: !/^[6-9]\d{9}$/.test(p) ? 'Enter a valid 10-digit mobile number.' : '',
    }
    setErrors(next)
    if (next.name || next.phone) {
      setStatus('Please fix the highlighted fields.')
      return
    }

    setLoading(true)
    setStatus('Preparing your enquiry...')
    const m = message.trim()
    const text =
      'Hello Osforh Learning Hub, I am interested in the ' +
      course +
      ' course.\nName: ' +
      n +
      '\nPhone: +91 ' +
      p +
      (m ? '\nMessage: ' + m : '')

    setTimeout(() => {
      setLoading(false)
      const w = window.open(
        WHATSAPP + '?text=' + encodeURIComponent(text),
        '_blank',
        'noopener'
      )
      setStatus(
        w
          ? 'WhatsApp opened. Press send there to deliver your enquiry.'
          : 'Could not open WhatsApp. Please call ' + PHONE_TEXT + '.'
      )
    }, 500)
  }

  return (
    <div className="ct-page">
      {/* ================================================================
          1. Hero Section: Beegains Academy Inspired Creative Header
          ================================================================ */}
      <section className="ct-hero" aria-labelledby="ct-hero-title">
        <div className="ct-hero__blob ct-hero__blob--1" aria-hidden="true" />
        <div className="ct-hero__blob ct-hero__blob--2" aria-hidden="true" />

        <div className="ct-hero__inner">
          {/* <div className="ct-hero__eyebrow">
            <span className="ct-hero__eyebrow-dot" />
            <span>Enrollment</span>
          </div> */}

          <h1 id="ct-hero-title" className="ct-hero__title">
            Your Next Chapter Starts Here.
          </h1>

          <p className="ct-hero__lead">
            Send your details and we will reply on WhatsApp, or visit us near the
            Tirur bus stand.
          </p>
        </div>
      </section>

      {/* ================================================================
          2. Main Contact Grid: Talk to an Advisor & Enquiry Form
          ================================================================ */}
      <section className="ct-section" aria-labelledby="ct-advisor-heading">
        <div className="ct-container">
          <div className="ct-grid">
            {/* Left Side: Advisor & Campus Info Hub */}
            <div className="ct-info-hub">
              <div className="ct-info-hub__header">
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--accent, #215714)',
                    background: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    marginBottom: '12px',
                  }}
                >
                  Direct Connection
                </span>
                <h2 id="ct-advisor-heading">
                  Talk to an <em>advisor.</em>
                </h2>
                <p>
                  Have questions about course curriculum, batch timings, fees, or
                  internship placement? Connect with our career counsellors directly.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="ct-contact-cards">
                <a href={'tel:' + PHONE_TEL} className="ct-contact-card">
                  <div className="ct-contact-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="ct-contact-card__content">
                    <div className="ct-contact-card__label">Direct Call</div>
                    <div className="ct-contact-card__val">{PHONE_TEXT}</div>
                  </div>
                  <span className="ct-contact-card__arrow" aria-hidden="true">↗</span>
                </a>

                <a
                  href={WHATSAPP + '?text=Hello%20Osforh%20Learning%20Hub%2C%20I%20have%20an%20enquiry.'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-contact-card"
                >
                  <div className="ct-contact-card__icon" style={{ background: 'linear-gradient(135deg, #215714, #215714)' }} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.39-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.6.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3" />
                    </svg>
                  </div>
                  <div className="ct-contact-card__content">
                    <div className="ct-contact-card__label">Instant WhatsApp<span className="sr-only"> (opens in a new tab)</span></div>
                    <div className="ct-contact-card__val">Chat Directly With An Advisor</div>
                  </div>
                  <span className="ct-contact-card__arrow" aria-hidden="true">↗</span>
                </a>

                <a href={'mailto:' + EMAIL} className="ct-contact-card">
                  <div className="ct-contact-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="ct-contact-card__content">
                    <div className="ct-contact-card__label">Email Us</div>
                    <div className="ct-contact-card__val">{EMAIL}</div>
                  </div>
                  <span className="ct-contact-card__arrow" aria-hidden="true">↗</span>
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-contact-card"
                >
                  <div className="ct-contact-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="ct-contact-card__content">
                    <div className="ct-contact-card__label">Campus Location</div>
                    <div className="ct-contact-card__val">
                      Near bus stand, Tirur, Malappuram
                    </div>
                  </div>
                  <span className="ct-contact-card__arrow" aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Why Choose Us Mini Showcase (Beegains-style highlights) */}
              <div className="ct-why-block">
                <h3 className="ct-why-block__title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Why Train at Osforh Learning Hub</span>
                </h3>
                <div className="ct-why-grid">
                  {WHY_CHOOSE.map((item) => (
                    <div key={item.title} className="ct-why-item">
                      <div style={{ color: 'var(--accent, #215714)', marginBottom: '8px' }}>
                        {item.icon}
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Creative Elevated Admission Form */}
            <div className="ct-form-card">
              <div className="ct-form-card__header">
                <span className="ct-form-card__badge">Quick Enquiry</span>
                <h3 className="ct-form-card__title">Get Course Details</h3>
                <p className="ct-form-card__desc">
                  Fill in your details below to receive syllabus, fee structure, and batch schedule.
                </p>
              </div>

              <form id="fm" noValidate onSubmit={onSubmit}>
                {/* Full Name */}
                <div className="ct-form-group">
                  <label htmlFor="fn" className="ct-label">
                    Full name
                  </label>
                  <div className="ct-input-wrap">
                    <span className="ct-input-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input
                      id="fn"
                      className="ct-input"
                      autoComplete="name"
                      placeholder="Enter your name"
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'e1' : undefined}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {errors.name && <span className="ct-error" id="e1" role="alert">{errors.name}</span>}
                </div>

                {/* Phone Number */}
                <div className="ct-form-group">
                  <label htmlFor="fp" className="ct-label">
                    Phone number
                  </label>
                  <div className="ct-input-wrap">
                    <span className="ct-input-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <input
                      id="fp"
                      className="ct-input"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel-national"
                      maxLength={16}
                      required
                      aria-required="true"
                      aria-invalid={errors.phone ? 'true' : undefined}
                      aria-describedby={errors.phone ? 'e2' : undefined}
                      placeholder="e.g. 9946227177"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  {errors.phone && <span className="ct-error" id="e2" role="alert">{errors.phone}</span>}
                </div>

                {/* Preferred Course */}
                <div className="ct-form-group">
                  <label htmlFor="fc" className="ct-label">
                    Preferred course
                  </label>
                  <div className="ct-input-wrap">
                    <span className="ct-input-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </span>
                    <select
                      id="fc"
                      className="ct-select"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                    >
                      {OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message (Optional) */}
                <div className="ct-form-group">
                  <label htmlFor="fmsg" className="ct-label">
                    Message (optional)
                  </label>
                  <textarea
                    id="fmsg"
                    className="ct-textarea"
                    rows={4}
                    maxLength={600}
                    placeholder="Tell us about your background or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="sbt"
                  type="submit"
                  className="ct-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Opening WhatsApp...</span>
                  ) : (
                    <>
                      <span>Submit enquiry</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>

                <p id="fs" className="ct-status-msg" role="status" aria-live="polite">
                  {status}
                </p>

                {/* Trust assurance footer */}

                {/* <div className="ct-form-trust" aria-hidden="true">
                  <span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                    100% Privacy
                  </span>
                  <span>•</span>
                  <span>Instant Response</span>
                  <span>•</span>
                  <span>Free Career Advice</span>
                </div> */}
              </form>
            </div>
          </div>

          {/* ==============================================================
              3. Interactive Map & Campus Location Banner
              ============================================================== */}
          <div className="ct-map-card">
            <div className="ct-map-card__info">
              <h3>Visit Our Campus in Tirur</h3>
              <p>
                Conveniently located at Forza 2, directly near the main Tirur bus stand.
                Walk in for a 1-on-1 counseling session with our expert faculties.
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ct-map-card__btn"
            >
              <span>Get Directions on Google Maps<span className="sr-only"> (opens in a new tab)</span></span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* ==============================================================
              4. "Your story could be here" Student Feedback Callout
              ============================================================== */}
          <div className="ct-feedback-box">
            <h3>Your story could be here</h3>
            <p>
              Real student feedback will appear on this site. Studied with us? We
              would love to hear from you.
            </p>
            <a
              className="ct-feedback-btn"
              href={
                WHATSAPP +
                '?text=Hello%20Osforh%2C%20I%20would%20like%20to%20share%20my%20feedback.'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Share your feedback<span className="sr-only"> on WhatsApp (opens in a new tab)</span></span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
