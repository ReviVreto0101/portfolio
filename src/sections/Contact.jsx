import { PERSONAL } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={`${styles.inner} reveal`}>
          <div className={`status-badge ${styles.badge}`}>
            <div className="pulse-dot" /><span>Open to new opportunities</span>
          </div>
          <h2 className={styles.title}>Let's build something<br /><em>worth</em> shipping.</h2>
          <p className={styles.sub}>Frontend or full-stack roles — remote positions with EU companies preferred. If you're building something interesting and need a developer who cares about both the code and the craft, let's talk.</p>
          <div className={styles.links}>
            <a href={`mailto:${PERSONAL.email}`} className={`${styles.link} ${styles.primary}`}>✉ Send an email</a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>in LinkedIn</a>
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className={styles.link}>⌥ GitHub</a>
            <a href={PERSONAL.cvUrl} className={styles.link} download>⬇ Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
