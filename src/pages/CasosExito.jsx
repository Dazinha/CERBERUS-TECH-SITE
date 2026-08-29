import { motion } from 'framer-motion';
import { Briefcase, BarChart3, Users, Building, Activity, ShieldAlert, Phone, ShieldCheck, FileCheck, MapPin, UserX, Quote, Star } from 'lucide-react';

const CasosExito = () => {
  return (
    <div className="w-full">
      <section className="section text-center" style={{ paddingBottom: '8rem' }}>
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
            Proyectos de software de misión crítica finalizados y en operación dentro de los últimos cinco años en el sector salud.
          </motion.p>
        </div>
      </section>

      {/* Métricas Globales Derivadas */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card text-center">
              <h4 className="text-3xl font-bold text-accent" style={{ color: 'var(--accent-primary)' }}>1.8M+</h4>
              <p className="text-sm text-muted">Registros Unificados</p>
            </div>
            <div className="card text-center">
              <h4 className="text-3xl font-bold text-accent" style={{ color: 'var(--accent-primary)' }}>99.95%</h4>
              <p className="text-sm text-muted">Uptime Verificado</p>
            </div>
            <div className="card text-center">
              <h4 className="text-3xl font-bold text-accent" style={{ color: 'var(--accent-primary)' }}>1.6M+</h4>
              <p className="text-sm text-muted">Atenciones Anuales</p>
            </div>
            <div className="card text-center">
              <h4 className="text-3xl font-bold text-accent" style={{ color: 'var(--accent-primary)' }}>&lt;1min</h4>
              <p className="text-sm text-muted">RTO y Notificaciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio Destacado */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Briefcase style={{ color: 'var(--accent-primary)' }} />
            Proyectos Principales
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Caso 1 */}
            <motion.div className="card flex flex-col" whileHover={{ y: -5 }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Sistema Integrado de Salud Híbrido</h3>
              </div>
              <p className="text-sm text-accent mb-2">Red Hospitalaria San Juan (2023 - 2025)</p>
              <p className="text-secondary mb-6 text-sm flex-grow">
                Registro clínico electrónico unificado para cuatro recintos con identidad de paciente, agendamiento y migración histórica. Arquitectura híbrida con nodos de borde para autonomía ante cortes.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t pt-4 text-left" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-1"><BarChart3 size={12} /> Uptime Medido</div>
                  <strong className="text-lg">99.95%</strong>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-1"><Users size={12} /> Pacientes Activos</div>
                  <strong className="text-lg">480.000</strong>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-dashed" style={{ borderColor: 'var(--border-color)' }}>
                <p className="text-xs text-muted mb-1">Referencia:</p>
                <p className="text-xs">Ricardo Salgado Peña (Director TI)</p>
              </div>
            </motion.div>

            {/* Caso 2 */}
            <motion.div className="card flex flex-col" whileHover={{ y: -5 }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Plataforma Nacional de Interoperabilidad</h3>
              </div>
              <p className="text-sm text-accent mb-2">Mutualidad de Trabajadores (2022 - 2024)</p>
              <p className="text-secondary mb-6 text-sm flex-grow">
                Índice maestro de pacientes de cobertura nacional. Unificación de 1,2 millones de registros fragmentados mediante técnicas probabilísticas y arbitraje manual de baja confianza (HL7 v2.x y FHIR R4).
              </p>
              <div className="grid grid-cols-2 gap-4 border-t pt-4 text-left" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-1"><Activity size={12} /> Latencia Consulta</div>
                  <strong className="text-lg">&lt;300ms</strong>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-1"><Building size={12} /> Instituciones</div>
                  <strong className="text-lg">12</strong>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-dashed" style={{ borderColor: 'var(--border-color)' }}>
                <p className="text-xs text-muted mb-1">Referencia:</p>
                <p className="text-xs">Carolina Vergara Ríos (Gerenta Transformación Digital)</p>
              </div>
            </motion.div>

            {/* Caso 3 */}
            <motion.div className="card flex flex-col" whileHover={{ y: -5 }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Plataforma de Coordinación Ambulatoria</h3>
              </div>
              <p className="text-sm text-accent mb-2">Clínica Los Andes (2021 - 2022)</p>
              <p className="text-secondary mb-6 text-sm flex-grow">
                Suite omnicanal de agendamiento, triaje, confirmación y asignación de prestaciones en terreno con aplicación móvil para profesionales. Reducción de ausentismo del 45%.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t pt-4 text-left" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-1"><Phone size={12} /> Notificación</div>
                  <strong className="text-lg">&lt;60s</strong>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-1"><ShieldAlert size={12} /> Ausentismo</div>
                  <strong className="text-lg">-45%</strong>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-dashed" style={{ borderColor: 'var(--border-color)' }}>
                <p className="text-xs text-muted mb-1">Referencia:</p>
                <p className="text-xs">Jorge Fuenzalida Ibáñez (Subdirector Operaciones)</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contexto Sectorial */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-card))' }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprensión Acreditada del <span className="text-gradient">Contexto Sectorial</span></h2>
            <p className="text-secondary max-w-2xl mx-auto">No somos solo desarrolladores de software; entendemos la criticidad del ecosistema de salud y sus normativas vigentes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="card glass relative overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-primary)' }}>
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Datos Sensibles</h4>
                  <p className="text-sm text-secondary leading-relaxed">Operamos bajo la Ley N° 21.719 de protección de datos, Ley N° 20.584 y Marco sobre Ciberseguridad con controles estrictos de retención.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card glass relative overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: '#3b82f6' }}></div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                  <UserX size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Identidad como Riesgo</h4>
                  <p className="text-sm text-secondary leading-relaxed">Prevenimos que un resultado clínico se atribuya erróneamente mediante flujos de arbitraje manual obligatorio.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card glass relative overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: '#10b981' }}></div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <FileCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Acreditación Institucional</h4>
                  <p className="text-sm text-secondary leading-relaxed">Acompañamos procesos de acreditación ante la Superintendencia de Salud, incorporando evidencia documental desde el diseño.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card glass relative overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: '#f59e0b' }}></div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Pertinencia Territorial</h4>
                  <p className="text-sm text-secondary leading-relaxed">Contemplamos conectividad rural e interculturalidad para garantizar que la tecnología opere de manera inclusiva e ininterrumpida.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Users style={{ color: 'var(--accent-primary)' }} />
              Testimonios y<span className="text-gradient">Referencias</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="card glass relative flex flex-col justify-between" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <div className="mb-4 relative z-10">
                <div className="flex gap-1 mb-4" style={{ color: '#f59e0b' }}>
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="text-secondary text-sm italic leading-relaxed">
                  "La plataforma integrada resolvió nuestro problema histórico de fichas duplicadas. Ahora nuestros médicos confían plenamente en el historial del paciente, incluso si el sistema central sufre cortes, gracias a la arquitectura híbrida."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t pt-3 mt-auto relative z-10" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <h4 className="font-bold text-sm">Ricardo Salgado Peña</h4>
                  <p className="text-xs text-muted">Director TI, Red Hospitalaria San Juan</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card glass relative flex flex-col justify-between" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <div className="mb-4 relative z-10">
                <div className="flex gap-1 mb-4" style={{ color: '#f59e0b' }}>
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="text-secondary text-sm italic leading-relaxed">
                  "Lograr interoperar a 12 instituciones distintas a nivel nacional parecía imposible. Cerberus logró un índice maestro confiable y rápido, respetando los estándares FHIR y garantizando la privacidad de los afiliados."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t pt-3 mt-auto relative z-10" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <h4 className="font-bold text-sm">Carolina Vergara Ríos</h4>
                  <p className="text-xs text-muted">Gerenta Trans. Digital, Mutualidad Trabajadores</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card glass relative flex flex-col justify-between" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <div className="mb-4 relative z-10">
                <div className="flex gap-1 mb-4" style={{ color: '#f59e0b' }}>
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="text-secondary text-sm italic leading-relaxed">
                  "La app de asignación de terreno redujo nuestro ausentismo dramáticamente. La estabilidad del sistema nos permitió enfocar los recursos donde más se necesitan sin preocuparnos por caídas técnicas."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t pt-3 mt-auto relative z-10" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <h4 className="font-bold text-sm">Jorge Fuenzalida Ibáñez</h4>
                  <p className="text-xs text-muted">Subdirector Operaciones, Clínica Los Andes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasosExito;
