import { useState, useEffect, useCallback } from 'react'
import { PERSONAL } from '../data/portfolio'
import styles from './Navbar.module.css'

const NAV_LINKS = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((id) => {
    setMenuOpen(false)
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <button className={styles.logo} onClick={() => scrollTo('top')}>
        {PERSONAL.initials}<span className={styles.dot}>.</span>
      </button>

      {/* Desktop links */}
      <ul className={styles.links}>
        {NAV_LINKS.map(id => (
          <li key={id}>
            <button className={styles.link} onClick={() => scrollTo(id)}>
              {id}
            </button>
          </li>
        ))}
        <li>
          <button className={styles.cta} onClick={() => scrollTo('contact')}>
            Let's talk
          </button>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.drawer}>
          {NAV_LINKS.map(id => (
            <button key={id} className={styles.drawerLink} onClick={() => scrollTo(id)}>
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
