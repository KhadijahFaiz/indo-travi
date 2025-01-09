import React from 'react';

function Stats() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800">10M+</h2>
          <p className="text-gray-600">Total Customers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800">09+</h2>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800">12K</h2>
          <p className="text-gray-600">Total Destinations</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800">5.0</h2>
          <p className="text-gray-600">Average Rating</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;