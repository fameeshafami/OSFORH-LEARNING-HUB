import { Link } from 'react-router-dom'
import Reasons from '../components/Reasons.jsx'
import { courses } from '../data/courses.js'

const COURSE_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" key="marketing">
    <path d="M4 19V5m0 14h16M7 15l4-4 3 2 5-6M16 7h3v3" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" key="design">
    <path d="m4 16 9-9 4 4-9 9H4zM13 7l2-2a2.8 2.8 0 0 1 4 4l-2 2M4 20h16" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" key="web">
    <circle cx="12" cy="12" r="9" />
    <path d="M3.5 12h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" key="office">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>,
]

export default function Home() {
  return (
    <>
      <section className="hero home-hero" id="hero">
        <div className="hi">
          <div className="hero-copy">
            <div className="hl">
              {/* <span className="hero-eyebrow">OSFORH LEARNING HUB · TIRUR</span> */}
              <h1 id="h1" aria-label="Build Skills. Accelerate Your Career. Shape Your Future.">
                <span className="ln"><span>Build Skills</span></span>
                <span className="ln"><span className="g">Accelerate Your Career</span></span>
                <span className="ln"><span>Shape Your Future</span></span>
              </h1>
              <p className="sub">
                Learn in-demand digital and professional skills, gain hands-on experience, and build
                the confidence to take your career to the next level with Osforh Learning Hub.
              </p>
            </div>

            <div className="cta">
              <Link className="pill-dark" to="/courses">Explore Courses <i aria-hidden="true">↗</i></Link>
              <Link className="pill-ghost" to="/contact">Talk to an Advisor</Link>
              <Link className="hero-link" to="/testimonial">Student Stories</Link>
              <Link className="hero-link" to="/about">About Osforh</Link>
            </div>

            <div className="note">Online &amp; offline classes · Internships · Placement assistance</div>
          </div>
        </div>
      </section>

      <section className="home-courses" aria-labelledby="home-courses-title">
        <header className="home-courses-heading">
          <span>LEARN WITH OSFORH</span>
          <h2 id="home-courses-title">Courses for your next step</h2>
          <p>Practical, career-focused learning built around real-world skills.</p>
        </header>
        <div className="home-course-grid">
          {courses.map((course, index) => (
            <Link className="home-course-card" to={`/courses/${course.slug}`} key={course.slug}>
              <span className="home-course-icon" aria-hidden="true">{COURSE_ICONS[index]}</span>
              <h3>{course.id}</h3>
              <span className="home-course-tags">{course.tags.slice(0, 3).join(' · ')}</span>
              <p>{course.desc}</p>
              <span className="home-course-link">Explore course <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <Reasons />
    </>
  )
}
