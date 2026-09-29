import { useState } from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

const Soporte = () => {
  const [form, setForm] = useState({
    nombre: '', organizacion: '', correo: '', tipo: '', descripcion: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: 'Teléfono Central',
      value: '+56 32 255 1000',
      href: 'tel:+56322551000',
      color: '#6b2f73',
      bg: '#f3ecf4',
    },
    {
      icon: <Mail size={20} />,
      label: 'Soporte Técnico',
      value: 'soporte@cerberustech.cl',
      href: 'mailto:soporte@cerberustech.cl',
      color: '#2c1330',
      bg: '#f3ecf4',
    },
    {
      icon: <Mail size={20} />,
      label: 'Contacto Licitaciones',
      value: 'licitaciones@cerberustech.cl',
      href: 'mailto:licitaciones@cerberustech.cl',
      color: '#c58fd6',
      bg: '#f3ecf4',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Casa Matriz',
      value: 'Av. Brasil 2241, piso 2, Valparaíso',
      href: 'https://maps.app.goo.gl/FNAh1PKzBtTg37PQA',
      color: '#12a37f',
      bg: '#e3f5ee',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Sucursal Sur',
      value: 'Temuco, Región de La Araucanía',
      href: null,
      color: '#c58fd6',
      bg: '#f2eaf3',
    },
    {
      icon: <Clock size={20} />,
      label: 'Centro Operaciones NOC / SOC',
      value: '24/7/365 · Valparaíso (Redundante)',
      href: null,
      color: '#f4a524',
      bg: '#fff3d9',
    },
  ];

  const inputStyle = {
    width: '100%',
    padding: '0.65rem 0.875rem',
    border: '1px solid #e2d6e4',
    borderRadius: '0.5rem',
    fontSize: '0.9rem',
    color: '#0b0a0c',
    background: '#f7f4f7',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-header">
        <div className="container">
          <motion.div style={{ marginBottom: '1rem' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-indigo">Atención al Cliente</span>
          </motion.div>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#0b0a0c' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            Portal de <span className="text-gradient">Soporte Técnico</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.05rem', color: '#5e5660', maxWidth: '560px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Registre un incidente, solicite un cambio o contáctenos directamente. Nuestro equipo NOC/SOC opera de forma continua.
          </motion.p>
        </div>
      </section>

      {/* Datos de Contacto */}
      <section className="section bg-section-alt">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <LifeBuoy size={20} style={{ color: '#6b2f73' }} />
            Canales de Contacto
          </h2>
          <div className="grid grid-cols-1 soporte-grid-cards gap-4" style={{ maxWidth: '1050px' }}>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="card-premium"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              >
                <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: item.bg, color: item.color, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', fontWeight: 600, color: '#5e5660', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0b0a0c', textDecoration: 'none' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0b0a0c' }}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Soporte */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Formulario de Solicitud</h2>
          <p style={{ color: '#5e5660', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Complete el formulario y nuestro equipo de operaciones se comunicará en el menor tiempo posible.
          </p>

          {submitted ? (
            <motion.div
              className="card-premium"
              style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '3px solid #12a37f' }}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              role="alert"
              aria-live="assertive"
            >
              <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: '#e3f5ee', color: '#12a37f', marginBottom: '1.25rem' }}>
                <CheckCircle size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0b0a0c' }}>
                ¡Solicitud enviada con éxito!
              </h3>
              <p style={{ color: '#5e5660', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
                Hemos recibido su solicitud. Un agente de soporte se comunicará con usted dentro del SLA acordado. El número de ticket será enviado a su correo.
              </p>
              <button
                className="btn btn-secondary"
                style={{ marginTop: '2rem' }}
                onClick={() => { setSubmitted(false); setForm({ nombre: '', organizacion: '', correo: '', tipo: '', descripcion: '' }); }}
              >
                Nueva Solicitud
              </button>
            </motion.div>
          ) : (
            <motion.form
              className="card-premium"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 soporte-grid-2 gap-4">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="nombre" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a1a1a' }}>Nombre completo *</label>
                  <input
                    id="nombre" name="nombre" type="text" required aria-required="true"
                    value={form.nombre} onChange={handleChange}
                    placeholder="Juan Pérez"
                    autoComplete="name"
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="organizacion" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a1a1a' }}>Organización *</label>
                  <input
                    id="organizacion" name="organizacion" type="text" required aria-required="true"
                    value={form.organizacion} onChange={handleChange}
                    placeholder="Nombre de su institución"
                    autoComplete="organization"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="correo" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a1a1a' }}>Correo electrónico *</label>
                <input
                  id="correo" name="correo" type="email" required aria-required="true"
                  value={form.correo} onChange={handleChange}
                  placeholder="juan.perez@organizacion.cl"
                  autoComplete="email"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="tipo" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a1a1a' }}>Tipo de solicitud *</label>
                <select
                  id="tipo" name="tipo" required aria-required="true"
                  value={form.tipo} onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="">Seleccione una opción...</option>
                  <option value="incidente">Incidente — El sistema no funciona correctamente</option>
                  <option value="consulta">Consulta — Pregunta técnica o funcional</option>
                  <option value="cambio">Solicitud de Cambio — Modificación o nueva funcionalidad</option>
                  <option value="demo">Solicitar Demostración — Recorrido virtual de la plataforma</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="descripcion" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a1a1a' }}>Descripción *</label>
                <textarea
                  id="descripcion" name="descripcion" required aria-required="true"
                  value={form.descripcion} onChange={handleChange}
                  rows={5}
                  placeholder="Describa el problema o solicitud con el mayor detalle posible..."
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', gap: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <Send size={16} /> Enviar Solicitud
              </button>
            </motion.form>
          )}
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .soporte-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .soporte-grid-cards { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #6b2f73 !important;
          box-shadow: 0 0 0 3px rgba(107, 47, 115,0.15);
        }
      `}</style>
    </div>
  );
};

export default Soporte;
