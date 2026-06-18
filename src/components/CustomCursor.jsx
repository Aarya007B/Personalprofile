import { motion } from 'framer-motion'

/**
 * Custom cursor that follows the mouse with a glowing dot + ring.
 * Hidden on mobile via CSS.
 */
export default function CustomCursor({ mousePosition }) {
  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        style={{
          position: 'fixed',
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(99, 102, 241, 0.4)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
        aria-hidden="true"
      />
      {/* Inner dot */}
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.05 }}
        style={{
          position: 'fixed',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#6366f1',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 12px rgba(99, 102, 241, 0.6)',
        }}
        aria-hidden="true"
      />
      <style>{`
        @media (max-width: 768px) {
          .custom-cursor-ring,
          .custom-cursor-dot { display: none !important; }
        }
      `}</style>
    </>
  )
}
