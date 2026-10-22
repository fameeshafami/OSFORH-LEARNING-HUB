import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { REASONS } from '../data/site.js'

const REASON_ITEMS = [
  {
    title: REASONS[0] || 'Job-oriented training',
    // tag: '100% Practical',
    desc: 'Work on live commercial briefs and industry-standard tools from day one to build job-ready practical mastery.',
    highlights: ['Live Client Projects', 'Real Workflow Simulations', 'Zero Theoretical Fluff'],
    tone: 'leaf',
    badgeNumber: '01',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="bee-card-svg" aria-hidden="true">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" className="bee-spin-slow" />
        <rect x="14" y="22" width="36" height="26" rx="6" stroke="currentColor" strokeWidth="2.5" fill="rgba(255,255,255,0.15)" />
        <path d="M24 22V17C24 14.8 25.8 13 28 13H36C38.2 13 40 14.8 40 17V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 31H50" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="32" cy="36" r="4.5" fill="currentColor" />
        <path d="M32 40.5V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="48" cy="18" r="3" fill="#A6D99A" className="bee-pulse-glow" />
      </svg>
    ),
  },
  {
    title: REASONS[1] || 'Placement assistance',
    // tag: 'Career Launch',
    desc: 'Get dedicated 1-on-1 interview drill-downs, portfolio critiques, and direct interview pipelines with hiring partners.',
    highlights: ['Mock Technical Interviews', 'Resume & LinkedIn Optimization', 'Direct Hiring Connects'],
    tone: 'green',
    badgeNumber: '02',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="bee-card-svg" aria-hidden="true">
        <path d="M32 10L42 22C42 22 47 34 40 44L32 54L24 44C17 34 22 22 22 22L32 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.15)" />
        <circle cx="32" cy="27" r="4.5" fill="currentColor" />
        <path d="M22 36L14 42L18 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 36L50 42L46 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 50L32 58L36 50" stroke="#59B346" strokeWidth="3" strokeLinecap="round" className="bee-thruster" />
        <circle cx="16" cy="18" r="2.5" fill="#A6D99A" className="bee-pulse-glow" />
      </svg>
    ),
  },
  {
    title: REASONS[2] || 'Online and offline internship',
    // tag: 'Hybrid Flexibility',
    desc: 'Balance your schedule with immersive campus workshops or high-touch remote internships with real agency teams.',
    highlights: ['Campus Labs & Tech Studio', 'Remote Agile Collaboration', 'Flexible Sprint Schedules'],
    tone: 'mint',
    badgeNumber: '03',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="bee-card-svg" aria-hidden="true">
        <rect x="12" y="16" width="40" height="26" rx="4" stroke="currentColor" strokeWidth="2.5" fill="rgba(255,255,255,0.15)" />
        <path d="M8 46H56C57.1 46 58 45.1 58 44V42H6V44C6 45.1 6.9 46 8 46Z" fill="currentColor" />
        <circle cx="32" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M22 28H42M32 18V38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M45 10C48 13 49 17 48 20" stroke="#59B346" strokeWidth="2.5" strokeLinecap="round" className="bee-wifi-wave" />
        <path d="M51 6C56 11 57 18 55 24" stroke="#59B346" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    title: REASONS[3] || 'Highly experienced faculties',
    // tag: 'Industry Leads',
    desc: 'Learn directly from seasoned practitioners and studio leads who bring frontline agency expertise to every class.',
    highlights: ['Senior Creative Directors', 'Technical Strategists', 'Personalized Mentorship'],
    tone: 'deep',
    badgeNumber: '04',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="bee-card-svg" aria-hidden="true">
        <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2.5" fill="rgba(255,255,255,0.15)" />
        <path d="M14 50C14 41 22 37 32 37C42 37 50 41 50 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 10L34 16L40 16L35 20L37 26L32 22L27 26L29 20L24 16L30 16L32 10Z" fill="#A6D99A" />
        <circle cx="50" cy="24" r="3" fill="#59B346" className="bee-pulse-glow" />
      </svg>
    ),
  },
  {
    title: REASONS[4] || 'Industry-recognized certificate',
    // tag: 'Verified Credential',
    desc: 'Graduate with an official, verifiable certificate that carries genuine credibility with recruiters and enterprises.',
    highlights: ['QR-Verifiable Credentials', 'Employer Endorsements', 'LinkedIn Badge Integration'],
    tone: 'leaf',
    badgeNumber: '05',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="bee-card-svg" aria-hidden="true">
        <rect x="14" y="12" width="36" height="42" rx="5" stroke="currentColor" strokeWidth="2.5" fill="rgba(255,255,255,0.15)" />
        <path d="M22 22H42M22 28H36M22 34H30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="42" cy="40" r="9" fill="#2B5D36" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M39 40L41 42L45 38" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M39 48L37 54L42 51L47 54L45 48" fill="#59B346" />
      </svg>
    ),
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
  --bee-primary: #A6D99A;
  --bee-green: #2B5D36;
  --bee-deep: #1E4528;
  --bee-leaf: #59B346;
  --bee-mint: #DCEFD8;
  --bee-cream: #F2F8F1;
  --bee-ink: #183222;
  --bee-soft: #496152;
  --bee-line: #D6E6D3;
  --bee-card-border: rgba(43, 93, 54, 0.14);
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
    radial-gradient(circle at 10% 15%, rgba(89, 179, 70, 0.12), transparent 35rem),
    radial-gradient(circle at 90% 40%, rgba(43, 93, 54, 0.1), transparent 38rem),
    radial-gradient(circle at 50% 90%, rgba(166, 217, 154, 0.25), transparent 32rem);
  pointer-events: none;
}

