import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  position: string;
}

const TestimonialCard = ({ text, author, position }: TestimonialCardProps) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl relative">
      <Quote className="text-blue-500 mb-4" size={32} />
      <p className="text-gray-300 mb-6 text-lg">{text}</p>
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-gray-400">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;