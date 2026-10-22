import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard.jsx'
import { courses } from '../data/courses.js'

const WHY_CHOOSE = [
  {
    title: 'Industry-Relevant Curriculum',
    text: 'Continuously updated syllabus matching modern company demands and AI algorithms.',
  },
  {
    title: 'Expert Trainers with Real-World Skills',
    text: 'Direct coaching from working digital professionals with live campaign insights.',
  },
  {
    title: 'Practical Projects & Tools',
    text: 'Work on active live client projects, ad budgets, SEO audits, and social creatives.',
  },
  {
    title: 'Certification & Career Support',
    text: 'Recognized course completion certificate with placement interview support.',
  },
]

// Full-width, one-screen, home-style "Why Choose Us" (scoped to .contact-why only)
// Set --hdr to your fixed header height so the section fits exactly below it.
const WHY_STYLE = `
section.contact-why{
  --hdr:80px;
  --b:#2B5D36; --bd:#1E4528; --g:#2B5D36; --gl:#59B346; --sky:#A6D99A;
  font-family:'K2D',sans-serif;

  /* break out of any page container: true edge-to-edge */
  position:relative; isolation:isolate; overflow:hidden;
  box-sizing:border-box;
  width:100%; border-radius:28px; margin-top:18px;
  min-height:0;
  display:grid; grid-template-columns:1fr; gap:28px; align-items:center;
  padding:clamp(28px,5vh,60px) clamp(20px,6vw,110px);
  background:linear-gradient(135deg,var(--b) 0%,var(--bd) 100%);
  color:#fff;
}
@media(min-width:960px){
  section.contact-why{
    grid-template-columns:minmax(0,1fr) minmax(0,1.05fr); gap:clamp(30px,5vw,80px);
    padding-top:clamp(36px,5vw,64px); padding-bottom:clamp(36px,5vw,64px);
  }
}

/* big decorative shapes, like the home page */
section.contact-why::before{
  content:''; position:absolute; z-index:-1; right:-160px; top:-160px; width:520px; height:520px;
  border-radius:50%; background:rgba(255,255,255,.07);
}
section.contact-why::after{
  content:''; position:absolute; z-index:-1; left:-120px; bottom:-140px; width:420px; height:420px;
  border-radius:50%; background:rgba(89,179,70,.25);
}

/* ---- left: intro text straight on the blue ---- */
section.contact-why .contact-why-intro{
  display:flex; flex-direction:column; justify-content:center; gap:clamp(12px,2.4vh,24px);
  background:none; box-shadow:none; border-radius:0; padding:0; color:#fff;
}
section.contact-why .contact-why-intro > span{
  display:block; font-size:13px; font-weight:800; letter-spacing:.32em; text-transform:uppercase;
  padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,.4); color:#fff;
}
section.contact-why .contact-why-intro h2{
  margin:0; color:#fff; font-weight:900; line-height:1; letter-spacing:-2px;
  font-size:clamp(30px,5.2vw,72px);
  font-family:'K2D',sans-serif;
  text-transform:uppercase;
}
section.contact-why .contact-why-intro h2 em{
  display:block; color:var(--gl); font-style:normal;
}
section.contact-why .contact-why-intro p{
  margin:0; color:rgba(255,255,255,.93); line-height:1.7; max-width:620px;
  font-size:clamp(15px,1.3vw,18px);
}
section.contact-why .contact-why-cta{
  align-self:flex-start; display:inline-flex; align-items:center; gap:10px;
  background:#fff; color:var(--b); font-weight:800; text-decoration:none;
  padding:15px 30px; border-radius:999px; font-size:16px; font-family:'K2D',sans-serif;
  box-shadow:0 12px 28px rgba(0,0,0,.25); transition:transform .25s, background .25s, color .25s;
}
section.contact-why .contact-why-cta span{ display:inline-block; transition:transform .25s; }
section.contact-why .contact-why-cta:hover{ background:var(--gl); color:#fff; transform:translateY(-3px); }
section.contact-why .contact-why-cta:hover span{ transform:translateX(6px); }

/* ---- right: 4 white cards, equal height ---- */
section.contact-why .contact-why-list{
  display:grid; gap:clamp(10px,1.7vh,18px); grid-template-columns:1fr; list-style:none; padding:0; margin:0;
}
@media(min-width:960px){
}
section.contact-why .contact-why-item{
  position:relative; overflow:hidden; display:flex; align-items:center;
  gap:clamp(16px,2vw,30px);
  background:#fff; border:0; border-radius:26px;
  padding:clamp(14px,2vh,26px) clamp(20px,2.6vw,38px);
  box-shadow:0 16px 36px rgba(0,0,0,.22);
  transition:transform .3s, box-shadow .3s;
}
section.contact-why .contact-why-item::before{
  content:''; position:absolute; left:0; top:20%; bottom:20%; width:6px;
  border-radius:0 6px 6px 0; background:var(--gl); transition:background .3s, top .3s, bottom .3s;
}
section.contact-why .contact-why-number{
  flex:none; min-width:clamp(48px,4.6vw,70px);
  font-family:'K2D',sans-serif; font-style:normal; font-weight:900;
  font-size:clamp(32px,3.6vw,50px); line-height:1; color:var(--b);
  transition:color .3s, transform .3s;
}
section.contact-why .contact-why-item h3{
  margin:0 0 6px; color:#1f2430; font-weight:800; line-height:1.15;
  font-size:clamp(17px,1.6vw,23px); transition:color .3s;
  font-family:'K2D',sans-serif;
}
section.contact-why .contact-why-item p{
  margin:0; color:#3d4553; line-height:1.5; font-size:clamp(14px,1.1vw,16px);
}
section.contact-why .contact-why-item:hover{
  transform:translateX(-10px); box-shadow:0 26px 50px rgba(0,0,0,.35);
}
section.contact-why .contact-why-item:hover::before{ background:var(--gl); top:8%; bottom:8%; }
section.contact-why .contact-why-item:hover .contact-why-number{ color:var(--b); transform:scale(1.12); }
section.contact-why .contact-why-item:hover h3{ color:var(--b); }

@media (prefers-reduced-motion:reduce){
  section.contact-why *{ transition:none !important; }
}
`

export default function Courses() {
  return (
    <>
      <style>{WHY_STYLE}</style>

      {/* <section className="sec courses-intro" aria-labelledby="courses-title">
        <span className="bg-sec-tag">Our Courses</span>
        <h1 id="courses-title">Skills That Open New Possibilities.</h1>
        <p>Four career-focused programs. No experience needed, every course starts from the basics.</p>
      </section> */}

      <section className="sec" aria-label="All courses">
        <div className="cg" id="cg">
          {courses.map((c, i) => (
            <CourseCard key={c.id} course={c} priority={i < 2} />
          ))}
        </div>
      </section>

      <section className="contact-why" aria-labelledby="contact-why-title">
        <div className="contact-why-intro">
          <h2 id="contact-why-title">
            Why Choose <em>Osforh Learning Hub?</em>
          </h2>
          <p>
            At Osforh Learning Hub, we bridge the gap between learning and real-world application. Our courses are designed to equip you with in-demand digital skills through an updated syllabus, expert-led sessions, and practical projects. With flexible online learning, personalized guidance, and career-focused certification, we ensure you gain the confidence and expertise to grow in today&apos;s competitive digital world.
          </p>
          <Link className="contact-why-cta" to="/contact">Get Started Today <span aria-hidden="true">→</span></Link>
        </div>

        <ol className="contact-why-list">
          {WHY_CHOOSE.map((reason, index) => (
            <li className="contact-why-item" key={reason.title}>
              <span className="contact-why-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
