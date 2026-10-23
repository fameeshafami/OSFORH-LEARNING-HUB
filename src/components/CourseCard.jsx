import { Link } from 'react-router-dom'

const COURSE_ICONS = {
  'digital-marketing': (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5m0 14h16M7 15l4-4 3 2 5-6M16 7h3v3" />
    </svg>
  ),
  'graphic-designing': (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m4 16 9-9 4 4-9 9H4zM13 7l2-2a2.8 2.8 0 0 1 4 4l-2 2M4 20h16" />
    </svg>
  ),
  'website-development': (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" />
    </svg>
  ),
  'office-administration': (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
}

export default function CourseCard({ course }) {
  const to = '/courses/' + course.slug
  return (
    <article className="course-card">
      <div className="course-card__body">
        <span className="course-card__icon" aria-hidden="true">
          {COURSE_ICONS[course.slug] || COURSE_ICONS['digital-marketing']}
        </span>
        <h3>{course.id}</h3>
        <p className="course-card__topics">{course.tags.slice(0, 3).join(' · ')}</p>
        <p>{course.desc}</p>
        <Link to={to} className="course-card__cta">
          Explore course
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  )
}
