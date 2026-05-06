import Hero from './components/Hero'
import ProjectsShowcase from './components/ProjectsShowcase'
import SkillsMarquee from './components/SkillsMarquee'
import './index.css'

function App() {
  return (
    <>
      <nav>
        <div style={{ fontWeight: 700, letterSpacing: '-0.05em', fontSize: '1.2rem' }}>
          LD<span style={{ color: 'var(--accent-color)' }}>.</span>
        </div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="https://github.com/LeoDiaz-DataSc" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:contact@example.com">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <SkillsMarquee />
        <ProjectsShowcase />
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 24px', 
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--border-color)',
        marginTop: '60px'
      }}>
        <p>&copy; 2026 Leo Diaz. Senior Data Scientist & Software Engineer.</p>
      </footer>
    </>
  )
}

export default App
