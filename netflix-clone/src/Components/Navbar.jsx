import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaSearch, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would typically clear auth tokens
    navigate('/'); // Redirect back to login
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent p-4 flex justify-between items-center">
      {/* ... other nav items ... */}
      <button 
        onClick={handleLogout}
        className="text-white hover:text-gray-300 ml-4"
        title="Sign out"
      >
        <FaSignOutAlt className="text-xl" />
      </button>
    </nav>
  );
};

export default Navbar;