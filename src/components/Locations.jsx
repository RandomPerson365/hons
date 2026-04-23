import { motion } from 'framer-motion';
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

      <div className="locations-grid">
        {locations.map((loc) => (
          <motion.a 
            href={loc.mapUrl}
            target="_blank"
            rel="noreferrer"
            key={loc.id}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            className="location-card glass-panel"
          >
            <div className="location-icon">
              <MapPin size={32} color="var(--color-primary)" />
            </div>
            <div className="location-info">
              <h3>{loc.name}</h3>
              <p>{loc.address}</p>
            </div>
            <div className="location-arrow">→</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
