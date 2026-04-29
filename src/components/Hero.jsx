import { motion } from 'motion/react';
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
};

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content"
      >
        <motion.h2 variants={itemVariants} className="hero-subtitle">The Art of Absence</motion.h2>
        <motion.h1 variants={itemVariants} className="hero-title">
          House of <br />
          <span className="gold-gradient-text italic">No Sugar.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-description">
          In the world of ultra-premium hospitality, luxury is defined by what is removed—and what is amplified. 
          Experience the pure texture of the space and the flow of the sensory journey.
        </motion.p>
        
        <motion.div variants={itemVariants}>
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
