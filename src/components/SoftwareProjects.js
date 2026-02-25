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
    description: "Simulador de tienda con motor de búsqueda, filtrado dinámico y sistema de carrito persistente con LocalStorage.",
    link: "https://github.com/sebavaldivieso550/TechFlow-Plataforma-de-Comercio-Electronico-con-Persistencia", 
    demo: "https://sebavaldivieso550.github.io/TechFlow-Plataforma-de-Comercio-Electronico-con-Persistencia/" 
  },
  {
    id: 3,
    category: 'featured',
    title: "BookNode Backend API",
    tech: "Node.js | Express | MySQL | Docker",
    description: "API RESTful para gestión de datos relacionales. Implementación de arquitectura CRUD y entorno de desarrollo aislado mediante contenedores Docker.",
    link: "https://github.com/sebavaldivieso550/my-simple-book-api",
  },
  {
    id: 4, 
    category: 'featured',
    title: "System Orchestrator Full-Stack",
    tech: "React (Vite) | Node.js | MySQL | Docker Compose",
    description: "Aplicación integral con arquitectura desacoplada. Implementación de Docker Compose para orquestación de servicios y gestión de CORS.",
    link: "https://github.com/sebavaldivieso550/System-Orchestrator-Gestion-de-Tareas-End-to-End",
  },
  {
    id: 5, 
    category: 'featured',
    title: "Ingeniería Hub: Portfolio Profesional",
    tech: "React | Vercel | Git Workflow",
    description: "Plataforma personal diseñada bajo principios de SPA. Implementación de despliegue continuo (CD) y arquitectura de componentes reutilizables.",
    link: "https://github.com/sebavaldivieso550/mi-portfolio", 
    demo: "https://sebastian-valdivieso-ing.vercel.app" 
  },
  {
    id: 6,
    category: 'featured',
    title: "OdontoApp - Medical SaaS",
    tech: "React | Firebase | Tailwind | Framer Motion",
    description: "Sistema integral de gestión de turnos médicos en tiempo real. Incluye autenticación personalizada (DNI), base de datos NoSQL y una interfaz optimizada.",
    link: "https://github.com/sebavaldivieso550/odonto-app",
    demo: "https://valdivieso-odonto.vercel.app",
    isNew: true
  },
];

const SoftwareProjects = () => {
  const featured = [...projects].filter(p => p.category === 'featured').reverse();
  const babies = projects.filter(p => p.category === 'baby');

  const ProjectCard = ({ p, size = 'large' }) => {
    // Estado interno simple para el efecto hover sin librerías extras si no quieres
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...(size === 'large' ? styles.card : styles.babyCard),
          ...(size === 'large' && isHovered ? styles.cardHover : {})
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={styles.techTag}>{p.tech}</div>
          {p.isNew && <span style={styles.newBadge}>NUEVO</span>}
        </div>
        <h3 style={size === 'large' ? styles.cardTitle : styles.babyTitle}>{p.title}</h3>
        <p style={styles.desc}>{p.description}</p>
        
        <div style={styles.btnGroup}>
          <a href={p.link} target="_blank" rel="noreferrer" style={styles.btnSecondary}>GitHub</a>
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" style={styles.btnPrimary}>Live Demo 🚀</a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.mainTitle}>Desarrollo de Software</h2>

      {/* SECCIÓN PRINCIPAL (Featured) */}
      <div style={styles.subSection}>
        <div style={styles.groupTitleContainer}>
          <h3 style={styles.groupTitle}>🚀 Proyectos Destacados</h3>
        </div>
        <div style={styles.grid}>
          {featured.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>

      {/* SECCIÓN BABY PROJECTS */}
      <div style={styles.subSection}>
        <div style={styles.divider}>
          <span style={styles.dividerText}>Mis primeros pasos (Early Foundations)</span>
        </div>
        <div style={styles.babyGrid}>
          {babies.map(p => <ProjectCard key={p.id} p={p} size="small" />)}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' },
  mainTitle: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: '#1a1c22' },
  subSection: { marginBottom: '60px' },
  groupTitleContainer: { 
    display: 'flex', 
    justifyContent: 'center', 
    marginBottom: '30px' 
  },
  groupTitle: { 
    fontSize: '1.5rem', 
    color: '#3b82f6', 
    margin: 0,
    padding: '0 10px',
    textAlign: 'center'
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '25px' 
  },
  babyGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '20px',
    opacity: '0.85'
  },
  card: { 
    padding: '30px', 
    border: '1px solid #eee', 
    borderRadius: '15px', 
    backgroundColor: '#fff', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease' // Suaviza el efecto hover
  },
  cardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
    borderColor: '#3b82f6'
  },
  babyCard: { padding: '20px', border: '1px dashed #ccc', borderRadius: '10px', backgroundColor: '#fcfcfc' },
  cardTitle: { fontSize: '1.5rem', margin: '10px 0', color: '#1e293b' },
  babyTitle: { fontSize: '1.2rem', margin: '10px 0' },
  techTag: { fontSize: '0.7rem', fontWeight: 'bold', color: '#3b82f6', textTransform: 'uppercase', marginBottom: '10px' },
  newBadge: { backgroundColor: '#ef4444', color: '#fff', fontSize: '0.65rem', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' },
  desc: { color: '#555', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.5' },
  btnGroup: { display: 'flex', gap: '10px', marginTop: 'auto' },
  btnPrimary: { flex: 1, textAlign: 'center', padding: '10px', backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold', transition: 'background 0.2s' },
  btnSecondary: { flex: 1, textAlign: 'center', padding: '10px', backgroundColor: '#282c34', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontSize: '0.85rem', transition: 'background 0.2s' },
  divider: { textAlign: 'center', margin: '40px 0', borderBottom: '1px solid #eee', lineHeight: '0.3em' },
  dividerText: { background: '#f8fafc', padding: '0 15px', color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic' }
};

export default SoftwareProjects;