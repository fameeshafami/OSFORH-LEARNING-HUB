import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="sec notfound" aria-labelledby="nf-title">
      <p className="notfound__code" aria-hidden="true">404</p>
      <h1 id="nf-title">We couldn&apos;t find that page</h1>
      <p>The link may be outdated. Head back home or browse our courses.</p>
      <div className="notfound__actions">
        <Link className="btn green" to="/">Back to Home</Link>
        <Link className="pill-ghost" to="/courses">Browse Courses</Link>
      </div>
    </section>
  )
}
