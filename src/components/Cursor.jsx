import { useEffect, useRef, useState } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const ringRef = useRef({ x: -100, y: -100 })
  const posRef = useRef({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
    }

    const animate = () => {
      ringRef.current.x += (posRef.current.x - ringRef.current.x) * 0.11
      ringRef.current.y += (posRef.current.y - ringRef.current.y) * 0.11
      setRing({ x: ringRef.current.x, y: ringRef.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Hide on mobile (no hover)
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <div
        className={styles.cursor}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={styles.ring}
        style={{ left: ring.x, top: ring.y }}
      />
    </>
  )
}
