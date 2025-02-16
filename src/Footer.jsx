import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
      
        <h2 className="text-lg font-semibold mb-4 md:mb-0">
          Dawat E Zaika 🍽️
        </h2>

        
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-red-700 transition duration-300">
            Home
          </a>
          <a href="#menu" className="hover:text-red-700  transition duration-300">
            Menu
          </a>
          <a href="#about" className="hover:text-red-700  transition duration-300">
            About
          </a>
          <a href="#contact" className="hover:text-red-700  transition duration-300">
            Contact
          </a>
        </div>

        
        <p className="text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} Dawat E Zaika. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
