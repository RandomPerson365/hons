import { motion } from 'motion/react';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="philosophy-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="philosophy-header"
        >
          <h2>The No Sugar Promise</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="philosophy-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="philosophy-text glass-panel"
          >
            <h3>Pure Ingredients, Uncompromised Taste.</h3>
            <p>
              At Cafe Hons, we believe that true luxury lies in authenticity. That's why we have completely eliminated refined sugars from our menu. 
            </p>
            <p>
              By sourcing the highest quality Arabica beans, wild honey, organic stevia, and natural fruit extracts, we craft beverages and pastries that satisfy your cravings without compromising your health.
            </p>
            <p>
              Experience the true, unmasked flavor notes of single-origin coffee, exactly as nature intended.
            </p>
            <button className="gold-btn mt-6">Discover Our Sourcing</button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="philosophy-image-container"
          >
            <div className="philosophy-image glass-panel">
              <div className="image-overlay"></div>
              {/* Using a placeholder gradient for the premium image */}
              <div className="placeholder-roast-image"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="gold-accent-border top-right"></div>
            <div className="gold-accent-border bottom-left"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
