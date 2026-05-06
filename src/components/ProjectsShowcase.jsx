import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Database, Activity, Code, Server } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsShowcase() {
  const container = useRef();

  useGSAP(() => {
    // Animar las tarjetas grandes (Tier 1)
    gsap.utils.toArray('.tier1-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    // Animar el grid de Tier 2 (staggered)
    gsap.from('.tier2-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    });
    
    // Animar Títulos de Sección
    gsap.utils.toArray('.section-heading').forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 90%',
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
      });
    });

  }, { scope: container });

  return (
    <section id="projects" className="section container" ref={container}>
      
      {/* TIER 1 PROJECTS */}
      <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Core Data Science & AI
      </h2>
      <p className="section-heading" style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
        Tier 1 Projects demonstrating Machine Learning, MLOps, and scalable Cloud architecture.
      </p>

      <div className="tier1-grid">
        {/* Project 1 */}
        <div className="glass-card tier1-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '12px', background: 'rgba(0, 112, 243, 0.1)', borderRadius: '12px', color: 'var(--accent-color)' }}>
                <Activity size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Data Science Platform</h3>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/LeoDiaz-DataSc/datascience-algorithms-platform" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>
            A comprehensive Machine Learning platform handling data ingestion, exploratory data analysis, and predictive modeling (Regression/Classification) with automated evaluation.
          </p>
          <div style={{ marginBottom: '24px' }}>
            <span className="project-tag">Python</span>
            <span className="project-tag">FastAPI</span>
            <span className="project-tag">Scikit-learn</span>
            <span className="project-tag">React</span>
            <span className="project-tag">Azure DB</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="glass-card tier1-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '12px', background: 'rgba(0, 112, 243, 0.1)', borderRadius: '12px', color: 'var(--accent-color)' }}>
                <Database size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>INEGI Mexico Dashboard</h3>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/LeoDiaz-DataSc/pib-mexico-dashboard" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>
            Cloud-ready economic dashboard processing massive real datasets from INEGI. Features dynamic querying, historical trend visualization, and a highly normalized relational DB structure.
          </p>
          <div style={{ marginBottom: '24px' }}>
            <span className="project-tag">Node.js</span>
            <span className="project-tag">MySQL</span>
            <span className="project-tag">Recharts</span>
            <span className="project-tag">Docker</span>
          </div>
        </div>
      </div>


      {/* TIER 2 PROJECTS */}
      <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '60px' }}>
        Enterprise Software Engineering
      </h2>
      <p className="section-heading" style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
        Tier 2 Projects highlighting strict Hexagonal Architecture, JWT Security, and Audit Traceability.
      </p>

      <div className="projects-grid">
        {/* Tier 2: Bakery */}
        <div className="glass-card tier2-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h4 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={18} color="var(--accent-color)" /> Bakery Management
            </h4>
            <a href="https://github.com/LeoDiaz-DataSc/bakery-management-system" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <ExternalLink size={18} />
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
            Full-stack system wrapping legacy Java business rules with a modern Node.js API. Includes transactional sales processing and GSAP dashboards.
          </p>
          <div>
            <span className="project-tag">Node.js</span>
            <span className="project-tag">Java</span>
            <span className="project-tag">React + GSAP</span>
          </div>
        </div>

        {/* Tier 2: Hotel */}
        <div className="glass-card tier2-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h4 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={18} color="var(--accent-color)" /> Hotel Enterprise
            </h4>
            <a href="https://github.com/LeoDiaz-DataSc/hotel-reservation-system" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <Github size={18} />
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
            Complex state-machine system for room management. Secures check-in/out workflows with JWT authentication and silent database audit logging.
          </p>
          <div>
            <span className="project-tag">Node.js</span>
            <span className="project-tag">MySQL</span>
            <span className="project-tag">React</span>
          </div>
        </div>

        {/* Tier 2: IAM */}
        <div className="glass-card tier2-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h4 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code size={18} color="var(--accent-color)" /> IAM System
            </h4>
            <a href="https://github.com/LeoDiaz-DataSc/user-management-system" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <Github size={18} />
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
            Identity & Access Management portal migrating legacy PHP into a modern Node environment with Role-Based Access Control (RBAC) and SHA2-256 encryption.
          </p>
          <div>
            <span className="project-tag">Node.js</span>
            <span className="project-tag">PHP Legacy</span>
            <span className="project-tag">Security</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}
