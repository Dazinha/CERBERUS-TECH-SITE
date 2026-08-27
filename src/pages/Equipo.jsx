import { motion } from 'framer-motion';
import { Users, UserCircle, BadgeCheck, GraduationCap } from 'lucide-react';

const Equipo = () => {
  return (
    <div className="w-full">
      <section className="section text-center pb-8">
        <div className="container">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Nuestro <span className="text-gradient">Equipo Profesional</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Conformado por líderes de la industria y talento técnico de élite certificado.
          </motion.p>
        </div>
      </section>

      {/* Organigrama / Equipo Directivo */}
      <section className="section pt-0">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3">
            <Users style={{ color: 'var(--accent-primary)' }} />
            Equipo Directivo y Socios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={80} className="mb-4 text-muted" />
              <h3 className="text-2xl font-bold">Roberto Mendoza</h3>
              <p className="text-accent mb-4 font-semibold" style={{ color: 'var(--accent-primary)' }}>CEO & Fundador</p>
              <p className="text-sm text-secondary mb-4 text-left">
                Ingeniero en Computación con +15 años de experiencia liderando empresas de ciberseguridad. Previamente VP de Ingeniería en TechCorp Global.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}>CISSP</span>
                <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}>CISM</span>
              </div>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={80} className="mb-4 text-muted" />
              <h3 className="text-2xl font-bold">Elena Salas</h3>
              <p className="text-accent mb-4 font-semibold" style={{ color: 'var(--accent-primary)' }}>CTO & Socia</p>
              <p className="text-sm text-secondary mb-4 text-left">
                Doctora en Ciencias de la Computación especializada en sistemas distribuidos. Arquitecta jefa de plataformas transaccionales a gran escala.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}>AWS Solutions Architect Pro</span>
              </div>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={80} className="mb-4 text-muted" />
              <h3 className="text-2xl font-bold">Andrés Vega</h3>
              <p className="text-accent mb-4 font-semibold" style={{ color: 'var(--accent-primary)' }}>COO</p>
              <p className="text-sm text-secondary mb-4 text-left">
                Experto en operaciones tecnológicas e implementación de metodologías ágiles en entornos críticos. +10 años gestionando SLAs de 99.99%.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}>ITIL v4</span>
                <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}>PMP</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipo Técnico Clave */}
      <section className="section bg-secondary" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3">
            <GraduationCap style={{ color: 'var(--accent-primary)' }} />
            Equipo Técnico Clave
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card flex items-start gap-4">
              <UserCircle size={60} className="text-muted flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold">Dr. Luis Herrera</h4>
                <p className="text-sm text-accent mb-2" style={{ color: 'var(--accent-primary)' }}>Lead Security Engineer</p>
                <p className="text-sm text-secondary mb-2">Ex-investigador de seguridad de redes. Lidera el equipo de Red Team y análisis de vulnerabilidades.</p>
                <div className="flex items-center gap-1 text-xs text-muted">
                  <BadgeCheck size={14} style={{ color: 'var(--accent-secondary)' }}/> OSCP, CEH, CompTIA Security+
                </div>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <UserCircle size={60} className="text-muted flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold">Ing. Sofía Reyes</h4>
                <p className="text-sm text-accent mb-2" style={{ color: 'var(--accent-primary)' }}>Principal Cloud Architect</p>
                <p className="text-sm text-secondary mb-2">Responsable del diseño de arquitecturas multi-nube resilientes y migración de sistemas legacy.</p>
                <div className="flex items-center gap-1 text-xs text-muted">
                  <BadgeCheck size={14} style={{ color: 'var(--accent-secondary)' }}/> Google Cloud Architect, Azure Solutions Pro
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones Generales del Personal */}
      <section className="section">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Certificaciones de nuestro personal</h2>
          <p className="text-secondary mb-8">
            El 100% de nuestro equipo técnico cuenta con al menos una certificación internacional avalada por la industria. Mantenemos programas de capacitación continua para asegurar el más alto estándar de servicio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="glass" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-lg)' }}>AWS Certified (15+)</span>
            <span className="glass" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-lg)' }}>Cisco CCNA/CCNP (8+)</span>
            <span className="glass" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-lg)' }}>Certified Kubernetes Administrator (12+)</span>
            <span className="glass" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-lg)' }}>Scrum Master / Agile (20+)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipo;
