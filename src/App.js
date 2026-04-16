import React, { useState, useEffect } from 'react';
import './index.css';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for sticky nav shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">

      {/* ── Navbar ── */}
      <header className={`sticky top-0 z-50 border-b-2 border-black bg-white transition-all duration-200
        ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#about" className="font-mono font-bold text-xl tracking-tight">
            &lt;Aries Zaparita /&gt;
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-mono font-semibold text-gray-600 hover:text-black transition-colors hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl leading-none"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t-2 border-black bg-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-sm font-mono font-semibold border-b border-gray-100 text-gray-700 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <div className="border-b-2 border-black bg-black">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-xs font-mono tracking-widest mb-3 text-gray-400">
            BSIT STUDENT · WEB DEVELOPER
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            My Portfolio
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            Building clean, modern, and purposeful digital experiences.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-3 bg-white text-black font-mono font-bold rounded-full
              border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200"
          >
            Get In Touch →
          </a>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="max-w-5xl mx-auto px-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <footer className="border-t-2 border-black py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-mono text-sm text-gray-500">© 2025 Aries Zaparita. All rights reserved.</p>
          <p className="font-mono text-xs text-gray-400">Built with React JS & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;