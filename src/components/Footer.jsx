import { Link } from 'react-router-dom'
import LogoMark from './Logo.jsx'
import { NAV_LINKS, COURSE_LINKS, SOCIAL, EMAIL, PHONE_TEL, PHONE_TEXT } from '../data/site.js'

// The one and only footer – rendered once by <Layout />. Pages must not add their own.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="fg">
        <div>
          <Link className="logo logo--footer" to="/" aria-label="Osforh Learning Hub, home">
            <LogoMark height={40} />
          </Link>
          <p>Practical digital and professional skills training in Tirur, Kerala.</p>
        </div>

        <nav aria-label="Pages">
          <h2 className="fh">Pages</h2>
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>

        <nav aria-label="Courses">
          <h2 className="fh">Courses</h2>
          {COURSE_LINKS.map((c) => (
            <Link key={c.to} to={c.to}>{c.label}</Link>
          ))}
        </nav>

        <div>
          <h2 className="fh">Connect</h2>
          <a href={'tel:' + PHONE_TEL}>{PHONE_TEXT}</a>
          <a href={'mailto:' + EMAIL}>{EMAIL}</a>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">Instagram<span className="sr-only"> (opens in a new tab)</span></a>
          <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">Facebook<span className="sr-only"> (opens in a new tab)</span></a>
          <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer">YouTube<span className="sr-only"> (opens in a new tab)</span></a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>

      <div className="fb2">
        <span>&copy; {new Date().getFullYear()} Osforh Learning Hub. All rights reserved.</span>
        <span>Forza 2, near bus stand, Tirur</span>
      </div>
    </footer>
  )
}