#reasons.bee-reasons-root::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.45;
  background-image: 
    linear-gradient(rgba(43, 93, 54, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(43, 93, 54, 0.05) 1px, transparent 1px);
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: clamp(36px, 5vw, 64px);
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
  background: rgba(89, 179, 70, 0.12);
  border: 1px solid rgba(43, 93, 54, 0.24);
  border-radius: 999px;
  color: var(--bee-green);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px -4px rgba(43, 93, 54, 0.15);
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
  box-shadow: 0 6px 16px rgba(89, 179, 70, 0.4);
}

.bee-title-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.bee-main-title {
  font-size: clamp(34px, 5.2vw, 68px);
  font-weight: 900;
  line-height: 0.98;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin: 0;
  color: var(--bee-ink);
}

.bee-text-blue {
  color: var(--bee-green);
  display: inline-block;
}

.bee-text-orange {
  color: var(--bee-leaf);
  display: inline-block;
  position: relative;
}

.bee-main-intro {
  max-width: 480px;
  font-size: clamp(15px, 1.25vw, 18px);
  line-height: 1.55;
  color: var(--bee-soft);
  font-weight: 500;
  margin: 0;
}

/* Interactive Metrics Ribbon */
.bee-metrics-ribbon {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: clamp(36px, 5vw, 60px);
  padding: 18px 24px;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid var(--bee-line);
  box-shadow: 0 12px 28px -10px rgba(43, 93, 54, 0.08);
}

.bee-metric-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 12px;
}

.bee-metric-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(43, 93, 54, 0.08);
  color: var(--bee-green);
  display: grid;
  place-items: center;
  font-size: 18px;
  flex-shrink: 0;
}

.bee-metric-item:nth-child(even) .bee-metric-icon {
  background: rgba(89, 179, 70, 0.12);
  color: var(--bee-leaf);
}

.bee-metric-val {
  font-size: 17px;
  font-weight: 800;
  color: var(--bee-ink);
  line-height: 1.1;
}

