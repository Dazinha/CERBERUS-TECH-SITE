import { motion } from 'framer-motion';
import { Building, Target, Eye, Shield, Globe, Award, Calendar, CheckCircle2, Lock, BookOpen } from 'lucide-react';

const Nosotros = () => {
  const timeline = [
    { year: '2018', title: 'Fundación', desc: 'La compañía se constituye en Valparaíso con foco en infraestructuras sanitarias de misión crítica.' },
    { year: '2020', title: 'Primera Red Hospitalaria', desc: 'Ejecuta su primer gran proyecto multisede, que integra tres hospitales bajo un registro clínico unificado.' },
    { year: '2022', title: 'Expansión Nacional', desc: 'Abre su sucursal en Temuco y consolida sus capacidades de interoperabilidad, es decir, de intercambio de información clínica entre sistemas distintos.' },
    { year: '2024', title: 'Alianzas con Proveedores de Nube', desc: 'Obtiene la condición de Solutions Partner de Microsoft Azure, y su equipo supera los 90 profesionales.' },
    { year: '2026', title: 'Situación Actual', desc: 'A 2026, cuenta con 106 profesionales, tres sedes operativas y proyectos activos en más de quince organizaciones del sector salud.' },
  ];

  const officialCerts = [
    {
      norm: 'ISO/IEC 27001:2022',
      scope: 'Seguridad de la información en todas las operaciones',
      entity: 'SGS Chile',
      certNum: 'SI-CL24/81923',
      validity: '15/05/2028',
      type: 'Seguridad',
      color: '#6366f1',
    },
    {
      norm: 'ISO 9001:2015',
      scope: 'Gestión de la calidad',
      entity: 'AENOR',
      certNum: 'ER-0345/2023',
      validity: '22/08/2027',
      type: 'Calidad',
      color: '#3b82f6',
    },
    {
      norm: 'ISO/IEC 27701:2019',
      scope: 'Privacidad de datos personales sensibles de salud',
      entity: 'BSI Group',
      certNum: 'PIMS-743210',
      validity: '10/11/2027',
      type: 'Privacidad',
      color: '#10b981',
    },
    {
      norm: 'ISO 22301:2019',
      scope: 'Continuidad del negocio',
      entity: 'TÜV Rheinland',
      certNum: 'TR-BCM-2025-091',
      validity: '05/02/2028',
      type: 'Continuidad',
      color: '#f59e0b',
    },
    {
      norm: 'CMMI-DEV Nivel 3',
      scope: 'Madurez de los procesos de desarrollo de software',
      entity: 'ISACA (CMMI Institute)',
      certNum: 'APP-49283',
      validity: '30/09/2027',
      type: 'Madurez SW',
      color: '#ec4899',
    },
  ];

  const alliances = [
    {
      name: 'Microsoft Azure',
      role: 'Solutions Partner',
      badge: 'Partner Oficial',
      desc: 'Partner en las categorías de Innovación Digital y de Aplicaciones. Otorga capacidad formal como socio del fabricante, soporte directo e integración con arquitecturas de referencia en la nube.',
      color: '#0078d4',
    },
    {
      name: 'HL7 International',
      role: 'Organización Miembro',
      badge: 'Membresía N.º HL7-ORG-20417',
      desc: 'Participación formal en el desarrollo y la adopción de los estándares de interoperabilidad clínica HL7 v2.x y FHIR R4. Vigencia acreditada hasta el 31/12/2027.',
      color: '#d97706',
    },
    {
      name: 'Accesibilidad Web',
      role: 'W3C WCAG 2.2 Nivel AA',
      badge: 'Conformidad AA',
      desc: 'Todas las interfaces desarrolladas cumplen las Pautas de Accesibilidad para el Contenido Web (WCAG 2.2 AA), asegurando accesibilidad e inclusión en personas con variados niveles de alfabetización digital.',
      color: '#059669',
    },
  ];

  const offices = [
    {
      icon: <Building size={20} />,
      name: 'Casa Matriz — Valparaíso',
      address: 'Av. Brasil 2241, piso 2, Valparaíso',
      desc: 'Concentra la dirección corporativa, la arquitectura de soluciones y la fábrica de software principal.',
    },
    {
      icon: <Building size={20} />,
      name: 'Sucursal Sur — Temuco',
      address: 'Temuco, Región de La Araucanía',
      desc: 'Sostiene las actividades de implantación, capacitación y soporte en terreno para dar cobertura directa a centros médicos regionales.',
    },
    {
      icon: <Building size={20} />,
      name: 'Centro de Operaciones — Valparaíso',
      address: 'Valparaíso (equipos redundantes en 2 zonas)',
      desc: 'Alberga el NOC (monitoreo y rendimiento) y el SOC (seguridad e incidentes) operativos las 24 horas del día, los 365 días del año.',
    },
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
            <span className="badge badge-indigo">Presentación de la Empresa</span>
          </motion.div>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            Tecnología al servicio de la <span className="text-gradient">salud crítica</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '640px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Cerberus Tech SpA es una compañía chilena de base tecnológica constituida en 2018 y con casa matriz en Valparaíso, que diseña, construye y opera plataformas digitales de misión crítica para el sector salud.
          </motion.p>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target size={26} />, title: 'Misión',
              content: 'Proveer infraestructuras tecnológicas resilientes, seguras y centradas en el usuario, que garanticen la continuidad operativa en sectores donde la tecnología es de misión crítica. Cada plataforma implementada debe resolver el desafío técnico y, además, reducir de forma medible el riesgo clínico y administrativo de la organización que la adopta.',
              color: '#6366f1', bg: '#eef2ff',
            },
            {
              icon: <Eye size={26} />, title: 'Visión',
              content: 'Ser el socio tecnológico de referencia en la transformación digital del sector salud en Chile y Latinoamérica, eliminando la fragmentación de la información clínica y elevando el estándar de seguridad del dato de salud, de modo que la tecnología opere como una capacidad confiable e invisible al servicio de la atención.',
              color: '#3b82f6', bg: '#eff6ff',
            },
            {
              icon: <Shield size={26} />, title: 'Valores y Principios',
              isList: true,
              items: [
                { label: 'Seguridad por diseño', desc: 'Los controles se incorporan desde la definición de la arquitectura y no como etapa posterior.' },
                { label: 'Resiliencia verificable', desc: 'Todo compromiso de disponibilidad y recuperación se somete a prueba periódica e informa al cliente.' },
                { label: 'Trazabilidad íntegra', desc: 'Cada acceso, cambio y decisión estructural queda registrado y puede ser auditado por el cliente.' },
                { label: 'Ética de datos sensibles', desc: 'Minimización estricta, control de finalidad y gestión del consentimiento sobre la información clínica.' },
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
                      <span style={{ fontSize: '0.86rem', color: '#475569' }}>
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
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Trayectoria y Evolución</h2>
              <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>En ocho años, la empresa ha pasado de un equipo fundador enfocado en infraestructura sanitaria a una organización con presencia en dos regiones y proyectos activos en más de quince organizaciones de salud.</p>
            </div>
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

      {/* Certificaciones Institucionales Vigentes */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '0.6rem', backgroundColor: '#eef2ff', color: '#6366f1' }}>
              <Award size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Certificaciones Institucionales Vigentes</h2>
              <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>Acreditaciones con alcance corporativo emitidas por organismos internacionales independientes.</p>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem', backgroundColor: '#ffffff', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#0f172a' }}>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Norma</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Alcance Certificado</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Organismo Certificador</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>N.º Certificado</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Vigencia Hasta</th>
                </tr>
              </thead>
              <tbody>
                {officialCerts.map((c, idx) => (
                  <tr key={c.norm} style={{ borderBottom: idx < officialCerts.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#0f172a' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: c.color }}></span>
                        {c.norm}
                      </span>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#475569' }}>{c.scope}</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: '#334155' }}>{c.entity}</td>
                    <td style={{ padding: '0.85rem 1rem', fontFamily: 'monospace', color: '#6366f1', fontSize: '0.82rem' }}>{c.certNum}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#16a34a', fontWeight: 600 }}>{c.validity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.75rem', fontStyle: 'italic' }}>
            Todas las certificaciones cuentan con ciclos regulares de renovación y vigencia continua entre 2027 y 2028. Copias y certificados oficiales disponibles a solicitud.
          </p>

          {/* Alianzas Tecnológicas Oficiales */}
          <div style={{ marginTop: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>
              Alianzas Tecnológicas y Estándares de la Industria
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alliances.map((a) => (
                <div key={a.name} className="card-premium" style={{ borderTop: `3px solid ${a.color}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>{a.name}</h4>
                    <span className="pill" style={{ fontSize: '0.68rem', backgroundColor: `${a.color}15`, color: a.color, borderColor: `${a.color}30` }}>{a.badge}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: a.color, fontWeight: 600, marginBottom: '0.5rem' }}>{a.role}</p>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gobierno Interno: Calidad, Seguridad y Conocimiento */}
      <section className="section bg-section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Modelo de Gobierno Interno
            </h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '0 auto', fontSize: '0.92rem' }}>
              Dependencia directa de la Dirección Ejecutiva con responsables y comités independientes para asegurar que ninguna unidad se controle a sí misma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-premium" style={{ borderTop: '3px solid #3b82f6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#3b82f6' }}>
                <CheckCircle2 size={22} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>Gobierno de Calidad</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#475569' }}>
                <li><strong>Política:</strong> ISO 9001:2015.</li>
                <li><strong>Responsable:</strong> Dirección de Operaciones (revisión semestral).</li>
                <li><strong>Estándares:</strong> Calidad de producto ISO/IEC 25010 y pruebas bajo ISO/IEC/IEEE 29119.</li>
                <li><strong>Mecanismo:</strong> Puertas de calidad en CI/CD: cobertura mínima de pruebas del 70% sobre lógica de negocio, cero pruebas fallidas, límites de acoplamiento y revisión obligatoria por pares.</li>
              </ul>
            </div>

            <div className="card-premium" style={{ borderTop: '3px solid #6366f1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#6366f1' }}>
                <Lock size={22} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>Seguridad de la Información</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#475569' }}>
                <li><strong>Políticas:</strong> ISO/IEC 27001:2022 y privacidad ISO/IEC 27701:2019.</li>
                <li><strong>Responsable:</strong> Oficial de Seguridad (CISO), reporta a Dirección de Tecnología.</li>
                <li><strong>Instancia:</strong> Comité de Seguridad mensual con informe formal a la contraparte del cliente.</li>
                <li><strong>Mecanismo:</strong> DevSecOps con análisis estático (SAST), dinámico (DAST), análisis de composición (SCA), secretos en Vault, arquitectura Zero Trust, MFA y SIEM permanente.</li>
              </ul>
            </div>

            <div className="card-premium" style={{ borderTop: '3px solid #10b981' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#10b981' }}>
                <BookOpen size={22} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>Conocimiento y Continuidad</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#475569' }}>
                <li><strong>Continuidad:</strong> ISO 22301:2019 de continuidad del negocio.</li>
                <li><strong>Principio:</strong> El conocimiento es un activo del cliente (código, infraestructura como código y documentación transferibles sin dependencia de proveedor).</li>
                <li><strong>Instancia:</strong> Comité de Arquitectura con registros de decisión (ADR).</li>
                <li><strong>Mecanismo:</strong> Libros de operación versionados con código, post-mortems sin culpa, sustituto activo por cada rol clave y espacio colaborativo compartido.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Presencia Geográfica */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '0.6rem', backgroundColor: '#eef2ff', color: '#6366f1' }}>
              <Globe size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Presencia Geográfica y Operativa</h2>
              <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>Tres emplazamientos con funciones claramente delimitadas para asegurar cobertura y soporte continuo.</p>
            </div>
          </div>
          <p style={{ color: '#475569', marginBottom: '2rem', marginTop: '0.5rem' }}>
            La compañía opera desde tres emplazamientos para asegurar soporte directo en terreno y vigilancia ininterrumpida los 365 días del año.
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
                  <h4 style={{ fontWeight: 700, marginBottom: '0.2rem', fontSize: '0.95rem' }}>{o.name}</h4>
                  <p style={{ fontSize: '0.78rem', color: '#6366f1', fontWeight: 600, marginBottom: '0.35rem' }}>{o.address}</p>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>{o.desc}</p>
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
