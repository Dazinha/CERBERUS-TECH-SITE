import { motion } from 'framer-motion';
import { BookOpen, Video, ArrowRight, Calculator, Activity, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

// Indicadores contractuales de los proyectos en operación (Subdocumento 1, sección 1.4)
const platformMetrics = [
  { label: 'Valle Quilén', sub: 'Disponibilidad medida mes a mes · SLA 99,5 %', value: '99,95 %' },
  { label: 'Cordillera Austral', sub: 'Consulta MPI p95 · compromiso < 300 ms', value: '< 300 ms' },
  { label: 'Ribera Norte', sub: 'Entrega de notificaciones p95 · compromiso < 60 s', value: '< 60 s' },
];

const formatCLP = (n) => `$${Math.round(n).toLocaleString('es-CL')}`;

const Recursos = () => {
  // RT-23.10 — Estimador de recuperación de consultas perdidas por ausentismo.
  // Valores de ejemplo editables; la reducción del 45 % es la acreditada en el proyecto Ribera Norte.
  const [agendadas, setAgendadas] = useState(20000);
  const [ausentismo, setAusentismo] = useState(20);
  const [reduccion, setReduccion] = useState(45);
  const [valorConsulta, setValorConsulta] = useState(30000);

  const perdidasActual = agendadas * (ausentismo / 100);
  const recuperadas = perdidasActual * (reduccion / 100);
  const ausentismoNuevo = ausentismo * (1 - reduccion / 100);
  const ingresoMensual = recuperadas * valorConsulta;

  // RT-23.09 — Estado del sitio corporativo medido en vivo desde el navegador (cada 30 s)
  const [site, setSite] = useState({ status: 'checking', latency: null, checkedAt: null, ok: 0, total: 0 });

  useEffect(() => {
    let cancelled = false;
    const check = async () => {
      const t0 = performance.now();
      let ok = false;
      try {
        const res = await fetch(`/?healthcheck=${Date.now()}`, { method: 'HEAD', cache: 'no-store' });
        ok = res.ok;
      } catch {
        ok = false;
      }
      const latency = Math.round(performance.now() - t0);
      if (cancelled) return;
      setSite(prev => ({
        status: ok ? 'up' : 'down',
        latency: ok ? latency : null,
        checkedAt: new Date(),
        ok: prev.ok + (ok ? 1 : 0),
        total: prev.total + 1,
      }));
    };
    check();
    const interval = setInterval(check, 30000);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  const sessionUptime = site.total ? ((site.ok / site.total) * 100).toFixed(1).replace('.', ',') : null;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-header">
        <div className="container">
          <motion.div style={{ marginBottom: '1rem' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-indigo">Recursos Técnicos</span>
          </motion.div>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#0a1a33' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            Centro de <span className="text-gradient">Recursos Técnicos</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.05rem', color: '#55657b', maxWidth: '560px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Disponibilidad en tiempo real, calculadora de retorno para consultas médicas y material educativo del ecosistema de salud digital.
          </motion.p>
        </div>
      </section>

      {/* RT-23.09 — Métricas de disponibilidad y desempeño */}
      <section className="stats-band" aria-labelledby="metrics-heading">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span aria-hidden="true" style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: site.status === 'down' ? '#f4a524' : '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.3)', animation: 'pulse-dot 2s infinite' }}></span>
              <h2 id="metrics-heading" style={{ color: '#f3f6fa', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Disponibilidad y Desempeño</h2>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#d5e1ef' }}>
              <Clock size={12} aria-hidden="true" style={{ display: 'inline', marginRight: '0.25rem' }} />
              {site.checkedAt ? `Última verificación: ${site.checkedAt.toLocaleTimeString('es-CL')} · cada 30 s` : 'Verificando…'}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div role="status" aria-live="polite" aria-atomic="true" style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.35rem' }}>
                {site.status === 'down'
                  ? <AlertCircle size={14} aria-hidden="true" style={{ color: '#f4a524' }} />
                  : <CheckCircle2 size={14} aria-hidden="true" style={{ color: '#22c55e' }} />}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f3f6fa', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>
                {site.status === 'checking' ? '…' : site.status === 'up' ? `${site.latency} ms` : 'Sin respuesta'}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#f3f6fa', marginTop: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>Sitio corporativo</div>
              <div style={{ fontSize: '0.7rem', color: '#d5e1ef', marginTop: '0.15rem' }}>
                En vivo{sessionUptime ? ` · ${sessionUptime} % de respuestas OK en esta visita` : ''}
              </div>
            </div>
            {platformMetrics.map(m => (
              <div key={m.label} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={14} aria-hidden="true" style={{ color: '#22c55e' }} />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f3f6fa', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontSize: '0.72rem', color: '#f3f6fa', marginTop: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>{m.label}</div>
                <div style={{ fontSize: '0.7rem', color: '#d5e1ef', marginTop: '0.15rem' }}>{m.sub}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.75rem', color: '#d5e1ef', marginTop: '1rem', textAlign: 'center' }}>
            El estado del sitio se mide en vivo desde su navegador. Los indicadores de plataformas corresponden a los niveles de servicio medidos y comprometidos en cada contrato; el detalle mensual se entrega al cliente en el Comité de Seguridad.
          </p>
        </div>
      </section>

      {/* RT-23.10 — Estimador de consultas recuperadas por reducción del ausentismo */}
      <section className="section bg-section-alt" aria-labelledby="roi-heading">
        <div className="container">
          <div className="card-premium" style={{ maxWidth: '920px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div aria-hidden="true" style={{ padding: '0.75rem', backgroundColor: '#e8f1fb', color: '#1f6feb', borderRadius: '0.75rem', display: 'inline-flex', marginBottom: '1rem' }}>
                <Calculator size={32} />
              </div>
              <h2 id="roi-heading" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Calculadora de Retorno: Ausentismo en Consultas Médicas</h2>
              <p style={{ color: '#55657b', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>
                Estime cuántas consultas agendadas recupera su red al automatizar la confirmación y el recordatorio de horas, y el ingreso asociado. Ingrese los datos de su institución.
              </p>
            </div>

            <div className="grid grid-cols-1 rec-grid-2 gap-8" style={{ alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { id: 'agendadas', label: 'Horas agendadas al mes', value: agendadas, set: setAgendadas, min: 1000, max: 200000, step: 1000, suffix: '' },
                  { id: 'ausentismo', label: 'Ausentismo actual (%)', value: ausentismo, set: setAusentismo, min: 1, max: 50, step: 0.1, suffix: ' %' },
                  { id: 'reduccion', label: 'Reducción esperada del ausentismo (%)', value: reduccion, set: setReduccion, min: 0, max: 80, step: 1, suffix: ' %' },
                  { id: 'valor', label: 'Valor promedio de la consulta (CLP)', value: valorConsulta, set: setValorConsulta, min: 5000, max: 150000, step: 1000, suffix: '' },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={`roi-${f.id}`} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#0a1a33', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input
                      id={`roi-${f.id}`}
                      type="number"
                      inputMode="decimal"
                      min={f.min} max={f.max} step={f.step}
                      value={f.value}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        if (!Number.isNaN(v)) f.set(Math.min(f.max, Math.max(0, v)));
                      }}
                      style={{ width: '100%', minHeight: '44px', padding: '0.6rem 0.8rem', border: '1px solid #94a3b8', borderRadius: '0.5rem', fontSize: '1rem', color: '#0a1a33', background: '#ffffff' }}
                    />
                  </div>
                ))}
                <p style={{ fontSize: '0.78rem', color: '#55657b', lineHeight: 1.5, margin: 0 }}>
                  Los valores iniciales son de ejemplo. La reducción de 45 % es la obtenida en Clínica Ambulatoria Ribera Norte; el valor de la consulta es referencial: ajústelo a su arancel.
                </p>
              </div>

              <div aria-live="polite" style={{ padding: '1.75rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #e8f1fb, #d5e1ef)', border: '1px solid #b9d3f2', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <p style={{ fontSize: '0.78rem', color: '#0f3d7a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Consultas recuperadas al mes</p>
                  <p style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0a1a33', fontFamily: 'Poppins, sans-serif', lineHeight: 1.1, margin: 0 }}>{Math.round(recuperadas).toLocaleString('es-CL')}</p>
                  <p style={{ fontSize: '0.8rem', color: '#55657b', margin: 0 }}>de {Math.round(perdidasActual).toLocaleString('es-CL')} horas perdidas hoy por inasistencia</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.78rem', color: '#0f3d7a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Ausentismo resultante</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a1a33', margin: 0 }}>{ausentismoNuevo.toFixed(1).replace('.', ',')} %</p>
                </div>
                <div style={{ borderTop: '1px solid #b9d3f2', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.78rem', color: '#0f3d7a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Ingreso recuperado estimado</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a1a33', margin: 0 }}>{formatCLP(ingresoMensual)} <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#55657b' }}>CLP / mes</span></p>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a1a33', margin: 0 }}>{formatCLP(ingresoMensual * 12)} <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#55657b' }}>CLP / año</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RT-23.07 — Material Educativo con links reales */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', textAlign: 'center' }}>
            <BookOpen size={20} style={{ color: '#1f6feb' }} />
            Material Educativo y Seminarios
          </h2>
          <p style={{ textAlign: 'center', color: '#55657b', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
            Recursos públicos de organismos reconocidos del ecosistema de salud digital.
          </p>
          <div className="grid grid-cols-1 rec-grid-3 gap-6">
            {[
              {
                type: 'Curso en Línea',
                typeClass: 'badge-indigo',
                icon: <Video size={36} />,
                title: 'Introducción a la Interoperabilidad y al estándar FHIR',
                org: 'OPS / OMS — Campus Virtual de Salud Pública',
                desc: 'Curso gratuito oficial de la Organización Panamericana de la Salud. Cubre los fundamentos del estándar HL7 FHIR R4 y su integración en redes asistenciales.',
                href: 'https://campus.paho.org/',
                action: 'Acceder al Curso',
                color: '#1f6feb', textColor: '#0f3d7a',
              },
              {
                type: 'Guía Técnica',
                typeClass: 'badge-green',
                icon: <BookOpen size={36} />,
                title: 'Guías de Implementación FHIR y Connectathon Chile',
                org: 'HL7 Chile',
                desc: 'Guías técnicas de lectura y aplicación práctica del estándar HL7 FHIR, publicadas por la representación chilena oficial de HL7 International.',
                href: 'https://hl7chile.cl/',
                action: 'Ver Recursos',
                color: '#12a37f', textColor: '#0b7a5e',
              },
              {
                type: 'Programa Académico',
                typeClass: 'badge-amber',
                icon: <Activity size={36} />,
                title: 'Sistemas de Información en Salud e Interoperabilidad',
                org: 'CENS — Centro Nacional en Sistemas de Información en Salud',
                desc: 'Programa de formación especializada en sistemas de información clínica, estándares HL7 FHIR y gobierno de datos en el sector sanitario chileno.',
                href: 'https://cens.cl/',
                action: 'Ver Programas',
                color: '#f4a524', textColor: '#9a5b00',
              },
            ].map((r, i) => (
              <motion.div
                key={r.title}
                className="card-premium"
                style={{ display: 'flex', flexDirection: 'column' }}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              >
                <div style={{
                  height: '120px', borderRadius: '0.75rem', marginBottom: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `linear-gradient(135deg, ${r.color}15, ${r.color}30)`,
                  color: r.color,
                }}>
                  {r.icon}
                </div>
                <span className={`badge ${r.typeClass}`} style={{ marginBottom: '0.5rem' }}>{r.type}</span>
                <h4 style={{ fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.92rem' }}>{r.title}</h4>
                <p style={{ fontSize: '0.72rem', color: '#0f3d7a', fontWeight: 600, marginBottom: '0.5rem' }}>{r.org}</p>
                <p style={{ fontSize: '0.84rem', color: '#55657b', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.25rem' }}>{r.desc}</p>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${r.action}: ${r.title} — ${r.org} (abre en nueva ventana)`}
                  style={{ fontSize: '0.85rem', fontWeight: 600, color: r.textColor, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  {r.action} <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .rec-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .rec-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </div>
  );
};

export default Recursos;