.bee-metric-lbl {
  font-size: 12px;
  color: var(--bee-soft);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Wavy Flow Line Container */
.bee-flow-wrap {
  position: relative;
  margin-bottom: clamp(48px, 6vw, 76px);
}

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
  gap: clamp(28px, 3.5vw, 36px);
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

@media (min-width: 1080px) {
  .bee-cards-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .bee-card-featured {
    grid-column: span 1;
  }
  .bee-cards-grid > :nth-child(4) {
    grid-column: 1 / span 1;
    margin-left: auto;
    width: 100%;
  }
  .bee-cards-grid > :nth-child(5) {
    grid-column: 2 / span 2;
    max-width: 100%;
  }
}

/* Individual Card */
.bee-card {
  position: relative;
  background: #FFFFFF;
  border-radius: 32px;
  padding: 38px 28px 28px;
  border: 1.5px solid var(--bee-card-border);
  box-shadow: 0 18px 40px -15px rgba(43, 93, 54, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(28px);
}

.bee-card.bee-visible {
  opacity: 1;
  transform: translateY(0);
}

.bee-card:hover {
  transform: translateY(-8px) scale(1.015);
  box-shadow: 0 28px 56px -16px rgba(43, 93, 54, 0.22);
  border-color: rgba(43, 93, 54, 0.35);
}

/* Top Floating Number Badge */
.bee-number-pill {
  position: absolute;
  top: -20px;
  right: 28px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #FFFFFF;
  color: var(--bee-green);
  font-size: 19px;
  font-weight: 900;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 24px -4px rgba(43, 93, 54, 0.3);
  border: 3px solid #FFFDF9;
  z-index: 10;
  transition: transform 0.35s ease, background 0.35s ease, color 0.35s ease;
}

.bee-card:hover .bee-number-pill {
  transform: scale(1.12) rotate(8deg);
  background: var(--bee-leaf);
  color: #FFFFFF;
  box-shadow: 0 12px 28px -4px rgba(89, 179, 70, 0.5);
}

/* Card Themes */
.bee-card[data-tone="leaf"]:hover {
  border-color: rgba(89, 179, 70, 0.45);
  box-shadow: 0 28px 56px -16px rgba(89, 179, 70, 0.26);
}

.bee-card[data-tone="green"] .bee-number-pill {
  color: var(--bee-green);
  box-shadow: 0 10px 24px -4px rgba(43, 93, 54, 0.3);
}

.bee-card[data-tone="green"]:hover .bee-number-pill {
  background: var(--bee-green);
  color: #FFFFFF;
}

/* Card Content */
.bee-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.bee-icon-box {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: rgba(43, 93, 54, 0.08);
  color: var(--bee-green);
  display: grid;
  place-items: center;
  padding: 10px;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6);
  transition: transform 0.4s ease, background 0.4s ease, color 0.4s ease;
}

.bee-card[data-tone="leaf"] .bee-icon-box {
  background: rgba(89, 179, 70, 0.12);
  color: var(--bee-leaf);
}
.bee-card[data-tone="mint"] .bee-icon-box {
  background: rgba(166, 217, 154, 0.25);
  color: var(--bee-green);
}

.bee-card:hover .bee-icon-box {
  transform: scale(1.1) rotate(-4deg);
}

.bee-card-svg {
  width: 100%;
  height: 100%;
}

.bee-tag {
  display: inline-block;
  padding: 5px 12px;
  background: rgba(43, 93, 54, 0.06);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--bee-green);
}

.bee-card-body h3 {
  margin: 14px 0 10px;
  font-size: clamp(20px, 1.8vw, 25px);
  font-weight: 800;
  line-height: 1.15;
  color: var(--bee-ink);
  letter-spacing: -0.025em;
}

.bee-card-body p {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--bee-soft);
  font-weight: 500;
}

