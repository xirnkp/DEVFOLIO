import React from 'react';
import sleepCatImage from '../assets/sleepcat.png';  

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-gradient-to-r from-black 
                    via-indigo-900 to-purple-800 flex justify-center items-center z-50 flex-col">
      <img
        src={sleepCatImage}  
        alt="Loading"
        className="w-auto h-64 mb-6 animate-bounce opacity-90"  
      />
      <div className="text-white text-3xl font-semibold mt-6 animate-fadeInUp">
        <span className="block text-xl animate-type">Sabar yaa boss,</span>
        <span className="block text-2xl mt-2 animate-type">tunggu dulu bentar...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
