import { Link } from 'react-router-dom'

// One course card. `course.cardImage` is the extension-less base path of a
// 480w/800w AVIF + WebP set (see public/img/cards).
export default function CourseCard({ course, priority = false }) {
  const base = course.cardImage
  const to = '/courses/' + course.slug
  return (
    <article className="course-card">
      <Link to={to} className="course-card__media" tabIndex={-1} aria-hidden="true">
        {base ? (
          <picture>
            <source type="image/avif" srcSet={`${base}-480.avif 480w, ${base}-800.avif 800w`} sizes="(min-width:1020px) 25vw, (min-width:600px) 45vw, 92vw" />
            <source type="image/webp" srcSet={`${base}-480.webp 480w, ${base}-800.webp 800w`} sizes="(min-width:1020px) 25vw, (min-width:600px) 45vw, 92vw" />
            <img
              src={`${base}-800.webp`}
              alt=""
              width="800"
              height="533"
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
          </picture>
        ) : (
          <div className="course-card__fallback" dangerouslySetInnerHTML={{ __html: course.visual }} />
        )}
      </Link>

      <div className="course-card__body">
        <h3>{course.id}</h3>
        <p>{course.desc}</p>
        <ul className="course-card__tags" aria-label="Topics covered">
          {course.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <Link to={to} className="course-card__cta">
          Explore {course.id}
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  )
}
