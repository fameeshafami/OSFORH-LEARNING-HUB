import { WHATSAPP, PHONE_TEL } from '../data/site.js'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12.04 2a9.91 9.91 0 0 0-8.59 14.86L2.05 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2m0 1.67a8.24 8.24 0 1 1-4.2 15.33l-.3-.18-3.12.82.83-3.04-.2-.31A8.24 8.24 0 0 1 12.04 3.67m-3.4 4.1c-.2 0-.5.07-.76.35s-1 .98-1 2.4 1.03 2.78 1.17 2.97c.15.2 2.03 3.1 4.9 4.34 1.9.82 2.5.88 3.4.74.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.27-.2-.56-.34s-1.7-.84-1.97-.94-.46-.14-.65.15-.75.94-.92 1.13-.34.22-.63.07a7.8 7.8 0 0 1-2.3-1.42 8.6 8.6 0 0 1-1.6-1.98c-.17-.29 0-.45.13-.6l.43-.5c.14-.17.19-.29.29-.48s.05-.36-.02-.5-.65-1.57-.9-2.15c-.23-.56-.47-.48-.65-.49z" />
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export default function FloatingActions() {
  return (
    <div className="float-btns fa" role="group" aria-label="Quick contact" style={{ paddingBottom: '90px' }}>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fab whatsapp" aria-label="Chat on WhatsApp (opens in a new tab)">
        <WaIcon />
      </a>
      <a href={'tel:' + PHONE_TEL} className="fab call c" aria-label="Call Osforh Learning Hub">
        <PhoneIcon />
      </a>
    </div>
  )
}
