import { motion } from 'motion/react';
import './Philosophy.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1
    }
  }
};

export default function Philosophy() {
  return (
    <section className="philosophy-section" style={{ perspective: '2000px' }}>
      <div className="philosophy-container">
        <motion.div 
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="philosophy-header"
        >
          <h2 className="gold-gradient-text">The No Sugar Promise</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="philosophy-grid">
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ 
              rotateY: -5, 
              rotateX: 5, 
              z: 50,
              boxShadow: "0 25px 50px -12px rgba(233, 195, 73, 0.25)"
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="philosophy-text glass-panel"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 style={{ transform: 'translateZ(30px)' }}>Pure Ingredients, Uncompromised Taste.</h3>
            <p style={{ transform: 'translateZ(20px)' }}>
              At Cafe Hons, we believe that true luxury lies in authenticity. That's why we have completely eliminated refined sugars from our menu. 
            </p>
            <p style={{ transform: 'translateZ(10px)' }}>
              By sourcing the highest quality Arabica beans, wild honey, organic stevia, and natural fruit extracts, we craft beverages and pastries that satisfy your cravings without compromising your health.
            </p>
            <button className="gold-btn mt-6" style={{ transform: 'translateZ(40px)' }}>Discover Our Sourcing</button>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ 
              rotateY: 5, 
              rotateX: 5, 
              z: 50,
              boxShadow: "0 25px 50px -12px rgba(233, 195, 73, 0.15)"
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="philosophy-image-container"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="philosophy-image glass-panel" style={{ transform: 'translateZ(20px)' }}>
              <div className="image-overlay"></div>
              <div className="placeholder-roast-image"></div>
            </div>
            
            <div className="gold-accent-border top-right" style={{ transform: 'translateZ(40px)' }}></div>
            <div className="gold-accent-border bottom-left" style={{ transform: 'translateZ(40px)' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