.bee-card-highlights {
  list-style: none;
  padding: 16px 0 0;
  margin: 16px 0 0;
  border-top: 1px dashed var(--bee-line);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bee-highlight-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
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

/* Card 5 horizontal expansion on large screens */
@media (min-width: 1080px) {
  .bee-cards-grid > :nth-child(5) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 32px;
    padding: 32px 36px;
  }
  .bee-cards-grid > :nth-child(5) .bee-card-top {
    flex-direction: column;
  }
  .bee-cards-grid > :nth-child(5) .bee-card-highlights {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
}

/* Beegains Signature "The Result:" Showcase Section in Forest Palette */
.bee-results-banner {
  margin-top: clamp(48px, 6vw, 80px);
  background: linear-gradient(145deg, #1E4528 0%, #102C1A 100%);
  border-radius: 36px;
  padding: clamp(32px, 5vw, 64px) clamp(24px, 4.5vw, 60px);
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 50px -15px rgba(30, 69, 40, 0.45);
}

.bee-results-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(89, 179, 70, 0.32), transparent 70%);
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
  color: #DCEFD8;
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
  box-shadow: 0 10px 24px rgba(89, 179, 70, 0.45);
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.bee-btn-orange:hover {
  transform: translateY(-3px) scale(1.03);
  background: #6cd057;
  box-shadow: 0 14px 30px rgba(89, 179, 70, 0.6);
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
  background: rgba(89, 179, 70, 0.28);
  border-color: var(--bee-leaf);
  transform: translateX(8px);
}

.bee-result-arrow {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 11px solid #A6D99A;
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
  const [, setActiveCard] = useState(null)

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
    <section className="rs bee-reasons-root" id="reasons" ref={containerRef}>
      <style>{BEE_STYLE}</style>

      <div className="bee-shell">
        {/* Header Section */}
        <header className="bee-header">
          <div className="bee-header-top">
            <div className="bee-pill-badge">
              <span className="bee-spark-dot" aria-hidden="true" />
              <span>The Osforh Advantage</span>
            </div>

            {/* Rotating Seal Stamp (Beegains signature branding in green palette) */}
            <div className="bee-rotating-seal" aria-hidden="true">
              {/* <svg viewBox="0 0 100 100" className="bee-seal-text">
                <path
                  id="beeSealCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text>
                  <textPath href="#beeSealCircle" startOffset="0%">
                    ★ OSFORH  ★ LEARNING HUB ★ 100% PRACTICAL
                  </textPath>
                </text>
              </svg> */}
              {/* <div className="bee-seal-center">✦</div> */}
            </div>
          </div>

          <div className="bee-title-row">
            <div>
              <h2 className="bee-main-title">
                Here are a few reasons why <br />
                <span className="bee-text-blue">You Should Choose</span>{' '}
                <span className="bee-text-orange">Osforh.</span>
              </h2>
            </div>
            <p className="bee-main-intro">
              Learning here is engineered to propel your career—with live commercial projects, direct mentor
              guidance, and placement assistance designed to give you an unfair advantage.
            </p>
          </div>
        </header>

        {/* Live Metrics Ribbon */}
        <div className="bee-metrics-ribbon">
          <div className="bee-metric-item">
            <span className="bee-metric-icon" aria-hidden="true">💻</span>
            <div>
              <div className="bee-metric-val">100% Practical</div>
              <div className="bee-metric-lbl">Project-Driven Labs</div>
            </div>
          </div>
          <div className="bee-metric-item">
            <span className="bee-metric-icon" aria-hidden="true">💼</span>
            <div>
              <div className="bee-metric-val">Placement Support</div>
              <div className="bee-metric-lbl">Dedicated HR Mock Calls</div>
            </div>
          </div>
          <div className="bee-metric-item">
            <span className="bee-metric-icon" aria-hidden="true">🧑‍💻</span>
            <div>
              <div className="bee-metric-val">Expert Mentors</div>
              <div className="bee-metric-lbl">Active Agency Leads</div>
            </div>
          </div>
          <div className="bee-metric-item">
            <span className="bee-metric-icon" aria-hidden="true">⚡</span>
            <div>
              <div className="bee-metric-val">Hybrid Flexibility</div>
              <div className="bee-metric-lbl">Online &amp; Campus Mode</div>
            </div>
          </div>
        </div>

        {/* Cards Grid with Beegains Floating Badges & Wavy Connection */}
        <div className="bee-flow-wrap">
          {/* Beegains Inspired Curved Wave Background Line in Green Palette */}
          <svg
            className="bee-flow-svg-bg"
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 50 120 C 350 40, 450 320, 750 180 C 1000 80, 1050 450, 1150 400"
              stroke="#59B346"
              strokeWidth="4"
              strokeOpacity="0.35"
              className="bee-wavy-path"
            />
            <path
              d="M 100 240 C 380 340, 500 120, 850 380 C 1050 500, 1100 220, 1180 320"
              stroke="#A6D99A"
              strokeWidth="3"
              strokeOpacity="0.3"
              className="bee-wavy-path"
              style={{ animationDirection: 'reverse', animationDuration: '30s' }}
            />
          </svg>

          <ol className="bee-cards-grid">
            {REASON_ITEMS.map((item, index) => (
              <li
                key={item.badgeNumber}
                className={`bee-card ${index === 4 ? 'bee-card-featured' : ''}`}
                data-tone={item.tone}
                style={{ transitionDelay: `${index * 80}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Floating Beegains Style Number Badge */}
                <span className="bee-number-pill" aria-hidden="true">
                  {item.badgeNumber}
                </span>

                <div>
                  <div className="bee-card-top">
                    <span className="bee-icon-box" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="bee-tag">{item.tag}</span>
                  </div>

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
