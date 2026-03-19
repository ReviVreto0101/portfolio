import { PROJECTS } from '../data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <div className="section-eyebrow">
            <div className="eyeline" />
            <span className="label">03 / Projects</span>
          </div>
          <h2 className="section-title">Things I've<br />actually built.</h2>
          <p className={styles.desc}>Real projects. Real clients. Real users. No tutorial clones.</p>
        </div>

        <div className={styles.list}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.num} project={project} delay={i % 4} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const { num, title, badge, badgeType, description, stack, liveUrl, githubUrl } = project

  return (
    <article className={`${styles.card} reveal delay-${delay + 1}`}>
      {badge && (
        <span className={`${styles.badge} ${styles[`badge_${badgeType}`]}`}>
          {badge}
        </span>
      )}

      <div className={styles.content}>
        <div className={styles.num}>{num}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.stack}>
          {stack.map(s => (
            <span key={s} className={styles.stackTag}>{s}</span>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <ExternalIcon /> Live demo
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <GithubIcon /> GitHub
          </a>
        )}
      </div>
    </article>
  )
}

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path d="M1 5.5h9M5.5 1l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1C3.24 1 1 3.24 1 6c0 2.21 1.43 4.09 3.42 4.75.25.045.34-.11.34-.24 0-.12-.005-.51-.005-.93-1.25.23-1.57-.31-1.67-.59-.057-.145-.3-.59-.513-.707-.175-.094-.425-.325-.006-.33.395-.006.676.364.77.514.45.757 1.168.545 1.454.413.045-.325.175-.545.32-.672-1.113-.125-2.275-.557-2.275-2.473 0-.545.195-.996.514-1.345-.05-.125-.225-.637.05-1.325 0 0 .42-.132 1.375.514.4-.113.825-.17 1.25-.17.424 0 .85.057 1.25.17.955-.652 1.375-.514 1.375-.514.275.688.1 1.2.05 1.325.319.35.514.795.514 1.345 0 1.922-1.168 2.348-2.281 2.473.18.157.338.457.338.925 0 .672-.005 1.213-.005 1.38 0 .132.09.29.34.24C9.57 10.09 11 8.207 11 6c0-2.76-2.24-5-5-5z" fill="currentColor" />
  </svg>
)
