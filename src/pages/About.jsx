import { useEffect, useRef } from 'react'
import { HERO_PORTRAIT } from '../data/site.js'

const POINTS = ['Project-based learning', 'Practical training', 'Faculty guidance', 'Career preparation']

const STEPS = [
  ['Discover', 'Explore the fields and find the course that fits your interest.'],
  ['Learn', 'Build strong foundations with guided online and offline classes.'],
  ['Practice', 'Apply every concept straight away on hands-on exercises.'],
  ['Build Projects', 'Create campaigns, designs and websites for your portfolio.'],
  ['Prepare for Your Career', 'Resume guidance, internship opportunities and placement assistance.'],
]

const WHY = [
  ['Practical Learning', 'Every concept is applied straight away.'],
  ['Hands-On Projects', 'Build real work as you learn.'],
  ['Faculty Guidance', 'Trainers who guide you step by step.'],
  ['Internship Opportunities', 'Online and offline internship options.'],
  ['Portfolio Development', 'Leave with projects you can show.'],
  ['Career Guidance', 'Resume guidance and placement assistance.'],
]

// Hero: indigo background + colour shapes + illustration (like the reference)
function AboutHero({ small, title, img, children }) {
  return (
    <header className="ah">
      <i className="sh s-blue" />
      <i className="sh s-red" />
      <i className="sh s-orange" />
      <i className="sh s-yellow" />
      <i className="sh s-indigo" />
      <i className="sh s-pink" />

      <div className="ah-txt">
        <span className="ah-small">{small}</span>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>

      {img && <img className="ah-img" src={img} alt="A student at Osforh Learning Hub, Tirur" width="433" height="576" decoding="async" fetchPriority="high" />}
    </header>
  )
}

