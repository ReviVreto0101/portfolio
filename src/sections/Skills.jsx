import { SKILLS } from '../data/portfolio'
import styles from './Skills.module.css'

const LEVEL_MAP = { expert: ['lvl-e','Expert'], strong: ['lvl-s','Strong'], learning: ['lvl-g','Learning'] }

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <div className="section-eyebrow"><div className="eyeline" /><span className="label">02 / Skills</span></div>
          <h2 className="section-title">What I build with.</h2>
        </div>
        <div className={`${styles.grid} reveal delay-1`}>
          {SKILLS.map(cat => (
            <div key={cat.title} className={styles.cat}>
              <div className={styles.icon} style={{background: cat.iconBg}}>{cat.icon}</div>
              <div className={styles.title}>{cat.title}</div>
              <ul className={styles.list}>
                {cat.items.map(item => {
                  const [cls, lbl] = LEVEL_MAP[item.level] || LEVEL_MAP.learning
                  return (
                    <li key={item.name} className={styles.item}>
                      {item.name}
                      <span className={`${styles.lvl} ${styles[cls]}`}>{lbl}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
