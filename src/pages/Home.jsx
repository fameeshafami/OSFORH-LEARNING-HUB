import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reasons from '../components/Reasons.jsx'
import AboutGrowthSection from '../components/AboutGrowthSection.jsx'


const MARQUEE = [
  'Digital Marketing',
  'Graphic Designing',
  'Website Development',
  'Office Administration',
  'Internships',
  'Placement Assistance',
]

const HERO_IMG = 'https://osforhlearninghub.in/wp-content/uploads/2025/10/mm-removebg-preview.webp'
const HERO_VIDEO = 'https://osforhlearninghub.in/wp-content/uploads/2025/05/WhatsApp-Video-2025-05-28-at-12.54.03-PM.mp4'

// Animated hero image scene + background video (scoped to .hv / .hvid only)
const HERO_STYLE = `
/* ---- background video ---- */
.hero .hi{ isolation:isolate; }
.hvid{
  position:absolute; inset:0; z-index:-1; overflow:hidden; pointer-events:none; display:block;
}
.hvid video{
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  animation:hvidIn 1.4s ease forwards; opacity:0;
}
@keyframes hvidIn{ to{ opacity:1 } }
.hvid::after{ /* light wash so the dark text stays readable */
  content:''; position:absolute; inset:0;

}

.hv{
  position:absolute; z-index:2; right:clamp(0px,3vw,70px); bottom:0;
  width:min(48vw,610px); display:none; pointer-events:none;
}
@media(min-width:960px){
  .hero{ min-height:clamp(700px,82svh,780px); }
  .hero .hi{ min-height:clamp(660px,78svh,730px); }
  .hv{ display:block; }
}

.hv .hv-stage{
  position:relative; width:100%; height:clamp(660px,78svh,730px); margin:0 auto;
}

/* soft blue blob behind everything */
.hv .hv-blob{
  position:absolute; left:2%; top:4%; width:86%; height:80%;
  background:radial-gradient(circle at 35% 35%,#dbe9ff,#e9f1ff 60%,transparent 72%);
  border-radius:58% 42% 55% 45% / 50% 55% 45% 50%;
  animation:hvBlob 9s ease-in-out infinite;
}
@keyframes hvBlob{
  0%,100%{ transform:scale(1) rotate(0deg) }
  50%{ transform:scale(1.08) rotate(6deg) }
}

/* phone outline */
.hv .hv-phone{
  position:absolute; left:28%; top:2%; width:36%; height:66%;
  border:7px solid #2f2f2f; border-radius:26px; background:#fff;
  box-shadow:0 18px 40px rgba(0,0,0,.14);
  transform:rotate(-3deg);
  animation:hvPhone 6s ease-in-out infinite;
}
.hv .hv-phone::before{
  content:''; position:absolute; top:8px; left:50%; translate:-50% 0;
  width:34%; height:7px; border-radius:8px; background:#2f2f2f;
}
@keyframes hvPhone{
  0%,100%{ transform:rotate(-3deg) translateY(0) }
  50%{ transform:rotate(1deg) translateY(-12px) }
}

/* avatar circle */
.hv .hv-avatar{
  position:absolute; left:-4%; top:17%; width:36%; aspect-ratio:1;
  border-radius:50%; border:7px solid #3f8ed8; background:#79b9f2; overflow:hidden;
  box-shadow:0 14px 30px rgba(63,142,216,.3);
  animation:hvFloat 5s ease-in-out infinite;
}
.hv .hv-avatar svg{ width:100%; height:100%; display:block; }
.hv .hv-avatar::after{
  content:''; position:absolute; inset:-7px; border-radius:50%;
  border:3px solid rgba(63,142,216,.5); animation:hvPulse 2.6s ease-out infinite;
}
@keyframes hvFloat{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-14px) } }
@keyframes hvPulse{ 0%{ transform:scale(1); opacity:.9 } 100%{ transform:scale(1.35); opacity:0 } }

/* spark burst */
.hv .hv-spark{
  position:absolute; left:3%; top:50%; width:11%; aspect-ratio:1;
  animation:hvSpark 3.2s ease-in-out infinite;
}
.hv .hv-spark i{
  position:absolute; left:50%; top:50%; width:3px; height:38%; background:#2f2f2f; border-radius:3px;
  transform-origin:50% 0; transform:rotate(var(--r)) translateY(32%);
}
@keyframes hvSpark{
  0%,100%{ transform:scale(.85) rotate(0deg); opacity:.7 }
  50%{ transform:scale(1.2) rotate(40deg); opacity:1 }
}

/* the woman */
.hv .hv-person{
  position:absolute; left:50%; bottom:0; translate:-34% 0;
  height:100%; width:auto; max-width:none; z-index:5;
  filter:drop-shadow(0 16px 24px rgba(0,0,0,.18));
  animation:hvBob 2.4s ease-in-out infinite;
}
@keyframes hvBob{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-14px) } }

/* floating dots */
.hv .hv-dot{ position:absolute; border-radius:50%; animation:hvFloat 5s ease-in-out infinite; }
.hv .d1{ width:16px; height:16px; right:4%; top:14%; background:#59B346; animation-delay:-1s; }
.hv .d2{ width:10px; height:10px; right:12%; top:46%; background:#2B5D36; animation-delay:-2.5s; }
.hv .d3{ width:22px; height:22px; left:14%; bottom:10%; border:4px solid #A6D99A; animation-delay:-3.5s; }

@media (prefers-reduced-motion:reduce){
  .hv *, .hv *::after{ animation:none !important }
  .hvid{ display:none }
}
`

