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
            Las 4 líneas de negocio fundamentales que concurren en el alcance de nuestros proyectos.
          </motion.p>
        </div>
      </section>

      {/* Servicios y Soluciones */}
      <section className="section pt-0">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Líneas de Negocio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="card" whileHover={{ y: -5 }}>
              <ShieldCheck className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Plataformas clínicas e identidad del paciente</h3>
              <p className="text-sm text-secondary">Comprende el registro clínico electrónico, el índice maestro de pacientes, el agendamiento y la gestión de la demanda ambulatoria. Resuelve el problema de la ficha única y del reconocimiento inequívoco a lo largo de una red multisede.</p>
            </motion.div>
            <motion.div className="card" whileHover={{ y: -5 }}>
              <Database className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Interoperabilidad e ingeniería de datos</h3>
              <p className="text-sm text-secondary">Abarca la integración bajo los estándares HL7 v2.x y HL7 FHIR R4, motores de mensajería clínica, gestión de terminologías como SNOMED CT y LOINC, y migración de datos históricos.</p>
            </motion.div>
            <motion.div className="card" whileHover={{ y: -5 }}>
              <Cloud className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Ciberseguridad y operaciones defensivas</h3>
              <p className="text-sm text-secondary">Diseño de arquitecturas bajo modelo Zero Trust, gestión de identidad y acceso, SOC permanente, gestión de vulnerabilidades, respuesta a incidentes y cumplimiento normativo de datos sensibles.</p>
            </motion.div>
            <motion.div className="card" whileHover={{ y: -5 }}>
              <Workflow className="mb-4" size={32} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-xl font-bold mb-2">Operación gestionada y confiabilidad</h3>
              <p className="text-sm text-secondary">Mesa de servicio multinivel bajo ITIL 4, observabilidad de extremo a extremo, gestión de capacidad, pruebas de recuperación ante desastres y mantención preventiva, correctiva y evolutiva.</p>
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
            <h2 className="text-3xl font-bold mb-6">Catálogo de Servicios Acreditables</h2>
            <p className="text-secondary mb-6">Nuestros servicios prestados de forma habitual y acreditables mediante contratos vigentes o finalizados incluyen:</p>
            <ul className="text-secondary flex flex-col gap-4 list-disc pl-5">
              <li>Consultoría y arquitectura de solución.</li>
              <li>Desarrollo de software a medida bajo prácticas DevSecOps.</li>
              <li>Integración de sistemas heterogéneos y de plataformas heredadas.</li>
              <li>Migración de datos clínicos.</li>
              <li>Despliegue de infraestructura híbrida (nube pública, instalaciones propias del cliente y nodos de borde).</li>
              <li>Operación continua bajo acuerdos de nivel de servicio contractuales.</li>
              <li>Capacitación, implantación y gestión del cambio con usuarios operacionales.</li>
            </ul>
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
