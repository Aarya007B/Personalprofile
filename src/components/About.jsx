import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/About.css'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  const stats = [
    { value: '8.95', label: '1st Sem CGPA' },
    { value: '3+', label: 'Projects Built' },
    { value: '∞', label: 'Curiosity' },
    { value: '1st', label: 'Year Student' },
  ]

  return (
    <section className="about section" id="about" aria-label="About Me" ref={ref}>
      <div className="container">
        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left: Text */}
          <motion.div className="about__text" variants={fadeUp}>
            <span className="section-label">
              <span className="section-label__line" />
              About Me
            </span>
            <h2 className="section-title">
              Crafting the Future
              <br />
              with <span className="gradient-text">Code &amp; Circuits</span>
            </h2>
            <p>
              Hello! I'm <strong>Aarya Balaji</strong>, an Electronics and Telecommunication
              Systems student and an ML enthusiast based in Bengaluru. My journey into artificial
              intelligence started when I first discovered the incredible potential of combining
              hardware systems with intelligent software.
            </p>
            <p>
              Since then, I've dedicated myself to building new AI-powered projects. I believe that
              technology should be leveraged to build smart, efficient, and forward-thinking
              solutions. Whether I'm designing complex telecommunication circuits or training machine
              learning models, I always aim to bring a touch of innovation and rigorous logic to the
              table.
            </p>
            <p>
              Outside of my work and studies, I'm a massive fan of <strong>F1</strong> and am
              constantly exploring the exciting world of <strong>blockchain technology</strong>.
            </p>
          </motion.div>

          {/* Right: Code block + stats */}
          <motion.div className="about__right" variants={fadeUp}>
            {/* Code window */}
            <div className="about__code-window">
              <div className="about__code-titlebar">
                <div className="about__code-dots">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <span className="about__code-filename">about.json</span>
              </div>
              <pre className="about__code-body">
{`{
  "name": "Aarya Balaji",
  "role": "Student Developer",
  "location": "Bengaluru, IN",
  "degree": "B.Tech E&TC",
  "interests": [
    "Machine Learning",
    "Blockchain",
    "Formula 1"
  ],
  "available": true,
  "coffee_count": "∞"
}`}
              </pre>
            </div>

            {/* Stats grid */}
            <div className="about__stats">
              {stats.map((stat, i) => (
                <motion.div
                  className="about__stat-card"
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.4)' }}
                >
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
