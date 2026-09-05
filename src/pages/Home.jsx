import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Zap, HeartPulse, RefreshCw, Network, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        style={{
          minHeight: '92vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'linear-gradient(160deg, #ffffff 0%, #f0f4ff 50%, #e8ecff 100%)',
          padding: '4rem 1rem',
        }}
      >
        {/* Fondo sutil con logo — decorativo */}
        <div aria-hidden="true" role="presentation" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '150%', height: '150%',
          backgroundImage: 'url(/logoblanco.jpg)',
          backgroundSize: 'max(600px, 62vw)', /* Tamaño del logo aumentado */
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center calc(50% + 30px)',
          zIndex: 0, opacity: 0.06,
          borderRadius: '8px',
        }}></div>

        {/* Glow acentuado — decorativo */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          zIndex: 0,
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Badge top */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <span className="pill pill-indigo" style={{ fontSize: '0.75rem', padding: '0.4rem 1rem' }}>
              <Zap size={12} /> Plataformas de Misión Crítica para Salud
            </span>
          </motion.div>

          <motion.h1
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#0f172a', maxWidth: '860px', margin: '0 auto 1.5rem', lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Construimos y operamos:{' '}
            <span className="text-gradient">no entregamos y nos vamos.</span>
          </motion.h1>

          <motion.p
            style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ocho años diseñando, construyendo y operando plataformas donde la tecnología no puede fallar. Especialistas en salud, desde la ficha clínica hasta el SOC 24/7.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link to="/capacidades" className="btn btn-primary gap-2" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
              Nuestras Soluciones <ArrowRight size={18} />
            </Link>
            <Link to="/casos-exito" className="btn btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
              Casos de Éxito
            </Link>
          </motion.div>

          {/* Mini-stats únicos: negocio/contratos, no los que ya están en Equipo o CasosExito */}
          <motion.div
            className="flex gap-8 justify-center flex-wrap"
            style={{ marginTop: '4rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              ['8+', 'Años de operación continua'],
              ['3', 'Proyectos acreditados (5 años)'],
              ['USD 21M+', 'Contratos ejecutados'],
              ['56 meses', 'Compromisos de largo plazo'],
            ].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#6366f1', fontFamily: 'Outfit, sans-serif' }}>{num}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciadores — por qué elegir Cerberus (no los valores filosóficos, que están en Nosotros) */}
      <section className="section bg-section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>¿Por qué Cerberus Tech?</h2>
            <p style={{ color: '#475569', maxWidth: '560px', margin: '0 auto' }}>
              Cuatro diferencias estructurales que separan una empresa de software genérica de un socio especializado en salud crítica.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {[
              {
                icon: <HeartPulse size={30} />,
                title: 'Solo salud. Sin excepciones.',
                desc: 'No somos una consultora genérica con una práctica de salud. Cada proyecto, cada certificación y cada metodología está orientada exclusivamente al sector sanitario.',
                tag: 'Especialización Vertical',
                color: '#6366f1',
                pillText: '#4338ca',
              },
              {
                icon: <RefreshCw size={30} />,
                title: 'Operamos lo que construimos.',
                desc: 'No entregamos el software y nos retiramos. Asumimos la operación gestionada bajo SLA contractuales verificables, con NOC y SOC propios 24/7/365.',
                tag: 'Responsabilidad Total',
                color: '#3b82f6',
                pillText: '#1d4ed8',
              },
              {
                icon: <Network size={30} />,
                title: 'Arquitectura híbrida nativa.',
                desc: 'Nuestras plataformas operan de forma autónoma aunque caiga la conectividad. Los nodos de borde garantizan atención continua en zonas rurales o durante cortes.',
                tag: 'Resiliencia Territorial',
                color: '#10b981',
                pillText: '#047857',
              },
              {
                icon: <FileText size={30} />,
                title: 'El dato es del cliente, siempre.',
                desc: 'Código fuente, infraestructura como código y documentación de arquitectura son transferibles al mandante en cualquier momento, sin dependencias de proveedor.',
                tag: 'Sin Lock-in',
                color: '#f59e0b',
                pillText: '#b45309',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="card-premium"
                style={{ position: 'relative', overflow: 'hidden' }}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="order-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, paddingTop: '0.1rem', color: item.color }}>{item.icon}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{item.title}</h3>
                      <span className="pill" style={{ fontSize: '0.7rem', padding: '0.15rem 0.6rem', color: item.pillText, backgroundColor: `${item.color}15`, borderColor: `${item.color}40` }}>{item.tag}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA hacia Casos de Éxito */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              <Award size={12} style={{ display: 'inline', marginRight: '0.35rem' }} />
              Resultados verificables con referencias de contacto directo
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>
              Tres proyectos acreditados en los últimos 5 años
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '520px', margin: '0 auto 2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              480.000 pacientes activos · 1,8M registros unificados · 99,95% uptime medido mes a mes.
            </p>
            <Link to="/casos-exito" className="btn btn-primary gap-2" style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}>
              Ver Casos de Éxito <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
