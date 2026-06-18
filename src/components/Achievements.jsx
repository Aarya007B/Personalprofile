import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/Achievements.css'

const achievements = [
  {
    id: 1,
    icon: '🏆',
    color: 'gold',
    title: 'TCS Tech Bytes Quiz Finalist',
    shortDesc: 'Selected for the college-level TCS Tech Bytes Quiz final.',
    longDesc:
      'Competed against top peers in a rigorous tech-knowledge challenge, covering topics from data structures and algorithms to emerging technologies. Made it to the finals round representing my department.',
    tags: ['Competition', 'Tech Quiz'],
  },
  {
    id: 2,
    icon: '🧠',
    color: 'blue',
    title: 'RAG Model for Public Documents',
    shortDesc: 'Built a Retrieval-Augmented Generation model for document querying.',
    longDesc:
      'Designed and implemented a Retrieval-Augmented Generation pipeline that efficiently queries and summarises large public document corpora using modern NLP techniques including vector embeddings, semantic search, and LLM-powered generation.',
    tags: ['AI/ML', 'NLP', 'Python'],
  },
  {
    id: 3,
    icon: '🚀',
    color: 'green',
    title: 'AI Subscription Management App',
    shortDesc: 'AI-powered web app for NIKSHATRA – E SUMMIT 2025.',
    longDesc:
      'Developed a full-stack AI-powered subscription management web application for NIKSHATRA – E SUMMIT 2025. The app streamlines user billing, provides intelligent analytics, and automates subscription lifecycle management using machine learning.',
    tags: ['Full-Stack', 'AI', 'Web App'],
  },
]

export default function Achievements() {
  const [expandedId, setExpandedId] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="achievements section" id="achievements" aria-label="Achievements and Projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <span className="section-label__line" />
            Portfolio
          </span>
          <h2 className="section-title">
            Projects &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Highlights of the competitions, projects, and milestones that shape my journey.
          </p>
        </motion.div>

        <div className="achievements__grid">
          {achievements.map((item, index) => (
            <motion.article
              className={`achievements__card achievements__card--${item.color}`}
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              role="button"
              tabIndex={0}
              aria-expanded={expandedId === item.id}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
              }}
            >
              {/* Top accent line */}
              <div className="achievements__card-accent" aria-hidden="true" />

              {/* Icon */}
              <div className={`achievements__icon achievements__icon--${item.color}`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="achievements__title">{item.title}</h3>
              <p className="achievements__short-desc">{item.shortDesc}</p>

              {/* Expandable detail */}
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    className="achievements__detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{item.longDesc}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tags */}
              <div className="achievements__tags">
                {item.tags.map((tag) => (
                  <span className="achievements__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expand indicator */}
              <span className="achievements__expand-hint">
                {expandedId === item.id ? 'Show less ↑' : 'Read more ↓'}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
