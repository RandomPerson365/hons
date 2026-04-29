import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      <header className="main-header">
        <div className="header-brand">
          <Link to="/" className="brand-link" onClick={() => setIsMobileMenuOpen(false)}>CAFE HONS</Link>
        </div>
        <nav className="header-nav desktop-only">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/menu" className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link>
        </nav>
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay glass-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="mobile-menu-header">
              <span className="brand-link">CAFE HONS</span>
              <button 
                className="mobile-menu-close" 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mobile-nav">
              <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/menu" className={`mobile-nav-link ${location.pathname === '/menu' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
