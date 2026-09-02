import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Casos de Éxito', path: '/casos-exito' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Capacidades', path: '/capacidades' },
    { name: 'Recursos', path: '/recursos' },
  ];

  return (
    <nav aria-label="Navegación principal" style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(15,23,42,0.1)' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 8px -2px rgba(0,0,0,0.08)' : 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s'
    }}>
      <div className="container flex justify-between items-center" style={{ padding: '0.75rem 1rem' }}>
        <Link to="/" className="flex items-center gap-2" style={{ zIndex: 51 }} aria-label="Cerberus Tech — Ir al inicio">
          <img src="/logoblanco.jpg" alt="Cerberus Tech — Plataformas de misión crítica para salud" style={{ height: '55px', width: 'auto', objectFit: 'contain', borderRadius: '6px' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="flex gap-8 items-center" style={{ display: 'none' }} id="desktop-menu">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? '600' : '400',
                  fontSize: '0.9rem',
                  padding: '0.3rem 0',
                  borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <a href="/soporte" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Soporte</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="btn-secondary"
          style={{ padding: '0.5rem', display: 'flex', color: 'var(--text-primary)' }}
          id="mobile-toggle"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, width: '100%',
            background: '#ffffff', borderBottom: '1px solid var(--border-color)',
            padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
            boxShadow: '0 8px 24px -4px rgba(0,0,0,0.1)'
          }}>
            {links.map((link) => {
              const isCurrent = location.pathname === link.path;
              return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                aria-current={isCurrent ? 'page' : undefined}
                style={{
                  color: isCurrent ? 'var(--accent-primary)' : 'var(--text-primary)',
                  fontWeight: isCurrent ? '600' : '400',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                {link.name}
              </Link>
              );
            })}
            <a href="#contacto" className="btn btn-primary text-center" style={{ marginTop: '0.5rem' }}>Contactar</a>
          </div>
        )}
      </div>
      <style>{`
        @media (min-width: 768px) {
          #desktop-menu { display: flex !important; }
          #mobile-toggle { display: none !important; }
        }
        #desktop-menu a:hover {
          color: var(--accent-primary) !important;
          border-bottom-color: var(--accent-primary) !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
