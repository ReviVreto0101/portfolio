import { PERSONAL } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>{PERSONAL.name} · {PERSONAL.role} · {PERSONAL.location}</span>
      <span className={styles.text}>Built with <span style={{color:'var(--accent)'}}>React.js</span> + Vite · ©{new Date().getFullYear()}</span>
    </footer>
  )
}
