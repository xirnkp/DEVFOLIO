import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white py-6">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} 4PEM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
