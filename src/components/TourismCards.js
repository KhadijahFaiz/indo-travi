import React from 'react';

const destinations = [
  {
    title: "Bromo, East Java",
    description: "Bromo Tengger Tour",
    image: "https://images.pexels.com/photos/6863992/pexels-photo-6863992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
  },
  {
    title: "Denpasar, Bali",
    description: "Bali Beach Tourism",
    image: "https://images.pexels.com/photos/6015312/pexels-photo-6015312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
  },
  {
    title: "Lampung, South Sumatra",
    description: "Sumatra Tourism",
    image: "https://images.pexels.com/photos/1601513/pexels-photo-1601513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
  },
  {
    title: "Jogjakarta, Central Java",
    description: "Borobudur Temple Tour",
    image: "https://images.pexels.com/photos/28827528/pexels-photo-28827528/free-photo-of-scenic-view-of-traditional-temple-and-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
  },
];

function TourismCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {destinations.map((destination, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <img src={destination.image} alt={destination.title} className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <h3 className="text-white text-lg font-semibold">{destination.title}</h3>
            <p className="text-gray-300">{destination.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourismCards;