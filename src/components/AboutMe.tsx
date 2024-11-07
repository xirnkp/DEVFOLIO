import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import catImage from '../assets/Me.jpeg';

const AboutMe: React.FC = () => {
  const controls = useAnimation();
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 });
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      id='aboutme'
      ref={aboutMeRef} 
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="flex flex-col mb-[40vh] md:flex-row items-start justify-start space-y-6 md:space-y-0 md:space-x-8 mt-20 px-4 sm:px-8 md:px-16"
    >
      <div  className="relative flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-pink-500 shadow-lg mb-6 md:mb-0">
        <img src={catImage} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div className="text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-500 mb-4 text-center lg:text-left">About Me</h2>
        <p className="text-lg sm:text-xl md:text-4xl mb-4 font-normal text-center lg:text-left">
        My name is Aji Permana, a student of Software Engineering at SMK Negeri 4 Bandung, who enjoys computers and music. I have strong skills in analysis and adaptation and am passionate about IT and software engineering.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
