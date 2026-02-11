import React from 'react';

const projects = [
    {
        id: 1,
        title: "CEMIP Odontología",
        tech: "HTML5 Semántico | SASS (SCSS) | Bootstrap 5",
        description: "Sitio web institucional con arquitectura modular de estilos. Implementación de diseño responsivo, optimización SEO básica y automatización de estilos mediante loops de SASS.",
        link: "https://github.com/sebavaldivieso550/odontologia-cemip",
        demo: "https://sebavaldivieso550.github.io/odontologia-cemip/"
    },
    {
        id: 2, 
        title: "TechFlow E-commerce",
        tech: "JavaScript (ES6+) | LocalStorage | Fetch API | Swiper.js",
        description: "Simulador de tienda con motor de búsqueda, filtrado dinámico y sistema de carrito persistente. Implementación de modo oscuro con guardado de preferencias del usuario y consumo de datos asíncronos mediante archivos JSON.",
        link: "https://github.com/sebavaldivieso550/TechFlow-Plataforma-de-Comercio-Electronico-con-Persistencia", 
        demo: "https://sebavaldivieso550.github.io/TechFlow-Plataforma-de-Comercio-Electronico-con-Persistencia/" 
    },
    {
        id: 3, 
        title: "BookNode Backend API",
        tech: "Node.js | Express | MySQL | Docker",
        description: "API RESTful para gestión de datos relacionales. Implementación de arquitectura CRUD, manejo de errores HTTP semánticos y entorno de desarrollo aislado mediante contenedores Docker.",
        link: "https://github.com/tu-usuario/my-simple-book-api",
    },
    {
        id: 4, 
        title: "System Orchestrator Full-Stack",
        tech: "React (Vite) | Node.js | MySQL | Docker Compose",
        description: "Aplicación integral con arquitectura desacoplada. Implementación de Docker Compose para orquestación de servicios, gestión de CORS para seguridad entre dominios y despliegue distribuido (Vercel/Render/PlanetScale).",
        link: "https://github.com/sebavaldivieso550/System-Orchestrator-Gestion-de-Tareas-End-to-End",
    },
    {
        id: 5, 
        title: "Ingeniería Hub: Portfolio Profesional",
        tech: "React | Vercel | Git Workflow",
        description: "Plataforma personal diseñada bajo principios de Single Page Application (SPA). Implementación de despliegue continuo (CD) mediante Vercel y arquitectura de componentes reutilizables para escalabilidad de contenido.",
        link: "https://github.com/sebavaldivieso550/mi-portfolio", 
        demo: "https://sebastian-valdivieso-ing.vercel.app" 
    },
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