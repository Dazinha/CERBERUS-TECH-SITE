import { motion } from 'framer-motion';
import { Cloud, Code2, Database, ShieldCheck, Workflow, Laptop } from 'lucide-react';

const Capacidades = () => {
  return (
    <div className="w-full">
      <section className="section text-center pb-8">
        <div className="container">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Capacidades <span className="text-gradient">Técnicas</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Infraestructura robusta, tecnologías de vanguardia y alianzas estratégicas para ofrecer soluciones de alto rendimiento.
          </motion.p>
        </div>
      </section>

      {/* Servicios y Soluciones */}
      <section className="section pt-0">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Servicios y Soluciones Ofrecidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div className="card" whileHover={{ y: -5 }}>
              <ShieldCheck className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Ciberseguridad Avanzada</h3>
              <p className="text-sm text-secondary">Defensa activa, pentesting, auditorías de seguridad y SOC 24/7 para infraestructuras críticas.</p>
            </motion.div>
            <motion.div className="card" whileHover={{ y: -5 }}>
              <Cloud className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Arquitecturas Cloud-Native</h3>
              <p className="text-sm text-secondary">Diseño y migración a infraestructuras en la nube altamente escalables y resilientes.</p>
            </motion.div>
            <motion.div className="card" whileHover={{ y: -5 }}>
              <Code2 className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Desarrollo de Software Seguro</h3>
              <p className="text-sm text-secondary">Prácticas DevSecOps integradas desde el día cero para desarrollo de aplicaciones empresariales.</p>
            </motion.div>
            <motion.div className="card" whileHover={{ y: -5 }}>
              <Database className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Gestión de Datos Críticos</h3>
              <p className="text-sm text-secondary">Bases de datos distribuidas con replicación en tiempo real y estrategias de Disaster Recovery.</p>
            </motion.div>
            <motion.div className="card" whileHover={{ y: -5 }}>
              <Workflow className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Integración de Sistemas</h3>
              <p className="text-sm text-secondary">APIs seguras y arquitecturas orientadas a eventos (EDA) para ecosistemas complejos.</p>
            </motion.div>
            <motion.div className="card" whileHover={{ y: -5 }}>
              <Laptop className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Soporte y Operaciones IT</h3>
              <p className="text-sm text-secondary">Administración delegada de servicios TI garantizando disponibilidad bajo estrictos SLAs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico y Alianzas */}
      <section className="section bg-secondary" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Conjunto Tecnológico Dominado</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="font-semibold text-accent mb-2" style={{ color: 'var(--accent-primary)' }}>Frontend & Backend</h4>
                <div className="flex flex-wrap gap-2 text-sm text-muted">
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>React / Next.js</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Node.js</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Python / FastAPI</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Go</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Java / Spring Boot</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2" style={{ color: 'var(--accent-primary)' }}>Infraestructura & DevOps</h4>
                <div className="flex flex-wrap gap-2 text-sm text-muted">
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Kubernetes (K8s)</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Docker</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Terraform</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>CI/CD (GitLab, GitHub Actions)</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2" style={{ color: 'var(--accent-primary)' }}>Bases de Datos</h4>
                <div className="flex flex-wrap gap-2 text-sm text-muted">
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>PostgreSQL</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>MongoDB</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Redis</span>
                  <span className="btn-secondary" style={{ padding: '0.2rem 0.5rem' }}>Elasticsearch</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Alianzas Cloud</h2>
            <p className="text-secondary mb-6">Mantenemos el estatus de Partner Avanzado con los principales proveedores de nube pública, garantizando acceso a soporte preferencial y arquitecturas optimizadas.</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="card p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-xl mb-1">AWS</span>
                <span className="text-xs text-muted">Advanced Tier Services Partner</span>
              </div>
              <div className="card p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-xl mb-1">Google Cloud</span>
                <span className="text-xs text-muted">Premier Partner</span>
              </div>
              <div className="card p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-xl mb-1">Microsoft Azure</span>
                <span className="text-xs text-muted">Gold Solutions Partner</span>
              </div>
              <div className="card p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-xl mb-1">Cloudflare</span>
                <span className="text-xs text-muted">Certified MSP Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologías y Capacidad Instalada */}
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card glass">
            <h3 className="text-2xl font-bold mb-6">Metodologías Certificadas</h3>
            <ul className="text-secondary flex flex-col gap-4">
              <li>
                <strong className="text-white block mb-1">DevSecOps</strong>
                Integración continua de seguridad en todo el ciclo de vida del desarrollo.
              </li>
              <li>
                <strong className="text-white block mb-1">Scrum & SAFe</strong>
                Agilidad escalada para entregar valor de forma iterativa y predecible en proyectos corporativos.
              </li>
              <li>
                <strong className="text-white block mb-1">ITIL v4</strong>
                Gestión de servicios de TI alineada a las mejores prácticas globales para operaciones eficientes.
              </li>
            </ul>
          </div>

          <div className="card glass">
            <h3 className="text-2xl font-bold mb-6">Infraestructura y Capacidad Instalada</h3>
            <ul className="text-secondary flex flex-col gap-4">
              <li>
                <strong className="text-white block mb-1">Centro de Operaciones de Seguridad (SOC)</strong>
                Monitoreo continuo 24/7/365 con equipos redundantes en dos zonas geográficas distintas.
              </li>
              <li>
                <strong className="text-white block mb-1">Capacidad de Procesamiento</strong>
                Clústeres de computación de alto rendimiento aprovisionados dinámicamente con auto-scaling para manejar picos de hasta 100,000 TPS.
              </li>
              <li>
                <strong className="text-white block mb-1">Redundancia de Datos</strong>
                Copias de seguridad cifradas con políticas de retención WORM inmutables en múltiples regiones.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capacidades;
