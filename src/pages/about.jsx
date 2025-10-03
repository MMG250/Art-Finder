import React from "react";
import { FaAward, FaChartLine, FaGlobe, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-900 via-purple-500 to-pink-900 text-white px-6 text-center">
        <div className="mb-6 px-5 py-2 bg-white/10 text-sm rounded-full text-gray-200 hover:bg-white/20 transition">
          Our Story
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-9">
          {" "}
          About
          <span className="text-blue-700">ArtFinder</span>
        </h1>

        <p className="max-w-2xl text-lg text-gray-200 mb-10">
          Our mission is to connect talented artists with art enthusiasts who
          appreciate the beauty and craftsmanship of unique creations.
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md hover:from-pink-400 transition">
            Explore Our Artists→
          </button>
          <button className="px-6 py-3 rounded-lg border text-gray-200 hover:bg-pink-400 transition">
            Contact Us
          </button>
        </div>
      </section>

      <section className="bg-indigo-400 text-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="flex justify-center mb-4">
              <span className="p-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl text-white">
                <FaUser size={32} />
              </span>
            </div>
            <h3 className="text-3xl font-bold">2,500+</h3>
            <p className="text-gray-700">Artists Supported</p>
          </div>

          <div>
            <div className="flex justify-center mb-4">
              <span className="p-6 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl text-white">
                <FaChartLine size={32} />
              </span>
            </div>
            <h3 className="text-3xl font-bold">15,000+</h3>
            <p className="text-gray-700">Artworks Sold</p>
          </div>

          <div>
            <div className="flex justify-center mb-4">
              <span className="p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-xl text-white">
                <FaGlobe size={32} />
              </span>
            </div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-700">Countries Reached</p>
          </div>

          <div>
            <div className="flex justify-center mb-4">
              <span className="p-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl text-white">
                <FaAward size={32} />
              </span>
            </div>
            <h3 className="text-3xl font-bold">8,000+</h3>
            <p className="text-gray-700">Happy Customers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
