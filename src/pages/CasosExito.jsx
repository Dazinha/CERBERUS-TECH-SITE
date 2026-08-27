import { motion } from 'framer-motion';
import { Briefcase, BarChart3, Users, MessageSquare } from 'lucide-react';

const CasosExito = () => {
  return (
    <div className="w-full">
      <section className="section text-center pb-8">
        <div className="container">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Experiencia y <span className="text-gradient">Casos de Éxito</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Impacto medible y resultados comprobados en los últimos 5 años a través de múltiples industrias críticas.
          </motion.p>
        </div>
      </section>

      {/* Métricas Globales */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card text-center">
              <h4 className="text-3xl font-bold text-accent" style={{ color: 'var(--accent-primary)' }}>+50</h4>
              <p className="text-sm text-muted">Proyectos Corporativos</p>
            </div>
            <div className="card text-center">
              <h4 className="text-3xl font-bold text-accent" style={{ color: 'var(--accent-primary)' }}>12M+</h4>
              <p className="text-sm text-muted">Usuarios Gestionados</p>
            </div>
            <div className="card text-center">
              <h4 className="text-3xl font-bold text-accent" style={{ color: 'var(--accent-primary)' }}>$500M+</h4>
              <p className="text-sm text-muted">Volumen Transaccional Seguro</p>
            </div>
            <div className="card text-center">
              <h4 className="text-3xl font-bold text-accent" style={{ color: 'var(--accent-primary)' }}>99.99%</h4>
              <p className="text-sm text-muted">Uptime Promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrias Atendidas */}
      <section className="section bg-secondary" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Industrias que Transformamos</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Finanzas y Banca', 'Salud y Farmacéutica', 'Retail y Comercio Electrónico', 'Sector Público', 'Logística y Transporte'].map((industry) => (
              <span key={industry} className="btn-secondary" style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)' }}>
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portafolio Destacado */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase style={{ color: 'var(--accent-primary)' }} />
            Portafolio Destacado (2019-2024)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="card" whileHover={{ y: -5 }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Modernización Core Bancario</h3>
                <span className="text-xs text-muted">2023 - Banca</span>
              </div>
              <p className="text-secondary mb-6">
                Migración de sistemas legacy a una arquitectura de microservicios cloud-native, garantizando cero pérdida de datos.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t pt-4" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted mb-1"><BarChart3 size={14}/> Reducción Latencia</div>
                  <strong className="text-xl">65%</strong>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted mb-1"><Users size={14}/> Usuarios Diarios</div>
                  <strong className="text-xl">2.5 Millones</strong>
                </div>
              </div>
            </motion.div>

            <motion.div className="card" whileHover={{ y: -5 }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Portal Unificado de Salud</h3>
                <span className="text-xs text-muted">2022 - Salud</span>
              </div>
              <p className="text-secondary mb-6">
                Desarrollo de plataforma segura para gestión de historiales médicos cumpliendo normativas internacionales de privacidad.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t pt-4" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted mb-1"><BarChart3 size={14}/> Disponibilidad</div>
                  <strong className="text-xl">99.999%</strong>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted mb-1"><Users size={14}/> Pacientes Registrados</div>
                  <strong className="text-xl">4.1 Millones</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <MessageSquare style={{ color: 'var(--accent-primary)' }} />
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card glass relative">
              <span style={{ fontSize: '4rem', position: 'absolute', top: '-10px', left: '10px', opacity: 0.2, color: 'var(--accent-primary)' }}>"</span>
              <p className="text-secondary italic mb-6 z-10 relative mt-4">
                "Cerberus Tech transformó nuestra infraestructura con un nivel de profesionalismo técnico que no habíamos visto antes. Su enfoque en la seguridad desde el diseño nos dio la tranquilidad necesaria para escalar nuestras operaciones."
              </p>
              <div className="flex items-center gap-4">
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
                <div>
                  <h4 className="font-bold">María Fernández</h4>
                  <p className="text-xs text-muted">CTO, Banco Atlántico (Publicado con autorización)</p>
                </div>
              </div>
            </div>

            <div className="card glass relative">
              <span style={{ fontSize: '4rem', position: 'absolute', top: '-10px', left: '10px', opacity: 0.2, color: 'var(--accent-primary)' }}>"</span>
              <p className="text-secondary italic mb-6 z-10 relative mt-4">
                "La plataforma que desarrollaron soportó nuestros picos de transacciones durante eventos críticos sin ninguna interrupción. Las métricas de desempeño superaron con creces los SLAs acordados."
              </p>
              <div className="flex items-center gap-4">
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-secondary)' }}></div>
                <div>
                  <h4 className="font-bold">Carlos Ruiz</h4>
                  <p className="text-xs text-muted">Director de IT, RedSalud (Publicado con autorización)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasosExito;
