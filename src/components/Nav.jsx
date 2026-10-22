import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import LogoMark from './Logo.jsx'
import Clock from './Clock.jsx'
import { NAV_LINKS, COURSE_LINKS } from '../data/site.js'

// hover-to-open only on wide, hover-capable screens; touch/mobile uses the toggle button
const canHover = () => window.matchMedia('(min-width: 901px) and (hover: hover)').matches

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const { pathname } = useLocation()
  const navRef = useRef(null)

  // close menus on route change
  useEffect(() => {
    setOpen(false)
    setDdOpen(false)
  }, [pathname])

  // close on outside tap / Escape
  useEffect(() => {
    const onPointer = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
        setDdOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setDdOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const coursesActive = pathname.startsWith('/courses')

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main" ref={navRef}>
        <Link className="logo" to="/" aria-label="Osforh Learning Hub, home">
          <LogoMark />
        </Link>

        <ul className={'links' + (open ? ' open' : '')} id="site-menu">
          {NAV_LINKS.map((l) => {
            if (l.to !== '/courses') {
              return (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'on' : undefined)}>
                    {l.label}
                  </NavLink>
                </li>
              )
            }
            return (
              <li
                key={l.to}
                className={'nav-item-dropdown' + (ddOpen ? ' dd-open' : '')}
                onMouseEnter={() => canHover() && setDdOpen(true)}
                onMouseLeave={() => canHover() && setDdOpen(false)}
              >
                <div className="nav-dd-trigger-row">
                  <NavLink to={l.to} className={coursesActive ? 'on' : undefined}>
                    Courses
                  </NavLink>
                  <button
                    type="button"
                    className="nav-dd-toggle"
                    aria-label="Show course list"
                    aria-expanded={ddOpen}
                    aria-controls="course-menu"
                    onClick={() => setDdOpen((o) => !o)}
                  >
                    <span aria-hidden="true">{ddOpen ? '▴' : '▾'}</span>
                  </button>
                </div>
                <div className={'nav-dropdown-menu' + (ddOpen ? ' show' : '')} id="course-menu">
                  {COURSE_LINKS.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className={'nav-dropdown-link' + (pathname === c.to ? ' active' : '')}
                      aria-current={pathname === c.to ? 'page' : undefined}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </li>
            )
          })}
        </ul>

        <div className="nr">
          <div className="tz">
            <span>Tirur, Kerala</span>
            <Clock />
          </div>
          <button
            type="button"
            className="menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}
