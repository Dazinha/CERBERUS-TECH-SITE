import { motion } from 'framer-motion';
import { Building, Target, Eye, Shield, Globe, Award, Calendar } from 'lucide-react';

const Nosotros = () => {
  const timeline = [
    { year: '2018', title: 'Fundación', desc: 'Constituida en Valparaíso, con foco en infraestructuras sanitarias de misión crítica.' },
    { year: '2020', title: 'Primera Red Hospitalaria', desc: 'Primer gran proyecto multisede: integración de 3 hospitales bajo un registro clínico unificado.' },
    { year: '2022', title: 'Expansión Nacional', desc: 'Apertura de sucursal en Temuco y consolidación de capacidades de interoperabilidad HL7 FHIR.' },
    { year: '2024', title: 'Certificaciones Cloud', desc: 'Obtención de certificaciones AWS Advanced Partner y Azure Solutions Partner. Equipo supera los 90 profesionales.' },
    { year: '2025', title: 'Presente', desc: '98 profesionales, 3 sedes, y proyectos activos en más de 15 organizaciones del sector salud.' },
  ];

  const isoCerts = ['ISO/IEC 27001:2022', 'ISO 9001:2015', 'ISO/IEC 27701', 'ISO 22301', 'CMMI-DEV Nivel 3'];
  const cloudCerts = ['AWS Advanced Partner', 'Azure Solutions Partner', 'Accesibilidad WCAG 2.2 AA'];
  const stdCerts = ['Miembro HL7 International'];

  const offices = [
    { icon: <Building size={20} />, name: 'Casa Matriz — Valparaíso', desc: 'Concentra la dirección, arquitectura de soluciones y fábrica de software.' },
    { icon: <Building size={20} />, name: 'Sucursal Sur — Temuco', desc: 'Sostiene actividades de implantación, capacitación y soporte en terreno.' },
    { icon: <Building size={20} />, name: 'Centro de Operaciones — Valparaíso', desc: 'Alberga el centro de operación de red (NOC) y de seguridad (SOC) 24/7/365.' },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-header">
        <div className="container">
          <motion.div
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge badge-indigo">Sobre Nosotros</span>
          </motion.div>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            Tecnología al servicio de la <span className="text-gradient">salud crítica</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Compañía chilena de base tecnológica constituida en 2018, especializada en plataformas digitales de misión crítica para el sector sanitario.
          </motion.p>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="section">
        <div className="container grid grid-cols-1 nosotros-grid-3 gap-6">
          {[
            {
              icon: <Target size={26} />, title: 'Misión',
              content: 'Proveer infraestructuras tecnológicas resilientes, seguras y centradas en el usuario, que garanticen la continuidad operativa ininterrumpida en sectores donde la tecnología es de misión crítica. Reducimos de forma medible el riesgo clínico y administrativo.',
              color: '#6366f1', bg: '#eef2ff',
            },
            {
              icon: <Eye size={26} />, title: 'Visión',
              content: 'Ser el socio tecnológico de referencia en la transformación digital del sector salud en Chile y Latinoamérica, erradicando la fragmentación de la información clínica y elevando el estándar de seguridad del dato de salud.',
              color: '#3b82f6', bg: '#eff6ff',
            },
            {
              icon: <Shield size={26} />, title: 'Valores',
              isList: true,
              items: [
                { label: 'Seguridad por diseño', desc: 'Controles incorporados en la arquitectura.' },
                { label: 'Resiliencia verificable', desc: 'Disponibilidad con pruebas periódicas.' },
                { label: 'Trazabilidad íntegra', desc: 'Acceso y cambios auditables.' },
                { label: 'Ética de datos', desc: 'Minimización y control de finalidad.' },
              ],
              color: '#10b981', bg: '#ecfdf5',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="card-premium"
              style={{ borderTop: `3px solid ${item.color}` }}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.6rem', borderRadius: '0.6rem', backgroundColor: item.bg, color: item.color }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{item.title}</h3>
              </div>
              {item.isList ? (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {item.items.map(v => (
                    <li key={v.label} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: item.color, marginTop: '0.1rem', flexShrink: 0 }}>▸</span>
                      <span style={{ fontSize: '0.88rem', color: '#475569' }}>
                        <strong style={{ color: '#0f172a' }}>{v.label}:</strong> {v.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7 }}>{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Historia - Timeline */}
      <section className="section bg-section-alt">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '0.6rem', backgroundColor: '#eef2ff', color: '#6366f1' }}>
              <Calendar size={22} />
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Nuestra Historia</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="pill pill-indigo" style={{ fontSize: '0.8rem', flexShrink: 0 }}>{item.year}</span>
                  <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '0.25rem', color: '#0f172a' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '0.6rem', backgroundColor: '#eef2ff', color: '#6366f1' }}>
              <Award size={22} />
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Certificaciones y Alianzas</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Normas ISO y CMMI</p>
              <div className="flex flex-wrap gap-3">
                {isoCerts.map(c => <span key={c} className="pill pill-slate">{c}</span>)}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Alianzas Cloud y Accesibilidad</p>
              <div className="flex flex-wrap gap-3">
                {cloudCerts.map(c => <span key={c} className="pill pill-indigo">{c}</span>)}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Estándares de Salud</p>
              <div className="flex flex-wrap gap-3">
                {stdCerts.map(c => <span key={c} className="pill pill-green">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presencia Geográfica */}
      <section className="section bg-section-alt">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '0.6rem', backgroundColor: '#eef2ff', color: '#6366f1' }}>
              <Globe size={22} />
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Presencia Geográfica</h2>
          </div>
          <p style={{ color: '#475569', marginBottom: '2rem', marginLeft: '3.5rem' }}>
            La compañía opera desde tres emplazamientos estratégicos para asegurar soporte directo y tiempos de respuesta mínimos.
          </p>
          <div className="grid grid-cols-1 nosotros-grid-3 gap-4">
            {offices.map((o, i) => (
              <motion.div
                key={o.name}
                className="card-premium"
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              >
                <div style={{ padding: '0.6rem', borderRadius: '0.6rem', backgroundColor: '#eef2ff', color: '#6366f1', flexShrink: 0 }}>
                  {o.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.35rem', fontSize: '0.95rem' }}>{o.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#475569' }}>{o.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .nosotros-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </div>
  );
};

export default Nosotros;
