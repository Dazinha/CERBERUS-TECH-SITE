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
      // Encabezado de la plantilla: degradé azul noche → azul marino con línea cian
      background: 'linear-gradient(90deg, #0a1a33 0%, #0f3d7a 100%)',
      borderBottom: '3px solid #22c3e6',
      boxShadow: scrolled ? '0 4px 16px -4px rgba(10,26,51,0.5)' : 'none',
      transition: 'box-shadow 0.3s'
    }}>
      <div className="container flex justify-between items-center" style={{ padding: '0.75rem 1rem' }}>
        <Link to="/" className="flex items-center gap-2" style={{ zIndex: 51 }} aria-label="Cerberus Tech — Ir al inicio">
          <img src="/brand/cerberus-emblema.jpg" alt="" style={{ height: '46px', width: 'auto', borderRadius: '6px', border: '1px solid rgba(34,195,230,0.4)' }} />
          <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.18em', color: '#ffffff', whiteSpace: 'nowrap' }}>
            CERBERUS <span style={{ color: '#22c3e6' }}>TECH</span>
          </span>
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
                  color: isActive ? '#22c3e6' : '#e8f1fb',
                  fontWeight: isActive ? '600' : '400',
                  fontSize: '0.9rem',
                  padding: '0.3rem 0',
                  whiteSpace: 'nowrap',
                  borderBottom: isActive ? '2px solid #22c3e6' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/soporte" aria-current={location.pathname === '/soporte' ? 'page' : undefined} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Soporte</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="btn-secondary"
          style={{ padding: '0.5rem', display: 'flex', color: '#ffffff', background: 'transparent', border: '1px solid rgba(232,241,251,0.4)', borderRadius: '6px', cursor: 'pointer' }}
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
                  color: isCurrent ? '#1f6feb' : 'var(--text-primary)',
                  fontWeight: isCurrent ? '600' : '400',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                {link.name}
              </Link>
              );
            })}
            <Link
              to="/soporte"
              onClick={() => setIsOpen(false)}
              aria-current={location.pathname === '/soporte' ? 'page' : undefined}
              className="btn btn-primary text-center"
              style={{ marginTop: '0.5rem' }}
            >
              Soporte
            </Link>
          </div>
        )}
      </div>
      <style>{`
        @media (min-width: 1024px) {
          #desktop-menu { display: flex !important; }
          #mobile-toggle { display: none !important; }
        }
        #desktop-menu a:not(.btn):hover {
          color: #22c3e6 !important;
          border-bottom-color: #22c3e6 !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
