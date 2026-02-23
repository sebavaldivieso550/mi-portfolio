import React from 'react';

import fotoCooler1 from '../assets/images/fotoCooler1.jpeg'
import fotoCooler2 from '../assets/images/fotoCooler2.jpeg'
import fotoCooler3 from '../assets/images/fotoCooler3.jpeg'
import fotoLimpieza1 from '../assets/images/fotoLimpieza1.jpeg'
import fotoLimpieza2 from '../assets/images/fotoLimpieza2.jpeg'
import fotoLimpieza3 from '../assets/images/fotoLimpieza3.jpeg'
import fotoPcNueva1 from '../assets/images/fotoPcNueva1.jpeg'
import fotoPcNueva2 from '../assets/images/fotoPcNueva2.jpeg'
import fotoPcNueva3 from '../assets/images/fotoPcNueva3.jpeg'
import fotoUpgrade1 from '../assets/images/fotoUpgrade1.jpeg'
import fotoUpgrade2 from '../assets/images/fotoUpgrade2.jpeg'
import fotoUpgrade3 from '../assets/images/fotoUpgrade3.jpeg'

const hardwareJobs = [
  {
    id: 1,
    title: "Reparación de Sistema de Enfriamiento (Laptop)",
    description: "Diagnóstico de falla crítica en ventilador (Error Fan 1). Proceso de sustitución de componente mecánico y verificación de ciclos de disipación.",
    impacto: "Restauración total de la operabilidad del sistema térmico.",
    images: [
      fotoCooler1,
      fotoCooler2,
      fotoCooler3,
    ]
  },
  {
    id: 2,
    title: "Arquitectura y Montaje de Workstation Gamer",
    description: "Asesoría integral de componentes para eliminar cuellos de botella (Bottlenecking). Ensamble profesional con gestión de cableado para optimizar flujo de aire.",
    impacto: "Eficiencia máxima de performance y estética de nivel entusiasta.",
    images: [
      fotoPcNueva1,
      fotoPcNueva2,
      fotoPcNueva3,
    ]
  },
  {
    id: 3,
    title: "Mantenimiento Preventivo y Térmico",
    description: "Intervención profunda en equipo con estrés térmico severo. Limpieza de conductos de aire y renovación de compuestos para estabilizar FPS y evitar tildes.",
    impacto: "Reducción significativa de temperatura y mejora en fluidez del SO.",
    images: [
      fotoLimpieza1,
      fotoLimpieza2,
      fotoLimpieza3,
    ]
  },
  {
    id: 4,
    title: "Escalabilidad de Hardware (PC Upgrade)",
    description: "Auditoría de compatibilidad para actualización de CPU y GPU. Optimización basada en las capacidades de la placa madre y entrega de potencia de la fuente.",
    impacto: "Incremento de potencia gráfica sin comprometer la estabilidad eléctrica.",
    images: [
      fotoUpgrade1,
      fotoUpgrade2,
      fotoUpgrade3,
    ]
  }
];

const HardwareGallery = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Experiencia técnica en Hardware</h2>
      <div style={styles.grid}>
        {hardwareJobs.map(job => (
          <div key={job.id} style={styles.card} className="hardware-card">
            {/* Contenedor del abanico de imágenes */}
            <div style={styles.imageStack}>
              {job.images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${job.title} ${index}`} 
                  style={{
                    ...styles.stackedImage,
                    zIndex: 10 - index,
                  }} 
                  className={`img-stack-${index}`}
                />
              ))}
            </div>
            
            <div style={styles.content}>
              <h3 style={styles.cardTitle}>{job.title}</h3>
              <p style={{fontSize: '0.9rem', color: '#666'}}>{job.description}</p>
              <div style={styles.badge}><strong>Logro:</strong> {job.impacto}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '60px 20px', backgroundColor: '#f9f9f9' },
  title: { textAlign: 'center', marginBottom: '50px', fontFamily: 'Arial' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '40px', // Más espacio para que el abanico no choque
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: { 
    backgroundColor: '#fff', 
    borderRadius: '15px', 
    padding: '15px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  imageStack: {
    position: 'relative',
    height: '200px',
    marginBottom: '20px'
  },
  stackedImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: 'all 0.4s ease',
    border: '2px solid white',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  },
  content: { marginTop: '10px' },
  cardTitle: { margin: '10px 0', fontSize: '1.2rem' },
  badge: { 
    marginTop: '10px', 
    fontSize: '0.85rem', 
    color: '#01579b', 
    backgroundColor: '#e1f5fe', 
    padding: '5px 10px', 
    borderRadius: '5px',
    display: 'inline-block'
  }
};

export default HardwareGallery;