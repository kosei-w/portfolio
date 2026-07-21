'use client'

import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Tokyo',
})

/** 東京の現地時刻。実在感シグナル（"いま連絡が届く相手"の演出）。 */
export default function LocalTime() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()))
    update()
    const id = window.setInterval(update, 15_000)
    return () => window.clearInterval(id)
  }, [])

  return <span>{time}</span>
}
