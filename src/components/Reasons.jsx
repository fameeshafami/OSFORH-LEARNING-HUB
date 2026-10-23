import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../lib/asset.js'

const REASON_ITEMS = [
  {
    title: 'Structured Curriculum',
    desc: 'Get skill training from basic to advanced with an industry-recognized, structured course curriculum.',
    highlights: ['Beginner to Advanced', 'Industry-Recognized Curriculum'],
    tone: 'leaf',
    badgeNumber: '01',
    icon: 'img/benefits/curriculum.png',
  },
  {
    title: 'Practical Approach',
    desc: 'Acquire essential skills with a mentor-led, industry expert-guided, hands-on practical approach.',
    highlights: ['Mentor-Led Training', 'Expert Guidance', 'Hands-On Projects'],
    tone: 'green',
    badgeNumber: '02',
    icon: 'img/benefits/practical-approach.png',
  },
  {
    title: 'Unlimited Internship',
    desc: 'Get internship opportunities through engaging capstone assignments and live projects at Osforh Learning Hub.',
    highlights: ['Capstone Projects', 'Live Projects', 'Practical Experience'],
    tone: 'mint',
    badgeNumber: '03',
    icon: 'img/benefits/internship.png',
  },
  {
    title: 'Placement Assistance',
    desc: 'Get certified and receive guidance for resume preparation and interview techniques.',
    highlights: ['Resume Preparation', 'Interview Techniques', 'Career Guidance'],
    tone: 'deep',
    badgeNumber: '04',
    icon: 'img/benefits/placement-support.png',
  },
  {
    title: 'Career Opportunities',
    desc: 'By enrolling in our courses, you can access placement opportunities through our hiring partners.',
    highlights: ['Placement Opportunities', 'Industry Connections', 'Career Growth'],
    tone: 'leaf',
    badgeNumber: '05',
    icon: 'img/benefits/career-opportunities.png',
  },
]

const RESULTS_LIST = [
  'Industry-ready portfolio built with actual client campaigns and live assets',
  'Direct interview preparation, mock tests, and hiring network connections',
  'Lifelong access to workshops, masterclasses, and mentor support',
  'Recognized professional certification validated by enterprise standards',
]

