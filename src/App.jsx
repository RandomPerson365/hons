import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        } />
        <Route path="/menu" element={
          <Suspense fallback={null}>
            <MenuPage />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;
