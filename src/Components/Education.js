import React, { useState } from 'react';

const educationData = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of the Cordilleras',
    year: '2024 – Present',
    description: 'As a student, focused on learning software development, web technologies, and database management.',
  },
  {
    degree: 'Senior High School – ABM-STRAND',
    school: 'Guinzadan National High School',
    year: '2023 – 2024',
    description: 'Studied Accountancy, Business, and Management and graduated.',
  },
];

const Education = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="education" className="my-16">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">02</span>
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`relative border-2 border-black rounded-xl p-6 cursor-default transition-all duration-200
              ${hovered === index
                ? 'bg-black text-white shadow-[6px_6px_0px_0px_#555]'
                : 'bg-white text-black shadow-[4px_4px_0px_0px_#000]'
              }`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className={`text-sm font-mono mt-1 ${hovered === index ? 'text-gray-300' : 'text-gray-500'}`}>
                  {edu.school}
                </p>
              </div>
              <div className="text-right">
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                  hovered === index ? 'border-white text-white' : 'border-black text-black'
                }`}>
                  {edu.year}
                </span>
                <p className={`text-sm mt-2 font-semibold ${hovered === index ? 'text-gray-200' : 'text-gray-600'}`}>
                </p>
              </div>
            </div>
            <p className={`mt-3 text-sm leading-relaxed ${hovered === index ? 'text-gray-200' : 'text-gray-600'}`}>
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;