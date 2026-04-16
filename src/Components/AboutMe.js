import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className={`my-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">01</span>
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Avatar placeholder */}
        <div className="md:col-span-1 flex justify-center">
          <div className="w-48 h-48 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] overflow-hidden">
          <img src="1776184371.618504" alt="Zaparita" className="w-full h-full object-cover" />
</div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg leading-relaxed text-gray-700">
            Greetings and welcome to my portfolio! I'm <strong className="text-black">Aries A. Zaparita</strong>, 
            with a passion of exploring diverse domains within the field of technology. 
            While my academic journey has been multifaceted, my focus has recently shifted 
            towards the dynamic realms of frontend development and web designer. 
            
          </p>
          <p className="text-base leading-relaxed text-gray-600">
            
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {['React JS', 'Tailwind CSS', 'JavaScript', 'CLI'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-black text-white text-sm font-mono rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
