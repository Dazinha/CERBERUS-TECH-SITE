import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#040714', borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'var(--space-12) 0' }}>
      <div className="container grid grid-cols-3 md:grid-cols-1 gap-8" style={{ gap: '6rem' }}>

        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 mb-2">
            <img src="/CERBERUSTECHLOGO.png" alt="Cerberus Tech Logo" style={{ height: '125px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <p className="text-sm text-secondary leading-relaxed mb-2" style={{ color: '#a0aabf' }}>
            Compañía chilena especializada en plataformas digitales de misión crítica para el sector sanitario.
          </p>
        </div>

        {/* Column 2: Compañía */}
        <div className="flex flex-col gap-8 md:pl-8">
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-white" style={{ letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Compañía</h4>
            <div className="flex flex-col text-sm" style={{ color: '#a0aabf', gap: '1.25rem' }}>
              <Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
              <Link to="/casos-exito" className="hover:text-white transition-colors">Casos de Éxito</Link>
              <Link to="/equipo" className="hover:text-white transition-colors">Equipo Profesional</Link>
              <Link to="/capacidades" className="hover:text-white transition-colors">Capacidades Técnicas</Link>
              <Link to="/recursos" className="hover:text-white transition-colors">Recursos y Soporte</Link>
            </div>
          </div>
        </div>

        {/* Column 3: Contacto Licitaciones */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-white" style={{ letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Contacto Licitaciones</h4>

            <div className="flex flex-col text-sm" style={{ color: '#a0aabf', gap: '1rem' }}>

              <div className="flex flex-col gap-4">
                {/* Contact Card 1 */}
                <a href="tel:+56322551000" className="contact-card">
                  <Phone size={18} style={{ color: '#8b949e', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ fontSize: '12px', color: '#8b949e', marginBottom: '2px', lineHeight: '1' }}>Teléfono</span>
                    <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '400', lineHeight: '1.2' }}>+56 32 255 1000</span>
                  </div>
                </a>

                {/* Contact Card 2 */}
                <a href="mailto:licitaciones@cerberustech.cl" className="contact-card">
                  <Mail size={18} style={{ color: '#8b949e', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ fontSize: '12px', color: '#8b949e', marginBottom: '2px', lineHeight: '1' }}>Email</span>
                    <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '400', lineHeight: '1.2' }}>licitaciones@cerberustech.cl</span>
                  </div>
                </a>

                {/* Contact Card 3 */}
                <a href="https://maps.app.goo.gl/MWdq6U7ySoLzUR856" target="_blank" rel="noopener noreferrer" className="contact-card">
                  <MapPin size={18} style={{ color: '#8b949e', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ fontSize: '12px', color: '#8b949e', marginBottom: '2px', lineHeight: '1' }}>Ubicación</span>
                    <div className="flex items-center gap-1">
                      <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '400', lineHeight: '1.2' }}>Av. Brasil 2950, piso 8</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container" style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <p className="text-xs" style={{ color: '#6b7280' }}>
          &copy; {new Date().getFullYear()} Cerberus Tech. Todos los derechos reservados.
        </p>
      </div>
      <style>{`
        .transition-colors { transition: color 0.2s ease-in-out; }
        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 0.75rem;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .contact-card:hover {
          border-color: rgba(135, 206, 235, 0.4);
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
