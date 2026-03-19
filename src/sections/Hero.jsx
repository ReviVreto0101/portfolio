import { PERSONAL } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className="container">
        {/* Badge */}
        <div className={`status-badge anim-badge ${styles.badge}`}>
          <div className="pulse-dot" />
          <span>Available for remote work · EU-friendly timezone</span>
        </div>

        {/* Headline */}
        <h1 className={`${styles.h1} anim-h1`}>
          Building interfaces<br />that <em>feel</em> right.
        </h1>
        <p className={`${styles.h2} anim-h2`}>Not just look right.</p>

        {/* Body */}
        <p className={`${styles.body} anim-body`}>
          I'm <strong>{PERSONAL.name}</strong> — a frontend developer building{' '}
          <strong>fast, beautiful, production-ready web apps</strong> with React.js,
          Tailwind CSS, and Laravel. I think in components, obsess over details,
          and ship things that work.
        </p>

        {/* CTA */}
        <div className={`btn-row anim-cta`}>
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            <ArrowRight />
            See my work
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>
            <MailIcon />
            Get in touch
          </button>
        </div>

        {/* Stats */}
        <div className={`${styles.stats} anim-stats`}>
          {PERSONAL.stats.map(({ num, suffix, label }) => (
            <div key={label} className={styles.stat}>
              <div className={styles.statNum}>
                {num}<span className={styles.accent}>{suffix}</span>
              </div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollCue}>
        <span>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 2.5h9a.5.5 0 01.5.5v6a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5z" stroke="currentColor" strokeWidth="1.1" />
    <path d="M1.5 3l5 3.5 5-3.5" stroke="currentColor" strokeWidth="1.1" />
  </svg>
)
