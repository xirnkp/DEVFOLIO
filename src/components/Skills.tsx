import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFigma } from 'react-icons/fa'; // Figma icon
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiReact, SiVuedotjs, SiMongodb } from 'react-icons/si'; // Correct Vue.js import
import profileImage from '../assets/wo.png';

interface Skill {
  icon: JSX.Element;
  label: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement | null>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Replace the icons with the desired ones
  const updatedSkills = skills.map(skill => {
    switch (skill.label) {
      case 'Figma':
        return { icon: <FaFigma size={40} />, label: 'Figma' };
      case 'JavaScript':
        return { icon: <SiJavascript size={40} />, label: 'JavaScript' };
      case 'HTML5':
        return { icon: <SiHtml5 size={40} />, label: 'HTML5' };
      case 'CSS':
        return { icon: <SiCss3 size={40} />, label: 'CSS' };
      case 'TypeScript':
        return { icon: <SiTypescript size={40} />, label: 'TypeScript' };
      case 'React':
        return { icon: <SiReact size={40} />, label: 'React' };
      case 'Vue.js':
        return { icon: <SiVuedotjs size={40} />, label: 'Vue.js' };  // Corrected Vue.js icon
      case 'MongoDB':
        return { icon: <SiMongodb size={40} />, label: 'MongoDB' };
      // Replace Git and Node.js with Vue.js and Figma
      case 'Node.js':
        return { icon: <SiVuedotjs size={40} />, label: 'Vue.js' };  // Replaced Node.js with Vue.js
      case 'Git':
        return { icon: <FaFigma size={40} />, label: 'Figma' };  // Replaced Git with Figma
      default:
        return skill;
    }
  });

  return (
    <div
      ref={skillsRef}
      className={`flex flex-col mb-[40vh] lg:flex-row items-center lg:justify-center space-y-10 lg:space-y-0 lg:space-x-10 mt-20 px-4 transition-opacity duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Image */}
      <div className="flex-shrink-0 lg:w-1/3 flex justify-center">
        <img
          id="skills"
          src={profileImage}
          alt="Profile"
          width={400}
          height={400}
          className="shadow-2xl transform"
        />
      </div>

      {/* Skills list */}
      <div className="lg:w-2/3 w-full">
        <h2 className="mb-[5vh] text-6xl font-bold text-blue-500 mb-6 text-center lg:text-left">SKILLS</h2>
        <h3 className="text-4xl mb-4 font-normal text-center lg:text-left">What Technical Skills I Have as a Full Stack Developer</h3>

        {/* Grid layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {updatedSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center mb-6"
            >
              <div
                className="text-5xl mb-2"
                style={{
                  color: '#4fa3ff',
                  filter: 'drop-shadow(0px 0px 8px #4fa3ff)',
                  textShadow: '0px 0px 10px rgba(79, 163, 255, 0.7)',
                }}
              >
                {skill.icon}
              </div>
              <h3
                className="text-lg font-semibold"
                style={{
                  color: '#4fa3ff',
                  filter: 'drop-shadow(0px 0px 8px #4fa3ff)',
                  textShadow: '0px 0px 10px rgba(79, 163, 255, 0.7)',
                }}
              >
                {skill.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