// Creative design layer (scoped to the .ab sections + .ah hero of this page only)
// Palette + fonts from the Elementor kit: Roboto / Roboto Slab,
// #6EC1E4 #54595F #7A7A7A #61CE70 #4054B2 #23A455 #116801 #000 #FFF
const ABOUT_STYLE = `

/* ---------- About hero (Osforh palette + K2D font) ---------- */
.ah{ 
  position:relative; overflow:hidden; isolation:isolate;
  width:100%; border-radius:28px;
  min-height:clamp(420px,70vh,640px);
  display:grid; grid-template-columns:1fr; align-items:center;
  padding:clamp(48px,7vw,90px) clamp(20px,6vw,100px) 0;
  background:#2B5D36; color:#fff;
  font-family:'K2D',sans-serif;
}
@media(min-width:900px){
  .ah{ grid-template-columns:minmax(0,1.1fr) minmax(0,1fr); padding-bottom:0; }
}

/* background shapes */
.ah .sh{ position:absolute; z-index:-1; display:block; }
.ah .s-blue  { left:-20%; top:-20%; width:26%; height:150%; border-radius:50%; background:#A6D99A; }
.ah .s-red   { left:24%; top:-45%; width:62%; height:150%; border-radius:50%; background:#1E4528; }
.ah .s-orange{ left:30%; top:-60%; width:34%; height:115%; border-radius:50%; background:#59B346; }
.ah .s-yellow{ left:46%; top:-55%; width:22%; height:105%; border-radius:50%; background:#A6D99A; }
.ah .s-indigo{ right:-6%; top:-10%; width:34%; height:70%; border-radius:40% 0 0 60%; background:#4B6250; }
.ah .s-pink  { right:-4%; top:30%; width:14%; height:50%; border-radius:50%; background:#1E4528; transform:rotate(-20deg); }

/* text */
.ah-txt{ position:relative; z-index:2; padding-bottom:clamp(30px,5vw,70px); }
.ah-small{
  display:inline-block; margin-bottom:14px; padding:6px 14px; border-radius:999px;
  background:rgba(255,255,255,.14); font:800 13px/1 'K2D',sans-serif;
  letter-spacing:2px; text-transform:uppercase; color:#A6D99A;
}
.ah h1{
  margin:0 0 18px; max-width:11ch;
  font-family:'K2D',sans-serif; font-weight:900; text-transform:uppercase;
  font-size:clamp(34px,5.6vw,76px); line-height:1.02; letter-spacing:-1px;
  color:#fff; text-shadow:0 4px 12px rgba(0,0,0,.25);
}
.ah-txt p{
  margin:0; max-width:480px; font:500 clamp(14px,1.4vw,18px)/1.6 'K2D',sans-serif;
  color:rgba(255,255,255,.92);
}

/* illustration */
.ah-img{
  position:relative; z-index:2; justify-self:center; align-self:end;
  width:min(70%,420px); height:auto; display:block; aspect-ratio:433/576; object-fit:contain;
}
@media(min-width:900px){ .ah-img{ justify-self:end; } }

/* ---------- Sections ---------- */
.sec.ab{
  --g:#2B5D36;      /* main green */
  --gl:#59B346;     /* leaf green accent */
  --gd:#1E4528;     /* deep green */
  --b:#2B5D36;      /* brand green */
  --sky:#A6D99A;    /* soft leaf tint */
  --sl:#4B6250;     /* secondary green */
  --tx:#496152;     /* body text */
  --off:#F2F8F1;    /* soft green tint */
  font-family:'K2D',sans-serif; position:relative; overflow:hidden;
  padding:clamp(56px,8vw,110px) clamp(20px,6vw,110px);
}

.sec.ab h2{
  font-family:'K2D',sans-serif; font-weight:900; line-height:1.05;
  font-size:clamp(32px,5.4vw,76px); letter-spacing:-1px; margin:0 0 40px;
  text-transform:uppercase; max-width:1100px; color:var(--sl);
}
.sec.ab h2 em{
  font-style:normal; color:var(--g); position:relative; display:inline-block;
}
.sec.ab h2 em::after{
  content:''; position:absolute; left:0; right:0; bottom:-6px; height:10px;
  background:var(--sky); opacity:.6; border-radius:6px; transform:skewX(-12deg);
}

/* ---------- 1. Learn by doing ---------- */
.sec.ab.s1{ display:block; background:var(--off); color:var(--tx); }
.sec.ab.s1::before{
  content:''; position:absolute; right:-120px; top:-120px; width:360px; height:360px;
  border-radius:50%; background:var(--sky); opacity:.85;
}
.sec.ab.s1::after{
  content:''; position:absolute; right:60px; top:140px; width:90px; height:90px;
  border-radius:50%; background:var(--g);
  box-shadow:-46px 62px 0 -18px #000;
}
.sec.ab.s1 > *{ position:relative; z-index:2; }
.sec.ab.s1 .txt{
  font-size:clamp(14px,1.6vw,21px); line-height:1.7; max-width:760px; color:var(--sl);
  padding-left:22px; border-left:6px solid var(--g); margin-bottom:50px;
}
.sec.ab .pts{
  display:grid; gap:16px; grid-template-columns:repeat(2,1fr); counter-reset:p;
}
@media(min-width:900px){ .sec.ab .pts{ grid-template-columns:repeat(4,1fr); gap:24px; } }
.sec.ab .pts > div{
  counter-increment:p; position:relative; background:var(--g); color:#fff;
  font-family:'Roboto Slab',serif; font-weight:600; font-size:clamp(14px,1.5vw,22px); line-height:1.2;
  min-height:150px; padding:70px 18px 20px; border-radius:18px;
  box-shadow:0 18px 40px rgba(17,104,1,.22); transition:transform .3s, box-shadow .3s;
}
@media(min-width:640px){ .sec.ab .pts > div{ border-radius:44px; min-height:230px; padding:100px 26px 26px; } }
.sec.ab .pts > div::before{
  content:'0' counter(p); position:absolute; top:-14px; right:14px;
  width:46px; height:46px; border-radius:50%; background:#fff; color:var(--g);
  display:flex; align-items:center; justify-content:center; font-family:'Roboto',sans-serif;
  font-weight:700; font-size:16px; box-shadow:0 8px 20px rgba(0,0,0,.2);
}
@media(min-width:640px){
  .sec.ab .pts > div::before{ width:64px; height:64px; font-size:22px; top:-20px; right:22px; }
}
.sec.ab .pts > div:nth-child(even){ background:var(--b); box-shadow:0 18px 40px rgba(64,84,178,.25); }
.sec.ab .pts > div:nth-child(even)::before{ color:var(--b); }
.sec.ab .pts > div:hover{ transform:scale(1.05) rotate(-1deg); }

/* ---------- 2. Journey (heading left, steps right) ---------- */
.sec.ab.alt{
  display:grid; grid-template-columns:1fr; gap:44px; align-items:center;
  background:var(--b); color:#fff;
}
@media(min-width:900px){ .sec.ab.alt{ grid-template-columns:minmax(0,1fr) minmax(0,1.05fr); gap:70px; } }
.sec.ab.alt h2{ color:#fff; margin:0; }
.sec.ab.alt h2 em{ color:var(--gl); }
.sec.ab.alt h2 em::after{ background:#fff; opacity:.35; }
.sec.ab.alt::before{
  content:''; position:absolute; left:-140px; bottom:-140px; width:380px; height:380px;
  border-radius:50%; background:rgba(255,255,255,.07); pointer-events:none;
}
.sec.ab.alt > *{ position:relative; z-index:2; }

.sec.ab .jl{
  position:relative; width:100%; max-width:640px; padding-left:64px;
  display:flex; flex-direction:column; gap:22px;
}
@media(min-width:640px){ .sec.ab .jl{ padding-left:84px; gap:26px; } }
.sec.ab .jl::before{
  content:''; position:absolute; left:17px; top:6px; bottom:6px; width:6px;
  background:rgba(255,255,255,.25); border-radius:6px;
}
@media(min-width:640px){ .sec.ab .jl::before{ left:29px; width:8px; } }
.sec.ab .jf{
  position:absolute !important; left:17px; top:6px; height:calc(100% - 12px); width:6px; z-index:1;
  background:var(--gl); border-radius:6px; transform-origin:top; transform:scaleY(0);
  box-shadow:0 0 18px var(--gl);
}
@media(min-width:640px){ .sec.ab .jf{ left:29px; width:8px; } }
.sec.ab .stp{
  position:relative; background:#fff; color:var(--tx); border-radius:16px;
  padding:18px 22px; box-shadow:0 14px 36px rgba(0,0,0,.25);
  transition:transform .3s, background .3s, color .3s;
}
@media(min-width:640px){ .sec.ab .stp{ border-radius:28px; padding:22px 32px; } }
.sec.ab .stp::after{ /* arrow pointing to the line */
  content:''; position:absolute; left:-12px; top:26px; width:0; height:0;
  border-top:11px solid transparent; border-bottom:11px solid transparent; border-right:12px solid #fff;
  transition:border-right-color .3s;
}
.sec.ab .stp b{
  position:absolute; left:-64px; top:10px; width:40px; height:40px; border-radius:50%;
  background:#fff; color:var(--g); border:3px solid var(--g);
  display:flex; align-items:center; justify-content:center;
  font-weight:700; font-size:17px; box-shadow:0 8px 20px rgba(0,0,0,.3); z-index:3;
}
@media(min-width:640px){
  .sec.ab .stp b{ left:-84px; top:12px; width:56px; height:56px; font-size:22px; }
  .sec.ab .stp::after{ top:32px; }
}
.sec.ab .stp h3{
  margin:0 0 6px; font-family:'Roboto Slab',serif; font-weight:700; color:var(--b); text-transform:uppercase;
  font-size:clamp(17px,2vw,26px); line-height:1.05; transition:color .3s;
}
.sec.ab .stp p{ margin:0; font-size:clamp(13px,1.3vw,17px); line-height:1.5; color:inherit; }
.sec.ab .stp:hover{ transform:translateX(10px); background:var(--g); color:#fff; }
.sec.ab .stp:hover h3{ color:#fff; }
.sec.ab .stp:hover::after{ border-right-color:var(--g); }

/* ---------- 3. Why ---------- */
.sec.ab.s3{ display:block; background:#fff; color:var(--tx); }
.sec.ab .wg{
  display:grid; gap:16px; grid-template-columns:1fr; width:100%;
}
@media(min-width:600px){ .sec.ab .wg{ grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media(min-width:1000px){ .sec.ab .wg{ grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; } }

.sec.ab .wy{
  position:relative; overflow:hidden; isolation:isolate;
  display:flex; flex-direction:column; justify-content:flex-end;
  min-height:230px; padding:28px 26px 28px; border-radius:26px;
  box-shadow:0 14px 30px rgba(0,0,0,.12);
  transition:transform .35s, box-shadow .35s;
}
.sec.ab .wy::before{ content:none; }
.sec.ab .wy::after{ /* soft decorative blob */
  content:''; position:absolute; left:-50px; top:-50px; width:150px; height:150px;
  border-radius:50%; background:rgba(255,255,255,.14); z-index:-1; transition:transform .5s;
}
.sec.ab .wy:hover{ transform:translateY(-8px); box-shadow:0 26px 50px rgba(0,0,0,.22); }
.sec.ab .wy:hover::after{ transform:scale(1.6); }

/* colours: text colour is forced so nothing can override it */
.sec.ab .wy:nth-child(1){ background:var(--sl); color:#fff; }
.sec.ab .wy:nth-child(2){ background:var(--b);  color:#fff; }
.sec.ab .wy:nth-child(3){ background:var(--g);  color:#fff; }
.sec.ab .wy:nth-child(4){ background:var(--gd); color:#fff; }
.sec.ab .wy:nth-child(5){ background:var(--sky); color:#0b2a36; }
.sec.ab .wy:nth-child(6){ background:var(--gl);  color:#0b3a12; }
.sec.ab .wy h3, .sec.ab .wy p{ color:inherit !important; }

/* big number: fully reset, then pinned top-right */
.sec.ab .wy i{
  all:unset; box-sizing:border-box;
  position:absolute; top:6px; right:18px; z-index:1;
  font-family:'Roboto',sans-serif; font-style:normal; font-weight:900;
  font-size:clamp(56px,6vw,92px); line-height:1; letter-spacing:-2px;
  white-space:nowrap; color:currentColor; opacity:.28; pointer-events:none;
}
.sec.ab .wy i::before, .sec.ab .wy i::after{ content:none; }

.sec.ab .wy h3{
  margin:0 0 8px; font-family:'Roboto Slab',serif; font-weight:700;
  font-size:clamp(19px,1.9vw,26px); line-height:1.1; position:relative; z-index:2;
}
.sec.ab .wy h3::before{
  content:''; display:inline-block; margin-right:10px; vertical-align:middle;
  border-top:8px solid transparent; border-bottom:8px solid transparent; border-left:10px solid currentColor;
  animation:abMove 1.2s ease-in-out infinite;
}
.sec.ab .wy p{
  margin:0; font-size:clamp(13px,1.2vw,17px); line-height:1.45; position:relative; z-index:2; opacity:.95;
}

@keyframes abMove{ 0%,100%{ transform:translateX(0) } 50%{ transform:translateX(6px) } }
@media (prefers-reduced-motion:reduce){
  .sec.ab .wy h3::before{ animation:none }
  .sec.ab .wy, .sec.ab .stp, .sec.ab .pts > div{ transition:none }
}
`

