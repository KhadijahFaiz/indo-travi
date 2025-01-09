import React from 'react';
import blog1Image from '../images/blog 1.jpg';
import blog2Image from '../images/blog 2.jpeg';

function Blog() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-l text-gray-500 text-center mb-2">Our Blog</h2>
        <h3 className="text-3xl font-semibold text-center mb-6">Our Travel Memories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog Card 1 */}
          <div className="shadow-lg rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="overflow-hidden">
              <img 
                src={blog1Image} 
                alt="2023 Travel Trends" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
              />
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">Nov 14, 2022</p>
              <h3 className="font-bold">2023 Travel Trends – what you need to know</h3>
              <p className="text-gray-700">2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and...</p>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="shadow-lg rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="overflow-hidden">
              <img 
                src={blog2Image} 
                alt="Jeep Adventure" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
              />
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">Nov 18, 2022</p>
              <h3 className="font-bold">Jeep Adventure is a new attraction for tourists visiting Garut</h3>
              <p className="text-gray-700">Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...</p>
            </div>
          </div>
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

export default Blog;