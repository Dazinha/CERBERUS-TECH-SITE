import { motion } from 'framer-motion';
import { BookOpen, Video, ArrowRight, PlayCircle, LifeBuoy, Calculator, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

const Recursos = () => {
  const [beds, setBeds] = useState(100);
  const [roi, setRoi] = useState(3750000);

  const calculateRoi = (value) => {
    setBeds(value);
    // Simple mock calculation: Each bed saves 2.5 hours of admin time per month.
    // 2.5 hours * $15,000 CLP/hour = $37,500 CLP per bed.
    setRoi(value * 37500);
  };

  return (
    <div className="w-full">
      <section className="section text-center" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Centro de <span className="text-gradient">Recursos y Soporte</span>
          </motion.h1>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Herramientas, material educativo y portal de atención para nuestros clientes en el sector sanitario.
          </motion.p>
        </div>
      </section>

      {/* Portal & Demo */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card glass relative overflow-hidden flex flex-col justify-between" style={{ minHeight: '300px' }}>
            <div className="z-10 relative">
              <LifeBuoy className="mb-4" size={40} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-2xl font-bold mb-4">Portal de Soporte a Clientes</h3>
              <p className="text-secondary mb-6">Acceda al portal ITIL para registrar incidentes, solicitar cambios y hacer seguimiento a sus tickets con nuestro equipo de operaciones.</p>
              <button className="btn btn-primary gap-2">Ingresar al Portal <ArrowRight size={16} /></button>
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.05, transform: 'scale(1.5)' }}>
              <LifeBuoy size={200} />
            </div>
          </div>

          <div className="card glass relative overflow-hidden flex flex-col justify-between" style={{ minHeight: '300px' }}>
            <div className="z-10 relative">
              <PlayCircle className="mb-4" size={40} style={{ color: 'var(--accent-primary)' }} />
              <h3 className="text-2xl font-bold mb-4">Demostración en Línea</h3>
              <p className="text-secondary mb-6">Agende un recorrido virtual por nuestras plataformas clínicas, módulo de interoperabilidad y arquitectura de ciberseguridad.</p>
              <button className="btn btn-secondary gap-2">Solicitar Demo <Video size={16} /></button>
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.05, transform: 'scale(1.5)' }}>
              <PlayCircle size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora ROI */}
      <section className="section bg-secondary" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="card glass max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calculator size={40} className="mx-auto mb-4" style={{ color: 'var(--accent-primary)' }} />
              <h2 className="text-3xl font-bold mb-2">Calculadora de Retorno de Inversión (ROI)</h2>
              <p className="text-secondary">Estime el ahorro mensual en horas administrativas al implementar nuestra plataforma unificada, basado en la capacidad instalada de su centro.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <label className="block text-sm font-semibold mb-4 text-white">Número de Camas / Boxes de Atención: <span className="text-accent text-lg ml-2" style={{ color: 'var(--accent-primary)' }}>{beds}</span></label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="50"
                  value={beds}
                  onChange={(e) => calculateRoi(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: 'var(--accent-primary)' }}
                />
                <div className="flex justify-between text-xs text-muted mt-2">
                  <span>50</span>
                  <span>1000+</span>
                </div>
              </div>

              <div className="text-center p-8 rounded-lg" style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid var(--accent-primary)' }}>
                <p className="text-sm text-secondary font-semibold mb-2">Ahorro Mensual Estimado</p>
                <h3 className="text-4xl font-bold text-white mb-2">${roi.toLocaleString('es-CL')} <span className="text-lg text-muted font-normal">CLP</span></h3>
                <p className="text-xs text-muted">Basado en un ahorro promedio de 2.5 horas/cama a $15.000 la hora hombre.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Educativo */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-2 text-center">
            <BookOpen style={{ color: 'var(--accent-primary)' }} />
            Material Educativo y Seminarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card glass">
              <div className="mb-4 h-40 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <Video size={48} className="text-muted" />
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded bg-accent bg-opacity-20 text-accent mb-3 inline-block" style={{ color: 'var(--accent-primary)', backgroundColor: 'rgba(168, 85, 247, 0.2)' }}>Webinar</span>
              <h4 className="font-bold mb-2">Interoperabilidad con HL7 FHIR R4</h4>
              <p className="text-sm text-secondary mb-4">Aprenda cómo conectar sistemas legados hospitalarios con el estándar de la industria.</p>
              <a href="#" className="text-sm font-semibold flex items-center gap-1 hover:text-accent" style={{ color: 'var(--text-primary)' }}>Ver Grabación <ArrowRight size={14} /></a>
            </div>

            <div className="card glass">
              <div className="mb-4 h-40 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <BookOpen size={48} className="text-muted" />
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded bg-accent bg-opacity-20 text-accent mb-3 inline-block" style={{ color: 'var(--accent-primary)', backgroundColor: 'rgba(168, 85, 247, 0.2)' }}>Artículo</span>
              <h4 className="font-bold mb-2">Zero Trust en Entornos Clínicos</h4>
              <p className="text-sm text-secondary mb-4">Estrategias prácticas para proteger la identidad del paciente en redes multisede.</p>
              <a href="#" className="text-sm font-semibold flex items-center gap-1 hover:text-accent" style={{ color: 'var(--text-primary)' }}>Leer Artículo <ArrowRight size={14} /></a>
            </div>

            <div className="card glass">
              <div className="mb-4 h-40 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <Activity size={48} className="text-muted" />
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded bg-accent bg-opacity-20 text-accent mb-3 inline-block" style={{ color: 'var(--accent-primary)', backgroundColor: 'rgba(168, 85, 247, 0.2)' }}>Caso de Estudio</span>
              <h4 className="font-bold mb-2">Mitigación de Caídas (DRP)</h4>
              <p className="text-sm text-secondary mb-4">Cómo reducimos el RTO a menos de 1 minuto en la Red Hospitalaria San Juan.</p>
              <a href="#" className="text-sm font-semibold flex items-center gap-1 hover:text-accent" style={{ color: 'var(--text-primary)' }}>Descargar PDF <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        input[type=range] {
          -webkit-appearance: none;
          background: rgba(255,255,255,0.1);
          height: 8px;
          border-radius: 4px;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: var(--accent-primary);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Recursos;