export default function About() {
  const lineRef = useRef(null)
  const fillRef = useRef(null)

  // journey line fills as you scroll past it
  useEffect(() => {
    const onScroll = () => {
      const jl = lineRef.current
      const jf = fillRef.current
      if (!jl || !jf) return
      const r = jl.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.65 - r.top) / r.height))
      jf.style.transform = 'scaleY(' + progress + ')'
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{ABOUT_STYLE}</style>

      <AboutHero
        // small="About Us"
        title="Education That Moves You Forward."
        img={HERO_PORTRAIT}
      >
        Osforh Learning Hub, Tirur helps students and beginners build practical digital and professional skills.
      </AboutHero>

      <section className="sec ab s1">
        <h2 className="rv">Learn by <em>doing</em>, not just listening.</h2>
        <p className="txt rv">
          Every course starts from the basics and focuses on practical work, so you leave with projects you can show.
          Our faculty guide you step by step, and we support you with internship opportunities and career preparation.
        </p>
        <div className="pts rv">
          {POINTS.map((p) => (
            <div key={p}>{p}</div>
          ))}
        </div>
      </section>


      <section className="sec alt ab" aria-labelledby="journey-title">
        <h2 id="journey-title">From Curious Beginner to <em>Confident Creator.</em></h2>
        <div className="jl" id="jl" ref={lineRef}>
          <div className="jf" id="jf" ref={fillRef} />
          {STEPS.map(([title, text], i) => (
            <div className="stp rv" key={title}>
              <b>{i + 1}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec ab s3">
        <h2>Learn Skills. Build Confidence. <em>Move Forward.</em></h2>
        <div className="wg" id="wg">
          {WHY.map(([title, text], i) => (
            <div className="wy rv" key={title}>
              <i>0{i + 1}</i>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}
