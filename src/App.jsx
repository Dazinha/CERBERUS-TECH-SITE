import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import CasosExito from './pages/CasosExito';
import Equipo from './pages/Equipo';
import Capacidades from './pages/Capacidades';

function App() {
  return (
    <Router>
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/casos-exito" element={<CasosExito />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/capacidades" element={<Capacidades />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
