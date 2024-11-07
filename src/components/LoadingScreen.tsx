import React from 'react';
import sleepCatImage from '../assets/sleepcat.png';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-gradient-to-r from-black 
                    via-indigo-900 to-purple-800 flex justify-center items-center z-50 flex-col p-4">
      <img
        src={sleepCatImage}
        alt="Loading"
        className="w-40 h-40 sm:w-64 sm:h-64 mb-4 sm:mb-6 animate-bounce opacity-90"  
      />
      <div className="text-white text-center">
        <span className="block text-lg sm:text-xl animate-type">Sabar yaa boss,</span>
        <span className="block text-xl sm:text-2xl mt-1 sm:mt-2 animate-type">tunggu dulu bentar...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
