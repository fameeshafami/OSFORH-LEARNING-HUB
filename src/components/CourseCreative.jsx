import { Link } from 'react-router-dom'
import CourseCard from './CourseCard.jsx'

/* Creative sections for CourseDetail, inspired by your 3 references:
   1. CareerBoard   -> "Unlock endless career opportunities" green grid + paper plane
   2. OutcomesBoard -> "The course" stacked lettering + sticky notes on grid paper
   3. CorkBanner    -> cork board with pinned notes (JAM co. style)
   4. OtherTiles    -> pastel tile grid with "taped" label
   Brand palette: #215714 and #FFFFFF. */

const CX_STYLE = `

.cx{
  --ink:#215714; --sky:#FFFFFF; --sky2:#FFFFFF; --g:#215714; --gl:#215714; --gd:#215714; --sl:#215714;
  --paper:#FFFFFF;
  position:relative; overflow:hidden;
  padding:clamp(56px,8vw,110px) clamp(18px,6vw,100px);
  font-family:'K2D',sans-serif; color:var(--ink);
}
.cx h2{ margin:0; font-family:'K2D',sans-serif; font-weight:900; line-height:1; letter-spacing:-1px; color:var(--ink); text-transform:uppercase; }
.cx h2 em{ font-family:'K2D',sans-serif; font-style:normal; font-weight:900; letter-spacing:-1px; color:var(--gl); }

/* graph paper */
.cx-paper{
  background-color:#FFFFFF;
  background-image:
    linear-gradient(rgba(33,87,20,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(33,87,20,.08) 1px, transparent 1px);
  background-size:34px 34px;
}

/* ============ 1. CAREER BOARD ============ */
.cx-career{ overflow:visible; padding-bottom:clamp(92px,11vw,140px); z-index:1; }
.cx-career-in{ display:grid; gap:40px; align-items:center; grid-template-columns:1fr; }
@media(min-width:960px){ .cx-career-in{ grid-template-columns:minmax(0,.9fr) minmax(0,1.3fr); gap:20px; } }
.cx-career-l{ position:relative; padding-bottom:60px; }
.cx-career-l h2{ font-size:clamp(34px,5vw,64px); }
.cx-career-l h2 em{ display:block; font-size:1.35em; margin:-4px 0; }
.cx-career-l h2,.cx-board{ animation:cxRise .72s cubic-bezier(.2,.75,.25,1) both; }
.cx-board{ animation-delay:.12s; }
.cx-plane{ position:absolute; left:0; bottom:-30px; width:min(100%,360px); height:auto; overflow:visible; }
.cx-plane .trail{ fill:none; stroke:#215714; stroke-width:1.4; stroke-dasharray:6 5; animation:cxDash 18s linear infinite; }
@keyframes cxDash{ to{ stroke-dashoffset:-400 } }
.cx-plane .pl{ fill:var(--ink); transform-origin:center; animation:cxFly 3.4s ease-in-out infinite; }
@keyframes cxFly{ 0%,100%{ transform:translate(0,0) rotate(0) } 50%{ transform:translate(6px,-8px) rotate(-4deg) } }
@keyframes cxRise{ from{ opacity:0; transform:translateY(28px) rotate(1deg) } to{ opacity:1; transform:translateY(0) rotate(0) } }

.cx-board{
  position:relative; background:var(--ink); border-radius:34px 40px 40px 34px;
  padding:34px 8px 76px 8px; box-shadow:0 24px 50px rgba(33,87,20,.28);
  clip-path:polygon(0 0, 52% 4%, 100% 0, 100% 100%, 0 100%);
}
.cx-board-in{ background:#fff; border-radius:26px; padding:10px; position:relative; }
.cx-board-grid{ display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); }
.cx-cell{
  min-height:clamp(96px,12vw,150px); display:flex; align-items:center; justify-content:center; text-align:center;
  padding:14px 10px; font-weight:700; font-size:clamp(13px,1.45vw,22px); line-height:1.15; color:var(--ink);
  border-right:2px solid var(--ink); border-bottom:2px solid var(--ink); opacity:0;
  transition:background .25s, color .25s, transform .25s;
  animation:cxCellIn .48s cubic-bezier(.2,.8,.2,1) forwards; animation-delay:var(--cx-delay,0ms);
}
@keyframes cxCellIn{ from{ opacity:0; transform:scale(.82) rotate(-2deg) } to{ opacity:1; transform:scale(1) rotate(0) } }
.cx-cell:nth-child(3n){ border-right:0; }
.cx-cell:nth-last-child(-n+3){ border-bottom:0; }
.cx-cell:hover{ background:var(--ink); color:#fff; transform:scale(1.04); border-radius:14px; border-color:transparent; }
@media(max-width:560px){
  .cx-board-grid{ grid-template-columns:repeat(2,minmax(0,1fr)); }
  .cx-cell:nth-child(3n){ border-right:2px solid var(--ink); }
  .cx-cell:nth-child(2n){ border-right:0; }
  .cx-cell:nth-last-child(-n+3){ border-bottom:2px solid var(--ink); }
  .cx-cell:nth-last-child(-n+2){ border-bottom:0; }
}
.cx-stick{
  position:absolute; right:clamp(14px,5vw,60px); bottom:16px; transform:rotate(-4deg);
  background:var(--ink); color:#fff; padding:14px 22px; border-radius:16px; border:3px solid #fff;
  font-family:'Caveat',cursive; font-weight:700; font-size:clamp(20px,2vw,28px); line-height:1;
  box-shadow:0 10px 24px rgba(0,0,0,.25); z-index:2;
}

/* ============ 2. OUTCOMES (The course + sticky notes) ============ */
.cx-out{ background-color:#fff; }
.cx-out-in{ display:grid; gap:30px; grid-template-columns:1fr; align-items:start; }
@media(min-width:900px){ .cx-out-in{ grid-template-columns:150px minmax(0,1fr); gap:40px; } }
.cx-stack{ display:flex; flex-direction:row; flex-wrap:wrap; gap:2px; align-items:flex-end; min-width:0; }
@media(min-width:900px){ .cx-stack{ flex-direction:column; align-items:flex-start; position:sticky; top:110px; } }
.cx-stack small{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:clamp(22px,2.4vw,34px); transform:rotate(-8deg); margin:0 8px 6px 0; }
.cx-stack b{
  display:block; font-family:'Bricolage Grotesque'; font-weight:800; font-size:clamp(40px,5vw,72px); line-height:.82;
  color:var(--ink); transition:transform .3s; animation:cxLetterIn .52s cubic-bezier(.25,.9,.3,1) both;
  animation-delay:var(--cx-delay,0ms);
}
.cx-stack b:nth-of-type(odd){ transform:translateX(0) rotate(-6deg); }
.cx-stack b:nth-of-type(even){ transform:translateX(26px) rotate(6deg); }
.cx-stack b:hover{ transform:translateX(12px) scale(1.2) rotate(0); color:var(--g); }
@keyframes cxLetterIn{ from{ opacity:0; transform:translate(-18px,18px) rotate(-14deg) } to{ opacity:1 } }
.cx-out-r h2{ font-size:clamp(28px,4vw,54px); margin-bottom:34px; max-width:760px; }
.cx-notes{ display:grid; gap:26px 22px; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); }
.cx-note{
  position:relative; padding:34px 22px 22px; border-radius:6px 6px 22px 6px;
  font-family:'Caveat',cursive; font-weight:700; font-size:clamp(20px,1.9vw,26px); line-height:1.15; color:#215714;
  box-shadow:0 14px 26px rgba(33,87,20,.16); transition:transform .3s;
  animation:cxNoteDrop .58s cubic-bezier(.18,.9,.3,1) both; animation-delay:var(--cx-delay,0ms);
  background:var(--sky2);
}
.cx-note:nth-child(4n+1){ transform:rotate(-2deg); }
.cx-note:nth-child(4n+2){ transform:rotate(1.6deg); background:#fff; border:2px dashed var(--ink); box-shadow:none; }
.cx-note:nth-child(4n+3){ transform:rotate(-1deg); background:#FFFFFF; }
.cx-note:nth-child(4n){ transform:rotate(2deg); background:#FFFFFF; }
.cx-note:hover{ transform:rotate(0) translateY(-6px) scale(1.03); z-index:2; }
.cx-note::before{ /* tape */
  content:''; position:absolute; top:-12px; left:50%; width:74px; height:24px; transform:translateX(-50%) rotate(-3deg);
  background:rgba(255,255,255,.7); border:1px solid rgba(33,87,20,.15); box-shadow:0 2px 6px rgba(0,0,0,.08);
}
.cx-note i{
  position:absolute; right:12px; bottom:8px; font-style:normal; font-family:'Bricolage Grotesque'; font-weight:800;
  font-size:34px; color:var(--ink); opacity:.16;
}
@keyframes cxNoteDrop{ from{ opacity:0; transform:translateY(-32px) rotate(0) } to{ opacity:1 } }

/* ============ 3. CORK BANNER ============ */
.cx-cork{ padding:0; background:var(--paper);
  background-image:radial-gradient(rgba(33,87,20,.12) 1px, transparent 1.4px); background-size:7px 7px; }
.cx-torn{
  height:96px; background:var(--ink);
  clip-path:polygon(0 0,100% 0,100% 62%,97% 78%,94% 60%,91% 80%,88% 64%,84% 82%,80% 62%,77% 78%,73% 60%,69% 82%,65% 66%,61% 80%,57% 62%,53% 84%,49% 64%,45% 80%,41% 60%,37% 82%,33% 66%,29% 80%,25% 60%,21% 82%,17% 64%,13% 80%,9% 62%,5% 78%,2% 64%,0 74%);
}
.cx-cork-in{ padding:0 clamp(18px,6vw,100px) clamp(56px,8vw,100px); margin-top:-24px; }
.cx-frame{
  position:relative; max-width:1100px; margin:0 auto; border:14px solid #215714; border-radius:6px;
  box-shadow:0 0 0 3px rgba(33,87,20,.7), 0 26px 50px rgba(0,0,0,.28), inset 0 0 40px rgba(0,0,0,.25);
  background-color:#215714;
  background-image:radial-gradient(rgba(255,255,255,.16) 1.2px, transparent 1.7px), radial-gradient(rgba(255,255,255,.1) 1px, transparent 1.5px);
  background-size:14px 14px, 9px 9px; background-position:0 0, 5px 6px;
  padding:clamp(26px,4vw,56px); min-height:420px;
  display:grid; gap:24px; grid-template-columns:1fr; align-items:center; justify-items:center;
}
@media(min-width:860px){ .cx-frame{ grid-template-columns:1fr 1.25fr 1fr; } }
.cx-pin{ position:absolute; top:-9px; left:50%; width:18px; height:18px; border-radius:50%; transform:translateX(-50%);
  background:#FFFFFF; box-shadow:2px 4px 6px rgba(0,0,0,.35); z-index:3; }
.cx-card{ position:relative; box-shadow:0 14px 26px rgba(0,0,0,.28); }
.cx-side .cx-card{ animation:cxPinned .7s cubic-bezier(.2,.85,.25,1) both; }
.cx-side .cx-card:nth-child(2){ animation-delay:.14s; }
@keyframes cxPinned{ from{ opacity:0; transform:translateY(-24px) rotate(0) } to{ opacity:1 } }
.cx-main{
  background:#FFFFFF; padding:34px 26px 28px; text-align:center; transform:rotate(-1deg); max-width:340px; width:100%;
  border-radius:4px;
}
.cx-main h3{ margin:0 0 12px; font-family:'Fraunces',serif; font-weight:500; color:#215714; font-size:clamp(22px,2.6vw,34px); line-height:1.15; }
.cx-main h3 b{ display:block; font-size:1.5em; font-weight:700; }
.cx-main p{ margin:0 0 16px; font-family:'Caveat',cursive; font-weight:700; font-size:22px; color:#215714; line-height:1.1; }
.cx-main .btn{ display:inline-block; }
.cx-side{ display:flex; flex-direction:column; gap:18px; align-items:center; }
.cx-tag{
  padding:22px 20px 18px; max-width:210px; width:100%; text-align:center;
  font-family:'Caveat',cursive; font-weight:700; font-size:24px; line-height:1.1; color:#215714; border-radius:3px;
  background:#FFFFFF; border:1px solid var(--ink);
}
.cx-tag:nth-child(1){ transform:rotate(3deg); }
.cx-tag:nth-child(2){ transform:rotate(-3deg); }
.cx-tag:nth-child(3){ transform:rotate(2deg); }
.cx-tag:nth-child(4){ transform:rotate(-2deg); }
.cx-tag:nth-child(5){ transform:rotate(3deg); }
.cx-burst{
  width:92px; height:92px; display:flex; align-items:center; justify-content:center; text-align:center; color:#fff;
  font-family:'Caveat',cursive; font-weight:700; font-size:22px; line-height:1; background:var(--ink);
  clip-path:polygon(50% 0,60% 18%,80% 8%,78% 30%,98% 36%,82% 50%,98% 64%,78% 70%,80% 92%,60% 82%,50% 100%,40% 82%,20% 92%,22% 70%,2% 64%,18% 50%,2% 36%,22% 30%,20% 8%,40% 18%);
  animation:cxSpin 14s linear infinite;
}
@keyframes cxSpin{ to{ transform:rotate(360deg) } }

/* ============ 4. OTHER COURSES (SHOWCASE BENTO MODEL) ============ */
.cx-tiles{
  background:#FFFFFF;
  padding:clamp(64px,7vw,110px) clamp(20px,5vw,80px);
  position:relative;
  overflow:hidden;
}
.cx-tiles-in{ max-width:1240px; width:100%; margin:0 auto; position:relative; }
.cx-tiles-head{ text-align:center; margin-bottom:44px; position:relative; z-index:2; }
.cx-tiles-kicker{
  display:inline-block;
  padding:6px 14px;
  background:rgba(33, 87, 20,0.08);
  border-radius:999px;
  font-size:11px;
  font-weight:800;
  letter-spacing:0.1em;
  color:#215714;
  margin-bottom:12px;
}
.cx-tiles-head h2{ font-size:clamp(28px,4vw,48px); color:var(--ink) !important; margin:0; }
.cx-tiles-head h2 em{ color:var(--gl) !important; }

.cx-tile-grid{
  display:grid;
  gap:clamp(14px,2vw,22px);
  grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));
  position:relative;
  z-index:2;
}
.cx-tape{ display:none !important; }

@media (prefers-reduced-motion:reduce){
  .cx-plane .trail,.cx-plane .pl,.cx-burst,.cx-career-l h2,.cx-board,.cx-cell,.cx-stack b,.cx-note,.cx-side .cx-card,.cx-tile{ animation:none }
  .cx-note,.cx-tile,.cx-cell{ transition:none }
}
`

