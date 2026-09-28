import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" aria-label="Pie de página — Cerberus Tech" style={{ background: 'var(--hex-pattern), linear-gradient(160deg, #0f3d7a 0%, #0a1a33 55%)', borderTop: '4px solid #22c3e6', padding: 'var(--space-12) 0' }}>
      <div className="container grid grid-cols-3 md:grid-cols-1 gap-8" style={{ gap: '6rem' }}>

        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 mb-2" aria-label="Cerberus Tech — Ir al inicio">
            <img src="/brand/cerberus-emblema.jpg" alt="" style={{ height: '64px', width: 'auto', borderRadius: '8px', border: '1px solid rgba(34,195,230,0.4)' }} />
            <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.18em', color: '#ffffff' }}>
              CERBERUS <span style={{ color: '#22c3e6' }}>TECH</span>
            </span>
          </Link>
          <p style={{ color: '#22c3e6', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
            Construimos y operamos: no entregamos y nos vamos.
          </p>
          <p className="text-sm leading-relaxed mb-2" style={{ color: '#c3cfdf', fontSize: '0.875rem' }}>
            El socio tecnológico confiable para la operación continua en salud. Garantizamos resiliencia, seguridad e interoperabilidad bajo los más altos estándares.
          </p>
          <p style={{ color: '#e8f1fb', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em' }}>
            VALPARAÍSO · TEMUCO · SOC/NOC 24/7
          </p>
        </div>

        {/* Column 2: Compañía */}
        <div className="flex flex-col gap-8 md:pl-8">
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase" id="footer-nav-heading" style={{ color: '#f4f4f5', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Compañía</h3>
            <nav aria-labelledby="footer-nav-heading" className="flex flex-col text-sm" style={{ gap: '1.25rem' }}>
              <Link to="/nosotros" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Nosotros</Link>
              <Link to="/casos-exito" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Casos de Éxito</Link>
              <Link to="/equipo" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Equipo Profesional</Link>
              <Link to="/capacidades" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Capacidades Técnicas</Link>
              <Link to="/recursos" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Recursos</Link>
              <Link to="/soporte" className="hover-link transition-colors" style={{ color: '#a1a1aa' }}>Soporte</Link>
            </nav>
          </div>
        </div>

        {/* Column 3: Contacto Licitaciones */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase" style={{ color: '#f4f4f5', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Contacto Licitaciones</h3>

            <div className="flex flex-col text-sm" style={{ gap: '1rem' }}>

              <div className="flex flex-col gap-4">
                {/* Contact Card 1 */}
                <a href="tel:+56322551000" className="contact-card" aria-label="Llamar al teléfono +56 32 255 1000">
                  <Phone size={18} style={{ color: '#a1a1aa', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '2px', lineHeight: '1' }}>Teléfono</span>
                    <span style={{ fontSize: '14px', color: '#e4e4e7', fontWeight: '400', lineHeight: '1.2' }}>+56 32 255 1000</span>
                  </div>
                </a>

                {/* Contact Card 2: Licitaciones */}
                <a href="mailto:licitaciones@cerberustech.cl" className="contact-card" aria-label="Enviar correo a licitaciones@cerberustech.cl">
                  <Mail size={18} style={{ color: '#a1a1aa', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '2px', lineHeight: '1' }}>Licitaciones</span>
                    <span style={{ fontSize: '14px', color: '#e4e4e7', fontWeight: '400', lineHeight: '1.2' }}>licitaciones@cerberustech.cl</span>
                  </div>
                </a>

                {/* Contact Card 3: Soporte */}
                <a href="mailto:soporte@cerberustech.cl" className="contact-card" aria-label="Enviar correo a soporte@cerberustech.cl">
                  <Mail size={18} style={{ color: '#a1a1aa', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '2px', lineHeight: '1' }}>Soporte Técnico</span>
                    <span style={{ fontSize: '14px', color: '#e4e4e7', fontWeight: '400', lineHeight: '1.2' }}>soporte@cerberustech.cl</span>
                  </div>
                </a>

                {/* Contact Card 3 */}
                <a href="https://maps.app.goo.gl/FNAh1PKzBtTg37PQA" target="_blank" rel="noopener noreferrer" className="contact-card" aria-label="Ver ubicación en Google Maps: Av. Brasil 2241, piso 2, Valparaíso (abre en nueva ventana)">
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
          border-color: rgba(31, 111, 235, 0.5);
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
