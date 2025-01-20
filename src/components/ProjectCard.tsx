import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, image, technologies }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Ver más</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;