import React from 'react';
import packageImage1 from '../images/package 1.jpg';
import packageImage2 from '../images/package 2.jpeg';
import packageImage3 from '../images/package 3.jpeg';

function TourPackages() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <p className='text-l text-gray-600 mb-4'>Tour packages</p>
        <h2 className="text-3xl font-bold mb-6">Our Tourist Destination</h2>
        <p className="text-gray-600 text-right mb-8">Our tourist destinations offer an unrivaled <br/> blend of natural beauty and cultural richness.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <a href="#" className="relative shadow-lg rounded-md overflow-hidden transform transition-transform hover:scale-105">
            <img src={packageImage1} alt="Bali Tour Package" className="w-full h-68 object-cover" />
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
              <span className="font-semibold">7 Days</span>
              <span className="float-right text-yellow-400">⭐ 4.9</span>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold">Bali Tour Package</h3>
              <p className="text-gray-600">23 AUGUST - 29 AUGUST</p>
              <p className="text-xl font-bold">$285</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="relative shadow-lg rounded-md overflow-hidden transform transition-transform hover:scale-105">
            <img src={packageImage2} alt="Java Tour Package" className="w-full h-68 object-cover" />
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
              <span className="font-semibold">5 Days</span>
              <span className="float-right text-yellow-400">⭐ 4.9</span>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold">Java Tour Package</h3>
              <p className="text-gray-600">23 AUGUST - 27 AUGUST</p>
              <p className="text-xl font-bold">$218</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="relative shadow-lg rounded-md overflow-hidden transform transition-transform hover:scale-105">
            <img src={packageImage3} alt="Solo Tour Package" className="w-full h-68 object-cover" />
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
              <span className="font-semibold">3 Days</span>
              <span className="float-right text-yellow-400">⭐ 4.9</span>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold">Solo Tour Package</h3>
              <p className="text-gray-600">23 AUGUST - 25 AUGUST</p>
              <p className="text-xl font-bold">$163</p>
            </div>
          </a>
        </div>
        <div className="text-center mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

export default TourPackages;