"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="flex justify-center">
        <div className="shadow-2xl bg-[#00000017] backdrop-blur-md rounded-lg">
          <div className="flex justify-center items-center h-16 space-x-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Ajuste de espaciado en dispositivos grandes */}
            <a href="#1" className="text-white hover:text-gray-400 px-2 py-2 rounded-md text-lg sm:text-xl font-extrabold">Home</a> {/* Ajuste de tamaño de texto en dispositivos pequeños */}
            <a href="#2" className="text-white hover:text-gray-400 px-2 py-2 rounded-md text-lg sm:text-xl font-extrabold">About me</a>
            <a href="#3" className="text-white hover:text-gray-400 px-2 py-2 rounded-md text-lg sm:text-xl font-extrabold">Projects</a>
            <a href="#4" className="text-white hover:text-gray-400 px-2 py-2 rounded-md text-lg sm:text-xl font-extrabold">Skills</a>
            <a href="#5" className="text-white hover:text-gray-400 px-2 py-2 rounded-md text-lg sm:text-xl font-extrabold">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
