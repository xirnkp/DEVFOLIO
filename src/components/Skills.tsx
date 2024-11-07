import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFigma } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiReact, SiVuedotjs, SiMongodb } from 'react-icons/si';
import profileImage from '../assets/cat.png';

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

  const updatedSkills = skills.map(skill => {
    switch (skill.label) {
      case 'JavaScript':
        return { icon: <SiJavascript size={40} />, label: 'JavaScript' };
      case 'HTML':
        return { icon: <SiHtml5 size={40} />, label: 'HTML' };
      case 'CSS':
        return { icon: <SiCss3 size={40} />, label: 'CSS' };
      case 'TypeScript':
        return { icon: <SiTypescript size={40} />, label: 'TypeScript' };
      case 'React':
        return { icon: <SiReact size={40} />, label: 'React' };
      case 'Vue.js':
        return { icon: <SiVuedotjs size={40} />, label: 'Vue.js' };
      case 'MongoDB':
        return { icon: <SiMongodb size={40} />, label: 'MongoDB' };
      case 'Node.js':
        return { icon: <SiVuedotjs size={40} />, label: 'Node.js' };
      case 'Figma':
        return { icon: <FaFigma size={40} />, label: 'Figma' };
      default:
        return skill;
    }
  });

  return (
    <div
      ref={skillsRef}
      className={`flex flex-col mb-[40vh] lg:flex-row items-center lg:justify-center space-y-10 lg:space-y-0 
                  lg:space-x-10 mt-20 px-4 transition-opacity duration-500 transform ${isVisible ? 
                  'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
    
      <motion.div
        className="flex-shrink-0 lg:w-1/3 flex justify-center"
        animate={{ x: [0, 10, 0], rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
<img
  id="profile-image"
  src={profileImage}
  alt="Profile"
  className="w-40 h-40 sm:w-96 sm:h-96 shadow-2xl transform"
/>

      </motion.div>

      {/* Skills list */}
      <div className="lg:w-2/3 w-full">
        <h2 className="mb-[5vh] text-6xl font-bold text-blue-500 mb-6 text-center lg:text-left">SKILLS</h2>
        <h3 className="text-4xl mb-4 font-normal text-center lg:text-left">
          What Technical Skills I Have as a Full Stack Developer
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {updatedSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2 }}
              className="group flex flex-col items-center text-center mb-6"
            >
              <div
                className={`text-5xl mb-2 text-gray-500 transition-all duration-300 ease-in-out 
                           group-hover:scale-105 group-hover:translate-y-[-5px] ${
                             skill.label === 'JavaScript' ? 'group-hover:text-[#ffff00]' :
                             skill.label === 'React' ? 'group-hover:text-cyan-500' :
                             skill.label === 'HTML' ? 'group-hover:text-[#FFA500]' :
                             skill.label === 'MongoDB' ? 'group-hover:text-green-500' :
                             skill.label === 'Figma' ? 'group-hover:text-purple-500' :
                             'group-hover:text-blue-500'
                           } group-hover:drop-shadow-[0_0_10px_#4fa3ff]`}
              >
                {skill.icon}
              </div>
              <h3
                className={`text-lg font-semibold text-gray-500 transition-all duration-300 ease-in-out 
                           group-hover:scale-105 group-hover:translate-y-[-5px] ${
                             skill.label === 'JavaScript' ? 'group-hover:text-[#ffff00]' :
                             skill.label === 'React' ? 'group-hover:text-cyan-500' :
                             skill.label === 'HTML' ? 'group-hover:text-[#FFA500]' :
                             skill.label === 'MongoDB' ? 'group-hover:text-green-500' :
                             skill.label === 'Figma' ? 'group-hover:text-purple-500' :
                             'group-hover:text-blue-500'
                           }`}
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
