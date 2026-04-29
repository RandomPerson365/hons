import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1
    }
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotateX = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="hero-section" style={{ perspective: '1000px' }}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content"
        style={{ y: y1, rotateX }}
      >
        <motion.h2 
          variants={itemVariants} 
          className="hero-subtitle"
          style={{ y: useTransform(scrollY, [0, 500], [0, -20]) }}
        >
          The Art of Absence
        </motion.h2>
        <motion.h1 
          variants={itemVariants} 
          className="hero-title"
          style={{ y: useTransform(scrollY, [0, 500], [0, 20]) }}
        >
          House of <br />
          <span className="gold-gradient-text italic">No Sugar.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-description">
          In the world of ultra-premium hospitality, luxury is defined by what is removed—and what is amplified. 
          Experience the pure texture of the space and the flow of the sensory journey.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/menu" style={{ textDecoration: 'none' }}>
            <button className="gold-btn">
              Discover Our Menu
            </button>
          </Link>
        </motion.div>
      </motion.div>
      
      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
