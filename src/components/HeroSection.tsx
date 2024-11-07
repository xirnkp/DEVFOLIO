import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import catImage from '../assets/cat.png'; 

const HeroSectionWithProfile: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="mb-[30vh] relative text-white h-auto py-16 lg:py-24 bg-gradient-to-b from-purple-900 via-blue-900 to-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-left flex-1"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">Hi all, I'm Aji 👋</h1>
          <p className="text-2xl lg:text-4xl mb-4 font-normal text-center lg:text-left">
          A passionate Full Stack Software 🚀 Engineering student experienced in building web and mobile applications, with a strong foundation in development and design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <motion.button
              className="px-8 py-4 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-700 transition duration-300"
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 0.5 }}
            >
              Contact Me
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-700 transition duration-300"
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Download My Resume
            </motion.button>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-8">
            {[ 
              { icon: <FaGithub />, link: 'https://github.com/xirnkp' },
              { icon: <FaInstagram />, link: 'https://instagram.com/4pemmm' },
              { icon: <FaEnvelope />, link: 'mailto:ajipermana0890@gmail.com' }

            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="text-2xl text-white hover:text-purple-500 transition duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex items-center justify-center mt-8 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src={catImage} 
            alt="Profile"
            className="w-full max-w-xs lg:max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionWithProfile;
