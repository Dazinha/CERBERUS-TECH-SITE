import { motion } from 'framer-motion';
import { Users, Network, Settings, Database, Shield, MonitorPlay, CheckCircle, Lightbulb, Activity, Award } from 'lucide-react';

const Equipo = () => {
  const depts = [
    { icon: <Settings size={16} />, area: 'Dirección y Gestión de Proyectos', count: 6, detail: 'Metodología ISO 31000, gestión de riesgos y control de cambios' },
    { icon: <Network size={16} />, area: 'Arquitectura y Diseño de Soluciones', count: 8, detail: 'Comité de Arquitectura permanente y registros formales de diseño' },
    { icon: <MonitorPlay size={16} />, area: 'Ingeniería de Software', count: 30, detail: 'Servicios de negocio, interfaces web, apps móviles e integración' },
    { icon: <Database size={16} />, area: 'Datos e Interoperabilidad', count: 10, detail: 'Ingeniería de datos, mensajería HL7 / FHIR y saneamiento histórico' },
    { icon: <Shield size={16} />, area: 'Ciberseguridad (incluye SOC)', count: 14, detail: '11 profesionales en turnos 24/7 y 3 en gobierno, riesgo y cumplimiento' },
    { icon: <Activity size={16} />, area: 'Operación y Confiabilidad (NOC)', count: 16, detail: '11 profesionales en turnos 24/7 y 5 en ingeniería de plataforma' },
    { icon: <CheckCircle size={16} />, area: 'Calidad y Pruebas', count: 9, detail: 'Automatización de pruebas, desempeño, seguridad y pruebas UAT' },
    { icon: <Lightbulb size={16} />, area: 'Implantación, Capacitación y Cambio', count: 13, detail: '2 equipos en terreno de 5 personas, 2 en capacitación y 1 coordinador' },
  ];

  const directors = [
    {
      name: 'Roberto Cerda', role: 'Director Ejecutivo (CEO)',
      bio: 'Ingeniero Civil Industrial con 15 años de experiencia liderando empresas de base tecnológica en el sector salud. Posee un MBA y certificación PMP.',
      initials: 'RC', avatar: 'avatar-indigo',
      certs: ['MBA', 'PMP'],
    },
    {
      name: 'Daniela Riquelme', role: 'Directora de Tecnología (CTO)',
      bio: 'Arquitecta de Sistemas especializada en infraestructuras de misión crítica y procesamiento de alto volumen.',
      initials: 'DR', avatar: 'avatar-violet',
      certs: ['AWS Solutions Architect', 'TOGAF'],
    },
    {
      name: 'Felipe Sandoval', role: 'Director de Operaciones (COO)',
      bio: 'Especialista en continuidad operativa, gestión de servicios bajo marco ITIL 4 y calidad normativa.',
      initials: 'FS', avatar: 'avatar-blue',
      certs: ['ITIL 4 Master', 'ISO 22301'],
    },
  ];

  const teamMembers = [
    {
      name: 'Alonso Maurel Murgas', role: 'Jefe de Proyecto',
      bio: 'Dedicación 100% — Fases 1 a 20',
      initials: 'AM', avatar: 'avatar-teal',
      certs: ['PMP', 'ITIL 4'],
    },
    {
      name: 'Adolfo Cordero Ponce', role: 'Arquitecto de Solución',
      bio: 'Participación permanente, 56 meses',
      initials: 'AC', avatar: 'avatar-rose',
      certs: ['AWS Architect', 'Arq. Híbrida'],
    },
    {
      name: 'Miguel Bernales Avaria', role: 'Encargado de Seguridad',
      bio: 'Dedicación permanente, 56 meses',
      initials: 'MB', avatar: 'avatar-amber',
      certs: ['ISO 27001 Lead Auditor', 'CISM'],
    },
    {
      name: 'Matías Castro Rojas', role: 'Líder de Datos',
      bio: 'Dedicación permanente — Fases 1 a 20',
      initials: 'MC', avatar: 'avatar-indigo',
      certs: ['Data Engineering', 'HL7 FHIR'],
    },
    {
      name: 'Camila Ortiz Fuentealba', role: 'Líder de Integración',
      bio: 'Dedicación permanente — Fases 1 a 20',
      initials: 'CO', avatar: 'avatar-violet',
      certs: ['HL7 v2.x', 'FHIR R4'],
    },
    {
      name: 'Rubén Carvajal Muñoz', role: 'Líder de Desarrollo',
      bio: 'Dedicación 100% — Fases 1 a 20',
      initials: 'RC', avatar: 'avatar-blue',
      certs: ['DevSecOps', 'Kubernetes'],
    },
    {
      name: 'Monserrath Morales', role: 'Líder Funcional',
      bio: 'Dedicación 100% — Fases 1 a 20',
      initials: 'MM', avatar: 'avatar-teal',
      certs: ['Atención Ambulatoria'],
    },
    {
      name: 'Nehemías Leiva Cataldo', role: 'Líder de Calidad',
      bio: 'Dedicación permanente, 56 meses',
      initials: 'NL', avatar: 'avatar-rose',
      certs: ['ISO 25010', 'ISO 29119'],
    },
    {
      name: 'Sebastián Gatica Leiva', role: 'Líder de Operación',
      bio: 'Desde mes 6, dedicación permanente',
      initials: 'SG', avatar: 'avatar-amber',
      certs: ['ITIL 4', 'SRE', 'DRP'],
    },
    {
      name: 'Pablo Daza Garrido', role: 'Líder de Implantación',
      bio: 'Desde mes 8, hasta mes 56',
      initials: 'PD', avatar: 'avatar-indigo',
      certs: ['Gestión del Cambio'],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-header">
        <div className="container">
          <motion.div style={{ marginBottom: '1rem' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-indigo">Estructura Organizacional</span>
          </motion.div>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            El equipo detrás de la <span className="text-gradient">misión crítica</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '580px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Cerberus Tech opera bajo una estructura matricial, orientada a la operación continua y al aseguramiento de misión crítica.
          </motion.p>
        </div>
      </section>

      {/* Dotación total */}
      <div className="stats-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', fontWeight: 800, color: '#f1f5f9', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>106</div>
          <div style={{ color: '#818cf8', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0.5rem 0 1rem' }}>Profesionales en Dotación Total (al 31 de agosto de 2026)</div>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            Estructura matricial con 8 unidades funcionales permanentes. La mayor parte de la dotación (60 de 106 profesionales) se concentra en ingeniería de software, operación continua (NOC) y ciberseguridad (SOC).
          </p>
        </div>
      </div>

      {/* Distribución por área */}
      <section className="section bg-section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Distribución por Unidades Funcionales</h2>
            <p style={{ color: '#475569', fontSize: '0.88rem' }}>8 unidades permanentes que asignan especialistas de forma matricial a las células de proyecto.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {depts.map((d, i) => (
              <motion.div key={d.area} className="stat-card"
                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#6366f1', marginBottom: '0.5rem' }}>{d.icon}</div>
                  <div className="stat-number">{d.count}</div>
                  <div className="stat-label" style={{ fontWeight: 700, marginBottom: '0.4rem' }}>{d.area}</div>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', borderTop: '1px dashed var(--border-color)', paddingTop: '0.4rem', marginTop: '0.4rem', lineHeight: 1.4 }}>
                  {d.detail}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fundamento de la Dotación */}
          <div className="card-premium" style={{ marginTop: '2.5rem', backgroundColor: '#ffffff', borderLeft: '4px solid #6366f1' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a' }}>
              Fundamento de la Dotación (Capítulo 1.2.3)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '0.25rem' }}>Turnos Continuos 24/7 (NOC y SOC)</strong>
                <p>1 puesto sin interrupción todo el año requiere 8.760 h. Con ~1.700 h efectivas anuales por profesional, cada puesto continuo demanda 5,15 profesionales equivalentes. Con 2 puestos continuos por centro (10,3 requeridos), se asignan 11 profesionales a cada uno con margen para reemplazos.</p>
              </div>
              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '0.25rem' }}>Implantación y Terreno (13 prof.)</strong>
                <p>Despliegues en redes por olas centro por centro: 2 equipos de 5 personas (1 mesón + 4 boxes en estabilización) para cubrir una ola mientras se despliega la siguiente, más 2 especialistas en capacitación continua y 1 coordinador de gestión del cambio.</p>
              </div>
              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '0.25rem' }}>Cartera Activa (71 prof.)</strong>
                <p>Los 71 profesionales restantes sostienen las unidades de dirección, arquitectura de soluciones, construcción de software, datos e interoperabilidad, calidad y soporte especializado según los proyectos vigentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directorio con certificaciones */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Users size={20} style={{ color: '#6366f1' }} />
            Equipo Directivo
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
            {/* Nodo CEO */}
            <div className="card-premium" style={{ width: 'fit-content', textAlign: 'center', padding: '1.25rem 2rem', borderTop: '3px solid #6366f1', minWidth: '220px', maxWidth: '400px' }}>
              <div className={`team-avatar ${directors[0].avatar}`} style={{ width: '52px', height: '52px', fontSize: '1.1rem', margin: '0 auto 0.5rem' }}>{directors[0].initials}</div>
              <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>{directors[0].name}</h4>
              <p style={{ fontSize: '0.78rem', color: '#6366f1', fontWeight: 600, marginBottom: '0.75rem' }}>{directors[0].role}</p>
              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>{directors[0].bio}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {directors[0].certs.map(c => <span key={c} className="pill pill-indigo" style={{ fontSize: '0.68rem' }}><Award size={10} /> {c}</span>)}
              </div>
            </div>

            {/* Línea vertical */}
            <div style={{ width: '2px', height: '2rem', backgroundColor: '#c7d2fe' }}></div>

            {/* Línea horizontal */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0', position: 'relative', width: '100%', maxWidth: '800px' }}>
              <div style={{ position: 'absolute', top: 0, left: '25%', right: '25%', height: '2px', backgroundColor: '#c7d2fe' }}></div>
              {directors.slice(1).map((d) => (
                <div key={d.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div style={{ width: '2px', height: '2rem', backgroundColor: '#c7d2fe' }}></div>
                  <div className="card-premium" style={{ textAlign: 'center', padding: '1rem 1.25rem', borderTop: '3px solid #6366f1', width: '90%', maxWidth: '350px' }}>
                    <div className={`team-avatar ${d.avatar}`} style={{ width: '44px', height: '44px', fontSize: '1rem', margin: '0 auto 0.5rem' }}>{d.initials}</div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.88rem' }}>{d.name}</h4>
                    <p style={{ fontSize: '0.72rem', color: '#6366f1', fontWeight: 600, marginBottom: '0.75rem' }}>{d.role}</p>
                    <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>{d.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {d.certs.map(c => <span key={c} className="pill pill-indigo" style={{ fontSize: '0.68rem' }}><Award size={10} /> {c}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
            Los 10 líderes de proyecto reportan matricialmente a la Dirección de Tecnología y a la Dirección de Operaciones según la fase del contrato.
          </div>
        </div>
      </section>

      {/* Equipo Clave con certifs */}
      <section className="section bg-section-alt">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Equipo Clave Nominado</h2>
          <div className="grid grid-cols-1 team-grid-2 gap-4">
            {teamMembers.map((m, i) => (
              <motion.div key={m.name} className="card-premium"
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              >
                <div className={`team-avatar ${m.avatar}`} style={{ width: '52px', height: '52px', fontSize: '1.1rem', marginBottom: 0, flexShrink: 0 }}>{m.initials}</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.1rem' }}>{m.name}</h4>
                  <p style={{ fontSize: '0.78rem', color: '#6366f1', fontWeight: 600, marginBottom: '0.15rem' }}>{m.role}</p>
                  <p style={{ fontSize: '0.73rem', color: '#64748b', marginBottom: '0.5rem' }}>{m.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {m.certs.map(c => <span key={c} className="pill pill-slate" style={{ fontSize: '0.65rem', padding: '0.1rem 0.45rem' }}>{c}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estructura para Proyecto — Capítulo 1.5 */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Estructura Organizacional para el <span className="text-gradient">Proyecto</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>
              Traslado del modelo matricial al ciclo de vida del proyecto con el mandante (Capítulo 1.5).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: '2rem' }}>
            <div className="card-premium" style={{ borderTop: '3px solid #6366f1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="pill pill-indigo" style={{ fontSize: '0.75rem' }}>Fase 1 · Meses 1 a 20</span>
                <h4 style={{ fontWeight: 700, margin: 0, fontSize: '1rem' }}>Implementación y Construcción</h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                Conducida por un <strong>Jefe de Proyecto con dedicación exclusiva</strong> y facultades para comprometer a la compañía en materias de ejecución, resolviendo decisiones sin demoras. Reporta a la <strong>Dirección de Tecnología</strong>.
              </p>
              <div style={{ fontSize: '0.8rem', color: '#64748b', background: '#f8fafc', padding: '0.6rem 0.8rem', borderRadius: '0.5rem' }}>
                El Líder de Operación se integra desde el <strong>mes 6</strong> para garantizar un traspaso gradual y sin saltos al finalizar la implementación.
              </div>
            </div>

            <div className="card-premium" style={{ borderTop: '3px solid #10b981' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="pill pill-green" style={{ fontSize: '0.75rem' }}>Fase 2 · Meses 21 a 56</span>
                <h4 style={{ fontWeight: 700, margin: 0, fontSize: '1rem' }}>Operación Gestionada</h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                La responsabilidad pasa a la <strong>Dirección de Operaciones</strong>, a cargo del NOC y la mesa de servicio bajo ITIL 4, con conducción cotidiana en el <strong>Líder de Operación</strong>.
              </p>
              <div style={{ fontSize: '0.8rem', color: '#64748b', background: '#f8fafc', padding: '0.6rem 0.8rem', borderRadius: '0.5rem' }}>
                La vigilancia de ciberseguridad permanece bajo el <strong>SOC 24/7/365</strong> coordinado permanentemente con el NOC y los equipos en terreno.
              </div>
            </div>
          </div>

          {/* Coordinación con el mandante */}
          <div className="card-premium" style={{ backgroundColor: '#ffffff' }}>
            <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '1rem', color: '#0f172a' }}>
              Mecanismos Formales de Coordinación con el Mandante
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ fontSize: '0.85rem' }}>
              <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong style={{ color: '#6366f1', display: 'block', marginBottom: '0.25rem' }}>Comité de Seguridad</strong>
                <p style={{ color: '#475569', margin: 0, lineHeight: 1.5 }}>Sesiona mensualmente para informar formalmente a la contraparte técnica los hallazgos de seguridad y el avance de su mitigación.</p>
              </div>
              <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong style={{ color: '#3b82f6', display: 'block', marginBottom: '0.25rem' }}>Comité de Arquitectura</strong>
                <p style={{ color: '#475569', margin: 0, lineHeight: 1.5 }}>Registra y valida decisiones estructurales de diseño (ADR) con criterios de selección y consecuencias a disposición del cliente.</p>
              </div>
              <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong style={{ color: '#10b981', display: 'block', marginBottom: '0.25rem' }}>Espacio Colaborativo</strong>
                <p style={{ color: '#475569', margin: 0, lineHeight: 1.5 }}>Repositorio compartido y accesible en todo momento con documentación, entregables, actas, matriz de riesgos y registro de cambios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .team-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .team-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </div>
  );
};

export default Equipo;
