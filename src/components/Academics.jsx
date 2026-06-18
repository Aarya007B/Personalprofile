import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/Academics.css'

const academicData = [
  {
    year: '2025 – 2029',
    degree: 'B.Tech in Electronics & Telecommunication',
    institution: 'Bangalore Institute of Technology',
    description:
      'Currently pursuing my undergraduate degree with a strong focus on signal processing, embedded systems, and machine learning. First semester CGPA: 8.95.',
    icon: '🎓',
    highlight: 'CGPA 8.95',
  },
  {
    year: 'Higher Secondary',
    degree: 'National Public School Indiranagar',
    institution: 'Bengaluru',
    description:
      'Completed higher secondary education with a strong academic foundation in mathematics and the sciences.',
    icon: '📚',
  },
  {
    year: 'Secondary',
    degree: 'Sri Chaitanya Techno School',
    institution: 'Bengaluru',
    description:
      'Built a solid grounding in STEM subjects and developed an early interest in technology and problem-solving.',
    icon: '🏫',
  },
]

export default function Academics() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="academics section" id="academics" aria-label="Academic Background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <span className="section-label__line" />
            Education
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of my educational path and the foundations that fuel my passion for
            technology.
          </p>
        </motion.div>

        <div className="academics__timeline">
          <div className="academics__timeline-line" aria-hidden="true" />

          {academicData.map((item, index) => (
            <motion.div
              className="academics__item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Timeline node */}
              <div className="academics__node">
                <motion.div
                  className="academics__node-dot"
                  animate={inView ? { scale: [0, 1.2, 1] } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                />
              </div>

              {/* Card */}
              <motion.div
                className="academics__card"
                whileHover={{ y: -8, borderColor: 'rgba(99, 102, 241, 0.35)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="academics__card-header">
                  <span className="academics__icon">{item.icon}</span>
                  <span className="academics__year">{item.year}</span>
                  {item.highlight && (
                    <span className="academics__highlight">{item.highlight}</span>
                  )}
                </div>
                <h3 className="academics__degree">{item.degree}</h3>
                <p className="academics__institution">{item.institution}</p>
                <p className="academics__description">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
