import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-content"
      >
        <h2 className="hero-subtitle">The Art of Absence</h2>
        <h1 className="hero-title">
          House of <br />
          <span className="gold-gradient-text italic">No Sugar.</span>
        </h1>
        <p className="hero-description">
          In the world of ultra-premium hospitality, luxury is defined by what is removed—and what is amplified. 
          Experience the pure texture of the space and the flow of the sensory journey.
        </p>
        
        <Link to="/menu" style={{ textDecoration: 'none' }}>
          <button className="gold-btn">
            Discover Our Menu
          </button>
        </Link>
      </motion.div>
      
      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
