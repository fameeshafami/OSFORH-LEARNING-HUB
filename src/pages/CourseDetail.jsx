import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { courses, getCourseBySlug } from '../data/courses.js'
import { PHONE_TEL } from '../data/site.js'
import './CourseDetail.theme.css'
import {
  CourseCreativeStyle,
  CareerBoard,
  OutcomesBoard,
  CorkBanner,
  OtherTiles,
} from '../components/CourseCreative.jsx'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  // moved above the early return (hooks must run on every render)
  const [deviceView, setDeviceView] = useState('desktop')

  // Scroll to top when course changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!course) {
    return (
      <div className="sec text-center" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1>Course Not Found</h1>
        <p style={{ margin: '16px 0 24px', color: 'var(--soft)' }}>
          The course you are looking for does not exist or has been moved.
        </p>
        <Link to="/courses" className="btn green">
          Browse All Courses
        </Link>
      </div>
    )
  }

  const themeClass =
    course.slug === 'graphic-designing'
      ? 'cd-theme-gd'
      : course.slug === 'website-development'
      ? 'cd-theme-wd'
      : course.slug === 'office-administration'
      ? 'cd-theme-oa'
      : 'cd-theme-dm'

  const otherCourses = courses.filter((c) => c.slug !== course.slug)
  const heroImage = course.heroBg || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'

  return (
    <div className={`cd-page ${themeClass}`}>
      {/* creative design layer (scoped to .cx sections) */}
      <CourseCreativeStyle />

      {/* ── Breadcrumb ── */}
      <nav className="cd-crumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">›</span>
        <Link to="/courses">Courses</Link>
        <span aria-hidden="true">›</span>
        <span className="cur" aria-current="page">{course.id}</span>
      </nav>

      {/* ── Hero Section (Fixed Background Parallax Model) ── */}
      <section
        className="hero-parallax"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      >
        <img
          className="course-hero-image"
          src={heroImage}
          alt={`${course.id} course`}
        />
        <div className="hero-content">
          {/* <div className="hero-pill-badge">
            <span className="hero-badge-dot" />
            {course.slug === 'graphic-designing'
              ? '🎨 Creative Design Studio • Tirur Campus'
              : course.slug === 'website-development'
              ? '💻 Cyber Dev Studio • Full-Stack Web'
              : course.slug === 'office-administration'
              ? '🏛️ Executive Corporate Suite • Tirur Campus'
              : '⚡ AI & Growth Marketing • Tirur Campus'}
          </div> */}

          <h1>{course.id}</h1>
          <p className="hero-subtitle">{course.heroTitle ? course.heroTitle : `Best ${course.id} Course`}</p>

          <p className="hero-desc">{course.desc}</p>

          {/* Glass Pill Bar from Model */}
          <div className="feature-bar">
            <div className="feature">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <span>Experienced<br />Trainers</span>
            </div>
            <div className="feature">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
              <span>Updated<br />Learning plan</span>
            </div>
            <div className="feature">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 2v20" /></svg>
              <span>Flexible Learning</span>
            </div>
            <div className="feature">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 16l-4-4-4 4M12 12v9M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /></svg>
              <span>Practical<br />Training</span>
            </div>
          </div>

          {/* Course-Specific Tool & Tech Badges */}
          {course.slug === 'digital-marketing' && (
            <div className="hero-tools-strip">
              <span className="hero-tools-label" role="presentation">CAMPAIGN TOOLS:</span>
              <span className="hero-tool-badge">🎯 Meta Ads</span>
              <span className="hero-tool-badge">📈 Google Ads</span>
              <span className="hero-tool-badge">📊 GA4</span>
              <span className="hero-tool-badge">🔍 Semrush</span>
              <span className="hero-tool-badge">🤖 ChatGPT AI</span>
            </div>
          )}

          {course.slug === 'graphic-designing' && (
            <div className="hero-tools-strip">
              <span className="hero-tools-label" role="presentation">CREATIVE SUITE:</span>
              <span className="hero-tool-badge">🎨 Photoshop</span>
              <span className="hero-tool-badge">✒️ Illustrator</span>
              <span className="hero-tool-badge">📄 InDesign</span>
              <span className="hero-tool-badge">✨ Figma</span>
              <span className="hero-tool-badge">📐 CorelDRAW</span>
            </div>
          )}

          {course.slug === 'website-development' && (
            <div className="hero-tools-strip">
              <span className="hero-tools-label" role="presentation">WEB TECH STACK:</span>
              <span className="hero-tool-badge">⚡ HTML5 &amp; CSS3</span>
              <span className="hero-tool-badge">💛 JavaScript ES6+</span>
              <span className="hero-tool-badge">⚛️ React Components</span>
              <span className="hero-tool-badge">🔷 WordPress CMS</span>
              <span className="hero-tool-badge">🚀 Elementor Pro</span>
            </div>
          )}

          {course.slug === 'office-administration' && (
            <div className="hero-tools-strip">
              <span className="hero-tools-label" role="presentation">EXECUTIVE SUITE:</span>
              <span className="hero-tool-badge">📊 MS Excel Advanced</span>
              <span className="hero-tool-badge">📝 MS Word &amp; Docs</span>
              <span className="hero-tool-badge">📑 Executive PPT</span>
              <span className="hero-tool-badge">✉️ Corporate Etiquette</span>
            </div>
          )}

          {/* Hero CTAs */}
          <div className="hero-cta-group">
            <Link
              className="hero-btn-primary"
              to={'/contact?course=' + encodeURIComponent(course.id)}
            >
              Enroll Now →
            </Link>
            <a
              className="hero-btn-secondary"
              href={'tel:' + PHONE_TEL}
              aria-label="Call admissions"
            >
              Speak with Counselor
            </a>
          </div>
        </div>
      </section>

      {/* ── COURSE-SPECIFIC SHOWCASE SECTION ── */}

      {/* 1. Digital Marketing: 4-Stage Growth Funnel */}
      {course.slug === 'digital-marketing' && (
        <section className="sec dm-funnel-sec">
          {/* <div className="cd-sec-head">
            <span className="bg-sec-tag">Marketing Mastery</span>
            <h2>
              The 4-Stage <em>Growth Marketing Funnel</em>
            </h2>
            <p className="txt">
              Learn how top global digital marketing agencies drive traffic, generate qualified leads, and maximize return on ad spend (ROAS).
            </p>
          </div> */}
          <div className="dm-funnel-grid">
            <div className="dm-funnel-card">
              <span className="dm-funnel-num">Phase 01</span>
              <h3>Awareness &amp; SEO</h3>
              <p>Master keyword research, technical SEO audits, Google indexing, and viral social media reach to pull high-intent visitors.</p>
              <div className="dm-funnel-tags">
                <span className="dm-funnel-tag">SEO</span>
                <span className="dm-funnel-tag">Keyword Research</span>
                <span className="dm-funnel-tag">Viral Reels</span>
              </div>
            </div>
            <div className="dm-funnel-card">
              <span className="dm-funnel-num">Phase 02</span>
              <h3>Audience Consideration</h3>
              <p>Craft persuasive copy, brand storytelling, carousel creatives, and high-converting landing page experiences.</p>
              <div className="dm-funnel-tags">
                <span className="dm-funnel-tag">Copywriting</span>
                <span className="dm-funnel-tag">Lead Magnets</span>
                <span className="dm-funnel-tag">Canva Creatives</span>
              </div>
            </div>
            <div className="dm-funnel-card">
              <span className="dm-funnel-num">Phase 03</span>
              <h3>Paid Conversion &amp; PPC</h3>
              <p>Deploy real ad budgets across Meta Ads Manager and Google Ads Search/Display to generate verified customer inquiries.</p>
              <div className="dm-funnel-tags">
                <span className="dm-funnel-tag">Meta Ads</span>
                <span className="dm-funnel-tag">Google PPC</span>
                <span className="dm-funnel-tag">Retargeting</span>
              </div>
            </div>
            <div className="dm-funnel-card">
              <span className="dm-funnel-num">Phase 04</span>
              <h3>Analytics &amp; AI Scaling</h3>
              <p>Measure conversion tracking with Google Analytics 4, optimize bounce rates, and automate campaigns with modern AI tools.</p>
              <div className="dm-funnel-tags">
                <span className="dm-funnel-tag">GA4 Analytics</span>
                <span className="dm-funnel-tag">ROAS</span>
                <span className="dm-funnel-tag">AI Automation</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. Graphic Designing: 4-Step Creative Studio Pipeline */}
      {course.slug === 'graphic-designing' && (
        <section className="sec gd-pipeline-sec">
          {/* <div className="cd-sec-head">
            <span className="bg-sec-tag">Creative Studio Method</span>
            <h2>
              From Blank Canvas to <em>Client Masterpiece</em>
            </h2>
            <p className="txt">
              Our studio-based training takes you through the complete creative design lifecycle used by world-class branding agencies.
            </p>
          </div> */}
          <div className="gd-pipeline-grid">
            <div className="gd-pipeline-card">
              <span className="gd-pipeline-step">01</span>
              <h3>Conceptualize &amp; Moodboard</h3>
              <p>Deconstruct client briefs, gather creative references, and build inspiring moodboards that define emotional direction.</p>
              <div className="gd-swatches-row">
                <span className="gd-swatch" style={{ background: '#ec4899' }} />
                <span className="gd-swatch" style={{ background: '#8b5cf6' }} />
                <span className="gd-swatch" style={{ background: '#3b82f6' }} />
              </div>
            </div>
            <div className="gd-pipeline-card">
              <span className="gd-pipeline-step">02</span>
              <h3>Typography &amp; Color Psychology</h3>
              <p>Master visual hierarchy, font pairings, CMYK vs RGB color spaces, and brand identity psychology.</p>
              <div className="gd-swatches-row">
                <span className="gd-swatch" style={{ background: '#f43f5e' }} />
                <span className="gd-swatch" style={{ background: '#f59e0b' }} />
                <span className="gd-swatch" style={{ background: '#10b981' }} />
              </div>
            </div>
            <div className="gd-pipeline-card">
              <span className="gd-pipeline-step">03</span>
              <h3>Vector Craft &amp; Visual Mastery</h3>
              <p>Harness Adobe Photoshop &amp; Illustrator for commercial photo manipulation, vector logos, and social media branding.</p>
              <div className="gd-swatches-row">
                <span className="gd-swatch" style={{ background: '#06b6d4' }} />
                <span className="gd-swatch" style={{ background: '#6366f1' }} />
                <span className="gd-swatch" style={{ background: '#a855f7' }} />
              </div>
            </div>
            <div className="gd-pipeline-card">
              <span className="gd-pipeline-step">04</span>
              <h3>Portfolio Showcase &amp; Print Prep</h3>
              <p>Export pre-press packaging files and publish high-converting Behance &amp; Instagram design portfolios.</p>
              <div className="gd-swatches-row">
                <span className="gd-swatch" style={{ background: '#DE1184' }} />
                <span className="gd-swatch" style={{ background: '#eab308' }} />
                <span className="gd-swatch" style={{ background: '#14b8a6' }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Website Development: Interactive Multi-Device Switcher */}
      {course.slug === 'website-development' && (
        <section className="sec wd-device-sec">
          {/* <div className="cd-sec-head">
            <span className="bg-sec-tag">Interactive Preview</span>
            <h2>
              Test Responsive <em>Multi-Device Web Design</em>
            </h2>
            <p className="txt">
              See how websites crafted in our Tirur classroom adapt seamlessly across every screen size with fluid CSS &amp; modern layouts.
            </p>
          </div> */}

          <div className="wd-device-box">
            <div className="wd-device-controls" role="group" aria-label="Device Preview Toggle">
              <button
                type="button"
                className={`wd-device-btn ${deviceView === 'desktop' ? 'active' : ''}`}
                onClick={() => setDeviceView('desktop')}
              >
                🖥️ Desktop View (1200px)
              </button>
              <button
                type="button"
                className={`wd-device-btn ${deviceView === 'tablet' ? 'active' : ''}`}
                onClick={() => setDeviceView('tablet')}
              >
                💻 Tablet View (768px)
              </button>
              <button
                type="button"
                className={`wd-device-btn ${deviceView === 'mobile' ? 'active' : ''}`}
                onClick={() => setDeviceView('mobile')}
              >
                📱 Mobile View (375px)
              </button>
            </div>

            <div className={`wd-viewport-frame wd-viewport-${deviceView}`}>
              <div className="wd-viewport-screen">
                <div className="wd-screen-nav">
                  <span className="wd-screen-logo">&lt;OsforhDev /&gt;</span>
                  <span className="wd-screen-badge">{deviceView.toUpperCase()} MODE</span>
                </div>
                <div className="wd-screen-hero">
                  <h4>Fast, Accessible &amp; Responsive Web Experiences</h4>
                  <p>Built with HTML5 Semantic Architecture, CSS Grid &amp; Modern JavaScript</p>
                </div>
                <div className="wd-screen-cards">
                  <div className="wd-screen-mini">⚡ 100% PageSpeed</div>
                  <div className="wd-screen-mini">📱 Mobile-First</div>
                  <div className="wd-screen-mini">🛡️ Secure CMS</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Office Administration: Corporate Competency Matrix */}
      {course.slug === 'office-administration' && (
        <section className="sec oa-matrix-sec">

          {/* <div className="cd-sec-head">
            <span className="bg-sec-tag">Corporate Readiness</span>
            <h2>
              Executive Workplace <em>Competencies Matrix</em>
            </h2>
            <p className="txt">
              Equipping you with the high-demand professional competencies required by leading corporate firms and multinational organizations.
            </p>
          </div> */}
          
          <div className="oa-matrix-grid">
            <div className="oa-matrix-card">
              <div className="oa-matrix-icon">📊</div>
              <h3>Advanced MS Office &amp; Data</h3>
              <p>Master Excel pivot tables, VLOOKUP/XLOOKUP, formulas, data validation, and executive dashboard reporting.</p>
              <div className="oa-matrix-skills">
                <span className="oa-skill-pill">Excel Formulas</span>
                <span className="oa-skill-pill">Pivot Tables</span>
                <span className="oa-skill-pill">Word Formatting</span>
              </div>
            </div>
            <div className="oa-matrix-card">
              <div className="oa-matrix-icon">✉️</div>
              <h3>Corporate Communication</h3>
              <p>Draft official business correspondence, manage executive mail, prepare meeting minutes, and handle client inquiries.</p>
              <div className="oa-matrix-skills">
                <span className="oa-skill-pill">Email Etiquette</span>
                <span className="oa-skill-pill">Minutes of Meeting</span>
                <span className="oa-skill-pill">Client Relations</span>
              </div>
            </div>
            <div className="oa-matrix-card">
              <div className="oa-matrix-icon">📁</div>
              <h3>Office Infrastructure &amp; Cloud</h3>
              <p>Organize digital records, manage Google Workspace and Microsoft 365, archive files, and coordinate office inventory.</p>
              <div className="oa-matrix-skills">
                <span className="oa-skill-pill">Google Workspace</span>
                <span className="oa-skill-pill">Cloud Filing</span>
                <span className="oa-skill-pill">Data Security</span>
              </div>
            </div>
            <div className="oa-matrix-card">
              <div className="oa-matrix-icon">⏱️</div>
              <h3>Executive Time &amp; Operations</h3>
              <p>Coordinate executive calendars, schedule board meetings, prioritize workflows, and handle front-office operations with poise.</p>
              <div className="oa-matrix-skills">
                <span className="oa-skill-pill">Calendar Planning</span>
                <span className="oa-skill-pill">Task Prioritization</span>
                <span className="oa-skill-pill">Front-Office Ethics</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Why Choose Us ── */}
      {/* {course.whyChoose && (
        <section className="sec bg-why-sec">
          <div className="bg-why-grid">
            <div className="bg-why-quote-card">
              <div className="bg-sec-tag">Why Choose Us</div>
              <h2>
                Why Choose <br />
                <em>Osforh Learning Hub?</em>
              </h2>
              <p className="bg-quote-p">{course.whyChoose.quote}</p>
              <div className="bg-quote-action">
                <Link
                  to={'/contact?course=' + encodeURIComponent(course.id)}
                  className="btn green"
                >
                  Get Started Today →
                </Link>
              </div>
            </div>

            <div className="bg-why-points-col">
              {course.whyChoose.points.map((pt, idx) => (
                <div key={pt} className="bg-num-card">
                  <div className="bg-num-digit">0{idx + 1}</div>
                  <div className="bg-num-content">
                    <h3>{pt}</h3>
                    <p>
                      {idx === 0 &&
                        'Continuously updated syllabus matching modern company demands and AI algorithms.'}
                      {idx === 1 &&
                        'Direct coaching from working digital professionals with live campaign insights.'}
                      {idx === 2 &&
                        'Work on active live client projects, ad budgets, SEO audits, and social creatives.'}
                      {idx === 3 &&
                        'Recognized course completion certificate with 100% placement interview support.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* ── Institute Story / About Section ── */}
      {course.instituteStory && (
        <section className="sec alt bg-story-sec">
          <div className="bg-story-grid">
            <div className="bg-story-media">
              <div className="bg-media-frame">
                <img
                  src={course.instituteStory.image}
                  alt={course.instituteStory.title}
                  className="bg-media-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="bg-media-badge">
                  <span>100% Practical Training</span>
                </div>
              </div>
            </div>

            <div className="bg-story-copy">
              <div className="bg-sec-tag">About The Program</div>
              <h2>
                Best <em>{course.id}</em> {course.heroTitle && course.heroTitle.toLowerCase().includes('course') ? 'Course' : 'Institute'} in Tirur
              </h2>
              <div className="bg-story-paragraphs">
                {course.instituteStory.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="bg-story-action">
                <Link
                  className="btn green"
                  to={'/contact?course=' + encodeURIComponent(course.id)}
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Who Can Join ── */}
      {course.whoCanJoin && (
        <section className="sec bg-who-sec">
          {/* <div className="cd-sec-head">
            <span className="bg-sec-tag">Eligibility & Target</span>
            <h2>
              Who Can <em>Join This Course?</em>
            </h2>
            <p className="txt">{course.whoCanJoin.description}</p>
          </div> */}

          <div className="bg-who-grid">
            {course.whoCanJoin.profiles.map((prof, i) => (
              <div key={prof.role} className="bg-who-card">
                <div className="bg-who-top">
                  <span className="bg-who-num">0{i + 1}</span>
                  <span className="bg-who-icon">
                    {i === 0 ? '🎓' : i === 1 ? '💼' : i === 2 ? '🚀' : '📈'}
                  </span>
                </div>
                <h3>{prof.role}</h3>
                <p>{prof.desc}</p>
                <div className="bg-who-footer">
                  <span className="bg-who-tag">Target Audience</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Program Tracks ── */}
      {course.tracks && course.tracks.length > 0 && (
        <section className="sec alt bg-tracks-sec">
          {/* <div className="cd-sec-head">
            <span className="bg-sec-tag">Comprehensive Programs</span>
            <h2>
              Are You <em>Interested to Join?</em>
            </h2>
            <p className="txt">
              {course.tracksDescription ||
                'Choose from our specialized tracks ranging from fast-track certifications to full dual-skill diplomas.'}
            </p>
          </div> */}

          <div className="bg-tracks-list">
            {course.tracks.map((trk, i) => (
              <div key={trk.id} className="bg-track-card" style={{ '--tc': trk.color }}>
                <div className="bg-track-left">
                  <div className="bg-track-badge-row">
                    <span className="bg-track-badge">Track 0{i + 1}</span>
                    <span className="bg-track-pill">{trk.badge}</span>
                  </div>
                  <h3>{trk.title}</h3>

                  <div className="bg-track-topics-head">Key Modules &amp; Topics:</div>
                  <ul className="bg-track-topics">
                    {trk.topics.map((t) => (
                      <li key={t}>
                        <span className="bg-track-bullet" style={{ background: trk.color }} />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-track-info-card">
                    <div className="bg-info-title">📋 Course Information</div>
                    <div className="bg-info-grid">
                      <div className="bg-info-cell">
                        <span className="bg-info-lbl">Course Duration:</span>
                        <strong className="bg-info-val">{trk.duration}</strong>
                      </div>
                      <div className="bg-info-cell">
                        <span className="bg-info-lbl">Internship:</span>
                        <strong className="bg-info-val bg-intern-highlight">
                          {trk.internship}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="bg-track-actions">
                    <Link
                      to={'/contact?course=' + encodeURIComponent(trk.title)}
                      className="btn green"
                    >
                      Enroll in this Track →
                    </Link>
                  </div>
                </div>

                {trk.image && (
                  <div className="bg-track-right">
                    <div className="bg-track-img-container">
                      <img
                        src={trk.image}
                        alt={trk.title}
                        className="bg-track-img"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Key Learning Outcomes → "The course" sticky-note board ── */}
      {!course.tracks && course.learn && (
        <OutcomesBoard items={course.learn} title="What you will master" />
      )}

      {/* ── Modules for courses without tracks ── */}
      {!course.tracks && course.modules && course.modules.length > 0 && (
        <section className="sec alt cd-curriculum-sec">
          <div className="cd-sec-head">
            <span className="cd-subtag">Detailed Syllabus</span>
            <h2>
              Course Modules &amp; <em>Internship Details</em>
            </h2>
            <p className="txt">Comprehensive, step-by-step curriculum guided by industry practitioners.</p>
          </div>

          <div className="cd-modules-grid">
            {course.modules.map((mod, i) => (
              <div key={mod.title} className="cd-module-card">
                <div className="cd-module-top" style={{ '--mc': mod.color }}>
                  <div className="cd-module-badge">Module {i + 1}</div>
                  <div className="cd-module-head">
                    <span className="cd-module-icon">{mod.icon}</span>
                    <h3>{mod.title}</h3>
                  </div>
                </div>

                <div className="cd-module-body">
                  <div className="cd-topics-title">Topics Covered:</div>
                  <ul className="cd-topics-list">
                    {mod.topics.map((t) => (
                      <li key={t}>
                        <span className="cd-topic-bullet" style={{ background: mod.color }} />
                        {t}
                      </li>
                    ))}
                  </ul>

                  {mod.info && (
                    <div className="cd-info-box">
                      <div className="cd-info-box-title">📋 Course Information</div>
                      <div className="cd-info-row">
                        <span className="cd-info-lbl">Course Duration:</span>
                        <span className="cd-info-data">{mod.info.duration}</span>
                      </div>
                      <div className="cd-info-row">
                        <span className="cd-info-lbl">Internship:</span>
                        <span className="cd-info-data cd-intern-pill">{mod.info.internship}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Career Pathways → blue grid + paper plane ── */}
      {course.careers && course.careers.length > 0 && (
        <CareerBoard careers={course.careers} />
      )}

      {/* ── Final banner → cork board ── */}
      <CorkBanner course={course} />

      {/* ── Explore Other Courses → tile grid ── */}
      <OtherTiles items={otherCourses} />
    </div>
  )
}
