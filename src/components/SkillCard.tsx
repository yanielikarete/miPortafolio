import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;