export default function Home() {
  const heroRef = useRef(null)
  const bgtRef = useRef(null)
  const [playVideo, setPlayVideo] = useState(false)

  // hero intro animation + mouse parallax
  useLayoutEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let cancelled = false
    let cleanup = () => {}
    const hero = heroRef.current
    let raf = null
    let mx = 0
    let my = 0
    let tx = 0
    let ty = 0

    const updateParallax = () => {
      tx += (mx - tx) * 0.08
      ty += (my - ty) * 0.08
      if (bgtRef.current) bgtRef.current.style.translate = `${tx * 22}px ${ty * 10}px`

      if (Math.abs(mx - tx) > 0.001 || Math.abs(my - ty) > 0.001) {
        raf = requestAnimationFrame(updateParallax)
      } else {
        tx = mx
        ty = my
        raf = null
      }
    }
    const requestParallaxUpdate = () => {
      if (raf === null) raf = requestAnimationFrame(updateParallax)
    }
    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2
      my = ((e.clientY - r.top) / r.height - 0.5) * 2
      requestParallaxUpdate()
    }
    const onLeave = () => {
      mx = my = 0
      requestParallaxUpdate()
    }

    import('gsap')
      .then(({ default: gsap }) => {
        if (cancelled) return
        const ctx = gsap.context(() => {
          gsap.set('#h1 .ln>span', { y: '105%' })
          gsap.set('#bgt .l', { y: 60, opacity: 0 })
          gsap.set('#fig', { y: 90, opacity: 0 })
          gsap.set('#glow', { opacity: 0, scale: 0.6 })
          gsap.set('#sb,#ct,#nt', { opacity: 0, y: 20 })

          gsap
            .timeline({ defaults: { ease: 'power3.out' } })
            .to('#glow', { opacity: 1, scale: 1, duration: 1.1 }, 0.2)
            .to('#fig', { opacity: 1, y: 0, duration: 1.2, ease: 'back.out(1.3)' }, 0.2)
            .to('#bgt .l', { y: 0, opacity: 1, duration: 0.9, stagger: 0.07, ease: 'back.out(1.4)' }, 0.3)
            .to('#h1 .ln>span', { y: '0%', duration: 0.9, stagger: 0.12 }, 0.7)
            .to('#sb', { opacity: 1, y: 0, duration: 0.7 }, 1.1)
            .to('#ct', { opacity: 1, y: 0, duration: 0.7 }, 1.2)
            .to('#nt', { opacity: 1, y: 0, duration: 0.6 }, 1.35)
        }, hero)

        hero.addEventListener('pointermove', onMove)
        hero.addEventListener('pointerleave', onLeave)
        cleanup = () => {
          if (raf !== null) cancelAnimationFrame(raf)
          hero.removeEventListener('pointermove', onMove)
          hero.removeEventListener('pointerleave', onLeave)
          ctx.revert()
        }
      })
      .catch((error) => {
        console.error('Unable to load homepage animation.', error)
      })

    return () => {
      cancelled = true
      cleanup()
    }
  }, [])

  // Decorative background video: only on wide screens, never with reduced-motion / data-saver.
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 960px)')
    const calm = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saver = navigator.connection && navigator.connection.saveData
    let loaded = document.readyState === 'complete'
    let timer
    const update = () => {
      window.clearTimeout(timer)
      setPlayVideo(false)
      if (wide.matches && calm && !saver && loaded) {
        timer = window.setTimeout(() => setPlayVideo(true), 2500)
      }
    }
    const onLoad = () => {
      loaded = true
      update()
    }
    update()
    wide.addEventListener('change', update)
    window.addEventListener('load', onLoad, { once: true })
    return () => {
      window.clearTimeout(timer)
      wide.removeEventListener('change', update)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <>
      <style>{HERO_STYLE}</style>

      <section className="hero" id="hero" ref={heroRef}>
        <div className="hi">
          {/* background video */}
          {playVideo && (
            <div className="hvid" aria-hidden="true">
              <video src={HERO_VIDEO} autoPlay muted loop playsInline preload="none" tabIndex={-1} />
            </div>
          )}

          <div className="bgt" id="bgt" ref={bgtRef} aria-hidden="true">
            {['O', 'S', 'F', 'O', 'R', 'H'].map((ch, i) => (
              <span className="l" key={i}>{ch}</span>
            ))}
          </div>
          <div className="glow" id="glow" />

          {/* animated hero image scene (id="fig" so your GSAP intro animates it in) */}
          <div className="hv" id="fig" aria-hidden="true">
            <div className="hv-stage">
              {/* <div className="hv-blob" /> */}
              {/* <div className="hv-phone" /> */}

              {/* <div className="hv-avatar">
                <svg viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="#79b9f2" />
                  <path d="M50 18c-17 0-24 12-24 30v22h48V48c0-18-7-30-24-30z" fill="#1d1d1d" />
                  <ellipse cx="50" cy="46" rx="16" ry="19" fill="#ffd9bf" />
                  <path d="M34 36c6-2 12-8 16-13 4 5 10 11 16 13 0-14-8-20-16-20s-16 6-16 20z" fill="#1d1d1d" />
                  <path d="M43 50q3 3 6 0M52 50q3 3 6 0" stroke="#1d1d1d" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  <path d="M45 58q5 4 10 0" stroke="#e0705a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  <path d="M20 100c2-16 14-24 30-24s28 8 30 24z" fill="#ff6a3d" />
                  <path d="M42 76l8 8 8-8z" fill="#fff" />
                </svg>
              </div> */}

              <div className="hv-spark">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
                  <i key={r} style={{ '--r': r + 'deg' }} />
                ))}
              </div>

              <i className="hv-dot d1" />
              <i className="hv-dot d2" />
              <i className="hv-dot d3" />

              <img
                className="hv-person"
                src={HERO_IMG}
                alt="Student learning digital marketing at Osforh Learning Hub, Tirur"
                decoding="async"
                fetchPriority="high"
                width="433"
                height="576"
              />
            </div>
          </div>

          <div className="hl">
            <h1 id="h1" aria-label="Learn Today. Lead Tomorrow.">
              <span className="ln"><span>Learn Today.</span></span>
              <span className="ln"><span className="g">Lead Tomorrow.</span></span>
            </h1>
            <p className="sub" id="sb">Build Real-World Digital Skills. Create Your Future.</p>
          </div>

          <div className="cta" id="ct">
            <Link className="pill-dark" to="/courses">Explore Courses <i aria-hidden="true">↗</i></Link>
            <Link className="pill-ghost" to="/contact">Talk to an Advisor</Link>
          </div>

          <div className="note" id="nt">Online &amp; offline classes · Internships · Placement assistance</div>




        </div>

      </section>

      <div className="mq" aria-hidden="true">
        <div id="mq">
          {[0, 1].map((copy) => (
            <div className="mq-group" key={copy}>
              {MARQUEE.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Reasons />
      <AboutGrowthSection />
    </>
  )
}
