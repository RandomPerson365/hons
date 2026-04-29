import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import '../components/Menu.css';

const seasonalItems = [
  {
    id: 1,
    title: 'Winter Spice Latte',
    desc: 'Cinnamon, nutmeg, and espresso over oat milk. No added sugars.',
    price: '₹550',
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'Harvest Macaron',
    desc: 'Almond flour and pumpkin puree, naturally sweetened with stevia.',
    price: '₹350',
    img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'Solstice Brew',
    desc: 'Cold-steeped cascara and botanical infusions.',
    price: '₹450',
    img: 'https://images.unsplash.com/photo-1517701550927-30cfcb64728c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    title: 'Velvet Espresso',
    desc: 'Our signature dark roast with a velvety crema layer. Pure and bold.',
    price: '₹300',
    img: 'https://images.unsplash.com/photo-1514432324607-a125290cae8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    title: 'Golden Cortado',
    desc: 'Equal parts espresso and steamed milk, with a dusting of raw cocoa.',
    price: '₹400',
    img: 'https://images.unsplash.com/photo-1534687941688-190141b7cd91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    title: 'Matcha Clarity',
    desc: 'Ceremonial grade matcha whisked with warm almond milk. No syrup.',
    price: '₹500',
    img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

export default function MenuPage() {
  return (
    <div className="content-container min-h-screen pt-24">
      <section className="menu-section">
        <div className="menu-header">
          <h1 className="section-title">The Complete Menu</h1>
          <p className="section-subtitle">Curated purity for the current season. All prices in INR.</p>
        </div>

        <div className="menu-grid">
          {seasonalItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
              className="menu-card glass-panel"
            >
              <div className="menu-img-container">
                <img src={item.img} alt={item.title} className="menu-img" />
              </div>
              <div className="menu-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="price">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
