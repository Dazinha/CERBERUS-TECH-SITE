import { motion } from 'framer-motion';
import { Users, UserCircle, BadgeCheck, Network, Settings, Database, Shield, MonitorPlay, CheckCircle, Lightbulb, Activity } from 'lucide-react';

const Equipo = () => {
  return (
    <div className="w-full">
      <section className="section text-center" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Nuestra <span className="text-gradient">Estructura Organizacional</span>
          </motion.h1>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Cerberus Tech opera bajo una estructura matricial, orientada a la operación continua y al aseguramiento de misión crítica.
          </motion.p>
        </div>
      </section>

      {/* Dotación y Distribución */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="card glass text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dotación Total: 98 Profesionales</h2>
            <p className="text-secondary max-w-3xl mx-auto mb-6">
              Esta cifra se deriva del compromiso de operación continua que la compañía sostiene con sus clientes. Un puesto cubierto de forma ininterrumpida requiere del orden de 5,2 profesionales equivalentes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-left">
              <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="font-bold flex items-center gap-2 mb-1 text-white"><Settings size={16} style={{ color: 'var(--accent-primary)' }} /> Dirección y PMO</h4>
                <p className="text-xl font-semibold">6 <span className="text-sm font-normal text-muted">profesionales</span></p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="font-bold flex items-center gap-2 mb-1 text-white"><Network size={16} style={{ color: 'var(--accent-primary)' }} /> Arquitectura</h4>
                <p className="text-xl font-semibold">8 <span className="text-sm font-normal text-muted">profesionales</span></p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="font-bold flex items-center gap-2 mb-1 text-white"><MonitorPlay size={16} style={{ color: 'var(--accent-primary)' }} /> Ing. de Software</h4>
                <p className="text-xl font-semibold">30 <span className="text-sm font-normal text-muted">profesionales</span></p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="font-bold flex items-center gap-2 mb-1 text-white"><Database size={16} style={{ color: 'var(--accent-primary)' }} /> Datos e Interop.</h4>
                <p className="text-xl font-semibold">10 <span className="text-sm font-normal text-muted">profesionales</span></p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="font-bold flex items-center gap-2 mb-1 text-white"><Shield size={16} style={{ color: 'var(--accent-primary)' }} /> Ciberseguridad</h4>
                <p className="text-xl font-semibold">14 <span className="text-sm font-normal text-muted">profesionales</span></p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="font-bold flex items-center gap-2 mb-1 text-white"><Activity size={16} style={{ color: 'var(--accent-primary)' }} /> Operación</h4>
                <p className="text-xl font-semibold">16 <span className="text-sm font-normal text-muted">profesionales</span></p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="font-bold flex items-center gap-2 mb-1 text-white"><CheckCircle size={16} style={{ color: 'var(--accent-primary)' }} /> Calidad y Pruebas</h4>
                <p className="text-xl font-semibold">9 <span className="text-sm font-normal text-muted">profesionales</span></p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="font-bold flex items-center gap-2 mb-1 text-white"><Lightbulb size={16} style={{ color: 'var(--accent-primary)' }} /> Implantación</h4>
                <p className="text-xl font-semibold">5 <span className="text-sm font-normal text-muted">profesionales</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directorio y Socios */}
      <section className="section bg-secondary" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '0' }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-2">
            <Users style={{ color: 'var(--accent-primary)' }} />
            Directorio y Socios Fundadores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Roberto Cerda</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Director Ejecutivo (CEO)</p>
              <p className="text-xs text-secondary mb-4">Ingeniero Civil Industrial con 15 años de experiencia liderando empresas de base tecnológica en el sector salud.</p>
            </motion.div>
            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Daniela Riquelme</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Directora de Tecnología (CTO)</p>
              <p className="text-xs text-secondary mb-4">Arquitecta de Sistemas especializada en infraestructuras de misión crítica y procesamiento de alto volumen.</p>
            </motion.div>
            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Felipe Sandoval</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Director de Operaciones (COO)</p>
              <p className="text-xs text-secondary mb-4">Experto en continuidad operativa, gestión de servicios bajo marco ITIL v4 y calidad normativa.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipo Clave Nominado */}
      <section className="section bg-secondary" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-2">
            <Users style={{ color: 'var(--accent-primary)' }} />
            Equipo Clave Nominado
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Alonso Maurel Murgas</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Jefe de Proyecto</p>
              <p className="text-xs text-secondary mb-4">Ingeniero Civil Informático, PMP, ITIL 4.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Adolfo Cordero Ponce</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Arquitecto de Solución</p>
              <p className="text-xs text-secondary mb-4">Especialización en arquitecturas híbridas y de borde.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Miguel Bernales Avaria</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Encargado de Seguridad</p>
              <p className="text-xs text-secondary mb-4">Auditor líder ISO/IEC 27001, protección de datos.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Matías Castro Rojas</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Líder de Datos</p>
              <p className="text-xs text-secondary mb-4">Modelado, migración y gobierno de calidad clínica.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Camila Ortiz Fuentealba</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Líder de Integración</p>
              <p className="text-xs text-secondary mb-4">Especialista en interoperabilidad HL7 v2.x y FHIR R4.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Rubén Carvajal Muñoz</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Líder de Desarrollo</p>
              <p className="text-xs text-secondary mb-4">Experiencia en DevSecOps y construcción de software.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Monserrath Morales</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Líder Funcional</p>
              <p className="text-xs text-secondary mb-4">Experta en atención ambulatoria y criterios de aceptación.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Nehemías Leiva Cataldo</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Líder de Calidad</p>
              <p className="text-xs text-secondary mb-4">Especialista marcos ISO/IEC 25010 e ISO/IEC/IEEE 29119.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Sebastián Gatica Leiva</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Líder Operación y Confiabilidad</p>
              <p className="text-xs text-secondary mb-4">Gestión de ambientes, alta disponibilidad y DRP.</p>
            </motion.div>

            <motion.div className="card text-center flex flex-col items-center" whileHover={{ y: -5 }}>
              <UserCircle size={60} className="mb-4 text-muted" />
              <h3 className="text-xl font-bold">Pablo Daza Garrido</h3>
              <p className="text-accent mb-2 font-semibold text-sm" style={{ color: 'var(--accent-primary)' }}>Líder de Implantación</p>
              <p className="text-xs text-secondary mb-4">Gestión del cambio y capacitación con usuarios operacionales.</p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Equipo;
