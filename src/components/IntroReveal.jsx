import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroReveal.css';

// Particle component for floating coffee steam
const SteamParticle = ({ delay, left, size, duration }) => (
  <motion.div
    className="steam-particle"
    style={{ left: `${left}%`, width: size, height: size }}
    initial={{ opacity: 0, y: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0.3, 0],
      y: [-20, -120, -200],
      scale: [0, 1, 0.5],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: delay * 0.5,
      ease: 'easeOut',
    }}
  />
);

export default function IntroReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFullyHidden, setIsFullyHidden] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isRevealed && !isFullyHidden) {
      document.body.style.overflow = 'hidden';
    }

    const handleWheel = (e) => {
      if (isAnimating) return;

      // Scroll down → reveal site
      if (!isRevealed && e.deltaY > 0) {
        setIsAnimating(true);
        setIsRevealed(true);
        setTimeout(() => {
          document.body.style.overflow = 'auto';
          setIsFullyHidden(true);
          setIsAnimating(false);
        }, 1800);
      }

      // Scroll up from top → show intro again
      if (isFullyHidden && window.scrollY <= 5 && e.deltaY < 0) {
        setIsAnimating(true);
        setIsFullyHidden(false);
        setIsRevealed(false);
        document.body.style.overflow = 'hidden';
        setTimeout(() => setIsAnimating(false), 1800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isRevealed, isFullyHidden, isAnimating]);

  if (isFullyHidden) return null;

  // Generate steam particles
  const steamParticles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: 30 + Math.random() * 40,
    delay: Math.random() * 3,
    size: 4 + Math.random() * 6,
    duration: 2.5 + Math.random() * 2,
  }));

  return (
    <>
      {/* ───── CENTER BRANDING (rendered outside curtain to guarantee centering) ───── */}
      <motion.div
        className="intro-center-brand"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isRevealed ? 0 : 1,
          scale: isRevealed ? 0.8 : 1,
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className="brand-badge">
          <span className="brand-badge-text">EST. 2024</span>
        </div>
        <h1 className="intro-brand-title">CAFE HONS</h1>
        <div className="brand-divider" />
        <p className="intro-brand-tagline">HOUSE OF NO SUGAR</p>
        <p className="intro-brand-city">LUCKNOW</p>
      </motion.div>

      {/* ───── SCROLL HINT ───── */}
      <motion.div
        className="scroll-hint"
        animate={{ opacity: isRevealed ? 0 : 1, y: isRevealed ? 20 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">SCROLL TO ENTER</span>
      </motion.div>

      {/* ───── CURTAIN PANELS ───── */}
      <div className="intro-curtain">
        {/* LEFT PANEL */}
        <motion.div
          className="curtain-panel curtain-left"
          initial={{ x: '0%' }}
          animate={{ x: isRevealed ? '-100%' : '0%' }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="cup-illustration cup-left">
            <div className="cup-body">
              <div className="cup-brand">H</div>
            </div>
            <div className="cup-handle" />
            <div className="cup-saucer" />
            <div className="cup-steam">
              {steamParticles.slice(0, 9).map((p) => (
                <SteamParticle key={p.id} {...p} left={20 + Math.random() * 60} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          className="curtain-panel curtain-right"
          initial={{ x: '0%' }}
          animate={{ x: isRevealed ? '100%' : '0%' }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="cup-illustration cup-right">
            <div className="cup-body cup-body-light">
              <div className="cup-brand brand-dark">H</div>
            </div>
            <div className="cup-handle handle-light" />
            <div className="cup-saucer saucer-light" />
            <div className="cup-steam">
              {steamParticles.slice(9).map((p) => (
                <SteamParticle key={p.id} {...p} left={20 + Math.random() * 60} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
