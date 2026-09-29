import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Zap, HeartPulse, RefreshCw, Network, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero — estilo portada de la plantilla: negro ciruela, patrón hexagonal, franja lila e ilustración Cerberus */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div>
            <motion.p
              className="home-hero-kicker"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            >
              <Zap size={14} aria-hidden="true" /> Plataformas de misión crítica para salud
            </motion.p>

            <motion.h1
              className="home-hero-title"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              Construimos y operamos:{' '}
              <span className="home-hero-accent">no entregamos y nos vamos.</span>
            </motion.h1>

            <motion.p
              className="home-hero-lead"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ocho años diseñando, construyendo y operando plataformas donde la tecnología no puede fallar. Especialistas en salud, desde la ficha clínica hasta el SOC 24/7.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link to="/capacidades" className="btn btn-primary gap-2" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
                Nuestras Soluciones <ArrowRight size={18} />
              </Link>
              <Link to="/casos-exito" className="btn home-hero-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
                Casos de Éxito
              </Link>
            </motion.div>
          </div>

          <motion.img
            src="/brand/cerberus-hero.jpg"
            alt=""
            className="home-hero-art"
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Cifras clave */}
        <div className="container">
          <dl className="home-hero-stats">
            {[
              ['8+', 'Años de operación continua'],
              ['3', 'Proyectos acreditados (5 años)'],
              ['98', 'Profesionales en dotación'],
              ['24/7/365', 'NOC y SOC propios'],
            ].map(([num, label]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{num}</dd>
              </div>
            ))}
          </dl>
        </div>

        <style>{`
          .home-hero {
            position: relative;
            overflow: hidden;
            background: var(--hex-pattern), radial-gradient(ellipse at 75% 40%, #3d1a44 0%, transparent 60%), linear-gradient(160deg, #2c1330 0%, #0b0a0c 100%);
            border-left: 10px solid var(--brand-lilac);
            border-bottom: 4px solid var(--brand-lilac);
            color: #ffffff;
            padding: 4.5rem 0 2.5rem;
          }
          .home-hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: center;
          }
          @media (min-width: 1024px) {
            .home-hero-grid { grid-template-columns: 1.1fr 1fr; }
          }
          .home-hero-kicker {
            display: inline-flex; align-items: center; gap: 0.5rem;
            font-size: 0.78rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
            color: var(--brand-lilac);
            border-left: 3px solid var(--brand-lilac);
            padding-left: 0.75rem;
            margin-bottom: 1.5rem;
          }
          .home-hero-title {
            font-size: clamp(2.25rem, 5vw, 3.75rem);
            font-weight: 800;
            line-height: 1.1;
            color: #ffffff;
            margin-bottom: 1.5rem;
          }
          .home-hero-accent { display: block; color: var(--brand-lilac); font-size: 0.72em; margin-top: 0.4rem; }
          .home-hero-lead { font-size: 1.1rem; color: var(--tint); max-width: 560px; line-height: 1.7; margin-bottom: 2.25rem; }
          .home-hero-secondary { color: #ffffff; border: 1px solid rgba(243, 236, 244,0.6); background: transparent; }
          .home-hero-secondary:hover { color: #0b0a0c; background: #ffffff; }
          .home-hero-art {
            width: 100%; max-width: 560px; justify-self: center;
            border-radius: 12px;
            -webkit-mask-image: radial-gradient(ellipse at center, #000 58%, transparent 78%);
            mask-image: radial-gradient(ellipse at center, #000 58%, transparent 78%);
          }
          .home-hero-stats {
            display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;
            margin: 3rem 0 0; padding-top: 1.75rem;
            border-top: 1px solid rgba(197, 143, 214,0.3);
          }
          @media (min-width: 768px) { .home-hero-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
          .home-hero-stats div { display: flex; flex-direction: column-reverse; justify-content: flex-end; }
          .home-hero-stats dd { margin: 0; font-size: 1.9rem; font-weight: 800; color: #ffffff; }
          .home-hero-stats dt { font-size: 0.75rem; color: var(--tint); text-transform: uppercase; letter-spacing: 0.06em; }
        `}</style>
      </section>

      {/* Diferenciadores — por qué elegir Cerberus (no los valores filosóficos, que están en Nosotros) */}
      <section className="section bg-section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>¿Por qué Cerberus Tech?</h2>
            <p style={{ color: '#5e5660', maxWidth: '560px', margin: '0 auto' }}>
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
                color: '#6b2f73',
                pillText: '#2c1330',
              },
              {
                icon: <RefreshCw size={30} />,
                title: 'Operamos lo que construimos.',
                desc: 'No entregamos el software y nos retiramos. Asumimos la operación gestionada bajo SLA contractuales verificables, con NOC y SOC propios 24/7/365.',
                tag: 'Responsabilidad Total',
                color: '#2c1330',
                pillText: '#2c1330',
              },
              {
                icon: <Network size={30} />,
                title: 'Arquitectura híbrida nativa.',
                desc: 'Nuestras plataformas operan de forma autónoma aunque caiga la conectividad. Los nodos de borde garantizan atención continua en zonas rurales o durante cortes.',
                tag: 'Resiliencia Territorial',
                color: '#12a37f',
                pillText: '#0b7a5e',
              },
              {
                icon: <FileText size={30} />,
                title: 'El dato es del cliente, siempre.',
                desc: 'Código fuente, infraestructura como código y documentación de arquitectura son transferibles al cliente en cualquier momento, sin dependencias de proveedor.',
                tag: 'Sin Lock-in',
                color: '#f4a524',
                pillText: '#9a5b00',
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
                <div className="order-number" aria-hidden="true" data-num={String(i + 1).padStart(2, '0')}></div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, paddingTop: '0.1rem', color: item.color }}>{item.icon}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{item.title}</h3>
                      <span className="pill" style={{ fontSize: '0.7rem', padding: '0.15rem 0.6rem', color: item.pillText, backgroundColor: `${item.color}15`, borderColor: `${item.color}40` }}>{item.tag}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#5e5660', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA hacia Casos de Éxito */}
      <section style={{ background: 'var(--hex-pattern), linear-gradient(90deg, #0b0a0c 0%, #2c1330 100%)', borderTop: '4px solid #c58fd6', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{ fontSize: '0.8rem', color: '#c58fd6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              <Award size={12} style={{ display: 'inline', marginRight: '0.35rem' }} />
              Resultados verificables con referencias de contacto directo
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#f7f4f7', marginBottom: '1rem' }}>
              Tres proyectos acreditados en los últimos 5 años
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '580px', margin: '0 auto 2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              480.000 pacientes activos (Valle Quilén) · 1,8M registros unificados (Cordillera Austral) · 99,95% uptime medido mes a mes.
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
