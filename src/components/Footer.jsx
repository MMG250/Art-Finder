import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-blue-300 to-white text-black py-12">
      <div className="wid-container  grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-lg font-bold text-pink-900 mb-4">Art Gallery</h2>
          <p className="text-sm mb-4">
            Discover unique artworks from talented artists around the world. 
            Our platform connects art lovers with creators in a seamless digital experience.
          </p>
          <div className="flex space-x-3 mt-3">
            <Link t="#" className="p-2 bg-orange-300 rounded-full hover:bg-blue-500 transition">
              <FaInstagram />
            </Link>
            <Link to="#" className="p-2 bg-orange-300 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF />
            </Link>
            <Link to="#" className="p-2 bg-orange-300 rounded-full hover:bg-blue-500 transition">
              <FaTwitter />
            </Link>
            <Link to="#" className="p-2 bg-orange-300 rounded-full hover:bg-blue-500 transition">
              <FaEnvelope />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-pink-800 mb-4">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li> Photography</li>
            <li> Painting</li>
            <li> Sculpture</li>
            <li> Ceramic</li>
            <li> Architecture</li>
          </ul>
        </div>

        {/* Help & Information */}
        <div>
          <h2 className="text-lg font-bold text-pink-800 mb-4">Help & Information</h2>
          <ul className="space-y-3 text-sm">
            <li> Shipping Info</li>
            <li> Returns & Exchanges</li>
            <li> FAQs</li>
            <li> (+250) 780 636 729</li>
            <li> Kayonza-Mukarange, Nyagatovu</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold text-pink-800 mb-4">Newsletter</h2>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest artworks, artists, and exclusive offers.
          </p>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="w-full py-2 rounded-md bg-gradient-to-r from-blue-600 to-orange-500 text-pink-800 font-medium hover:opacity-90 transition">
              Subscribe →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-00">
        Copyright © 2025 All rights reserved | Made by{" "}
        <span className="text-pink-800 font-semibold">Mucyo Gretha</span> 
        {/* & distributed by{" "} */}
        {/* <span className="text-purple-300 font-semibold">University of Lay Adventists of Kigali</span> */}
      </div>
    </footer>
  );
};

export default Footer;
