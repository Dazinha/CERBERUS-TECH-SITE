import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', padding: 'var(--space-12) 0' }}>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/CERBERUSTECHLOGO.png" alt="Cerberus Tech Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <p className="text-muted text-sm mt-4">
            Innovación y seguridad en soluciones tecnológicas corporativas.
            Transformando el futuro digital desde hace más de 5 años.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Compañía</h4>
          <Link to="/nosotros" className="text-muted hover:text-accent">Nosotros</Link>
          <Link to="/casos-exito" className="text-muted hover:text-accent">Casos de Éxito</Link>
          <Link to="/equipo" className="text-muted hover:text-accent">Equipo Profesional</Link>
          <Link to="/capacidades" className="text-muted hover:text-accent">Capacidades Técnicas</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4" id="contacto">
          <h4 className="font-semibold text-lg">Contacto</h4>
          <div className="flex items-center gap-2 text-muted">
            <MapPin size={16} className="text-secondary" />
            <span className="text-sm">Av. Providencia 1208, Santiago, Chile</span>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <Phone size={16} className="text-secondary" />
            <span className="text-sm">+56 2 2345 6789</span>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <Mail size={16} className="text-secondary" />
            <span className="text-sm">contacto@cerberustech.cl</span>
          </div>
        </div>

        {/* Social & Certs */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }} aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="#" className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }} aria-label="Twitter">
              <Share2 size={20} />
            </a>
          </div>
          <div className="mt-4">
            <span className="text-xs text-muted block mb-2">Certificados por:</span>
            <div className="flex gap-2">
               {/* Simulación de logos de certificaciones */}
               <div style={{ padding: '4px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '10px', border: '1px solid var(--border-color)' }}>ISO 27001</div>
               <div style={{ padding: '4px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '10px', border: '1px solid var(--border-color)' }}>WCAG 2.2 AA</div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="container" style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Cerberus Tech. Todos los derechos reservados.
        </p>
      </div>
      <style>{`
        .hover\\:text-accent:hover { color: var(--accent-primary); }
      `}</style>
    </footer>
  );
};

export default Footer;
