import { Link } from 'react-router-dom'

const POINTS = [
  'Project-based learning',
  'Practical training',
  'Faculty guidance',
  'Career preparation',
]

const STEPS = [
  ['01', 'Discover', 'Find the course that fits your interests and goals.'],
  ['02', 'Learn', 'Build strong foundations with guided classes.'],
  ['03', 'Practice', 'Apply what you learn to real-world exercises.'],
  ['04', 'Move forward', 'Build a portfolio and prepare for your career.'],
]

const BENEFITS = [
  ['Practical learning', 'Learn by doing, with projects built into every course.'],
  ['Personal guidance', 'Get support and feedback from experienced trainers.'],
  ['Career preparation', 'Build your portfolio, prepare your resume and explore internships.'],
]

const ABOUT_FEATURES = [
  {
    title: 'Industry-Relevant Curriculum',
    text: 'Learn current skills through a syllabus shaped around real workplace needs.',
    icon: <svg viewBox="0 0 24 24" fill="none"><path d="M4 5h16v12H4zM8 9h8M8 12h5M9 21h6m-3-4v4" /></svg>,
  },
  {
    title: 'Expert Trainers',
    text: 'Get personal guidance from experienced trainers and working professionals.',
    icon: <svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20zM16 11a3 3 0 1 0-1-5.8M17 14a5 5 0 0 1 3.5 4.8V20H17" /></svg>,
  },
  {
    title: 'Practical Projects & Tools',
    text: 'Practice with real projects and industry tools as you build your portfolio.',
    icon: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5h8v2m-13 5h18m-11 0v2h4v-2" /></svg>,
  },
  {
    title: 'Certification & Career Support',
    text: 'Prepare for your next step with certification and dedicated career guidance.',
    icon: <svg viewBox="0 0 24 24" fill="none"><path d="m12 3 2.2 2 3-.2.8 2.9 2.6 1.5-1 2.8 1 2.8-2.6 1.5-.8 2.9-3-.2-2.2 2-2.2-2-3 .2-.8-2.9-2.6-1.5 1-2.8-1-2.8L6 7.7l.8-2.9 3 .2z" /><path d="m9 12 2 2 4-4" /></svg>,
  },
]

