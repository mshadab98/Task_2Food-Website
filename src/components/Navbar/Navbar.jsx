

import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#D32F2F] p-5 shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl pl-2 md:pl-25 font-bold">FOODZIE</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 pr-28 [&>*]:text-white">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-18 w-full bg-[#D32F2F] shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden z-40`}
      >
        <ul className="flex flex-col text-center [&>*]:text-white [&>*]:py-3 [&>*]:block [&>*]:hover:bg-red-600">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="pt-20 transition-all duration-300 ease-in-out "/>
        <div className="p-2">
        <h1 className="text-xl md:text-4xl p-2 text-center font-bold  
  text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 
  drop-shadow-lg tracking-wide animate-fadeIn">
  Welcome to FOODZIE.....
</h1>

         
        </div>
      
    
    </>
  );
};

export default Navbar;