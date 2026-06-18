import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Academics from './components/Academics'
import Achievements from './components/Achievements'
import Interests from './components/Interests'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="app">
      <CustomCursor mousePosition={mousePosition} />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Achievements />
        <Interests />
      </main>
      <Footer />
    </div>
  )
}

export default App