const BEE_STYLE = `

/* Osforh Green Palette + Beegains Animated Layout */
#reasons.bee-reasons-root {
  --bee-primary: #FFFFFF;
  --bee-green: #215714;
  --bee-deep: #215714;
  --bee-leaf: #215714;
  --bee-mint: #FFFFFF;
  --bee-cream: #FFFFFF;
  --bee-ink: #215714;
  --bee-soft: #215714;
  --bee-line: rgba(33, 87, 20, 0.18);
  --bee-card-border: rgba(33, 87, 20, 0.14);
  --font-k2d: 'K2D', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  width: 100%;
  max-width: 100%;
  margin: 18px 0 0;
  border-radius: 28px;
  overflow: hidden;
  padding: clamp(48px, 7vw, 100px) clamp(20px, 4.5vw, 64px);
  position: relative;
  isolation: isolate;
  background: var(--bee-cream);
  font-family: var(--font-k2d);
  color: var(--bee-ink);
  overflow: hidden;
  border-radius: 0;
  box-sizing: border-box;
}

/* Dynamic background grid + soft radiant green gradients */
#reasons.bee-reasons-root::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -2;
  background-image: 
    radial-gradient(circle at 10% 15%, rgba(33, 87, 20, 0.12), transparent 35rem),
    radial-gradient(circle at 90% 40%, rgba(33, 87, 20, 0.1), transparent 38rem),
    radial-gradient(circle at 50% 90%, rgba(33, 87, 20, 0.25), transparent 32rem);
  pointer-events: none;
}

#reasons.bee-reasons-root::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.45;
  background-image: 
    linear-gradient(rgba(33, 87, 20, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(33, 87, 20, 0.05) 1px, transparent 1px);
  background-size: 38px 38px;
  pointer-events: none;
}

.bee-shell {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Header Section */
.bee-header {
  min-width: 0;
  margin: 0;
}

.bee-header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.bee-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  background: rgba(33, 87, 20, 0.12);
  border: 1px solid rgba(33, 87, 20, 0.24);
  border-radius: 999px;
  color: var(--bee-green);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px -4px rgba(33, 87, 20, 0.15);
}

.bee-spark-dot {
  width: 8px;
  height: 8px;
  background: var(--bee-leaf);
  border-radius: 50%;
  animation: beePing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.bee-rotating-seal {
  position: relative;
  width: 84px;
  height: 84px;
  display: grid;
  place-items: center;
}

.bee-seal-text {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: beeSpin 16s linear infinite;
  transform-origin: center center;
}

.bee-seal-text text {
  font-size: 10.5px;
  font-weight: 800;
  fill: var(--bee-green);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: var(--font-k2d);
}

.bee-seal-center {
  width: 36px;
  height: 36px;
  background: var(--bee-leaf);
  color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 17px;
  font-weight: 900;
  box-shadow: 0 6px 16px rgba(33, 87, 20, 0.4);
}

.bee-title-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.bee-main-title {
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.035em;
  text-transform: none;
  margin: 0;
  color: #000000;
}

.bee-text-blue {
  color: #000000;
  display: inline-block;
}

.bee-text-orange {
  color: #215714;
  display: inline-block;
  position: relative;
}

.bee-main-intro {
  max-width: 44ch;
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.65;
  color: var(--bee-soft);
  font-weight: 500;
  margin: 0;
}

.bee-about-link {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  padding: 0 20px;
  border: 1px solid var(--bee-green);
  border-radius: 4px;
  background: #FFFFFF;
  color: var(--bee-green);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 5px 14px rgba(33, 87, 20, .08);
  transition: color .2s ease, background .2s ease, transform .2s ease;
}

.bee-about-link:hover {
  transform: translateY(-2px);
  background: var(--bee-green);
  color: #FFFFFF;
}

/* Homepage benefits stats ribbon */
.bee-metrics-ribbon {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  width: 100vw;
  max-width: none;
  margin: 0 0 clamp(36px, 5vw, 60px) calc(50% - 50vw);
  padding: clamp(24px, 3vw, 38px) clamp(16px, 3vw, 36px);
  border-radius: 0;
  background: linear-gradient(110deg, #215714 0%, #2f761d 52%, #4b9228 100%);
  box-shadow: 0 16px 34px -14px rgba(33, 87, 20, .42);
}

.bee-metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;
  padding: 4px 10px;
  text-align: center;
}

.bee-metric-icon {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  color: #fff;
}

.bee-metric-icon svg {
  display: block;
  width: 28px;
  height: 28px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bee-metric-val {
  color: #fff;
  font-size: clamp(20px, 2.3vw, 32px);
  font-weight: 900;
  line-height: 1.15;
  text-wrap: balance;
}

.bee-metric-lbl {
  color: rgba(255, 255, 255, .9);
  font-size: clamp(11px, 1vw, 14px);
  font-weight: 600;
  line-height: 1.4;
  text-transform: none;
  letter-spacing: .01em;
}

@media (max-width: 700px) {
  .bee-metrics-ribbon {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 10px;
    padding: 26px 16px;
  }
  .bee-metric-item { padding: 4px 8px; }
  .bee-metric-val { font-size: clamp(18px, 4vw, 24px); }
  .bee-metric-lbl { font-size: 12px; }
}

@media (max-width: 380px) {
  .bee-metrics-ribbon { gap: 18px 6px; padding-inline: 10px; }
  .bee-metric-val { font-size: 17px; }
  .bee-metric-lbl { font-size: 11px; }
}

/* Wavy Flow Line Container */
.bee-flow-wrap {
  position: relative;
  min-width: 0;
}

.bee-feature-layout {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.bee-feature-layout .bee-flow-wrap,
.bee-feature-layout .bee-cards-grid {
  display: contents;
}

.bee-feature-layout > .bee-header {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  padding: 8px 12px 8px 0;
}

.bee-feature-layout .bee-cards-grid > :nth-child(1) { grid-column: 2; grid-row: 1; }
.bee-feature-layout .bee-cards-grid > :nth-child(2) { grid-column: 3; grid-row: 1; }
.bee-feature-layout .bee-cards-grid > :nth-child(3) { grid-column: 1; grid-row: 2; }
.bee-feature-layout .bee-cards-grid > :nth-child(4) { grid-column: 2; grid-row: 2; }
.bee-feature-layout .bee-cards-grid > :nth-child(5) { grid-column: 3; grid-row: 2; }

.bee-feature-layout .bee-cards-grid > :nth-child(1) { background: #f2f7ef; }
.bee-feature-layout .bee-cards-grid > :nth-child(2) { background: #eaf3e7; }
.bee-feature-layout .bee-cards-grid > :nth-child(3) { background: #f6f8f4; }
.bee-feature-layout .bee-cards-grid > :nth-child(4) { background: #edf5eb; }
.bee-feature-layout .bee-cards-grid > :nth-child(5) { background: #f1f6ee; }

@media (max-width: 1000px) {
  .bee-feature-layout { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bee-feature-layout > .bee-header { grid-column: 1 / -1; grid-row: auto; }
  .bee-feature-layout .bee-cards-grid > :nth-child(n) { grid-column: auto; grid-row: auto; }
}

@media (max-width: 640px) {
  .bee-feature-layout { grid-template-columns: minmax(0, 1fr); gap: 14px; }
  .bee-feature-layout > .bee-header { grid-column: 1; padding: 0 0 8px; }
  .bee-feature-layout .bee-cards-grid > :nth-child(n) { grid-column: auto; grid-row: auto; }
  .bee-card { min-height: 0; padding: 18px; }
}

.bee-card-top { justify-content: flex-start; }
.bee-tag { display: none; }

.bee-flow-svg-bg {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 90%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.65;
}

.bee-wavy-path {
  stroke-dasharray: 12 8;
  animation: beeDashMove 24s linear infinite;
}

/* Cards Grid */
.bee-cards-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 18px;
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
}

@media (min-width: 680px) {
  .bee-cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Individual Card */
.bee-card {
  position: relative;
  background: #FFFFFF;
  border-radius: 14px;
  padding: 20px;
  border: 1.5px solid var(--bee-card-border);
  box-shadow: 0 8px 24px -12px rgba(33, 87, 20, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  min-height: 0;
  align-self: start;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(28px);
}

.bee-card.bee-visible {
  opacity: 1;
  transform: translateY(0);
}

.bee-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px -12px rgba(33, 87, 20, 0.2);
  border-color: rgba(33, 87, 20, 0.35);
}

/* Top Floating Number Badge */
.bee-number-pill {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 17px;
  height: 8px;
  border-radius: 999px;
  background: rgba(33, 87, 20, .08);
  z-index: 10;
}

/* Card Content */
.bee-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.bee-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(33, 87, 20, 0.1);
  color: var(--bee-green);
  display: grid;
  place-items: center;
  padding: 7px;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6);
  transition: transform 0.4s ease, background 0.4s ease, color 0.4s ease;
}

.bee-card[data-tone="leaf"] .bee-icon-box {
  background: rgba(33, 87, 20, 0.12);
  color: var(--bee-leaf);
}
.bee-card[data-tone="mint"] .bee-icon-box {
  background: rgba(33, 87, 20, 0.25);
  color: var(--bee-green);
}

.bee-card:hover .bee-icon-box {
  transform: scale(1.1) rotate(-4deg);
}

.bee-card-svg {
  width: 100%;
  height: 100%;
}

.bee-card-icon {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.bee-tag {
  display: inline-block;
  padding: 5px 12px;
  background: rgba(33, 87, 20, 0.06);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--bee-green);
}

.bee-card-body h3 {
  margin: 10px 0 6px;
  font-size: clamp(17px, 1.35vw, 20px);
  font-weight: 800;
  line-height: 1.15;
  color: var(--bee-ink);
  letter-spacing: -0.025em;
}

.bee-card-body p {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: #52614e;
  font-weight: 500;
}

.bee-card-highlights {
  list-style: none;
  padding: 9px 0 0;
  margin: auto 0 0;
  border-top: 1px dashed var(--bee-line);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 7px 12px;
}

.bee-highlight-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  color: var(--bee-ink);
}

.bee-chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--bee-leaf);
}

.bee-card[data-tone="green"] .bee-chip-dot {
  background: var(--bee-green);
}


/* Beegains Signature "The Result:" Showcase Section in Forest Palette */
.bee-results-banner {
  margin-top: clamp(48px, 6vw, 80px);
  background: linear-gradient(145deg, #215714 0%, #215714 100%);
  border-radius: 36px;
  padding: clamp(32px, 5vw, 64px) clamp(24px, 4.5vw, 60px);
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 50px -15px rgba(33, 87, 20, 0.45);
}

.bee-results-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(33, 87, 20, 0.32), transparent 70%);
  pointer-events: none;
}

.bee-results-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  position: relative;
  z-index: 1;
}

@media (min-width: 960px) {
  .bee-results-grid {
    grid-template-columns: 0.85fr 1.15fr;
    align-items: center;
  }
}

.bee-results-intro h3 {
  font-size: clamp(36px, 4.5vw, 64px);
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 14px;
  line-height: 0.98;
  letter-spacing: -0.04em;
  color: #FFFFFF;
}

.bee-results-intro h3 span {
  color: var(--bee-primary);
}

.bee-results-intro p {
  font-size: 16px;
  line-height: 1.6;
  color: #FFFFFF;
  max-width: 420px;
  margin: 0 0 28px;
}

.bee-cta-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.bee-btn-orange {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--bee-leaf);
  color: #FFFFFF;
  font-family: var(--font-k2d);
  font-size: 16px;
  font-weight: 800;
  padding: 14px 28px;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(33, 87, 20, 0.45);
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.bee-btn-orange:hover {
  transform: translateY(-3px) scale(1.03);
  background: #6cd057;
  box-shadow: 0 14px 30px rgba(33, 87, 20, 0.6);
}

.bee-btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  border: 1.5px solid rgba(220, 239, 216, 0.45);
  color: #FFFFFF;
  font-family: var(--font-k2d);
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.bee-btn-ghost:hover {
  background: #FFFFFF;
  color: var(--bee-green);
  border-color: #FFFFFF;
  transform: translateY(-2px);
}

/* Result Checklist Items */
.bee-results-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.bee-result-row {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(220, 239, 216, 0.18);
  border-radius: 18px;
  padding: 16px 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(6px);
}

.bee-result-row:hover {
  background: rgba(33, 87, 20, 0.28);
  border-color: var(--bee-leaf);
  transform: translateX(8px);
}

.bee-result-arrow {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 11px solid #FFFFFF;
  flex-shrink: 0;
  animation: beeSlightMove 1.8s ease-in-out infinite;
}

.bee-result-text {
  font-size: clamp(14px, 1.2vw, 17px);
  font-weight: 700;
  line-height: 1.35;
  color: #FFFFFF;
}

/* Animations */
@keyframes beeSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes beePing {
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2.2); opacity: 0; }
}

@keyframes beeSlightMove {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

@keyframes beeDashMove {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: 1000; }
}

.bee-spin-slow {
  animation: beeSpin 24s linear infinite;
  transform-origin: center center;
}

.bee-pulse-glow {
  animation: beePing 2.5s ease-out infinite;
  transform-origin: center center;
}

.bee-wifi-wave {
  animation: beePulseWave 2s ease-in-out infinite alternate;
}

@keyframes beePulseWave {
  0% { opacity: 0.3; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1.05); }
}

.bee-thruster {
  animation: beeRocketFire 0.4s ease-in-out infinite alternate;
}

@keyframes beeRocketFire {
  0% { opacity: 0.6; transform: translateY(0); }
  100% { opacity: 1; transform: translateY(3px); }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .bee-card,
  .bee-seal-text,
  .bee-spark-dot,
  .bee-result-arrow,
  .bee-wavy-path,
  .bee-spin-slow,
  .bee-pulse-glow {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
`

