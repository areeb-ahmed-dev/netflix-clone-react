import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent p-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <h1 className="text-red-600 font-bold text-2xl">NETFLIX</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">TV Shows</a>
          <a href="#" className="hover:text-gray-300">Movies</a>
          <a href="#" className="hover:text-gray-300">New & Popular</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-xl cursor-pointer" />
        <FaBell className="text-xl cursor-pointer" />
        <div className="w-8 h-8 bg-red-600 rounded"></div>
      </div>
    </nav>
  );
};

export default Navbar;