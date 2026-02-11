import React from 'react';

const projects = [
  {
    id: 1,
    title: "E-commerce Tech Store",
    tech: "React | Firebase | CSS Modules",
    description: "Una tienda online con carrito de compras funcional y catálogo dinámico.",
    link: "https://github.com/tu-usuario/proyecto-ecommerce", // Cambialo por tu link real
    demo: "https://tu-demo.vercel.app"
  },
  {
    id: 2,
    title: "App de Clima (API)",
    tech: "JavaScript Vanilla | Fetch API",
    description: "Consumo de datos en tiempo real de OpenWeather para mostrar el clima de cualquier ciudad.",
    link: "https://github.com/tu-usuario/weather-app",
    demo: "#"
  },
  {
    id: 3,
    title: "Portfolio Interactivo",
    tech: "React | Hooks",
    description: "Este mismo sitio, desarrollado para demostrar habilidades de ingeniería híbrida.",
    link: "https://github.com/tu-usuario/mi-portfolio",
    demo: "#"
  }
];

const SoftwareProjects = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Desarrollo de Software</h2>
      <div style={styles.grid}>
        {projects.map(p => (
          <div key={p.id} style={styles.card}>
            <div style={styles.techTag}>{p.tech}</div>
            <h3 style={styles.cardTitle}>{p.title}</h3>
            <p style={styles.desc}>{p.description}</p>
            <div style={styles.links}>
              <a href={p.link} target="_blank" rel="noreferrer" style={styles.btn}>Ver Código (GitHub)</a>
              {p.demo !== "#" && <a href={p.demo} target="_blank" rel="noreferrer" style={styles.btnSec}>Demo en Vivo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '60px 20px', backgroundColor: '#ffffff' },
  title: { textAlign: 'center', marginBottom: '40px', fontFamily: 'Arial', color: '#282c34' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: { 
    padding: '25px',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column'
  },
  techTag: { fontSize: '0.8rem', color: '#61dafb', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' },
  cardTitle: { margin: '0 0 15px 0', fontSize: '1.5rem' },
  desc: { color: '#666', marginBottom: '20px', flexGrow: 1 },
  links: { display: 'flex', gap: '10px' },
  btn: { padding: '10px 15px', backgroundColor: '#282c34', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '0.9rem' },
  btnSec: { padding: '10px 15px', border: '1px solid #282c34', color: '#282c34', textDecoration: 'none', borderRadius: '5px', fontSize: '0.9rem' }
};

export default SoftwareProjects;