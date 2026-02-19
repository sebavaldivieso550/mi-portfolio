import React from 'react';

import fotoCooler from '../assets/images/fotoCooler.jpeg'
import fotoLimpieza from '../assets/images/fotoLimpieza.jpeg'
import fotoPcNueva from '../assets/images/fotoPcNueva.jpeg'
import fotoUpgrade from '../assets/images/fotoUpgrade.jpeg'

const hardwareJobs = [
  {
    id: 1,
    title: "Reparación de Sistema de Enfriamiento (Laptop)",
    description: "Diagnóstico de falla crítica en ventilador (Error Fan 1). Proceso de sustitución de componente mecánico y verificación de ciclos de disipación.",
    impacto: "Restauración total de la operabilidad del sistema térmico.",
    image: fotoCooler
  },
  {
    id: 2,
    title: "Arquitectura y Montaje de Workstation Gamer",
    description: "Asesoría integral de componentes para eliminar cuellos de botella (Bottlenecking). Ensamble profesional con gestión de cableado para optimizar flujo de aire.",
    impacto: "Eficiencia máxima de performance y estética de nivel entusiasta.",
    image: fotoPcNueva
  },
  {
    id: 3,
    title: "Mantenimiento Preventivo y Térmico",
    description: "Intervención profunda en equipo con estrés térmico severo. Limpieza de conductos de aire y renovación de compuestos para estabilizar FPS y evitar tildes.",
    impacto: "Reducción significativa de temperatura y mejora en fluidez del SO.",
    image: fotoLimpieza
  },
  {
    id: 4,
    title: "Escalabilidad de Hardware (PC Upgrade)",
    description: "Auditoría de compatibilidad para actualización de CPU y GPU. Optimización basada en las capacidades de la placa madre y entrega de potencia de la fuente.",
    impacto: "Incremento de potencia gráfica sin comprometer la estabilidad eléctrica.",
    image: fotoUpgrade
  }
];

const HardwareGallery = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Experiencia técnica en Hardware</h2>
      <div style={styles.grid}>
        {hardwareJobs.map(job => (
          <div key={job.id} style={styles.card}>
            <img src={job.image} alt={job.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.cardTitle}>{job.title}</h3>
              <p>{job.description}</p>
              <span style={styles.badge}><strong>Logro:</strong> {job.impacto}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '40px 20px', backgroundColor: '#f4f4f4' },
  title: { textAlign: 'center', marginBottom: '30px', fontFamily: 'Arial' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: { 
    backgroundColor: '#fff', 
    borderRadius: '10px', 
    overflow: 'hidden', 
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
  },
  image: { width: '100%', height: '200px', objectFit: 'cover' },
  content: { padding: '20px' },
  cardTitle: { margin: '0 0 10px 0', color: '#333' },
  badge: { 
    display: 'inline-block', 
    marginTop: '10px', 
    padding: '5px 10px', 
    backgroundColor: '#e1f5fe', 
    color: '#01579b', 
    borderRadius: '5px',
    fontSize: '0.9rem'
  }
};

export default HardwareGallery;