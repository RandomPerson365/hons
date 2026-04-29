import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import './Locations.css';

const locations = [
  {
    id: 1,
    name: 'Cafe Hons - Kapoorthala',
    address: 'Kapoorthala Road, Aliganj, Lucknow',
    mapUrl: 'https://maps.app.goo.gl/6t4KcVZmdjYwbxGF9'
  },
  {
    id: 2,
    name: 'House of No Sugar - Gomti Nagar',
    address: 'Gomti Nagar, Lucknow',
    mapUrl: 'https://maps.app.goo.gl/h15XuvPSZcXSqyeHA'
  }
];

export default function Locations() {
  return (
    <section className="locations-section">
      <div className="locations-header">
        <h2 className="section-title">Our Sanctuaries</h2>
        <p className="section-subtitle">Find your nearest House of No Sugar in LKO.</p>
      </div>

      <div className="locations-grid" style={{ perspective: '1200px' }}>
        {locations.map((loc, index) => (
          <motion.a 
            href={loc.mapUrl}
            target="_blank"
            rel="noreferrer"
            key={loc.id}
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: loc.id === 1 ? 12 : -12, 
              rotateX: 5,
              z: 60,
              boxShadow: "0 30px 60px -15px rgba(233, 195, 73, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring", 
              stiffness: 150, 
              damping: 12 
            }}
            className="location-card glass-panel"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="location-icon" style={{ transform: 'translateZ(50px)' }}>
              <MapPin size={32} color="var(--color-primary)" />
            </div>
            <div className="location-info" style={{ transform: 'translateZ(30px)' }}>
              <h3>{loc.name}</h3>
              <p>{loc.address}</p>
            </div>
            <div className="location-arrow" style={{ transform: 'translateZ(40px)' }}>→</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
