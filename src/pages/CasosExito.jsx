import { motion } from 'framer-motion';
import { Briefcase, BarChart3, Users, Building, Activity, ShieldAlert, Phone, ShieldCheck, FileCheck, MapPin, UserX, Star, Globe, Stethoscope, Truck } from 'lucide-react';

const CasosExito = () => {
  const metrics = [
    { num: '1.8M+', label: 'Registros en Padrón', icon: <Users size={20} /> },
    { num: '99.95%', label: 'Uptime Verificado', icon: <BarChart3 size={20} /> },
    { num: '1.6M+', label: 'Atenciones Anuales', icon: <Activity size={20} /> },
    { num: '<1min', label: 'RTO y Notificaciones', icon: <ShieldAlert size={20} /> },
  ];

  const projects = [
    {
      title: 'Sistema Integrado de Salud Híbrido',
      client: 'Red Hospitalaria San Juan',
      industry: 'Red Hospitalaria — Alta Complejidad',
      period: '2023 – 2025',
      budget: 'USD 12M – 15M',
      desc: 'Registro clínico electrónico unificado para cuatro recintos con identidad de paciente, agendamiento y migración histórica. Arquitectura híbrida con nodos de borde para autonomía ante cortes de conectividad.',
      stats: [
        { icon: <BarChart3 size={12} />, label: 'Uptime medido', value: '99.95%' },
        { icon: <Users size={12} />, label: 'Pacientes activos', value: '480.000' },
        { icon: <Activity size={12} />, label: 'Atenciones/año', value: '1,4M' },
        { icon: <Building size={12} />, label: 'TB imagenología', value: '62 TB' },
      ],
      ref: 'Ricardo Salgado Peña — Director TI', email: 'r.salgado@redsanjuan.cl',
      accentColor: '#6366f1',
    },
    {
      title: 'Plataforma Nacional de Interoperabilidad',
      client: 'Mutualidad de Trabajadores',
      industry: 'Salud Ocupacional y Seguridad Laboral',
      period: '2022 – 2024',
      budget: 'USD 6M – 8M',
      desc: 'Índice maestro de pacientes de cobertura nacional. Unificación de 1,2 M de registros fragmentados mediante técnicas determinísticas y probabilísticas, con arbitraje manual de pares de baja confianza bajo HL7 v2.x y FHIR R4.',
      stats: [
        { icon: <Activity size={12} />, label: 'Latencia p95', value: '<300ms' },
        { icon: <Building size={12} />, label: 'Instituciones', value: '12' },
        { icon: <Users size={12} />, label: 'Registros padrón', value: '1,8M' },
        { icon: <BarChart3 size={12} />, label: 'Peak mensajería', value: '40 msg/s' },
      ],
      ref: 'Carolina Vergara Ríos — Gerenta Transformación Digital', email: 'c.vergara@mutualtrabajadores.cl',
      accentColor: '#3b82f6',
    },
    {
      title: 'Plataforma de Coordinación Ambulatoria',
      client: 'Clínica Los Andes',
      industry: 'Atención Ambulatoria y Domiciliaria',
      period: '2021 – 2022',
      budget: 'USD 2,5M – 3,5M',
      desc: 'Suite omnicanal de agendamiento, triaje, confirmación y asignación de prestaciones en terreno con app móvil para profesionales y tablero de gestión de la demanda. Reducción de ausentismo del 45%.',
      stats: [
        { icon: <Phone size={12} />, label: 'Notificación p95', value: '<60s' },
        { icon: <ShieldAlert size={12} />, label: 'Ausentismo', value: '−45%' },
        { icon: <Users size={12} />, label: 'Pacientes activos', value: '95.000' },
        { icon: <Activity size={12} />, label: 'Atenciones/año', value: '210.000' },
      ],
      ref: 'Jorge Fuenzalida Ibáñez — Subdirector Operaciones', email: 'j.fuenzalida@clinicalosandes.cl',
      accentColor: '#10b981',
    },
  ];

  const industries = [
    { icon: <Stethoscope size={22} />, name: 'Red Hospitalaria de Alta Complejidad', desc: 'Registro clínico electrónico, identidad de paciente y operación gestionada en redes multisede.', color: '#6366f1', bg: '#eef2ff' },
    { icon: <Building size={22} />, name: 'Salud Ocupacional y Mutualidades', desc: 'Interoperabilidad nacional, índice maestro de pacientes y gobierno de identidad a escala.', color: '#3b82f6', bg: '#eff6ff' },
    { icon: <Truck size={22} />, name: 'Atención Ambulatoria y Domiciliaria', desc: 'Coordinación omnicanal, agendamiento, triaje y app móvil para prestadores en terreno.', color: '#10b981', bg: '#ecfdf5' },
    { icon: <Globe size={22} />, name: 'Redes de Salud con Dispersión Territorial', desc: 'Arquitecturas con nodos de borde para operación autónoma en zonas rurales o con conectividad limitada.', color: '#f59e0b', bg: '#fffbeb' },
  ];

  const contextItems = [
    { icon: <ShieldCheck size={26} />, title: 'Datos Sensibles', color: '#6366f1', bg: '#eef2ff', desc: 'Operamos bajo la Ley N° 21.719 de protección de datos, Ley N° 20.584 y Ley N° 21.663 Marco sobre Ciberseguridad, con controles verificables de consentimiento, minimización, trazabilidad de acceso y retención.' },
    { icon: <UserX size={26} />, title: 'Identidad como Riesgo Clínico', color: '#3b82f6', bg: '#eff6ff', desc: 'Prevenimos que un resultado clínico se atribuya erróneamente mediante flujos de arbitraje manual obligatorio para pares de baja confianza.' },
    { icon: <FileCheck size={26} />, title: 'Acreditación Institucional', color: '#10b981', bg: '#ecfdf5', desc: 'Acompañamos procesos de acreditación ante la Superintendencia de Salud, incorporando desde el diseño la evidencia documental y los registros que el estándar exige.' },
    { icon: <MapPin size={26} />, title: 'Pertinencia Territorial', color: '#f59e0b', bg: '#fffbeb', desc: 'Contemplamos conectividad rural e interculturalidad para garantizar que la tecnología opere de manera inclusiva e ininterrumpida en zonas como La Araucanía y Los Ríos.' },
  ];

  const testimonials = [
    {
      quote: 'La plataforma integrada resolvió nuestro problema histórico de fichas duplicadas. Ahora nuestros médicos confían plenamente en el historial del paciente, incluso si el sistema central sufre cortes, gracias a la arquitectura híbrida.',
      name: 'Ricardo Salgado Peña', role: 'Director TI, Red Hospitalaria San Juan',
      initial: 'RS', avatarClass: 'avatar-indigo',
    },
    {
      quote: 'Lograr interoperar a 12 instituciones distintas a nivel nacional parecía imposible. Cerberus logró un índice maestro confiable y rápido, respetando los estándares FHIR y garantizando la privacidad de los afiliados.',
      name: 'Carolina Vergara Ríos', role: 'Gerenta Trans. Digital, Mutualidad Trabajadores',
      initial: 'CV', avatarClass: 'avatar-blue',
    },
    {
      quote: 'La app de asignación de terreno redujo nuestro ausentismo dramáticamente. La estabilidad del sistema nos permitió enfocar los recursos donde más se necesitan sin preocuparnos por caídas técnicas.',
      name: 'Jorge Fuenzalida Ibáñez', role: 'Subdirector Operaciones, Clínica Los Andes',
      initial: 'JF', avatarClass: 'avatar-teal',
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-header">
        <div className="container">
          <motion.div style={{ marginBottom: '1rem' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-indigo">Portafolio</span>
          </motion.div>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            Experiencia y <span className="text-gradient">Casos de Éxito</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '580px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Tres proyectos de misión crítica finalizados y en operación dentro de los últimos cinco años, acreditados con métricas verificables y referencias de contacto directo.
          </motion.p>
        </div>
      </section>

      {/* Métricas — Banda oscura */}
      <div className="stats-band">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div key={m.label} style={{ textAlign: 'center' }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              >
                <div style={{ color: '#818cf8', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{m.icon}</div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f1f5f9', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>{m.num}</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.4rem' }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyectos */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Briefcase size={22} style={{ color: '#6366f1' }} /> Proyectos Principales
          </h2>
          <div className="grid grid-cols-1 cases-grid-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={p.title} className="card-premium"
                style={{ display: 'flex', flexDirection: 'column', borderTop: `3px solid ${p.accentColor}` }}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              >
                {/* Client pill + industry */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.75rem' }}>
                  <span className="pill" style={{ fontSize: '0.72rem', color: p.accentColor, backgroundColor: `${p.accentColor}12`, borderColor: `${p.accentColor}40`, width: 'fit-content' }}>{p.client}</span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{p.industry}</span>
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.25rem' }}>{p.title}</h3>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{p.period}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>·</span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{p.budget}</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.65, flexGrow: 1, marginBottom: '1rem' }}>{p.desc}</p>

                <div className="grid grid-cols-2 gap-2" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.875rem', marginBottom: '0.875rem' }}>
                  {p.stats.map(s => (
                    <div key={s.label}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: '#94a3b8', marginBottom: '0.2rem' }}>{s.icon} {s.label}</div>
                      <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontFamily: 'Outfit, sans-serif' }}>{s.value}</strong>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '0.75rem' }}>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '0.2rem' }}>Referencia verificable</p>
                  <p style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 500, marginBottom: '0.1rem' }}>{p.ref}</p>
                  <p style={{ fontSize: '0.75rem', color: '#6366f1' }}>{p.email}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrias Atendidas — RT-23.02 */}
      <section className="section bg-section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Industrias <span className="text-gradient">Atendidas</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: '560px', margin: '0 auto', fontSize: '0.95rem' }}>
              Nuestra especialización está concentrada en el sector salud en sus distintas modalidades de operación.
            </p>
          </div>
          <div className="grid grid-cols-1 cases-grid-2 gap-5">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} className="card-premium"
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              >
                <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: ind.bg, color: ind.color, flexShrink: 0 }}>{ind.icon}</div>
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.35rem' }}>{ind.name}</h4>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6 }}>{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contexto Sectorial */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Comprensión Acreditada del <span className="text-gradient">Contexto Sectorial</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: '560px', margin: '0 auto', fontSize: '0.95rem' }}>
              No somos solo desarrolladores de software; entendemos la criticidad del ecosistema de salud y sus normativas vigentes.
            </p>
          </div>
          <div className="grid grid-cols-1 cases-grid-2 gap-5">
            {contextItems.map((item, i) => (
              <motion.div key={item.title} className="card-premium card-accent-left"
                style={{ '--accent-primary': item.color }}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingLeft: '0.75rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '0.6rem', backgroundColor: item.bg, color: item.color, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '0.4rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section bg-section-alt">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Testimonios y <span className="text-gradient">Referencias</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>Testimonios con autorización de publicación de clientes con contratos vigentes o finalizados.</p>
          </div>
          <div className="grid grid-cols-1 cases-grid-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} className="card-premium"
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              >
                <span className="quote-mark">"</span>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#f59e0b' }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.quote}"</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                  <div className={`team-avatar ${t.avatarClass}`} style={{ width: '40px', height: '40px', fontSize: '0.9rem', marginBottom: 0 }}>{t.initial}</div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.1rem' }}>{t.name}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .cases-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .cases-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </div>
  );
};

export default CasosExito;
