import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Download, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import TestimonialCard from './components/TestimonialCard';
import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface Content {
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
  };
  aboutSection: {
    title: string;
    content: string[];
  };
  portfolioSection: {
    title: string;
    projects: {
      title: string;
      description: string;
      technologies: string[];
    }[];
  };
  skillsSection: {
    title: string;
    categories: {
      title: string;
      skills: string[];
    }[];
  };
  testimonialsSection: {
    title: string;
    testimonials: {
      text: string;
      author: string;
      position: string;
    }[];
  };
  contactSection: {
    title: string;
  };
  footer: {
    copyright: string;
  };
}

function App() {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    fetch('/src/data/content.json')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/foto_perfil.jpeg"
              alt="Yaniel Marron"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-500 object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent pb-10">
            {content.heroSection.title}
          </h1>
          <p className="text-2xl sm:text-3xl mb-8 text-gray-300">
            {content.heroSection.subtitle}
          </p>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            {content.heroSection.description}
          </p>
          <button
            onClick={scrollToContact}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all"
          >
            Contáctame
          </button>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-blue-500" />
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">{content.aboutSection.title}</h2>
          <div className="space-y-6 text-lg text-gray-300">
            {content.aboutSection.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section id="portafolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">{content.portfolioSection.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.portfolioSection.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={`https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=500`}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">{content.skillsSection.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.skillsSection.categories.map((category, index) => (
              <SkillCard
                key={index}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">{content.testimonialsSection.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testimonialsSection.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                position={testimonial.position}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">{content.contactSection.title}</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/yanielmarron" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yanielmarron" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:yaniel.marron@example.com" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a
            href="/resume.pdf"
            download
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors mb-6"
          >
            <Download size={20} />
            <span>Descargar CV</span>
          </a>
          <p className="text-gray-500 text-sm">{content.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
