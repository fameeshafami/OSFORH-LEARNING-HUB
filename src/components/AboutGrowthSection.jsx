import { Link } from 'react-router-dom'
import { SOCIAL } from '../data/site.js'

export default function AboutGrowthSection() {
  return (
    <section className="wc" id="abt" style={{ margin: '40px 0' }}>
      <div className="globe" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" stroke="var(--primary)" strokeOpacity="0.3" />
          <ellipse cx="100" cy="100" rx="90" ry="40" stroke="var(--blue)" strokeOpacity="0.25" />
          <ellipse cx="100" cy="100" rx="90" ry="60" stroke="var(--primary)" strokeOpacity="0.25" />
          <ellipse cx="100" cy="100" rx="90" ry="80" stroke="var(--blue)" strokeOpacity="0.2" />
          <ellipse cx="100" cy="100" rx="40" ry="90" stroke="var(--primary)" strokeOpacity="0.2" />
          <ellipse cx="100" cy="100" rx="60" ry="90" stroke="var(--blue)" strokeOpacity="0.25" />
          <ellipse cx="100" cy="100" rx="80" ry="90" stroke="var(--primary)" strokeOpacity="0.25" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="var(--blue)" strokeOpacity="0.3" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="var(--primary)" strokeOpacity="0.3" />
          <line x1="14" y1="60" x2="186" y2="60" stroke="var(--blue)" strokeOpacity="0.2" />
          <line x1="14" y1="140" x2="186" y2="140" stroke="var(--primary)" strokeOpacity="0.2" />
        </svg>
      </div>

      <div className="at rv in">
        <div className="al" style={{ paddingLeft: 'clamp(20px, 4vw, 80px)' }}>
          {/* <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(33, 87, 20, 0.12)',
              border: '1px solid rgba(33, 87, 20, 0.25)',
              color: 'var(--green)',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontFamily: 'var(--font)',
              marginBottom: '16px',
            }}
          > */}

            {/* <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--leaf)',
              }}
              aria-hidden="true"
            /> */}
            {/* <span>Our Commitment</span> */}
          {/* </div> */}

          <div className="gl2" style={{ marginTop: '8px' }}>
            {/* <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--soft)' }}>
              Offline &amp; Online Classes · Tirur, Kerala
            </span> */}
          </div>
        </div>

        <p style={{ fontFamily: 'var(--font)', lineHeight: 1.25 }}>
          <b style={{ color: 'var(--ink)' }}>Our commitment to your growth is </b>
          <span style={{ color: 'var(--blue)' }}>practical skills, live client campaigns, and dedicated career guidance.</span>
        </p>
      </div>

      <div className="ab rv in">
        <div className="so" style={{ fontFamily: 'var(--font)' }}>
          <span style={{ fontWeight: 700, marginRight: '4px' }}>Connect with us:</span>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Follow on Instagram"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
          </a>
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Follow on Facebook"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false"><path d="M14 8V6.5c0-.7.3-1 1.1-1H17V2h-2.8C11.3 2 10 3.7 10 6.2V8H7.5v3.5H10V22h4V11.5h2.7L17 8z" /></svg>
          </a>
          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="Watch on YouTube"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15V9l5.2 3z" /></svg>
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="Connect on LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9.5h4V21H3zM9.5 9.5h3.8v1.6c.6-1 1.9-1.9 3.8-1.9 4 0 4.9 2.6 4.9 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4z" /></svg>
          </a>
        </div>

        <Link
          className="ol"
          to="/about"
          style={{
            fontFamily: 'var(--font)',
            fontWeight: 800,
            color: 'var(--primary)',
            borderColor: 'var(--primary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>About Osforh</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
