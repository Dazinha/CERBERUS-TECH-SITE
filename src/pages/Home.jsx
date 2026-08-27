import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Server, Activity, Lock } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section flex flex-col items-center justify-center text-center" style={{ minHeight: '90vh', position: 'relative', overflow: 'hidden' }}>
        {/* Background Logo */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '100%', height: '100%',
          backgroundImage: 'url(/CERBERUSTECHLOGO.png)',
          backgroundSize: 'max(600px, 60vw)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center calc(50% + 40px)',
          zIndex: -1, opacity: 0.15
        }}></div>
        {/* Background Glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '800px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          zIndex: -2, opacity: 0.3
        }}></div>

        <div className="container flex flex-col items-center gap-8 z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Asegurando el futuro <br />
            <span className="text-gradient">digital de su empresa</span>
          </motion.h1>

          <motion.p
            className="text-xl text-secondary max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Compañía chilena especializada en el diseño, construcción y operación de plataformas digitales de misión crítica para el sector sanitario.<br />
            Cerberus Tech es su aliado estratégico en transformación digital e infraestructura cloud.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/capacidades" className="btn btn-primary gap-2">
              Nuestras Soluciones <ArrowRight size={18} />
            </Link>
            <Link to="/nosotros" className="btn btn-secondary">
              Conocer más
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Quick Look */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="card flex flex-col items-center text-center gap-4"
              whileHover={{ y: -10 }}
            >
              <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-lg font-bold">Seguridad por Diseño</h3>
              <p className="text-sm text-muted">Controles de seguridad incorporados desde la definición de la arquitectura de cada solución.</p>
            </motion.div>

            <motion.div
              className="card flex flex-col items-center text-center gap-4"
              whileHover={{ y: -10 }}
            >
              <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                <Server size={32} />
              </div>
              <h3 className="text-lg font-bold">Resiliencia Verificable</h3>
              <p className="text-sm text-muted">Todo compromiso de disponibilidad y recuperación se somete a prueba periódica.</p>
            </motion.div>

            <motion.div
              className="card flex flex-col items-center text-center gap-4"
              whileHover={{ y: -10 }}
            >
              <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                <Activity size={32} />
              </div>
              <h3 className="text-lg font-bold">Trazabilidad Íntegra</h3>
              <p className="text-sm text-muted">Cada acceso, cambio y decisión estructural queda registrado y es auditable por el cliente.</p>
            </motion.div>

            <motion.div
              className="card flex flex-col items-center text-center gap-4"
              whileHover={{ y: -10 }}
            >
              <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                <Lock size={32} />
              </div>
              <h3 className="text-lg font-bold">Ética en Datos Sensibles</h3>
              <p className="text-sm text-muted">Aplicamos minimización y gestión de consentimiento sobre la información clínica.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
