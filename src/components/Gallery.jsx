import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Gallery.css';

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="gallery-section">
      <div className="gallery-header">
        <h2 className="section-title">Immersive Spaces</h2>
        <p className="section-subtitle">A sanctuary designed for clarity and connection.</p>
      </div>
      
      <div className="gallery-grid">
        <motion.div style={{ y: y1 }} className="gallery-col col-left">
          <div className="gallery-img-wrapper glass-panel">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cafe Interior 1" />
          </div>
          <div className="gallery-img-wrapper glass-panel">
            <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cafe Interior 2" />
          </div>
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="gallery-col col-right">
          <div className="gallery-img-wrapper glass-panel">
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coffee Details" />
          </div>
          <div className="gallery-img-wrapper glass-panel">
            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cafe Seating" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
