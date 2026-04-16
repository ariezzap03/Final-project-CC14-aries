import React, { useState } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React JS', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Network Configuration', level: 78 },
      { name: 'JavaScript', level: 75 },
    ],
  },
  
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 80 },
      { name: 'Figma', level: 60 },
      { name: 'Acronis', level: 70 }
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="my-16">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">04</span>
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {skillCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-5 py-2 rounded-full border-2 border-black font-mono text-sm font-semibold transition-all duration-200
              ${activeTab === i
                ? 'bg-black text-white shadow-[3px_3px_0px_0px_#555]'
                : 'bg-white text-black hover:bg-gray-100'
              }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Skill Bars */}
      <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_#000] space-y-5">
        {skillCategories[activeTab].skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-semibold text-black">{skill.name}</span>
              <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 border border-gray-300 overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;