import { motion } from 'framer-motion';
import { Building, Target, Eye, Shield, Globe, Award, Calendar } from 'lucide-react';

const Nosotros = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section text-center" style={{ paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Sobre <span className="text-gradient">Nosotros</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Con más de 5 años de trayectoria comprobable, Cerberus Tech lidera la vanguardia en soluciones de infraestructura crítica y seguridad digital empresarial.
          </motion.p>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="card" whileHover={{ y: -5 }}>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-accent" size={28} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-2xl font-bold">Misión</h3>
            </div>
            <p className="text-muted">
              Proveer soluciones tecnológicas ultra-seguras y resilientes que empoderen a las corporaciones para operar, escalar y prosperar en el entorno digital complejo de hoy, sin comprometer su integridad.
            </p>
          </motion.div>

          <motion.div className="card" whileHover={{ y: -5 }}>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-accent" size={28} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-2xl font-bold">Visión</h3>
            </div>
            <p className="text-muted">
              Ser el socio tecnológico fundamental y de mayor confianza en Latinoamérica para la transformación digital segura, estableciendo el estándar de excelencia operativa.
            </p>
          </motion.div>

          <motion.div className="card" whileHover={{ y: -5 }}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-accent" size={28} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-2xl font-bold">Valores</h3>
            </div>
            <ul className="text-muted" style={{ listStylePosition: 'inside', lineHeight: '2' }}>
              <li><strong>Integridad inquebrantable:</strong> Transparencia total.</li>
              <li><strong>Excelencia técnica:</strong> Calidad de ingeniería.</li>
              <li><strong>Innovación segura:</strong> Riesgo controlado.</li>
              <li><strong>Compromiso corporativo:</strong> El éxito del cliente es el nuestro.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Historia y Presencia */}
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="text-accent" style={{ color: 'var(--accent-primary)' }} />
              Nuestra Historia
            </h2>
            <p className="text-secondary mb-4">
              Fundada en 2018, Cerberus Tech nació con el propósito de resolver los desafíos de seguridad e infraestructura en entidades corporativas que no pueden permitirse tiempos de inactividad.
            </p>
            <p className="text-secondary mb-6">
              A lo largo de estos más de 5 años, hemos escalado nuestras operaciones, obtenido certificaciones clave y construido una reputación de confiabilidad absoluta gestionando sistemas críticos 24/7.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-3">
              <Award className="text-accent" style={{ color: 'var(--accent-primary)' }} />
              Certificaciones y Acreditaciones
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>ISO/IEC 27001 (Seguridad)</span>
              <span className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>ISO 9001 (Calidad)</span>
              <span className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>SOC 2 Tipo II</span>
            </div>
          </div>
          
          <div className="card glass relative" style={{ minHeight: '400px' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe className="text-accent" style={{ color: 'var(--accent-primary)' }} />
              Presencia Geográfica
            </h3>
            <p className="text-secondary mb-8">
              Operamos con oficinas estratégicas para asegurar soporte directo y tiempos de respuesta mínimos a nuestros clientes en toda la región.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
                <Building size={24} style={{ color: 'var(--text-muted)' }} />
                <div>
                  <h4 className="font-bold">Sede Central (Santiago, Chile)</h4>
                  <p className="text-sm text-muted">Av. Providencia 1208, Piso 5, Región Metropolitana.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Building size={24} style={{ color: 'var(--text-muted)' }} />
                <div>
                  <h4 className="font-bold">Oficina Norte (Antofagasta, Chile)</h4>
                  <p className="text-sm text-muted">Edificio Corporativo Norte, Oficina 302.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
