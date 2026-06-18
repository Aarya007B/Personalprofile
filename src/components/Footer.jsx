import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/Footer.css'

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <footer className="footer" role="contentinfo" ref={ref}>
      {/* Top divider with gradient */}
      <div className="footer__divider" aria-hidden="true" />

      <motion.div
        className="container footer__inner"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="footer__left">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            AB
            <span className="footer__logo-bracket"> /&gt;</span>
          </a>
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Aarya Balaji. All rights reserved.
          </p>
        </div>

        <div className="footer__socials">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/aarya-b-37ab57391/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="footer__social-link"
            whileHover={{ y: -4, boxShadow: '0 6px 20px rgba(99, 102, 241, 0.2)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Aarya007B"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="footer__social-link"
            whileHover={{ y: -4, boxShadow: '0 6px 20px rgba(99, 102, 241, 0.2)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.333-1.723-1.333-1.723-1.089-.73.083-.716.083-.716 1.205.083 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.228-3.164-.123-.298-.532-1.497.117-3.12 0 0 1.001-.314 3.28 1.209A11.5 11.5 0 0 1 12 6.32c1.013.005 2.03.136 2.991.399 2.278-1.523 3.277-1.209 3.277-1.209.65 1.623.241 2.822.118 3.12.764.825 1.226 1.877 1.226 3.164 0 4.53-2.805 5.527-5.475 5.817.43.364.823 1.084.823 2.184 0 1.576-.015 2.846-.015 3.233 0 .315.216.683.825.567C20.565 21.917 24 17.5 24 12.292 24 5.78 18.627.5 12 .5z" />
            </svg>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:aarya@example.com"
            aria-label="Email"
            className="footer__social-link"
            whileHover={{ y: -4, boxShadow: '0 6px 20px rgba(99, 102, 241, 0.2)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      <div className="footer__bottom">
        <p>
          Designed &amp; built with{' '}
          <span className="footer__heart" aria-label="love">
            ❤️
          </span>{' '}
          by Aarya Balaji
        </p>
      </div>
    </footer>
  )
}
