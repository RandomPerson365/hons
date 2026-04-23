import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="main-header">
      <div className="header-brand">
        <Link to="/" className="brand-link">CAFE HONS</Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/menu" className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link>
      </nav>
    </header>
  );
}
