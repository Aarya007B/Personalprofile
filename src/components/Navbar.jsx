import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Navbar.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'academics', label: 'Academics' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'interests', label: 'Interests' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  /* Scroll detection for navbar background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section tracking via Intersection Observer */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('home') }}
          aria-label="Aarya Balaji – Home"
        >
          <span className="navbar__logo-bracket">&lt;</span>
          AB
          <span className="navbar__logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" role="menubar">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <a
                href={`#${item.id}`}
                role="menuitem"
                className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    className="navbar__link-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href="mailto:aarya@example.com"
          className="navbar__cta"
        >
          Let's Talk
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <ul>
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
