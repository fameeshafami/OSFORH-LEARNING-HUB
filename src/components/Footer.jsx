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
          <nav className="footer-socials" aria-label="Social media">
            <a className="footer-social-link" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a className="footer-social-link" href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false"><path d="M14 8V6.5c0-.7.3-1 1.1-1H17V2h-2.8C11.3 2 10 3.7 10 6.2V8H7.5v3.5H10V22h4V11.5h2.7L17 8z" /></svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a className="footer-social-link" href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15V9l5.2 3z" /></svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a className="footer-social-link" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9.5h4V21H3zM9.5 9.5h3.8v1.6c.6-1 1.9-1.9 3.8-1.9 4 0 4.9 2.6 4.9 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4z" /></svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
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
        </div>
      </div>

      <div className="fb2">
        <span>&copy; {new Date().getFullYear()} Osforh Learning Hub. All rights reserved.</span>
        <span>Near bus stand, Tirur</span>
      </div>
    </footer>
  )
}
