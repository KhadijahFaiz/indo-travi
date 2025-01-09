import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TourismSection from './components/TourismSection';
import HowItWorks from './components/HowItWorks';
import TourPackages from './components/TourPackages';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
    
      <Hero />
      <Stats />
      <TourismSection />
      <HowItWorks />
      <TourPackages />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;