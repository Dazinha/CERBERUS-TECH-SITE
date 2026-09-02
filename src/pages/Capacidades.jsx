import { motion } from 'framer-motion';
import { Cloud, Code2, Database, ShieldCheck, Workflow, CheckCircle } from 'lucide-react';

const Capacidades = () => {
  const lines = [
    {
      icon: <ShieldCheck size={30} />,
      title: 'Plataformas Clínicas e Identidad del Paciente',
      desc: 'Comprende el registro clínico electrónico, el índice maestro de pacientes, el agendamiento y la gestión de la demanda ambulatoria. Resuelve el problema de la ficha única y del reconocimiento inequívoco a lo largo de una red multisede.',
      color: '#6366f1', pillText: '#4338ca', bg: '#eef2ff',
      tags: ['Registro Clínico', 'Índice Maestro', 'Agendamiento'],
    },
    {
      icon: <Database size={30} />,
      title: 'Interoperabilidad e Ingeniería de Datos',
      desc: 'Abarca la integración bajo los estándares HL7 v2.x y HL7 FHIR R4, motores de mensajería clínica, gestión de terminologías como SNOMED CT y LOINC, y migración de datos históricos.',
      color: '#3b82f6', pillText: '#1d4ed8', bg: '#eff6ff',
      tags: ['HL7 FHIR R4', 'SNOMED CT', 'LOINC', 'Migración'],
    },
    {
      icon: <Cloud size={30} />,
      title: 'Ciberseguridad y Operaciones Defensivas',
      desc: 'Diseño de arquitecturas bajo modelo Zero Trust, gestión de identidad y acceso, SOC permanente, gestión de vulnerabilidades, respuesta a incidentes y cumplimiento normativo de datos sensibles.',
      color: '#10b981', pillText: '#047857', bg: '#ecfdf5',
      tags: ['Zero Trust', 'SOC 24/7', 'IAM', 'Gestión de Vulnerabilidades'],
    },
    {
      icon: <Workflow size={30} />,
      title: 'Operación Gestionada y Confiabilidad',
      desc: 'Mesa de servicio multinivel bajo ITIL 4, observabilidad de extremo a extremo, gestión de capacidad, pruebas de recuperación ante desastres y mantención preventiva, correctiva y evolutiva.',
      color: '#f59e0b', pillText: '#b45309', bg: '#fffbeb',
      tags: ['ITIL 4', 'DRP', 'Observabilidad', 'SLA Contractual'],
    },
  ];

  const techStack = {
    'Frontend & Backend': { pills: ['React / Next.js', 'Node.js', 'Python / FastAPI', 'Go', 'Java / Spring Boot'], color: 'indigo' },
    'Infraestructura & DevOps': { pills: ['Kubernetes (K8s)', 'Docker', 'Terraform', 'CI/CD (GitLab, GitHub Actions)'], color: 'blue' },
    'Bases de Datos': { pills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'], color: 'green' },
    'Seguridad': { pills: ['SIEM', 'WAF', 'Vault (HashiCorp)', 'ISO 27001 Controls'], color: 'amber' },
  };

  const services = [
    'Consultoría y arquitectura de solución.',
    'Desarrollo de software a medida bajo prácticas DevSecOps.',
    'Integración de sistemas heterogéneos y de plataformas heredadas.',
    'Migración de datos clínicos.',
    'Despliegue de infraestructura híbrida (nube pública, instalaciones propias del cliente y nodos de borde).',
    'Operación continua bajo acuerdos de nivel de servicio contractuales.',
    'Capacitación, implantación y gestión del cambio con usuarios operacionales.',
  ];

  const methodologies = [
    { title: 'DevSecOps', desc: 'Integración continua de seguridad en todo el ciclo de vida del desarrollo.', color: '#6366f1' },
    { title: 'Scrum & SAFe', desc: 'Agilidad escalada para entregar valor de forma iterativa y predecible en proyectos corporativos.', color: '#3b82f6' },
    { title: 'ITIL v4', desc: 'Gestión de servicios de TI alineada a las mejores prácticas globales para operaciones eficientes.', color: '#10b981' },
  ];

  const infraItems = [
    { title: 'Centro de Operaciones de Seguridad (SOC)', desc: 'Monitoreo continuo 24/7/365 con equipos redundantes en dos zonas geográficas distintas.' },
    { title: 'Capacidad de Procesamiento', desc: 'Clústeres de alto rendimiento aprovisionados dinámicamente con auto-scaling para manejar picos de hasta 100.000 TPS.' },
    { title: 'Redundancia de Datos', desc: 'Copias de seguridad cifradas con políticas de retención WORM inmutables en múltiples regiones.' },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-header">
        <div className="container">
          <motion.div style={{ marginBottom: '1rem' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-indigo">Líneas de Negocio</span>
          </motion.div>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            Capacidades <span className="text-gradient">Técnicas</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '560px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Las 4 líneas de negocio fundamentales que concurren en el alcance de nuestros proyectos.
          </motion.p>
        </div>
      </section>

      {/* 4 Líneas de Negocio */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 cap-grid-2 gap-6">
            {lines.map((line, i) => (
              <motion.div
                key={line.title}
                className="card-premium"
                style={{ position: 'relative', overflow: 'hidden', borderTop: `3px solid ${line.color}` }}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              >
                <div className="order-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: line.bg, color: line.color, flexShrink: 0 }}>
                    {line.icon}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.4, paddingTop: '0.5rem' }}>{line.title}</h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>{line.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {line.tags.map(tag => (
                    <span key={tag} className="pill" style={{ fontSize: '0.72rem', color: line.pillText, backgroundColor: line.bg, borderColor: `${line.color}40` }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="section bg-section-alt">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Code2 size={20} style={{ color: '#6366f1' }} />
            Conjunto Tecnológico Dominado
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {Object.entries(techStack).map(([category, { pills, color }]) => (
              <div key={category}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>{category}</p>
                <div className="flex flex-wrap gap-2">
                  {pills.map(p => (
                    <span key={p} className={`pill pill-${color}`}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Acreditables */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 cap-grid-2 gap-12">
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Catálogo de Servicios Acreditables</h2>
              <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Nuestros servicios prestados de forma habitual y acreditables mediante contratos vigentes o finalizados incluyen:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {services.map((s, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={16} style={{ color: '#6366f1', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.88rem', color: '#475569' }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Metodologías Certificadas</h2>
                {methodologies.map(m => (
                  <div key={m.title} className="card-premium" style={{ marginBottom: '0.75rem', borderLeft: `3px solid ${m.color}`, borderRadius: '0 0.75rem 0.75rem 0' }}>
                    <h4 style={{ fontWeight: 700, color: m.color, marginBottom: '0.3rem', fontSize: '0.92rem' }}>{m.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#475569' }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="section bg-section-alt">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Infraestructura y Capacidad Instalada</h2>
          <div className="grid grid-cols-1 cap-grid-3 gap-5">
            {infraItems.map((item, i) => (
              <motion.div
                key={item.title}
                className="card-premium"
                style={{ borderTop: '3px solid #6366f1' }}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              >
                <h4 style={{ fontWeight: 700, marginBottom: '0.6rem', fontSize: '0.95rem', color: '#0f172a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .cap-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .cap-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </div>
  );
};

export default Capacidades;
