import { useEffect, useState } from 'react'

function format() {
  return new Date()
    .toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    .replace(',', ' ·')
}

export default function Clock() {
  const [now, setNow] = useState(format)
  useEffect(() => {
    const id = setInterval(() => setNow(format()), 30000)
    return () => clearInterval(id)
  }, [])
  return <b id="clk">{now}</b>
}
