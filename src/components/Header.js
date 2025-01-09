import React from 'react';

function Header() {
  return (
    <header className="bg-white bg-opacity-80 shadow-md py-4 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-gray-800">INDOTRAVI</h1>
        <nav className="flex gap-4">
          <a href="#" className="hover:bg-gray-200 rounded-lg px-3 py-2 transition duration-300">About</a>
          <a href="#" className="hover:bg-gray-200 rounded-lg px-3 py-2 transition duration-300">Services</a>
          <a href="#" className="hover:bg-gray-200 rounded-lg px-3 py-2 transition duration-300">Tour</a>
          <a href="#" className="hover:bg-gray-200 rounded-lg px-3 py-2 transition duration-300">Blog</a>
          <a href="#" className="hover:bg-gray-200 rounded-lg px-3 py-2 transition duration-300">Contact</a>
        </nav>
        <div className="flex items-center">
          <button className="bg-white text-gray-800 border border-gray-300 rounded-full px-3 py-1 mr-2">De</button>
          <button className="bg-blue-500 text-white rounded-full px-3 py-1 mr-2">En</button>
          <button className="bg-white text-gray-800 border border-gray-300 rounded-full px-4 py-2">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;