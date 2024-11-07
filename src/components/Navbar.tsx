import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
    setIsScrolling(currentScrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-gradient-to-r from-blue-900 via-purple-900 to-black shadow-lg py-4`}
    >
      <nav className="container mx-auto flex justify-between items-center text-white px-4 md:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold">4PEM</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#aboutme" className="hover:text-purple-300">About</a>
          <a href="#skills" className="hover:text-purple-300">Skills</a>
          <a href="#education" className="hover:text-purple-300">Education</a>
          <a href="#projects" className="hover:text-purple-300">Project</a>
          <a
            href="mailto:ajipermana0890@gmail.com"
            className="px-4 py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-black/85 px-6 py-8 shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ transformOrigin: 'top center' }}
      >
        <ul className="flex flex-col items-center space-y-4 text-center">
          <li>
            <a href="#aboutme" className="text-lg text-white hover:text-purple-300" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-lg text-white hover:text-purple-300" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="text-lg text-white hover:text-purple-300" onClick={toggleMenu}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg text-white hover:text-purple-300" onClick={toggleMenu}>
              Project
            </a>
          </li>
          <li>
            <a
              href="mailto:ajipermana0890@gmail.com"
              className="px-6 py-2 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-700 transition duration-300"
              onClick={toggleMenu}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
