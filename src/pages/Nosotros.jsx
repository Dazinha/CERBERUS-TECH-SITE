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
            Compañía chilena de base tecnológica constituida en 2018, especializada en plataformas digitales de misión crítica para el sector sanitario.
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
              Proveer infraestructuras tecnológicas resilientes, seguras y centradas en el usuario, que garanticen la continuidad operativa ininterrumpida en sectores donde la tecnología es de misión crítica. Reducimos de forma medible el riesgo clínico y administrativo.
            </p>
          </motion.div>

          <motion.div className="card" whileHover={{ y: -5 }}>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-accent" size={28} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-2xl font-bold">Visión</h3>
            </div>
            <p className="text-muted">
              Ser el socio tecnológico de referencia en la transformación digital del sector salud en Chile y Latinoamérica, erradicando la fragmentación de la información clínica y elevando el estándar de seguridad del dato de salud.
            </p>
          </motion.div>

          <motion.div className="card" whileHover={{ y: -5 }}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-accent" size={28} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-2xl font-bold">Valores</h3>
            </div>
            <ul className="text-muted text-sm" style={{ listStylePosition: 'inside', lineHeight: '1.6' }}>
              <li className="mb-2"><strong>Seguridad por diseño:</strong> Controles incorporados en la arquitectura.</li>
              <li className="mb-2"><strong>Resiliencia verificable:</strong> Disponibilidad con pruebas periódicas.</li>
              <li className="mb-2"><strong>Trazabilidad íntegra:</strong> Acceso y cambios auditables.</li>
              <li><strong>Ética de datos:</strong> Minimización y control de finalidad.</li>
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
              Constituida en 2018 y con casa matriz en Valparaíso, nuestra compañía cuenta con ocho años de operación continua especializándose en el diseño, construcción y operación de plataformas digitales de misión crítica para el sector sanitario.
            </p>
            <p className="text-secondary mb-6">
              Nuestra actividad se concentra en organizaciones donde la interrupción de un sistema no constituye una pérdida económica, sino un riesgo asistencial. A lo largo de nuestra trayectoria hemos ejecutado proyectos de gran envergadura para redes hospitalarias y prestadores.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-3">
              <Award className="text-accent" style={{ color: 'var(--accent-primary)' }} />
              Certificaciones y Alianzas
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>ISO/IEC 27001:2022</span>
              <span className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>ISO 9001:2015</span>
              <span className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>ISO/IEC 27701</span>
              <span className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>ISO 22301</span>
              <span className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>CMMI-DEV Nivel 3</span>
              <span className="btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>AWS Advanced Partner</span>
              <span className="btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>Azure Solutions Partner</span>
              <span className="btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>Miembro HL7 International</span>
            </div>
          </div>
          
          <div className="card glass relative" style={{ minHeight: '400px' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe className="text-accent" style={{ color: 'var(--accent-primary)' }} />
              Presencia Geográfica
            </h3>
            <p className="text-secondary mb-8">
              La compañía opera desde tres emplazamientos estratégicos para asegurar soporte directo y tiempos de respuesta mínimos.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
                <Building size={24} style={{ color: 'var(--text-muted)' }} />
                <div>
                  <h4 className="font-bold">Casa Matriz (Valparaíso)</h4>
                  <p className="text-sm text-muted">Concentra la dirección, arquitectura de soluciones y fábrica de software.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
                <Building size={24} style={{ color: 'var(--text-muted)' }} />
                <div>
                  <h4 className="font-bold">Sucursal Sur (Temuco)</h4>
                  <p className="text-sm text-muted">Sostiene actividades de implantación, capacitación y soporte en terreno.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Building size={24} style={{ color: 'var(--text-muted)' }} />
                <div>
                  <h4 className="font-bold">Centro de Operaciones (Valparaíso)</h4>
                  <p className="text-sm text-muted">Alberga el centro de operación de red (NOC) y de seguridad (SOC) 24/7/365.</p>
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
