import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; // Import LoadingScreen
import SmoothScroll from './components/SmoothScroll'; // Import SmoothScroll

import { SiJavascript, SiTypescript, SiMongodb, SiHtml5, SiCss3 } from "react-icons/si";
import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import Project from './components/Project';

const App: React.FC = () => {
  const [profileImage, setProfileImage] = useState("assets/Me.jpeg");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pinned-repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();

    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  const skills = [
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <FaReact />, label: 'React' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiHtml5 />, label: 'HTML' },
    { icon: <SiCss3 />, label: 'CSS' },
    { icon: <FaNodeJs />, label: 'Node.js' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <FaGit />, label: 'Git' }
  ];

  const educationHistory = [
    {
      institution: 'SMK Negeri 4 Bandung',
      degree: 'Software Engineering',
      period: '2016 - 2020',
      location: 'Bandung, Indonesia',
      description: 'Studied software development, networking, and database management.'
    }
  ];

  return (
    <div className="bg-black text-gray-100">
      {loading && <LoadingScreen />} 
      {!loading && <Navbar />}
      <SmoothScroll />
      <HeroSection />
      <AboutMe />
      <Skills skills={skills} />
      <Education educationHistory={educationHistory} />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
