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
    { icon: <Lightbulb size={16} />, area: 'Implantación, Capacitación y Cambio', count: 5, detail: '1 coordinador de gestión del cambio y 4 especialistas en capacitación y acompañamiento en terreno' },
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
      bio: 'Arquitecta de sistemas especializada en infraestructuras de misión crítica y procesamiento de alto volumen.',
      units: ['Arquitectura y diseño de soluciones', 'Ingeniería de software', 'Datos e interoperabilidad', 'Ciberseguridad'],
      initials: 'DR', avatar: 'avatar-violet',
      certs: ['Azure Solutions Architect Expert', 'TOGAF'],
    },
    {
      name: 'Felipe Sandoval', role: 'Director de Operaciones (COO)',
      bio: 'Especialista en continuidad operativa, gestión de servicios bajo ITIL 4 y calidad normativa.',
      units: ['Dirección y gestión de proyectos', 'Operación y confiabilidad', 'Calidad y pruebas', 'Implantación, capacitación y gestión del cambio'],
      initials: 'FS', avatar: 'avatar-blue',
      certs: ['ITIL 4 Master', 'ISO 22301'],
    },
  ];

  // Currículos resumidos del equipo técnico clave (Formulario T-8) — RT-23.03
  const teamMembers = [
    {
      name: 'Alonso Maurel Murgas', role: 'Jefe de Proyecto', initials: 'AM', avatar: 'avatar-teal',
      education: 'Ingeniero Civil Informático. Magíster en Gestión de Proyectos de Tecnologías de Información.',
      experience: '14 años, 7 en Cerberus Tech',
      career: 'Jefe de Proyecto en Cerberus Tech desde 2019. Antes, jefe de proyectos en una empresa de tecnología para el sector salud (2014–2019) y analista de sistemas.',
      projects: 'Jefe de Proyecto del Sistema Integrado de Salud Híbrido, Red Hospitalaria Valle Quilén.',
      certs: ['PMP', 'PMI-ACP'],
    },
    {
      name: 'Adolfo Cordero Ponce', role: 'Arquitecto de Solución', initials: 'AC', avatar: 'avatar-rose',
      education: 'Ingeniero Civil en Computación.',
      experience: '16 años, 8 en Cerberus Tech',
      career: 'Arquitecto de soluciones y miembro permanente del Comité de Arquitectura desde 2018. Antes, arquitecto de software en proyectos de misión crítica para banca y salud.',
      projects: 'Solución híbrida con nodos de borde de Valle Quilén; plataforma de interoperabilidad de Cordillera Austral.',
      certs: ['TOGAF 9', 'Azure Solutions Architect Expert'],
    },
    {
      name: 'Miguel Bernales Avaria', role: 'Encargado de Seguridad de la Información', initials: 'MB', avatar: 'avatar-amber',
      education: 'Ingeniero en Ciberseguridad. Diplomado en Protección de Datos Personales.',
      experience: '12 años, 6 en Cerberus Tech',
      career: 'Responsable de gobierno, riesgo y cumplimiento desde 2020; condujo la implantación de ISO/IEC 27001 e ISO/IEC 27701. Antes, analista y jefe de un centro de operaciones de seguridad.',
      projects: 'Seguridad de la información en Cordillera Austral y Valle Quilén: control de acceso a la ficha, cifrado y trazabilidad.',
      certs: ['CISSP', 'ISO/IEC 27001 Lead Implementer'],
    },
    {
      name: 'Matías Castro Rojas', role: 'Líder de Datos', initials: 'MC', avatar: 'avatar-indigo',
      education: 'Ingeniero Civil Informático. Magíster en Ciencia de Datos.',
      experience: '10 años, 6 en Cerberus Tech',
      career: 'Líder de datos e interoperabilidad desde 2020. Antes, ingeniero de datos en migraciones de sistemas clínicos.',
      projects: 'Unificación de 1.200.000 registros clínicos en Cordillera Austral; migración del padrón histórico de Valle Quilén.',
      certs: ['Azure Data Engineer Associate', 'HL7 FHIR R4 Proficiency'],
    },
    {
      name: 'Rubén Carvajal Muñoz', role: 'Líder de Desarrollo', initials: 'RC', avatar: 'avatar-blue',
      education: 'Ingeniero de Ejecución en Informática.',
      experience: '11 años, 7 en Cerberus Tech',
      career: 'Líder técnico de desarrollo desde 2019. Antes, desarrollador de servicios y aplicaciones web.',
      projects: 'App móvil para equipos en terreno de Ribera Norte; servicios del registro clínico de Valle Quilén.',
      certs: ['Professional Scrum Master I', 'Azure Developer Associate'],
    },
    {
      name: 'Nehemías Leiva Cataldo', role: 'Líder de Calidad', initials: 'NL', avatar: 'avatar-rose',
      education: 'Ingeniero en Informática.',
      experience: '9 años, 5 en Cerberus Tech',
      career: 'Líder de la unidad de Calidad y pruebas desde 2021; implantó las puertas de calidad de integración continua. Antes, analista de pruebas automatizadas y de desempeño.',
      projects: 'Pruebas de desempeño y de aceptación en Cordillera Austral y Valle Quilén.',
      certs: ['ISTQB Advanced Test Manager'],
    },
    {
      name: 'Sebastián Gatica Leiva', role: 'Líder de Operación / SRE', initials: 'SG', avatar: 'avatar-amber',
      education: 'Ingeniero en Conectividad y Redes.',
      experience: '13 años, 7 en Cerberus Tech',
      career: 'Jefe del centro de operación de red (NOC) desde 2019. Antes, administrador de plataformas y responsable de continuidad operacional.',
      projects: 'Operación gestionada de Valle Quilén durante 18 meses, con 99,95 % de disponibilidad medida.',
      certs: ['ITIL 4 Managing Professional', 'Azure Administrator Associate'],
    },
    {
      name: 'Pablo Daza Garrido', role: 'Líder de Implantación y Gestión del Cambio', initials: 'PD', avatar: 'avatar-indigo',
      education: 'Ingeniero Civil Industrial. Diplomado en Gestión del Cambio Organizacional.',
      experience: '8 años, 5 en Cerberus Tech (Sucursal Sur, Temuco)',
      career: 'Líder de implantación y capacitación desde 2021. Antes, consultor de procesos y capacitación en organizaciones de salud.',
      projects: 'Implantación y capacitación de 140 profesionales en terreno en Ribera Norte; despliegue por recinto en Valle Quilén.',
      certs: ['Prosci Certified Change Practitioner'],
    },
    {
      name: 'Camila Ortiz Fuentealba', role: 'Líder de Integración', initials: 'CO', avatar: 'avatar-violet',
      education: 'Ingeniera Civil Informática.',
      experience: '9 años, 6 en Cerberus Tech',
      career: 'Ingeniera y luego líder de integración desde 2020. Antes, desarrolladora de interfaces entre sistemas clínicos y administrativos.',
      projects: 'Motor de integración HL7 v2.x y FHIR R4 con 12 instituciones en Cordillera Austral; integración con laboratorio e imagenología en Valle Quilén.',
      certs: ['HL7 FHIR R4 Proficiency'],
    },
    {
      name: 'Monserrath Morales Astudillo', role: 'Líder Funcional', initials: 'MM', avatar: 'avatar-teal',
      education: 'Enfermera universitaria. Magíster en Informática Médica.',
      experience: '10 años: 5 en atención clínica ambulatoria y 5 en Cerberus Tech',
      career: 'Líder funcional desde 2021, a cargo del levantamiento de procesos clínicos y la validación con usuarios. Antes, enfermera en atención ambulatoria de especialidades.',
      projects: 'Procesos de agendamiento y confirmación de Ribera Norte; diseño funcional de órdenes y resultados de Valle Quilén.',
      certs: ['Certified Business Analysis Professional (CBAP)'],
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
          <div style={{ fontSize: '4rem', fontWeight: 800, color: '#f1f5f9', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>98</div>
          <div style={{ color: '#818cf8', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0.5rem 0 1rem' }}>Profesionales en Dotación Total (al 31 de agosto de 2026)</div>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            Estructura matricial con 8 unidades funcionales permanentes. La mayor parte de la dotación (60 de 98 profesionales) se concentra en ingeniería de software, operación continua (NOC) y ciberseguridad (SOC).
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
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#4f46e5', marginBottom: '0.5rem' }}>{d.icon}</div>
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
          <div className="card-premium" style={{ marginTop: '2.5rem', backgroundColor: '#ffffff', borderLeft: '4px solid #4f46e5' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a' }}>
              Fundamento de la Dotación Operativa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '0.25rem' }}>Turnos Continuos 24/7 (NOC y SOC)</strong>
                <p>1 puesto sin interrupción todo el año requiere 8.760 h. Con ~1.700 h efectivas anuales por profesional, cada puesto continuo demanda 5,15 profesionales equivalentes. Con 2 puestos continuos por centro (10,3 requeridos), se asignan 11 profesionales a cada uno con margen para reemplazos.</p>
              </div>
              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '0.25rem' }}>Implantación y Terreno (5 prof.)</strong>
                <p>Los centros de una red entran de a uno, por olas sucesivas, con acompañamiento presencial en mesón y box durante las primeras semanas. Como sólo un centro entra a la vez, la unidad se dimensiona en 5 profesionales: el acompañamiento de los centros anteriores sigue a distancia y con visitas programadas, y la unidad sostiene además la capacitación continua.</p>
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
            <Users size={20} style={{ color: '#4f46e5' }} />
            Equipo Directivo
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
            {/* Nodo CEO */}
            <div className="card-premium" style={{ width: 'fit-content', textAlign: 'center', padding: '1.25rem 2rem', borderTop: '3px solid #4f46e5', minWidth: '220px', maxWidth: '400px' }}>
              <div className={`team-avatar ${directors[0].avatar}`} style={{ width: '52px', height: '52px', fontSize: '1.1rem', margin: '0 auto 0.5rem' }}>{directors[0].initials}</div>
              <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>{directors[0].name}</h4>
              <p style={{ fontSize: '0.78rem', color: '#4f46e5', fontWeight: 600, marginBottom: '0.75rem' }}>{directors[0].role}</p>
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
                  <div className="card-premium" style={{ textAlign: 'center', padding: '1rem 1.25rem', borderTop: '3px solid #4f46e5', width: '90%', maxWidth: '350px' }}>
                    <div className={`team-avatar ${d.avatar}`} style={{ width: '44px', height: '44px', fontSize: '1rem', margin: '0 auto 0.5rem' }}>{d.initials}</div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.88rem' }}>{d.name}</h4>
                    <p style={{ fontSize: '0.72rem', color: '#4f46e5', fontWeight: 600, marginBottom: '0.75rem' }}>{d.role}</p>
                    <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>{d.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {d.certs.map(c => <span key={c} className="pill pill-indigo" style={{ fontSize: '0.68rem' }}><Award size={10} /> {c}</span>)}
                    </div>
                    <ul aria-label={`Unidades a cargo de ${d.role}`} style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0', borderTop: '1px dashed var(--border-color)', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', textAlign: 'left' }}>
                      {d.units.map(u => (
                        <li key={u} style={{ fontSize: '0.76rem', color: '#334155', background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '0.4rem', padding: '0.3rem 0.5rem' }}>{u}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
            Cada dirección conduce cuatro unidades funcionales. Los jefes de proyecto pertenecen a Dirección y gestión de proyectos, que depende de Operaciones, pero reportan a Tecnología durante la construcción de la solución y a Operaciones durante su operación.
          </div>
        </div>
      </section>

      {/* Equipo Clave con certifs */}
      <section className="section bg-section-alt">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>Equipo Técnico Clave</h2>
          <p style={{ color: '#475569', fontSize: '0.88rem', textAlign: 'center', marginBottom: '2rem' }}>Currículos resumidos y certificaciones profesionales de los líderes técnicos de la compañía.</p>
          <div className="grid grid-cols-1 team-grid-2 gap-4">
            {teamMembers.map((m, i) => (
              <motion.div key={m.name} className="card-premium"
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              >
                <div className={`team-avatar ${m.avatar}`} style={{ width: '52px', height: '52px', fontSize: '1.1rem', marginBottom: 0, flexShrink: 0 }}>{m.initials}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.1rem' }}>{m.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: '#4f46e5', fontWeight: 600, marginBottom: '0.15rem' }}>{m.role}</p>
                  <p style={{ fontSize: '0.73rem', color: '#64748b', marginBottom: '0.5rem' }}>Experiencia: {m.experience}</p>
                  <dl style={{ margin: '0 0 0.6rem', fontSize: '0.8rem', color: '#475569', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {[['Formación', m.education], ['Trayectoria', m.career], ['Proyectos', m.projects]].map(([k, v]) => (
                      <div key={k}>
                        <dt style={{ display: 'inline', fontWeight: 700, color: '#0f172a' }}>{k}: </dt>
                        <dd style={{ display: 'inline', margin: 0 }}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="flex flex-wrap gap-1">
                    {m.certs.map(c => <span key={c} className="pill pill-slate" style={{ fontSize: '0.65rem', padding: '0.1rem 0.45rem' }}>{c}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinación con el cliente */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="card-premium" style={{ backgroundColor: '#ffffff' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a' }}>
              Mecanismos Formales de Coordinación con el Cliente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ fontSize: '0.85rem' }}>
              <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong style={{ color: '#4f46e5', display: 'block', marginBottom: '0.25rem' }}>Comité de Seguridad</strong>
                <p style={{ color: '#475569', margin: 0, lineHeight: 1.5 }}>Sesiona mensualmente para informar formalmente a la contraparte técnica los hallazgos de seguridad y el avance de su mitigación.</p>
              </div>
              <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong style={{ color: '#1d4ed8', display: 'block', marginBottom: '0.25rem' }}>Comité de Arquitectura</strong>
                <p style={{ color: '#475569', margin: 0, lineHeight: 1.5 }}>Registra y valida decisiones estructurales de diseño (ADR) con criterios de selección y consecuencias a disposición del cliente.</p>
              </div>
              <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong style={{ color: '#047857', display: 'block', marginBottom: '0.25rem' }}>Espacio Colaborativo</strong>
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