export function CourseCreativeStyle() {
  return <style>{CX_STYLE}</style>
}

/* 1 ───────── Career pathways ───────── */
export function CareerBoard({ careers = [], tag = 'learn from industry experts.' }) {
  return (
    <section className="cx cx-paper cx-career">
      <div className="cx-career-in">
        <div className="cx-career-l">
          <h2>
            Unlock Endless <em>career</em> opportunities
          </h2>
          <svg className="cx-plane" viewBox="0 0 340 170" aria-hidden="true">
            <path
              className="trail"
              d="M10 120 C 60 60, 150 70, 150 120 C 150 165, 90 160, 100 120 C 110 85, 200 60, 255 38"
            />
            <polygon className="pl" points="255,38 335,6 292,70 276,52 262,64" />
          </svg>
        </div>

        <div className="cx-board">
          <div className="cx-board-in">
            <div className="cx-board-grid">
              {careers.map((role, i) => (
                <div key={role} className="cx-cell" style={{ '--cx-delay': `${180 + i * 65}ms` }}>
                  {role}
                </div>
              ))}
            </div>
          </div>
          <span className="cx-stick">{tag}</span>
        </div>
      </div>
    </section>
  )
}

/* 2 ───────── Learning outcomes ───────── */
export function OutcomesBoard({ items = [], title = 'What you will master' }) {
  return (
    <section className="cx cx-out cx-paper">
      <div className="cx-out-in">
        <div className="cx-stack" aria-label="The course">
          <small>The</small>
          {[...'course'].map((ch, i) => (
            <b key={i} aria-hidden="true" style={{ '--cx-delay': `${i * 70}ms` }}>
              {ch}
            </b>
          ))}
        </div>

        <div className="cx-out-r">
          <h2>
            {title.split(' ').slice(0, -1).join(' ')} <em>{title.split(' ').slice(-1)}</em>
          </h2>
          <div className="cx-notes">
            {items.map((item, i) => (
              <div key={i} className="cx-note" style={{ '--cx-delay': `${120 + i * 90}ms` }}>
                {item}
                <i>{String(i + 1).padStart(2, '0')}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* 3 ───────── Cork board banner ───────── */
export function CorkBanner({ course }) {
  const tags = course.tags || []
  const left = tags.slice(0, 2)
  const right = tags.slice(2, 5)
  return (
    <section className="cx cx-cork">
      <div className="cx-torn" />
      <div className="cx-cork-in">
        <div className="cx-frame">
          <div className="cx-side">
            {left.map((t) => (
              <div key={t} className="cx-card cx-tag">
                <span className="cx-pin" />#{t}
              </div>
            ))}
            <div className="cx-burst">100% practical</div>
          </div>

          <div className="cx-card cx-main">
            <span className="cx-pin" />
            <h3>
              {course.tagline || 'Grow Your Skills, Shape Your Future'}
              <b>because…</b>
            </h3>
            <p>{course.cta}</p>
            <Link className="btn green" to={'/contact?course=' + encodeURIComponent(course.id)}>
              Get Started with Next Batch →
            </Link>
          </div>

          <div className="cx-side">
            {right.map((t) => (
              <div key={t} className="cx-card cx-tag">
                <span className="cx-pin" />#{t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* 4 ───────── Other courses ───────── */
export function OtherTiles({ items = [] }) {
  if (!items.length) return null

  return (
    <section className="cx cx-tiles">
      <div className="cx-tiles-in">
        <div className="cx-tiles-head">
          <span className="cx-tiles-kicker">EXPLORE MORE PATHWAYS</span>
          <h2>
            Other career programs at <em>Osforh</em>
          </h2>
        </div>

        <div className="cx-tile-grid">
          {items.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