const ABOUT_STYLE = `
.about-page {
  --about-green: #215714;
  --about-ink: #183222;
  --about-muted: #496152;
  --about-line: rgba(33, 87, 20, .16);
  color: var(--about-ink);
  background: #FFFFFF;
}
.about-page * { box-sizing: border-box; }
.about-wrap {
  width: min(100% - 40px, 1160px);
  margin: 0 auto;
}
.about-hero {
  display: grid;
  min-height: min(680px, 78svh);
  align-items: center;
  padding: clamp(64px, 9vw, 120px) 0;
  border-bottom: 1px solid var(--about-line);
}
.about-hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(260px, .85fr);
  align-items: center;
  gap: clamp(40px, 9vw, 120px);
}
.about-hero-inner > div:first-child {
  animation: about-fade-in .75s ease-out both;
}
.about-hero-mark {
  animation: about-fade-in .9s ease-out .15s both;
}
@keyframes about-fade-in {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.about-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 24px;
  color: var(--about-green);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.about-eyebrow::before {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--about-green);
  content: '';
}
.about-hero h1 {
  max-width: 13ch;
  margin: 0;
  color: var(--about-ink);
  font-size: clamp(42px, 6vw, 76px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -.055em;
}
.about-hero h1 span { color: var(--about-green); }
.about-hero-copy {
  max-width: 52ch;
  margin: 24px 0 0;
  color: var(--about-muted);
  font-size: clamp(16px, 1.5vw, 19px);
  line-height: 1.75;
}
.about-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}
.about-hero-actions a {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: 1px solid var(--about-green);
  border-radius: 999px;
  color: var(--about-green);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background .2s ease, color .2s ease, transform .2s ease;
}
.about-hero-actions a:first-child,
.about-hero-actions a:hover {
  background: var(--about-green);
  color: #FFFFFF;
}
.about-hero-actions a:hover { transform: translateY(-2px); }
.about-hero-mark {
  position: relative;
  display: grid;
  width: min(100%, 500px);
  aspect-ratio: 1;
  place-items: center;
  justify-self: center;
  border: 1px solid var(--about-line);
  border-radius: 50%;
}
.about-hero-mark::before,
.about-hero-mark::after {
  position: absolute;
  border: 1px solid var(--about-line);
  border-radius: 50%;
  content: '';
}
.about-hero-mark::before { inset: 10%; }
.about-hero-mark::after { inset: 22%; }
.about-hero-mark img {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about-section {
  padding: clamp(64px, 9vw, 112px) 0;
}
.about-section + .about-section { border-top: 1px solid var(--about-line); }
.about-section-heading {
  display: grid;
  grid-template-columns: minmax(0, .8fr) minmax(260px, 1fr);
  align-items: end;
  gap: 32px;
  margin-bottom: 40px;
}
.about-kicker {
  display: block;
  margin-bottom: 14px;
  color: var(--about-green);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.about-section h2 {
  max-width: 16ch;
  margin: 0;
  color: var(--about-ink);
  font-size: clamp(32px, 4.5vw, 54px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -.04em;
}
.about-section-intro {
  max-width: 56ch;
  margin: 0;
  color: var(--about-muted);
  font-size: 16px;
  line-height: 1.75;
}
.about-point-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}
.about-point {
  display: flex;
  min-height: 126px;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px;
  border: 1px solid var(--about-line);
  border-radius: 16px;
  background: #FFFFFF;
  color: var(--about-ink);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
}
.about-point span {
  color: var(--about-green);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .1em;
}
.about-journey { background: #FFFFFF; }
.about-journey-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--about-line);
}
.about-step {
  padding: 24px 24px 0 0;
}
.about-step + .about-step {
  padding-left: 24px;
  border-left: 1px solid var(--about-line);
}
.about-step-number {
  display: grid;
  width: 38px;
  height: 38px;
  margin-bottom: 26px;
  place-items: center;
  border-radius: 50%;
  background: var(--about-green);
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 800;
}
.about-step h3,
.about-benefit h3 {
  margin: 0 0 10px;
  color: var(--about-ink);
  font-size: 19px;
  font-weight: 700;
}
.about-step p,
.about-benefit p {
  margin: 0;
  color: var(--about-muted);
  font-size: 14px;
  line-height: 1.7;
}
.about-benefit-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.about-benefit {
  min-height: 190px;
  padding: 26px;
  border: 1px solid var(--about-line);
  border-radius: 18px;
  background: #FFFFFF;
}
.about-benefit-mark {
  display: grid;
  width: 38px;
  height: 38px;
  margin-bottom: 30px;
  place-items: center;
  border-radius: 12px;
  background: var(--about-green);
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 800;
}
.about-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: clamp(48px, 7vw, 88px);
  padding: clamp(28px, 5vw, 56px);
  border-radius: 22px;
  background: var(--about-green);
  color: #FFFFFF;
}
.about-next h2 {
  max-width: 15ch;
  margin: 0;
  color: inherit;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.1;
  letter-spacing: -.04em;
}
.about-next p {
  margin: 12px 0 0;
  color: rgba(255,255,255,.82);
  font-size: 15px;
  line-height: 1.6;
}
.about-next a {
  display: inline-flex;
  min-height: 48px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 999px;
  background: #FFFFFF;
  color: var(--about-green);
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: transform .2s ease;
}
.about-next a:hover { transform: translateY(-2px); }
@media (max-width: 760px) {
  .about-hero { min-height: 0; padding: 64px 0; }
  .about-hero-inner { grid-template-columns: 1fr; gap: 36px; }
  .about-hero-mark { width: min(65vw, 290px); }
  .about-section-heading { grid-template-columns: 1fr; gap: 18px; }
  .about-point-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .about-journey-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 24px; }
  .about-step:nth-child(3) { padding-left: 0; border-left: 0; }
  .about-step:nth-child(n + 3) { padding-top: 24px; border-top: 1px solid var(--about-line); }
  .about-benefit-grid { grid-template-columns: 1fr; }
  .about-benefit { min-height: 0; }
  .about-benefit-mark { margin-bottom: 20px; }
}
@media (max-width: 480px) {
  .about-wrap { width: min(100% - 32px, 1160px); }
  .about-hero h1 { font-size: clamp(40px, 12vw, 54px); }
  .about-point-grid { gap: 10px; }
  .about-point { min-height: 116px; padding: 16px; font-size: 14px; }
  .about-journey-grid { grid-template-columns: 1fr; }
  .about-step,
  .about-step + .about-step,
  .about-step:nth-child(3) {
    padding: 20px 0;
    border-left: 0;
    border-top: 1px solid var(--about-line);
  }
  .about-step:first-child { border-top: 0; }
  .about-step-number { margin-bottom: 16px; }
  .about-next { align-items: flex-start; flex-direction: column; }
}
@media (prefers-reduced-motion: reduce) {
  .about-page *,
  .about-page *::before,
  .about-page *::after { transition: none !important; }
  .about-hero-inner > div:first-child,
  .about-hero-mark { animation: none; opacity: 1; transform: none; }
}
`

