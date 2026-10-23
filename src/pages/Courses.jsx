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

const WHY_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" key="curriculum">
    <path d="M4 5.5h16v12H4zM8 10h8M8 13.5h5M8 21h8M12 17.5V21" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" key="trainers">
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19v-1.5a5.5 5.5 0 0 1 11 0V19zM16 5.5h4.5v9H16M18.25 14.5V18" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" key="projects">
    <path d="M4 7.5h16v12H4zM8 7.5V5h8v2.5M4 12h16M10 12v2h4v-2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" key="certification">
    <path d="m12 3 2.2 2 3-.2.8 2.9 2.6 1.5-1 2.8 1 2.8-2.6 1.5-.8 2.9-3-.2-2.2 2-2.2-2-3 .2-.8-2.9-2.6-1.5 1-2.8-1-2.8L6 7.7l.8-2.9 3 .2z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
]

const WHY_STYLE = `
section.contact-why{
  display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.3fr);
  gap:clamp(20px,3vw,40px); align-items:stretch; margin:18px 0 36px;
  padding:clamp(18px,2.5vw,32px); border:1px solid rgba(33,87,20,.12);
  border-radius:28px; background:#f6f8f4; color:#215714;
  font-family:'K2D',sans-serif;
}
@media(min-width:960px){
  section.contact-why{ grid-template-columns:minmax(0,.9fr) minmax(0,1.3fr); }
}
section.contact-why .contact-why-intro{
  display:flex; flex-direction:column; align-items:flex-start; justify-content:center;
  gap:20px; min-height:400px; padding:clamp(28px,3vw,44px);
  border-radius:24px; background:#215714; color:#fff;
  box-shadow:0 16px 32px rgba(33,87,20,.16);
}
section.contact-why .contact-why-intro h2{
  margin:0; color:#fff; font-family:var(--slab, Georgia, serif);
  font-size:clamp(32px,3.4vw,48px); font-weight:800; line-height:1.08;
  letter-spacing:-.04em; text-transform:none;
}
section.contact-why .contact-why-intro h2 em{ display:block; color:#fff; font-style:normal; }
section.contact-why .contact-why-intro p{
  margin:0; max-width:560px; color:rgba(255,255,255,.9);
  font-size:clamp(14px,1.1vw,16px); line-height:1.75;
}
section.contact-why .contact-why-cta{
  display:inline-flex; align-items:center; gap:10px; min-height:48px;
  padding:12px 22px; border-radius:12px; background:#fff; color:#215714;
  font-size:14px; font-weight:800; text-decoration:none;
  transition:transform .2s ease, background .2s ease, box-shadow .2s ease;
}
section.contact-why .contact-why-cta span{ display:inline-block; transition:transform .25s; }
section.contact-why .contact-why-cta:hover{ background:#edf4e9; color:#215714; transform:translateY(-2px); box-shadow:0 8px 18px rgba(0,0,0,.15); }
section.contact-why .contact-why-cta:hover span{ transform:translateX(6px); }
section.contact-why .contact-why-list{
  display:grid; grid-template-columns:repeat(2,minmax(0,1fr));
  gap:clamp(12px,1.6vw,20px); align-content:stretch; list-style:none; padding:0; margin:0;
}
section.contact-why .contact-why-item{
  display:flex; flex-direction:column; align-items:flex-start; justify-content:flex-start;
  gap:16px; min-height:188px; padding:clamp(20px,2vw,28px);
  border:1px solid rgba(33,87,20,.12); border-radius:20px;
  background:#fff; box-shadow:0 10px 28px rgba(27,55,21,.06);
  transition:transform .25s ease, box-shadow .25s ease;
}
section.contact-why .contact-why-icon{
  display:grid; width:52px; height:52px; flex:none; place-items:center;
  border-radius:14px; background:#215714; color:#fff;
}
section.contact-why .contact-why-icon svg{
  width:23px; height:23px; stroke:currentColor; stroke-width:1.8;
  stroke-linecap:round; stroke-linejoin:round;
}
section.contact-why .contact-why-item h3{
  margin:0 0 7px; color:#215714; font-weight:800; line-height:1.25;
  font-size:clamp(16px,1.3vw,19px);
}
section.contact-why .contact-why-item p{
  margin:0; color:#52614e; line-height:1.6; font-size:clamp(13px,1vw,15px);
}
section.contact-why .contact-why-item:hover{
  transform:translateY(-4px); box-shadow:0 18px 34px rgba(27,55,21,.12);
}
@media(max-width:959px){
  section.contact-why{ grid-template-columns:1fr; }
  section.contact-why .contact-why-intro{ min-height:auto; }
}
@media(max-width:560px){
  section.contact-why{ gap:16px; padding:14px; border-radius:22px; }
  section.contact-why .contact-why-intro{ gap:16px; padding:26px 22px; border-radius:18px; }
  section.contact-why .contact-why-list{ grid-template-columns:1fr; }
  section.contact-why .contact-why-item{ min-height:0; padding:22px; }
}
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
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
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
              <span className="contact-why-icon" aria-hidden="true">{WHY_ICONS[index]}</span>
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