export default function Reasons() {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.bee-card') ?? []
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('bee-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bee-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="rs bee-reasons-root"
      id="reasons"
      ref={containerRef}
      style={{ backgroundImage: `url("${asset('img/reasons-bg.png')}")` }}
    >
      <style>{BEE_STYLE}</style>

      <div className="bee-shell">
  {/* Live Metrics Ribbon */}
        <div className="bee-metrics-ribbon">
          <div className="bee-metric-item">
            <span className="bee-metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 5h16v11H4zM2 19h20M9 16l-1 3m7-3 1 3M8 9l2 2-2 2m4 0h3" /></svg>
            </span>
            <div>
              <div className="bee-metric-val">100% Practical</div>
              <div className="bee-metric-lbl">Project-Driven Labs</div>
            </div>
          </div>
          <div className="bee-metric-item">
            <span className="bee-metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5h8v2m-13 5h18m-11 0v2h4v-2" /></svg>
            </span>
            <div>
              <div className="bee-metric-val">Placement Support</div>
              <div className="bee-metric-lbl">Dedicated HR Mock Calls</div>
            </div>
          </div>
          <div className="bee-metric-item">
            <span className="bee-metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20zM16 11a3 3 0 1 0-1-5.8M17 14a5 5 0 0 1 3.5 4.8V20H17" /></svg>
            </span>
            <div>
              <div className="bee-metric-val">Expert Mentors</div>
              <div className="bee-metric-lbl">Active Agency Leads</div>
            </div>
          </div>
          <div className="bee-metric-item">
            <span className="bee-metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="m13 2-9 12h7l-1 8 10-13h-7z" /></svg>
            </span>
            <div>
              <div className="bee-metric-val">Hybrid Flexibility</div>
              <div className="bee-metric-lbl">Online &amp; Campus Mode</div>
            </div>
          </div>
        </div>


        <div className="bee-feature-layout">
          <header className="bee-header">
          <div className="bee-title-row">
            <div>
              <h2 className="bee-main-title">
                Here are a few reasons why{' '}
                <span className="bee-text-blue">You Should Choose</span>{' '}
                <span className="bee-text-orange">Osforh.</span>
              </h2>
            </div>
            <p className="bee-main-intro">
              Learning here is engineered to propel your career—with live commercial projects, direct mentor
              guidance, and placement assistance designed to give you an unfair advantage.
            </p>
            {/* <Link className="bee-about-link" to="/about">About Us</Link> */}
          </div>
          </header>

          <ol className="bee-cards-grid">
            {REASON_ITEMS.map((item) => (
              <li
                key={item.badgeNumber}
                className="bee-card"
                data-tone={item.tone}
              >
                <span className="bee-number-pill" aria-hidden="true" />

                <div className="bee-card-content">
                  <span className="bee-icon-box" aria-hidden="true">
                    <img className="bee-card-icon" src={asset(item.icon)} alt="" />
                  </span>
                  <div className="bee-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <ul className="bee-card-highlights" aria-label={`Key benefits of ${item.title}`}>
                  {item.highlights.map((point) => (
                    <li key={point} className="bee-highlight-chip">
                      <span className="bee-chip-dot" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Beegains Signature "The Result:" Banner in Osforh Hunter Palette */}
        <div className="bee-results-banner">
          <div className="bee-results-grid">
            <div className="bee-results-intro">
              <h3>
                The Result: <br />
                <span>Career Ready.</span>
              </h3>
              <p>
                Everything at Osforh is designed so you never step out with just theoretical notes.
                You step out with portfolio proofs, confidence, and enterprise readiness.
              </p>
              <div className="bee-cta-group">
                <Link to="/courses" className="bee-btn-orange">
                  <span>Explore Courses</span>
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link to="/contact" className="bee-btn-ghost">
                  <span>Talk to an Advisor</span>
                </Link>
              </div>
            </div>

            <div className="bee-results-list" role="list">
              {RESULTS_LIST.map((result, i) => (
                <div key={i} className="bee-result-row" role="listitem">
                  <div className="bee-result-arrow" aria-hidden="true" />
                  <span className="bee-result-text">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
