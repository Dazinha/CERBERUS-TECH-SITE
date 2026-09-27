import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Título único por página — WCAG 2.2 criterio 2.4.2 (RT-23.05)
const titles = {
  '/': 'Cerberus Tech — Plataformas de misión crítica para salud',
  '/nosotros': 'Nosotros — Cerberus Tech',
  '/casos-exito': 'Casos de Éxito — Cerberus Tech',
  '/equipo': 'Equipo Profesional — Cerberus Tech',
  '/capacidades': 'Capacidades Técnicas — Cerberus Tech',
  '/recursos': 'Recursos y Herramientas — Cerberus Tech',
  '/soporte': 'Portal de Soporte — Cerberus Tech',
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] || 'Cerberus Tech';
  }, [pathname]);

  return null;
};

export default ScrollToTop;
