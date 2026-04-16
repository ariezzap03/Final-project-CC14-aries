import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-8 px-4">
      <a href="#about" className="no-underline">
        {/* We use 'section-title' here to apply all the styles from index.css */}
        <h2 className="section-title">
          About Me
        </h2>
      </a>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mt-4">
        I am a dedicated IT Student focused on developing efficient systems. 
        I enjoy solving complex problems through code and networking.
      </p>
    </section>
  );
};

export default AboutMe;
