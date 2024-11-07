import React, { useEffect, useRef, useState } from 'react';
import smkn4Image from '../assets/smkn4.png';
import { motion } from 'framer-motion';

interface EducationProps {
  educationHistory: {
    institution: string;
    degree: string;
    period: string;
    location: string;
    description: string;
  }[];
}

const Education: React.FC<EducationProps> = ({ educationHistory }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      id="education"
      ref={sectionRef}
      className="space-y-12 mt-20 mb-20 px-4 sm:px-8 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-500 mb-6 text-center lg:text-left">
        Education
      </h2>

      <div className="flex flex-col lg:flex-row items-start">
        <motion.img
          src={smkn4Image}
          alt="SMK Negeri 4 Bandung"
          className="hidden lg:block w-48 h-48 sm:w-64 sm:h-64 mr-8 mb-6 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex-1">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-8 max-w-xl text-left"
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl sm:text-4xl font-semibold text-blue-400">{edu.institution}</h3>
              <p className="text-gray-300 text-xl sm:text-2xl">{edu.degree}</p>
              <p className="text-gray-400 text-xl sm:text-2xl">
                {edu.period} | {edu.location}
              </p>
              <p className="text-gray-200 mt-3 text-lg sm:text-xl">{edu.description}</p>

              <div
                className="mt-2 h-1 w-full"
                style={{
                  backgroundColor: '#9b5de5',
                  boxShadow:
                    '0px 0px 12px rgba(79, 163, 255, 0.8), 0px 0px 20px rgba(79, 163, 255, 0.6)',
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
