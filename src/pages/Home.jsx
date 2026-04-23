import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Gallery from '../components/Gallery';
import Locations from '../components/Locations';
import IntroReveal from '../components/IntroReveal';
import FloatingBeans from '../components/FloatingBeans';

export default function Home() {
  return (
    <>
      <IntroReveal />
      <FloatingBeans />
      <div className="content-container">
        <Hero />
        <Philosophy />
        <Gallery />
        <Locations />
        
        <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Cafe Hons - House of No Sugar. All rights reserved.
        </footer>
      </div>
    </>
  );
}
