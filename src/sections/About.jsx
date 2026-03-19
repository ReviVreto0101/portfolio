import { PERSONAL, TAGS } from '../data/portfolio'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <div className="section-eyebrow"><div className="eyeline" /><span className="label">01 / About</span></div>
          <h2 className="section-title">The developer<br />behind the work.</h2>
        </div>
        <div className="grid-2">
          <div className="reveal delay-1">
            <p className={styles.lead}>I'm a <strong>full-stack capable frontend developer</strong> based in Tirana, Albania — building web applications that serve real users in real markets.</p>
            {PERSONAL.bio.map((p, i) => <p key={i} className={styles.para}>{p}</p>)}
            <div className="btn-row" style={{marginTop: 32}}>
              <a href={PERSONAL.cvUrl} className="btn-primary" download>⬇ Download CV</a>
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">⌥ GitHub</a>
            </div>
          </div>
          <div className="reveal delay-2">
            {[
              { lbl: '// Core competencies', items: TAGS.core, acc: true },
              { lbl: '// Currently learning', items: TAGS.learning, acc: false },
              { lbl: '// Work preferences', items: TAGS.prefs, acc: false },
            ].map(g => (
              <div key={g.lbl} className={styles.tagGroup}>
                <div className="label" style={{marginBottom: 10}}>{g.lbl}</div>
                <div className="tags">{g.items.map(i => <span key={i} className={`tag${g.acc ? ' accent' : ''}`}>{i}</span>)}</div>
              </div>
            ))}
            <div className={styles.now}>
              <div className="label" style={{marginBottom: 10}}>// Right now</div>
              <p className={styles.nowText}>→ Building {PERSONAL.currentlyBuilding}<br />→ Reading: {PERSONAL.nowReading}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
