import React from 'react';

const hardwareJobs = [
  {
    id: 1,
    title: "Mantenimiento Preventivo High-End",
    description: "Limpieza profunda de componentes, cambio de pasta térmica (Arctic MX-4) y optimización de flujo de aire.",
    impacto: "Reducción de 15°C en CPU bajo carga.",
    image: "https://via.placeholder.com/400x250?text=Limpieza+PC"
  },
  {
    id: 2,
    title: "Diagnóstico y Reparación de Hardware",
    description: "Resolución de problemas de booteo. Identificación de fallas en módulos RAM y reemplazo de fuente certificada.",
    impacto: "Equipo recuperado sin pérdida de datos.",
    image: "https://via.placeholder.com/400x250?text=Reparacion+Hardware"
  },
  {
    id: 3,
    title: "Armado de Setup Gamer/Workstation",
    description: "Montaje completo desde cero con gestión de cableado (Cable Management) profesional.",
    impacto: "Estética limpia y flujo de aire optimizado.",
    image: "https://via.placeholder.com/400x250?text=Armado+Cero"
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