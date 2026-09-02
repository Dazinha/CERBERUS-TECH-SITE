import { motion } from 'framer-motion';
import { Users, Network, Settings, Database, Shield, MonitorPlay, CheckCircle, Lightbulb, Activity, Award } from 'lucide-react';

const Equipo = () => {
  const depts = [
    { icon: <Settings size={16} />, area: 'Dirección y PMO', count: 6 },
    { icon: <Network size={16} />, area: 'Arquitectura', count: 8 },
    { icon: <MonitorPlay size={16} />, area: 'Ing. de Software', count: 30 },
    { icon: <Database size={16} />, area: 'Datos e Interop.', count: 10 },
    { icon: <Shield size={16} />, area: 'Ciberseguridad', count: 14 },
    { icon: <Activity size={16} />, area: 'Operación', count: 16 },
    { icon: <CheckCircle size={16} />, area: 'Calidad y Pruebas', count: 9 },
    { icon: <Lightbulb size={16} />, area: 'Implantación', count: 5 },
  ];

  const directors = [
    {
      name: 'Roberto Cerda', role: 'Director Ejecutivo (CEO)',
      bio: 'Ingeniero Civil Industrial con 15 años de experiencia liderando empresas de base tecnológica en el sector salud.',
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
      bio: 'Experto en continuidad operativa, gestión de servicios bajo marco ITIL v4 y calidad normativa.',
      initials: 'FS', avatar: 'avatar-blue',
      certs: ['ITIL 4 Master', 'ISO 22301'],
    },
  ];

  // Organigrama jerárquico
  const orgChart = {
    ceo: { name: 'R. Cerda', title: 'CEO' },
    reports: [
      { name: 'D. Riquelme', title: 'CTO' },
      { name: 'F. Sandoval', title: 'COO' },
    ],
  };

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
          <div style={{ fontSize: '4rem', fontWeight: 800, color: '#f1f5f9', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>98</div>
          <div style={{ color: '#818cf8', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0.5rem 0 1rem' }}>Profesionales en Dotación Total</div>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', maxWidth: '560px', margin: '0 auto' }}>
            Un puesto cubierto de forma ininterrumpida demanda 8.760 h de cobertura anual, lo que equivale a ~5,2 profesionales por puesto continuo.
          </p>
        </div>
      </div>

      {/* Distribución por área */}
      <section className="section bg-section-alt">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Distribución por Área</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {depts.map((d, i) => (
              <motion.div key={d.area} className="stat-card"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#6366f1', marginBottom: '0.5rem', fontSize: '0.8rem' }}>{d.icon}</div>
                <div className="stat-number">{d.count}</div>
                <div className="stat-label">{d.area}</div>
              </motion.div>
            ))}
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
              {directors.slice(1).map((d, i) => (
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
          <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center' }}>
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
                  <p style={{ fontSize: '0.73rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{m.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {m.certs.map(c => <span key={c} className="pill pill-slate" style={{ fontSize: '0.65rem', padding: '0.1rem 0.45rem' }}>{c}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
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
