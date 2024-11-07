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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-gradient-to-r from-blue-900 via-purple-900 to-black shadow-lg py-4`}>
      <nav className="container mx-auto flex justify-between items-center text-white relative">
        <h1 className="text-3xl font-bold">4PEM</h1>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#aboutme" className="hover:text-purple-300">About</a>
          <a href="#skills" className="hover:text-purple-300">Skill</a>
          <a href="#education" className="hover:text-purple-300">Education</a>
          <a href="#projects" className="hover:text-purple-300">Project</a>
          <a href="mailto:ajipermana0890@gmail.com" className="hover:text-purple-300">Contact Me</a>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-black p-4 md:hidden">
          <ul className="flex flex-col space-y-4 text-center">
            <li className="hover:text-purple-300">Skills</li>
            <li className="hover:text-purple-300">Work Experiences</li>
            <li className="hover:text-purple-300">Open Source</li>
            <li className="hover:text-purple-300">Achievements</li>
            <li>
              <a href="mailto:ajipermana0890@gmail.com" className="hover:text-purple-300">Contact Me</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
