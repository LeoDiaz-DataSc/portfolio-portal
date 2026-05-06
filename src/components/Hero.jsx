import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronRight, Database, BrainCircuit } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-badge', { y: -20, opacity: 0, duration: 0.6 })
      .from('.hero-title-part', { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.2,
        rotationX: -20,
        transformOrigin: "0% 50% -50"
      }, "-=0.4")
      .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.6")
      .to('.hero-glow', { 
        opacity: 0.8, 
        scale: 1.1, 
        duration: 2, 
        yoyo: true, 
        repeat: -1, 
        ease: 'sine.inOut' 
      }, 0);
  }, { scope: container });

  return (
    <section className="section hero-wrapper" ref={container}>
      <div className="hero-glow"></div>
      
      <div className="hero-badge">
        <span style={{ color: 'var(--accent-color)', marginRight: '8px' }}>●</span> Available for Senior Roles
      </div>
      
      <h1 className="hero-title">
        <div className="hero-title-part title-gradient">Senior Data Scientist.</div>
        <div className="hero-title-part">
          <span className="text-gradient-blue">Gen AI</span> & MLOps.
        </div>
      </h1>
      
      <p className="hero-subtitle">
        Bridging the gap between complex data algorithms and robust enterprise software engineering. I build AI solutions that scale.
      </p>
      
      <div style={{ display: 'flex', gap: '16px' }} className="hero-cta-wrapper">
        <a href="#projects" className="btn btn-primary hero-cta">
          View Projects <ChevronRight size={16} style={{ marginLeft: '8px' }} />
        </a>
        <a href="https://github.com/LeoDiaz-DataSc" target="_blank" rel="noopener noreferrer" className="btn btn-secondary hero-cta">
          GitHub Profile
        </a>
      </div>
      
      <div style={{ marginTop: '80px', display: 'flex', gap: '40px', opacity: 0.5 }} className="hero-cta">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
          <Database size={20} /> Data Engineering
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
          <BrainCircuit size={20} /> Agentic AI Frameworks
        </div>
      </div>
    </section>
  );
}
