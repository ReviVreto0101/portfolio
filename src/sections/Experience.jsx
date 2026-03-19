import { EXPERIENCE, EDUCATION, LANGUAGES } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <div className="section-eyebrow"><div className="eyeline" /><span className="label">04 / Experience</span></div>
          <h2 className="section-title">Where I've worked.</h2>
        </div>
        <div className="grid-2">
          <div className={`${styles.timeline} reveal delay-1`}>
            {EXPERIENCE.map((e, i) => (
              <div key={i} className={`${styles.item} ${i === 0 ? styles.active : ''}`}>
                <div className={styles.dot} />
                <div className={styles.date}>{e.date}</div>
                <div className={styles.role}>{e.role}</div>
                <div className={styles.company}>{e.company} · {e.location}</div>
                <p className={styles.desc}>{e.description}</p>
                {e.achievements.length > 0 && (
                  <ul className={styles.ach}>{e.achievements.map(a => <li key={a}>{a}</li>)}</ul>
                )}
              </div>
            ))}
          </div>
          <div className="reveal delay-2">
            <div className={styles.card}>
              <div className="label" style={{marginBottom: 18}}>// Education</div>
              {EDUCATION.map((e, i) => (
                <div key={i} className={i < EDUCATION.length - 1 ? styles.eduItem : undefined}>
                  <div className={styles.date}>{e.date}</div>
                  <div className={styles.role}>{e.degree}</div>
                  <div className={styles.company}>{e.school}</div>
                </div>
              ))}
            </div>
            <div className={styles.card} style={{marginTop: 18}}>
              <div className="label" style={{marginBottom: 18}}>// Languages</div>
              {LANGUAGES.map(l => (
                <div key={l.name} className={styles.langRow}>
                  <span className={styles.langName}>{l.name}</span>
                  <span className={styles.langLevel} style={l.accent ? {color:'var(--accent)'} : {}}>{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
