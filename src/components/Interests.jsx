import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/Interests.css'

const skills = [
  { name: 'Python', level: 85, icon: '🐍' },
  { name: 'HTML / CSS', level: 78, icon: '🌐' },
  { name: 'SQL', level: 72, icon: '🗄️' },
  { name: 'Problem Solving', level: 90, icon: '🧩' },
  { name: 'Machine Learning', level: 80, icon: '🤖' },
  { name: 'Blockchain Technology', level: 70, icon: '⛓️' },
]

const interests = [
  {
    title: 'Open Source Contributor',
    description: 'Contributing to open-source projects and building tools for the community.',
    icon: '💻',
    color: 'teal',
  },
  {
    title: 'ML Enthusiast',
    description: 'Exploring neural networks, NLP, and the cutting edge of AI research.',
    icon: '🔬',
    color: 'orange',
  },
]

export default function Interests() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className="interests section" id="interests" aria-label="Interests and Skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <span className="section-label__line" />
            Skills &amp; Interests
          </span>
          <h2 className="section-title">
            What I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle">
            Technologies I use and topics I'm passionate about exploring.
          </p>
        </motion.div>

        <div className="interests__grid">
          {/* Technical Skills */}
          <motion.div
            className="interests__skills"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="interests__heading">Technical Skills</h3>
            <div className="interests__skills-list">
              {skills.map((skill, i) => (
                <motion.div
                  className={`skill-bar ${hoveredSkill === skill.name ? 'skill-bar--active' : ''}`}
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <div className="skill-bar__header">
                    <span className="skill-bar__icon">{skill.icon}</span>
                    <span className="skill-bar__name">{skill.name}</span>
                    <span className="skill-bar__level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <motion.div
                      className="skill-bar__fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Interests */}
          <motion.div
            className="interests__personal"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="interests__heading">Personal Interests</h3>
            <div className="interests__list">
              {interests.map((item, i) => (
                <motion.div
                  className={`interest-card interest-card--${item.color}`}
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  whileHover={{ x: 8, borderColor: 'rgba(99, 102, 241, 0.3)' }}
                >
                  <span className={`interest-card__icon interest-card__icon--${item.color}`}>
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="interest-card__title">{item.title}</h4>
                    <p className="interest-card__desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech word cloud */}
            <div className="interests__cloud">
              <h3 className="interests__heading" style={{ marginTop: 36 }}>Tools & Tech</h3>
              <div className="interests__tags">
                {['Python', 'TensorFlow', 'React', 'Solidity', 'Git', 'VS Code', 'Linux', 'Docker'].map((tag, i) => (
                  <motion.span
                    className="interests__tag"
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.06 }}
                    whileHover={{ y: -4, boxShadow: '0 6px 24px rgba(99, 102, 241, 0.2)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
