"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-xl font-bold">dev</span>
          </div>
          {/* Navigation Links */}
          <div className="flex">
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium pt-6">Home</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium pt-6">About me</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium pt-6">Contact</a>
          </div>
          {/* Avatar */}
          <div className="flex items-center">
              <div className="relative w-10 h-10 mt-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
