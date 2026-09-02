import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import CasosExito from './pages/CasosExito';
import Equipo from './pages/Equipo';
import Capacidades from './pages/Capacidades';
import Recursos from './pages/Recursos';
import Soporte from './pages/Soporte';

function App() {
  return (
    <Router>
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        {/* Skip-to-content — WCAG 2.2 AA (RT-23.05) */}
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <ScrollToTop />
        <header role="banner">
          <Navbar />
        </header>
        <main id="main-content" role="main" style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/casos-exito" element={<CasosExito />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/capacidades" element={<Capacidades />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/soporte" element={<Soporte />} />
          </Routes>
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
