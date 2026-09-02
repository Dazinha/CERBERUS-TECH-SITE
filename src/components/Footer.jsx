import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" style={{ backgroundColor: '#09090b', borderTop: '1px solid rgba(255,255,255,0.1)', padding: 'var(--space-12) 0' }}>
      <div className="container grid grid-cols-3 md:grid-cols-1 gap-8" style={{ gap: '6rem' }}>

        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 mb-2">
            <img src="/CERBERUSTECHLOGO.png" alt="Cerberus Tech Logo" style={{ height: '150px', width: 'auto', objectFit: 'contain', borderRadius: '8px' }} />
          </Link>
          <p className="text-sm leading-relaxed mb-2" style={{ color: '#a1a1aa' }}>
            El socio tecnológico confiable para la operación continua en salud. Garantizamos resiliencia, seguridad e interoperabilidad bajo los más altos estándares.
          </p>
        </div>

        {/* Column 2: Compañía */}
        <div className="flex flex-col gap-8 md:pl-8">
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase" style={{ color: '#f4f4f5', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Compañía</h3>
            <div className="flex flex-col text-sm" style={{ gap: '1.25rem' }}>
              <Link to="/nosotros" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Nosotros</Link>
              <Link to="/casos-exito" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Casos de Éxito</Link>
              <Link to="/equipo" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Equipo Profesional</Link>
              <Link to="/capacidades" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Capacidades Técnicas</Link>
              <Link to="/recursos" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Recursos y Soporte</Link>
              <Link to="/soporte" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Portal de Soporte</Link>
            </div>
          </div>
        </div>

        {/* Column 3: Contacto Licitaciones */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase" style={{ color: '#f4f4f5', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Contacto Licitaciones</h3>

            <div className="flex flex-col text-sm" style={{ gap: '1rem' }}>

              <div className="flex flex-col gap-4">
                {/* Contact Card 1 */}
                <a href="tel:+56322551000" className="contact-card">
                  <Phone size={18} style={{ color: '#a1a1aa', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '2px', lineHeight: '1' }}>Teléfono</span>
                    <span style={{ fontSize: '14px', color: '#e4e4e7', fontWeight: '400', lineHeight: '1.2' }}>+56 32 255 1000</span>
                  </div>
                </a>

                {/* Contact Card 2 */}
                <a href="mailto:licitaciones@cerberustech.cl" className="contact-card">
                  <Mail size={18} style={{ color: '#a1a1aa', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '2px', lineHeight: '1' }}>Email</span>
                    <span style={{ fontSize: '14px', color: '#e4e4e7', fontWeight: '400', lineHeight: '1.2' }}>licitaciones@cerberustech.cl</span>
                  </div>
                </a>

                {/* Contact Card 3 */}
                <a href="https://maps.app.goo.gl/FNAh1PKzBtTg37PQA" target="_blank" rel="noopener noreferrer" className="contact-card">
                  <MapPin size={18} style={{ color: '#a1a1aa', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '2px', lineHeight: '1' }}>Ubicación</span>
                    <div className="flex items-center gap-1">
                      <span style={{ fontSize: '14px', color: '#e4e4e7', fontWeight: '400', lineHeight: '1.2' }}>Av. Brasil 2241, piso 2</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e4e4e7' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container" style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <p className="text-xs" style={{ color: '#9ca3af' }}>
          &copy; {new Date().getFullYear()} Cerberus Tech. Todos los derechos reservados.
        </p>
      </div>
      <style>{`
        .transition-colors { transition: color 0.2s ease-in-out; }
        .hover-link:hover { color: #f4f4f5 !important; }
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
          border-color: rgba(99, 102, 241, 0.5);
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
