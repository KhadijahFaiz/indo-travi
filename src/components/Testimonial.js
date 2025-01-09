import React from 'react';
import profileImage from '../images/profile.webp'; // Replace with actual image path

function Testimonial() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img src={profileImage} alt="Donald Sullivan" className="w-16 h-16 rounded-full mb-2" />
          <div className="text-center md:text-left">
            <h3 className="font-bold">Donald Sullivan</h3>
            <p className="text-gray-500">Founder, Fiko</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-gray-900 text-lg  mb-4">
            This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300">
            ←
          </button>
          <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;