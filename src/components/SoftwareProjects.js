import React from 'react';

const projects = [
    {
        id: 1,
        category: 'baby',
        title: "CEMIP Odontología",
        tech: "HTML5 Semántico | SASS (SCSS) | Bootstrap 5",
        description: "Sitio web institucional con arquitectura modular de estilos. Implementación de diseño responsivo, optimización SEO básica y automatización de estilos mediante loops de SASS.",
        link: "https://github.com/sebavaldivieso550/odontologia-cemip",
        demo: "https://sebavaldivieso550.github.io/odontologia-cemip/"
    },
    {
        id: 2, 
        category: 'baby',
        title: "TechFlow E-commerce",
        tech: "JavaScript (ES6+) | LocalStorage | Fetch API | Swiper.js",
        description: "Simulador de tienda con motor de búsqueda, filtrado dinámico y sistema de carrito persistente. Implementación de modo oscuro con guardado de preferencias del usuario y consumo de datos asíncronos mediante archivos JSON.",
        link: "https://github.com/sebavaldivieso550/TechFlow-Plataforma-de-Comercio-Electronico-con-Persistencia", 
        demo: "https://sebavaldivieso550.github.io/TechFlow-Plataforma-de-Comercio-Electronico-con-Persistencia/" 
    },
    {
        id: 3,
        category: 'featured',
        title: "BookNode Backend API",
        tech: "Node.js | Express | MySQL | Docker",
        description: "API RESTful para gestión de datos relacionales. Implementación de arquitectura CRUD, manejo de errores HTTP semánticos y entorno de desarrollo aislado mediante contenedores Docker.",
        link: "https://github.com/tu-usuario/my-simple-book-api",
    },
    {
        id: 4, 
        category: 'featured',
        title: "System Orchestrator Full-Stack",
        tech: "React (Vite) | Node.js | MySQL | Docker Compose",
        description: "Aplicación integral con arquitectura desacoplada. Implementación de Docker Compose para orquestación de servicios, gestión de CORS para seguridad entre dominios y despliegue distribuido (Vercel/Render/PlanetScale).",
        link: "https://github.com/sebavaldivieso550/System-Orchestrator-Gestion-de-Tareas-End-to-End",
    },
    {
        id: 5, 
        category: 'featured',
        title: "Ingeniería Hub: Portfolio Profesional",
        tech: "React | Vercel | Git Workflow",
        description: "Plataforma personal diseñada bajo principios de Single Page Application (SPA). Implementación de despliegue continuo (CD) mediante Vercel y arquitectura de componentes reutilizables para escalabilidad de contenido.",
        link: "https://github.com/sebavaldivieso550/mi-portfolio", 
        demo: "https://sebastian-valdivieso-ing.vercel.app" 
    },
];

const SoftwareProjects = () => {
  const featured = projects.filter(p => p.category === 'featured');
  const babies = projects.filter(p => p.category === 'baby');

  const ProjectCard = ({ p, size = 'large' }) => (
    <div style={size === 'large' ? styles.card : styles.babyCard}>
      <div style={styles.techTag}>{p.tech}</div>
      <h3 style={size === 'large' ? styles.cardTitle : styles.babyTitle}>{p.title}</h3>
      <p style={styles.desc}>{p.description}</p>
      <a href={p.link} target="_blank" rel="noreferrer" style={styles.btn}>GitHub</a>
    </div>
  );

  return (
    <section style={styles.section}>
      <h2 style={styles.mainTitle}>Desarrollo de Software</h2>

      {/* SECCIÓN BABY PROJECTS */}
      <div style={styles.subSection}>
        <div style={styles.divider}>
          <span style={styles.dividerText}>Mis primeros pasos (Early Foundations)</span>
        </div>
        <div style={styles.babyGrid}>
          {babies.map(p => <ProjectCard key={p.id} p={p} size="small" />)}
        </div>
      </div>

      {/* SECCIÓN PRINCIPAL */}
      <div style={styles.subSection}>
        <h3 style={styles.groupTitle}>🚀</h3>
        <div style={styles.grid}>
          {featured.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>

    </section>
  );
};

const styles = {
  section: { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' },
  mainTitle: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: '#1a1c22' },
  subSection: { marginBottom: '60px' },
  groupTitle: { fontSize: '1.5rem', marginBottom: '25px', color: '#61dafb',  paddingLeft: '15px' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
    gap: '25px' 
  },
  babyGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '20px',
    opacity: '0.85' // Un toque visual para diferenciarlos
  },
  card: { padding: '30px', border: '1px solid #eee', borderRadius: '15px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  babyCard: { padding: '20px', border: '1px dashed #ccc', borderRadius: '10px', backgroundColor: '#fcfcfc' },
  cardTitle: { fontSize: '1.6rem', margin: '10px 0' },
  babyTitle: { fontSize: '1.2rem', margin: '10px 0' },
  techTag: { fontSize: '0.75rem', fontWeight: 'bold', color: '#007bff', textTransform: 'uppercase' },
  desc: { color: '#555', fontSize: '0.95rem', marginBottom: '20px' },
  btn: { padding: '8px 15px', backgroundColor: '#282c34', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontSize: '0.85rem' },
  divider: { textAlign: 'center', margin: '40px 0', borderBottom: '1px solid #eee', lineHeight: '0.3em' },
  dividerText: { background: '#2b2f33', borderRadius: '5px', padding: '0 10px', color: '#c4c4c4', fontSize: '0.9rem', fontStyle: 'italic' }
};

export default SoftwareProjects;