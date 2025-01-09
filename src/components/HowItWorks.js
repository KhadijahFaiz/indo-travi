import React, { useState } from 'react';
import { CalendarDays, DollarSign, Users } from 'lucide-react';
import { Search, Timer, CreditCard, Compass } from 'lucide-react';
import howItWorksImage from '../images/How it works.jpg';

const HowItWorks = () => {
  // State for form inputs
  const [searchData, setSearchData] = useState({
    date: '',
    budget: '',
    guests: '1'
  });

  // State for dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
    setOpenDropdown(null);
  };

  // Handle search
  const handleSearch = () => {
    console.log('Search data:', searchData);
    // Add your search logic here
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Section - Image and Search */}
          <div className="md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={howItWorksImage} 
                alt="How it works" 
                className="w-full h-[600px] object-cover transition-transform duration-300 hover:scale-105" 
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                {/* Search Bar Container */}
                <div className="absolute bottom-16 left-0 right-0 px-4 sm:px-6">
                  <div className="flex flex-wrap items-center gap-2 bg-gray-800/80 backdrop-blur-sm rounded-full p-1.5">
                    {/* Date Input */}
                    <div className="relative">
                      <div 
                        className="flex items-center gap-1 px-4 py-2 text-gray-300 cursor-pointer"
                        onClick={() => setOpenDropdown(openDropdown === 'date' ? null : 'date')}
                      >
                        <CalendarDays className="w-4 h-4" />
                        <span className="text-sm">
                          {searchData.date || 'Date'}
                        </span>
                        <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'date' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      {openDropdown === 'date' && (
                        <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-2 z-10">
                          <input
                            type="date"
                            value={searchData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      )}
                    </div>

                    <div className="w-px h-5 bg-gray-600"></div>

                    {/* Budget Input */}
                    <div className="relative">
                      <div 
                        className="flex items-center gap-1 px-4 py-2 text-gray-300 cursor-pointer"
                        onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
                      >
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">
                          {searchData.budget || 'Budget'}
                        </span>
                        <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'budget' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      {openDropdown === 'budget' && (
                        <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-2 z-10">
                          <input
                            type="number"
                            value={searchData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            placeholder="Enter budget"
                            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      )}
                    </div>

                    <div className="w-px h-5 bg-gray-600"></div>

                    {/* Guests Input */}
                    <div className="relative">
                      <div 
                        className="flex items-center gap-1 px-4 py-2 text-gray-300 cursor-pointer"
                        onClick={() => setOpenDropdown(openDropdown === 'guests' ? null : 'guests')}
                      >
                        <Users className="w-4 h-4" />
                        <span className="text-sm">
                          {searchData.guests} {parseInt(searchData.guests) === 1 ? 'Guest' : 'Guests'}
                        </span>
                        <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'guests' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      {openDropdown === 'guests' && (
                        <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-2 z-10">
                          <input
                            type="number"
                            min="1"
                            value={searchData.guests}
                            onChange={(e) => handleInputChange('guests', e.target.value)}
                            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      )}
                    </div>

                    <button 
                      className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-auto bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>

                  {/* Description Text */}
                  <p className="text-white text-sm mt-6 opacity-90 max-w-md">
                    Embark on a journey to find your dream destination, where adventure 
                    and relaxation await, creating unforgettable memories along the way
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - How it Works */}
          <div className="md:w-1/2">
            <div className="max-w-lg">
              <span className="text-gray-500 mb-2 block">How it works</span>
              <h2 className="text-4xl font-bold mb-8">One click for you</h2>

              <div className="space-y-8">
                {/* Steps */}
                <div className="flex items-start gap-6 group">
                  <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-gray-100">
                    <Search className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Find your destination</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Embark on a journey to discover your dream destination, where 
                      adventure and relaxation await.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-gray-100">
                    <Timer className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Book a ticket</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Ensure a smooth travel experience by booking tickets to your 
                      preferred destination via our booking platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-gray-100">
                    <CreditCard className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Make payment</h3>
                    <p className="text-gray-500 leading-relaxed">
                      We offer a variety of payment options to meet your preferences 
                      and ensure a hassle-free transaction process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-gray-100">
                    <Compass className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Explore destination</h3>
                    <p className="text-gray-500 leading-relaxed">
                      You'll be immersed in a captivating tapestry of sights, sounds and 
                      tastes, as you wind your way through the ancient streets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;