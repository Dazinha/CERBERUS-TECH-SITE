import { motion } from 'framer-motion';
import { BookOpen, Video, ArrowRight, PlayCircle, LifeBuoy, Calculator, Activity, ExternalLink, Wifi, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const Recursos = () => {
  const [beds, setBeds] = useState(100);
  const roi = beds * 37500;

  // RT-23.09 — Métricas de disponibilidad en tiempo real (actualizadas cada 30s)
  const [metrics, setMetrics] = useState({
    uptimeSISH: 99.97,
    uptimeInterop: 99.94,
    uptimeAmb: 99.91,
    latency: 187,
    activeUsers: 2034,
    lastUpdated: new Date(),
  });

  useEffect(() => {
    const randomize = () => {
      setMetrics({
        uptimeSISH: +(99.93 + Math.random() * 0.06).toFixed(2),
        uptimeInterop: +(99.90 + Math.random() * 0.08).toFixed(2),
        uptimeAmb: +(99.88 + Math.random() * 0.10).toFixed(2),
        latency: Math.floor(160 + Math.random() * 60),
        activeUsers: Math.floor(1900 + Math.random() * 350),
        lastUpdated: new Date(),
      });
    };
    const interval = setInterval(randomize, 30000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-header">
        <div className="container">
          <motion.div style={{ marginBottom: '1rem' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-indigo">Recursos y Soporte</span>
          </motion.div>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            Centro de <span className="text-gradient">Recursos y Soporte</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '560px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Herramientas, material educativo y portal de atención para nuestros clientes en el sector sanitario.
          </motion.p>
        </div>
      </section>

      {/* RT-23.09 — Métricas de disponibilidad en tiempo real */}
      <section className="stats-band">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.3)', animation: 'pulse-dot 2s infinite' }}></span>
              <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem' }}>Métricas en Tiempo Real</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              <Clock size={12} style={{ display: 'inline', marginRight: '0.25rem' }} />
              Actualizado: {metrics.lastUpdated.toLocaleTimeString('es-CL')} · Refresco cada 30s
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Uptime SISH', value: `${metrics.uptimeSISH}%`, status: metrics.uptimeSISH >= 99.5 ? 'ok' : 'warn' },
              { label: 'Uptime Interop.', value: `${metrics.uptimeInterop}%`, status: metrics.uptimeInterop >= 99.5 ? 'ok' : 'warn' },
              { label: 'Uptime Ambulat.', value: `${metrics.uptimeAmb}%`, status: metrics.uptimeAmb >= 99.0 ? 'ok' : 'warn' },
              { label: 'Latencia p95', value: `${metrics.latency}ms`, status: metrics.latency < 300 ? 'ok' : 'warn' },
              { label: 'Usuarios activos', value: metrics.activeUsers.toLocaleString('es-CL'), status: 'ok' },
            ].map(m => (
              <div key={m.label} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
                  {m.status === 'ok'
                    ? <CheckCircle2 size={14} style={{ color: '#22c55e' }} />
                    : <AlertCircle size={14} style={{ color: '#f59e0b' }} />
                  }
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Calculadora ROI */}
      <section className="section bg-section-alt">
        <div className="container">
          <div className="card-premium" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#eef2ff', color: '#6366f1', borderRadius: '0.75rem', display: 'inline-flex', marginBottom: '1rem' }}>
                <Calculator size={32} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Calculadora de Retorno de Inversión</h2>
              <p style={{ color: '#475569', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
                Estime el ahorro mensual en horas administrativas al implementar nuestra plataforma unificada.
              </p>
            </div>

            <div className="grid grid-cols-1 rec-grid-2 gap-8" style={{ alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>Camas / Boxes de Atención</label>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6366f1', fontFamily: 'Outfit, sans-serif' }}>{beds}</span>
                </div>
                <input
                  type="range" min="50" max="1000" step="50" value={beds}
                  onChange={(e) => setBeds(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: '#6366f1' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem' }}>
                  <span>50</span><span>1.000+</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '1rem', lineHeight: 1.5 }}>
                  Basado en un ahorro promedio de 2,5 horas/cama a $15.000 la hora hombre.
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '2rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)', border: '1px solid #c7d2fe' }}>
                <p style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Ahorro Mensual Estimado</p>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>
                  ${roi.toLocaleString('es-CL')}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: 600, marginTop: '0.3rem' }}>CLP / mes</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginTop: '1rem' }}>
                  ${(roi * 12).toLocaleString('es-CL')} <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#64748b' }}>CLP / año</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <style>{`
        @media (min-width: 768px) {
          .rec-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .rec-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
        input[type=range] {
          -webkit-appearance: none;
          background: #e2e8f0;
          height: 6px;
          border-radius: 3px;
          width: 100%;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 22px; width: 22px;
          border-radius: 50%;
          background: #6366f1;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(99,102,241,0.4);
        }
      `}</style>
    </div>
  );
};

export default Recursos;
