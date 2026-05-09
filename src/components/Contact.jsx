import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, FileText, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
    const container = useRef();
    const formRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 75%',
            }
        });

        tl.from('.contact-title', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' })
          .from('.contact-text', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
          .from('.contact-social', { scale: 0.8, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.2')
          .from('.contact-form-item', { x: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.4');
    }, { scope: container });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically integrate with EmailJS, Formspree or your own backend
        alert('Gracias por tu mensaje. Te contactaré a la brevedad.');
        formRef.current.reset();
    };

    return (
        <section id="contact" ref={container} className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    
                    {/* Info Side */}
                    <div>
                        <h2 className="contact-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            Let's Build Something Great
                        </h2>
                        <p className="contact-text text-slate-400 text-lg mb-10 leading-relaxed">
                            Estoy abierto a discutir proyectos de Arquitectura de Software, Data Science y soluciones Enterprise. 
                            Si buscas un perfil analítico, orientado a resultados y con experiencia comprobable en estándares corporativos, hablemos.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:diego@example.com" className="contact-social flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-4 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-slate-500">Contáctame directamente</p>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="contact-social flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-4 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                    <FaLinkedin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                                    <p className="text-slate-500">Conectemos profesionalmente</p>
                                </div>
                            </a>

                            <a href="https://github.com/LeoDiaz-DataSc" target="_blank" rel="noopener noreferrer" className="contact-social flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-4 bg-slate-800 rounded-lg group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                                    <FaGithub size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">GitHub</h3>
                                    <p className="text-slate-500">Revisa mis repositorios y código</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="contact-form-item">
                                <label className="block text-sm font-medium text-slate-400 mb-2">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="Ej. John Doe"
                                />
                            </div>
                            
                            <div className="contact-form-item">
                                <label className="block text-sm font-medium text-slate-400 mb-2">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="john@empresa.com"
                                />
                            </div>

                            <div className="contact-form-item">
                                <label className="block text-sm font-medium text-slate-400 mb-2">Mensaje / Propuesta</label>
                                <textarea 
                                    required
                                    rows="4"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                    placeholder="Hola Diego, me interesa tu perfil para..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="contact-form-item w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
                            >
                                <Send size={20} />
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
