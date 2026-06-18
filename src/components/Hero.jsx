import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

const roles = [
  'ML Enthusiast',
  'Blockchain Explorer',
  'Full-Stack Tinkerer',
  'Circuit Designer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  /* Typewriter effect */
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))
      }, 70)
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1))
      }, 40)
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, roleIndex])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="hero" id="home" aria-label="Hero introduction">
      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__badge" variants={childVariants}>
            <span className="hero__badge-dot" />
            Open to opportunities
          </motion.div>

          <motion.h1 className="hero__title" variants={childVariants}>
            Hi, I'm{' '}
            <span className="hero__title-gradient">Aarya</span>
          </motion.h1>

          <motion.div className="hero__role-wrapper" variants={childVariants}>
            <span className="hero__role-prefix">I'm a </span>
            <span className="hero__role-text">{displayedText}</span>
            <span className="hero__cursor-blink">|</span>
          </motion.div>

          <motion.p className="hero__subtitle" variants={childVariants}>
            <strong>B.Tech in Electronics &amp; Telecommunication</strong> Student
            &nbsp;|&nbsp;Passionate about Blockchain, Machine Learning &amp; AI
          </motion.p>

          <motion.div className="hero__buttons" variants={childVariants}>
            <a href="mailto:aarya@example.com" className="hero__btn hero__btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Get in Touch
            </a>
            <a
              href="https://github.com/Aarya007B"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--outline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.333-1.723-1.333-1.723-1.089-.73.083-.716.083-.716 1.205.083 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.228-3.164-.123-.298-.532-1.497.117-3.12 0 0 1.001-.314 3.28 1.209A11.5 11.5 0 0 1 12 6.32c1.013.005 2.03.136 2.991.399 2.278-1.523 3.277-1.209 3.277-1.209.65 1.623.241 2.822.118 3.12.764.825 1.226 1.877 1.226 3.164 0 4.53-2.805 5.527-5.475 5.817.43.364.823 1.084.823 2.184 0 1.576-.015 2.846-.015 3.233 0 .315.216.683.825.567C20.565 21.917 24 17.5 24 12.292 24 5.78 18.627.5 12 .5z"/></svg>
              GitHub
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="hero__scroll-indicator"
            variants={childVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__image-wrapper">
            <div className="hero__image-glow" aria-hidden="true" />
            <div className="hero__image-ring" aria-hidden="true" />
            <img
              src="/aarya.jpg"
              alt="Aarya Balaji — Profile photograph"
              width="340"
              height="340"
              loading="eager"
            />
          </div>

          {/* Floating badges */}
          <motion.div
            className="hero__float hero__float--1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            aria-hidden="true"
          >
            <span className="hero__float-icon hero__float-icon--blue">🤖</span>
            ML Enthusiast
          </motion.div>

          <motion.div
            className="hero__float hero__float--2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            aria-hidden="true"
          >
            <span className="hero__float-icon hero__float-icon--purple">⛓️</span>
            Blockchain
          </motion.div>

          <motion.div
            className="hero__float hero__float--3"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.8 }}
            aria-hidden="true"
          >
            <span className="hero__float-icon hero__float-icon--cyan">📡</span>
            E&amp;TC
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
