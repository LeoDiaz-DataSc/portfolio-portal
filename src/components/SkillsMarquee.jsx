import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function SkillsMarquee() {
  const container = useRef();
  
  const skills = [
    "Python", "FastAPI", "Machine Learning", "Scikit-learn", 
    "React", "Node.js", "Docker", "SQL", "Azure", "MLOps",
    "Data Engineering", "Git", "Java", "LLMs"
  ];

  // We duplicate the array to make the infinite scrolling seamless
  const duplicatedSkills = [...skills, ...skills];

  useGSAP(() => {
    gsap.to('.marquee-content', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1
    });
  }, { scope: container });

  return (
    <div className="marquee-container" ref={container}>
      <div className="marquee-content">
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="marquee-item">
            <span style={{ color: 'var(--accent-color)' }}>✦</span> {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
