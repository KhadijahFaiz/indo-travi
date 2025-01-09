import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* About Section */}
        <div>
          <h4 className="font-bold mb-4">About</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">In Press</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Online Chat</a></li>
            <li><a href="#" className="hover:underline">WhatsApp</a></li>
            <li><a href="#" className="hover:underline">Telegram</a></li>
            <li><a href="#" className="hover:underline">Ticketing</a></li>
            <li><a href="#" className="hover:underline">Call Center</a></li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div>
          <h4 className="font-bold mb-4">FAQ</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">Booking</a></li>
            <li><a href="#" className="hover:underline">Payments</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Condition</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <p className="mb-4">Don't miss out on the exciting world of travel – subscribe now and embark on a journey of discovery with us.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-full border border-gray-300 bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300">
              Submit
            </button>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300">
              <FaFacebookF />
            </a>
            
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2023 IndoTravi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
