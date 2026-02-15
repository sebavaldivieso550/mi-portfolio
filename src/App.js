import HardwareGallery from './components/HardwareGallery';
import SoftwareProjects from './components/SoftwareProjects';

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.mainTitle}>Sebastián Valdivieso</h1>
          <h2 style={styles.subTitle}>Estudiante de Ingeniería | Desarrollador & Especialista en Hardware</h2>
          <p style={styles.description}>
            Apasionado por la arquitectura de sistemas. Con años de experiencia "metiendo mano" 
            en el hardware y una formación sólida en desarrollo con <strong>React y JavaScript</strong>. 
            Busco mi primera oportunidad profesional en el ecosistema tech de Córdoba para aportar 
            mi capacidad analítica y de resolución de problemas.
          </p>
          <div style={styles.contactButtons}>
            <a href="https://www.linkedin.com/in/sebastián-valdivieso/" target="_blank" rel="noreferrer" style={styles.btnLinkedin}>LinkedIn</a>
            <a href="mailto:sebavaldivieso550@gmail.com" style={styles.btnEmail}>Contacto</a>
          </div>
        </div>
      </header>
      
      <SoftwareProjects />
      <hr style={{border: '0', height: '1px', background: '#eee'}} />
      <HardwareGallery />

      <footer style={{textAlign: 'center', padding: '40px', backgroundColor: '#282c34', color: 'white'}}>
        <p>© 2026 - Córdoba, Argentina</p>
      </footer>
    </div>
  );
}

const styles = {
  header: { 
    padding: '80px 20px', 
    backgroundColor: '#1a1c22', 
    color: 'white', 
    textAlign: 'center' 
  },
  headerContent: { maxWidth: '800px', margin: '0 auto' },
  mainTitle: { fontSize: '3rem', margin: '0', fontFamily: 'Arial, sans-serif' },
  subTitle: { color: '#61dafb', fontWeight: '400', marginBottom: '20px', fontFamily: 'Arial, sans-serif' },
  description: { fontSize: '1.1rem', lineHeight: '1.6', color: '#ccc', fontFamily: 'Arial, sans-serif' },
  contactButtons: { marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' },
  btnLinkedin: { 
    padding: '10px 25px', 
    backgroundColor: '#0077b5', 
    color: 'white', 
    textDecoration: 'none', 
    borderRadius: '5px',
    fontWeight: 'bold'
  },
  btnEmail: { 
    padding: '10px 25px', 
    backgroundColor: '#444', 
    color: 'white', 
    textDecoration: 'none', 
    borderRadius: '5px',
    fontWeight: 'bold'
  },
};

export default App;