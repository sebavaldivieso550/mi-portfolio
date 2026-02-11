import HardwareGallery from './components/HardwareGallery';
import SoftwareProjects from './components/SoftwareProjects';

function App() {
  return (
    <div className="App">
      <header style={{textAlign: 'center', padding: '60px 20px', backgroundColor: '#282c34', color: 'white'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '10px'}}>Tu Nombre Aquí</h1>
        <p style={{fontSize: '1.2rem', color: '#61dafb'}}>Estudiante de Ingeniería | Hybrid IT Profile</p>
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

export default App;