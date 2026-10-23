import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import FloatingActions from './FloatingActions.jsx'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Scroll to top on page change and (re)attach the scroll-reveal observer.
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
    else {
      // in-page anchors (e.g. /contact#fm) – HashRouter owns the URL hash, so scroll manually
      const target = document.getElementById(hash.slice(1))
      if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }

    const els = document.querySelectorAll('.rv, .rmap')
    const sections = document.querySelectorAll('#main section')
    sections.forEach((section) => {
      const siblingSections = Array.from(section.parentElement.children).filter(
        (sibling) => sibling.tagName === 'SECTION'
      )
      const stagger = Math.min(siblingSections.indexOf(section), 4) * 90
      section.style.setProperty('--section-reveal-delay', `${stagger}ms`)
      section.classList.add('section-reveal')
    })

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      els.forEach((el) => el.classList.add('in'))
      sections.forEach((section) => section.classList.add('section-reveal-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            e.target.classList.add('section-reveal-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    sections.forEach((section) => io.observe(section))
    return () => io.disconnect()
  }, [pathname, hash])

  // keep the page title meaningful per route (SEO + screen readers)
  useEffect(() => {
    const names = { '/': 'Learn Today. Lead Tomorrow.', '/about': 'About Us', '/courses': 'Courses', '/testimonial': 'Student Testimonials', '/contact': 'Contact & Enquiry' }
    const base = 'Osforh Learning Hub, Tirur'
    const name = names[pathname] || (pathname.startsWith('/courses/') ? 'Course Details' : 'Page not found')
    document.title = pathname === '/' ? `${base} | ${name}` : `${name} | ${base}`
  }, [pathname])

  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main')?.focus()
        }}
      >Skip to main content</a>
      <Nav />
      <FloatingActions />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
