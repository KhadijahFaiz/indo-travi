import React, { useState, useEffect, useRef } from 'react';
import { CalendarDays, DollarSign, Users } from 'lucide-react';

function Hero() {
  const [formData, setFormData] = useState({
    date: '',
    budget: '',
    guests: ''
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search data:', formData);
    // Add your search logic here
  };

  return (
    <section
      className="h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-white text-xl font-semibold">INDOTRAVI</div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-white hover:text-gray-200">About</a>
                  <a href="#" className="text-white hover:text-gray-200">Services</a>
                  <a href="#" className="text-white hover:text-gray-200">Tour</a>
                  <a href="#" className="text-white hover:text-gray-200">Contact</a>
                </div>
              </div>
            </div>

            {/* Language and Login */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 backdrop-blur-md rounded-full flex items-center">
                <button className="px-3 py-1 text-white hover:bg-white/10 rounded-full">De</button>
                <button className="px-3 py-1 text-white bg-white/30 rounded-full">En</button>
              </div>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-5xl md:text-6xl font-semibold text-center max-w-5xl leading-tight mb-4">
          Extraordinary natural and cultural charm
        </h1>
        <p className="text-white text-xl mb-8 text-center">
          Exploring Indonesia is an unforgettable adventure.
        </p>

        {/* Search Bar */}
        <div 
          className="flex flex-col md:flex-row items-center bg-white/20 backdrop-blur-md rounded-full p-2 max-w-3xl w-full space-y-2 md:space-y-0" 
          ref={dropdownRef}
        >
          <div className="flex-1 flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
            {/* Date */}
            <div className="relative w-full md:w-auto">
              <div 
                className="flex items-center justify-between px-4 py-2 text-white cursor-pointer border md:border-none rounded md:rounded-none"
                onClick={() => setOpenDropdown(openDropdown === 'date' ? null : 'date')}
              >
                <div className="flex items-center space-x-2">
                  <CalendarDays className="w-5 h-5" />
                  <span>{formData.date || 'Date'}</span>
                </div>
                <svg className={`w-4 h-4 transform ${openDropdown === 'date' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9L12 15L18 9" strokeWidth="2" />
                </svg>
              </div>
              {openDropdown === 'date' && (
                <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg p-2 z-50">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>

            <div className="hidden md:block w-px h-6 bg-white/30" />

            {/* Budget */}
            <div className="relative w-full md:w-auto">
              <div 
                className="flex items-center justify-between px-4 py-2 text-white cursor-pointer border md:border-none rounded md:rounded-none"
                onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
              >
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5" />
                  <span>{formData.budget || 'Budget'}</span>
                </div>
                <svg className={`w-4 h-4 transform ${openDropdown === 'budget' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9L12 15L18 9" strokeWidth="2" />
                </svg>
              </div>
              {openDropdown === 'budget' && (
                <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg p-2 z-50">
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="Enter budget"
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>

            <div className="hidden md:block w-px h-6 bg-white/30" />

            {/* Guests */}
            <div className="relative w-full md:w-auto">
              <div 
                className="flex items-center justify-between px-4 py-2 text-white cursor-pointer border md:border-none rounded md:rounded-none"
                onClick={() => setOpenDropdown(openDropdown === 'guests' ? null : 'guests')}
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{formData.guests || 'Guest'}</span>
                </div>
                <svg className={`w-4 h-4 transform ${openDropdown === 'guests' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9L12 15L18 9" strokeWidth="2" />
                </svg>
              </div>
              {openDropdown === 'guests' && (
                <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg p-2 z-50">
                  <input
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => handleInputChange('guests', e.target.value)}
                    placeholder="Number of guests"
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>

          <button 
            className="bg-white text-gray-900 px-8 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
