import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Casos de Éxito', path: '/casos-exito' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Capacidades', path: '/capacidades' },
  ];

  return (
    <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container flex justify-between items-center" style={{ padding: '1rem' }}>
        <Link to="/" className="flex items-center gap-2" style={{ zIndex: 51 }}>
          <span className="font-bold text-2xl text-gradient">CERBERUS TECH</span>
        </Link>

        {/* Desktop Menu */}
        <div className="flex gap-8 items-center" style={{ display: 'none' }} id="desktop-menu">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              style={{
                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)',
                fontWeight: location.pathname === link.path ? '600' : '400'
              }}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contacto" className="btn btn-primary">Contactar</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="btn-secondary" style={{ padding: '0.5rem', display: 'flex' }} id="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, width: '100%',
            background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)',
            padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'
          }}>
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)',
                  padding: '0.5rem 0'
                }}
              >
                {link.name}
              </Link>
            ))}
            <a href="#contacto" className="btn btn-primary text-center mt-4">Contactar</a>
          </div>
        )}
      </div>
      <style>{`
        @media (min-width: 768px) {
          #desktop-menu { display: flex !important; }
          #mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
