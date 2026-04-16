import React, { useState } from 'react';

const experiences = [
  {
    role: 'Academic Projects',
    company: 'University of the Cordilleras',
    period: '2023-Present',
    bullets: [
      'Built small projects like a portfolio website, to-do app, or simple web apps.',
      'Used Git/GitHub for version control and project submission.',
      'Practiced network setup and security configurations in lab environments',
      'Worked on small projects like password security or network monitoring',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Student',
    period: '2023 – Present',
    type: 'Freelance',
    bullets: [
      'Built responsive websites for local businesses using VS code.',
      'Managed client communication, project scoping, and delivery.',
      'Maintained 5-star rating across all client projects.',
    ],
  },
  {
    role: 'IT Officer',
    company: 'Student Organization – CITCS Department',
    period: '2024 – 2025',
    type: 'Volunteer',
    bullets: [
      'Managed the organizations social media and website.' ,
      'Tech setup for university-wide events.' ,
      'Trained fellow students on basic web tools.' ,
    ],
  },
];

const typeColors = {
  Internship: 'bg-black text-white',
  Freelance: 'bg-white text-black border border-black',
  Volunteer: 'bg-gray-200 text-black',
};

const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="my-16">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">03</span>
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#000]"
          >
            
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors duration-200
                ${open === i ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'}`}
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-lg">{exp.role}</p>
                  <p className={`text-sm font-mono ${open === i ? 'text-gray-300' : 'text-gray-500'}`}>
                    {exp.company} · {exp.period}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono px-2 py-1 rounded-full ${typeColors[exp.type]}`}>
                  {exp.type}
                </span>
                <span className="text-xl font-light">{open === i ? '−' : '+'}</span>
              </div>
            </button>

            {/* Accordion Body */}
            {open === i && (
              <div className="px-6 py-4 bg-gray-50 border-t-2 border-black">
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-700">
                      <span className="mt-1 w-2 h-2 rounded-full bg-black shrink-0"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;