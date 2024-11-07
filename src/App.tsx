import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; 
import SmoothScroll from './components/SmoothScroll'; 

import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiVuedotjs } from "react-icons/si";
import { FaReact, FaFigma } from 'react-icons/fa';
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
    { icon: <SiJavascript />, label: 'JavaScript', color: '#f7df1e' }, 
    { icon: <FaReact />, label: 'React', color: '#61dafb' },            
    { icon: <SiTypescript />, label: 'TypeScript', color: '#3178c6' },   
    { icon: <SiHtml5 />, label: 'HTML', color: '#e34f26' },            
    { icon: <SiCss3 />, label: 'CSS', color: '#1572b6' },                          
    { icon: <SiVuedotjs />, label: 'MongoDB', color: '#47a248' },        
    { icon: <FaFigma />, label: 'Figma', color: '#f1502f' }                 
  ];  

  const educationHistory = [
    {
      institution: 'SMK Negeri 4 Bandung',
      degree: 'Software Engineering',
      period: '2022 - now',
      location: 'Bandung, Indonesia',
      description: 'Studied software development, database management and games.'
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