export default function About() {
  return (
    <div className="about-page">
      <style>{ABOUT_STYLE}</style>

      <header className="about-hero">
        <div className="about-wrap about-hero-inner">
          <div>
            <span className="about-eyebrow">About Osforh · Tirur</span>
            <h1>Education that moves you <span>forward.</span></h1>
            <p className="about-hero-copy">
              Osforh Learning Hub helps students and beginners build practical digital and professional skills
              through hands-on training and supportive guidance.
            </p>
            <div className="about-hero-actions">
              <Link to="/courses">Explore our courses</Link>
              <Link to="/contact">Talk to our team</Link>
            </div>
          </div>
          <div className="about-hero-mark" aria-hidden="true">
            <img src="/img/b6c434fe-6efe-478e-a901-0384ec9041b7%20(1).png" alt="" />
          </div>
        </div>
      </header>

      <section className="about-feature" aria-labelledby="about-feature-title">
        <div className="about-feature-intro">
          <span className="about-feature-kicker">ABOUT OSFORH</span>
          <h2 id="about-feature-title">Why Choose Osforh Learning Hub?</h2>
          <p>
            We bridge learning and real-world application. Our career-focused courses combine
            practical training, expert guidance and portfolio-building projects to help you move
            forward with confidence.
          </p>
          <Link className="about-feature-cta" to="/courses">
            Explore our courses <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="about-feature-grid">
          {ABOUT_FEATURES.map((feature) => (
            <article className="about-feature-card" key={feature.title}>
              <span className="about-feature-icon" aria-hidden="true">{feature.icon}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrap">
          <div className="about-section-heading">
            <div>
              <span className="about-kicker">How we teach</span>
              <h2>Learn by doing, not just listening.</h2>
            </div>
            <p className="about-section-intro">
              Our courses start with the basics and focus on practical work, so you can build skills,
              confidence, and projects you are proud to show.
            </p>
          </div>
          <div className="about-point-grid">
            {POINTS.map((point, index) => (
              <div className="about-point" key={point}>
                <span>0{index + 1}</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-journey">
        <div className="about-wrap">
          <div className="about-section-heading">
            <div>
              <span className="about-kicker">Your learning journey</span>
              <h2>Start curious. Leave more confident.</h2>
            </div>
            <p className="about-section-intro">
              A clear path from your first class to work you can put in your portfolio.
            </p>
          </div>
          <div className="about-journey-grid">
            {STEPS.map(([number, title, description]) => (
              <article className="about-step" key={number}>
                <span className="about-step-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrap">
          <div className="about-section-heading">
            <div>
              <span className="about-kicker">Why learn with us</span>
              <h2>Support that goes beyond the classroom.</h2>
            </div>
            <p className="about-section-intro">
              Practical training, personal support, and guidance to help you take your next step.
            </p>
          </div>
          <div className="about-benefit-grid">
            {BENEFITS.map(([title, description], index) => (
              <article className="about-benefit" key={title}>
                <span className="about-benefit-mark" aria-hidden="true">{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <aside className="about-wrap about-next">
        <div>
          <h2>Ready to take your next step?</h2>
          <p>Find the right course and start building practical skills.</p>
        </div>
        <Link to="/courses">View our courses <span aria-hidden="true">↗</span></Link>
      </aside>
    </div>
  )
}
