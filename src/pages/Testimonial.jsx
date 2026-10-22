import { useState, useId } from 'react'
import { Link } from 'react-router-dom'
import {
  heroFeatures,
  whyTrustUs,
  testimonials,
  moreStories,
} from '../data/testimonials.js'
import './Testimonial.css'

// Inline SVG Icons for crisp rendering and zero external font dependencies
function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconSync() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconLaptop() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const FILTERS = ['All', 'Digital Marketing', 'Web Development', 'Graphic Design', 'Office Administration']
// filter label -> the `badge` value used in data/testimonials.js (they differ for 2 courses)
const FILTER_TO_BADGE = {
  'Digital Marketing': 'Digital Marketing',
  'Web Development': 'Website Development',
  'Graphic Design': 'Graphic Designing',
  'Office Administration': 'Office Administration',
}

export default function Testimonial() {
  const [activeCategory, setActiveCategory] = useState('All')
  const baseId = useId()

  const allReviews = [...testimonials, ...moreStories]

  const filteredReviews =
    activeCategory === 'All'
      ? allReviews
      : allReviews.filter((t) => t.badge === FILTER_TO_BADGE[activeCategory])

  const featureIcons = {
    users: <IconUsers />,
    sync: <IconSync />,
    clock: <IconClock />,
    laptop: <IconLaptop />,
  }

  return (
    <div className="tm-page">
      {/* ================================================================
          1. Hero Section: "Testimonial | Digital Marketing Institute"
          ================================================================ */}
      <section className="tm-hero" aria-labelledby="tm-hero-title">
        <div className="tm-hero__blob tm-hero__blob--1" aria-hidden="true" />
        <div className="tm-hero__blob tm-hero__blob--2" aria-hidden="true" />

        <div className="tm-hero__inner">
          {/* <div className="tm-hero__eyebrow">
            <span className="tm-hero__eyebrow-dot" />
            <span>Testimonial</span>
          </div> */}

          <h1 id="tm-hero-title" className="tm-hero__title">
            Digital Marketing Institute
          </h1>

          <p className="tm-hero__lead">
            Osforh Learning Hub is the Digital marketing institute in Tirur,
            offering career-oriented courses in Digital Marketing, Web
            Development, Graphic Design, and Office Management.
          </p>

          {/* 4 Feature Badges from WordPress Page */}
          {heroFeatures.length > 0 && (
          <div className="tm-hero__features" role="list">
            {heroFeatures.map((feat) => (
              <div key={feat.id} className="tm-feature-badge" role="listitem">
                <div className="tm-feature-badge__icon" aria-hidden="true">
                  {featureIcons[feat.icon]}
                </div>
                <div>
                  <h3 className="tm-feature-badge__title">{feat.title}</h3>
                  <p className="tm-feature-badge__sub">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* ================================================================
          2. Section 1: "Shaping Careers, Inspiring Growth"
          ================================================================ */}
      <section className="tm-section" aria-labelledby="tm-growth-heading">
        <div className="tm-container">
          <div className="tm-growth-grid">
            {/* Left: 5-Star Rating & Performance Visual Card */}
            <div className="tm-rating-card">
              <div className="tm-rating-card__top">
                <div>
                  <div className="tm-rating-score">4.9</div>
                  <div className="tm-rating-stars" role="img" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <div className="tm-rating-count">Based on 120+ Verified Reviews</div>
                </div>
                <div
                  style={{
                    background: '#E8F5E5',
                    color: '#2B5D36',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Top Rated
                </div>
              </div>

              {/* Rating breakdown bars */}
              <div className="tm-rating-bars" aria-hidden="true">
                <div className="tm-bar-row">
                  <span>5 Star</span>
                  <div className="tm-bar-track">
                    <div className="tm-bar-fill" style={{ width: '96%' }} />
                  </div>
                  <span>96%</span>
                </div>
                <div className="tm-bar-row">
                  <span>4 Star</span>
                  <div className="tm-bar-track">
                    <div className="tm-bar-fill" style={{ width: '4%' }} />
                  </div>
                  <span>4%</span>
                </div>
                <div className="tm-bar-row">
                  <span>3 Star</span>
                  <div className="tm-bar-track">
                    <div className="tm-bar-fill" style={{ width: '0%' }} />
                  </div>
                  <span>0%</span>
                </div>
              </div>

              {/* Floating Verified Chip */}
              <div className="tm-floating-chip">
                {/* <div className="tm-chip-avatar">OLH</div> */}
                <div className="tm-chip-text">
                  <b>Transforming Careers Since 2016</b>
                  <span>Over 500+ successful graduates placed in top roles.</span>
                </div>
              </div>
            </div>

            {/* Right: Content with exact text from WordPress */}
            <div className="tm-growth-content">
              {/* <span className="tm-section-tag">About Osforh Learning Hub</span> */}
              <h2 id="tm-growth-heading" className="tm-growth-heading">
                Shaping Careers, <br />
                <span>Inspiring Growth</span>
              </h2>

              <p className="tm-growth-desc">
                <strong>Osforh Learning Hub is a digital marketing institute</strong>{' '}
                that believes learning is more than just theory it’s about
                building skills that transform lives and careers. Since 2016,
                we’ve been empowering students with practical, industry-ready
                knowledge in digital marketing, design, web development, and
                more.
              </p>

              <Link to="/courses/digital-marketing" className="tm-btn-primary" aria-label="Learn more about the Digital Marketing course">
                <span>Learn More</span>
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          3. Section 2: "Why Students Trust Us"
          ================================================================ */}
      <section className="tm-section tm-trust-section" aria-labelledby="tm-trust-heading">
        <div className="tm-container">
          {/* <div className="tm-trust-header">
            <span className="tm-section-tag">Key Highlights</span>
            <h2 id="tm-trust-heading" className="tm-trust-heading">
              Why Students Trust Us
            </h2>
            <p style={{ color: 'var(--soft, #496152)', fontSize: '16px', margin: 0 }}>
              Practical learning designed to bridge the gap between classroom theory and industry demands.
            </p>
          </div> */}

          <div className="tm-trust-grid" role="list">
            {whyTrustUs.map((item) => (
              <div key={item.number} className="tm-trust-card" role="listitem">
                <div className="tm-trust-card__top">
                  <span className="tm-trust-card__num">{item.number}</span>
                  <span className="tm-trust-card__tag">{item.tag}</span>
                </div>
                <div>
                  <h3 className="tm-trust-card__title">{item.title}</h3>
                  <p className="tm-trust-card__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="tm-trust-cta">
            <Link to="/courses" className="tm-btn-primary" aria-label="Learn more about all our courses">
              <span>Learn More</span>
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. Section 3: "What Our Students Say"
          ================================================================ */}
      <section className="tm-section tm-reviews-section" aria-labelledby="tm-reviews-heading">
        <div className="tm-container">
          <div className="tm-reviews-header">
            {/* <span className="tm-section-tag">Authentic Feedback</span> */}
            <h2 id="tm-reviews-heading" className="tm-reviews-heading">
              What Our <span>Students Say</span>
            </h2>
            <p style={{ color: 'var(--soft, #496152)', fontSize: '16px', margin: 0 }}>
              Read direct testimonials from graduates who built practical skills and launched exciting careers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="tm-filter-tabs" role="group" aria-label="Filter stories by course">
            {FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeCategory === cat}
                className={`tm-filter-tab ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? 'All Stories' : cat}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="tm-cards-grid">
            {filteredReviews.map((t, idx) => (
              <article key={t.id || `${baseId}-${idx}`} className="tm-review-card">
                <div className="tm-review-card__body">
                  <div className="tm-review-card__stars" role="img" aria-label={`${t.rating} out of 5 stars`}>
                    {'★'.repeat(t.rating || 5)}
                  </div>
                  <h3 className="tm-review-card__title">{t.headline}</h3>
                  <p className="tm-review-card__quote">{t.quote}</p>
                </div>

                <div className="tm-review-card__footer">
                  <div className="tm-review-card__author">
                    <div
                      className="tm-review-card__avatar"
                      style={t.bg ? { background: t.bg } : { background: '#2B5D36' }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="tm-review-card__name">
                        {t.name}
                        <IconCheck />
                      </p>
                      <p className="tm-review-card__role">{t.role}</p>
                    </div>
                  </div>

                  <span className="tm-review-card__badge">{t.badge}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. Section 4: "Your Success Story Awaits"
          ================================================================ */}
      <section className="tm-section tm-cta-section" aria-labelledby="tm-cta-heading">
        <div className="tm-container">
          <div className="tm-cta-card">
            <div className="tm-cta-card__badge">
              <span>Next Batch Enrolling</span>
            </div>

            <h2 id="tm-cta-heading" className="tm-cta-card__title">
              Your Success Story Awaits
            </h2>

            <p className="tm-cta-card__body">
              At Osforh Learning Hub, <strong>digital marketing institute</strong>,
              we believe that every learner deserves an opportunity to grow and
              shine. Our mission is to help you achieve your career goals with
              expert guidance, hands-on training, practical experience, and
              future-ready skills.
            </p>

            <p className="tm-cta-card__highlight">
              Start your journey today and be the next success story!
            </p>

            <div className="tm-cta-card__actions">
              <Link to="/courses" className="tm-btn-primary">
                <span>Explore Courses</span>
                <IconArrow />
              </Link>
              <Link to="/contact" className="tm-btn-secondary">
                <span>Contact Admissions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
