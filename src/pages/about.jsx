import React from "react";
/*import { FaAward, FaChartLine, FaGlobe } from "react-icons/fa";*/
import { FaUserGroup } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CheckCircle, Globe } from "lucide-react";
import { FaHeart } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-orange-300 to-blue-600 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-orange-300 to-blue-600 text-white px-6 text-center">
        <div className="mb-6 px-5 py-2 bg-gradient-to-r from-blue-600 to-orange-300 text-sm rounded-full text-white hover:bg-white/20 transition">
          Our Story
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-9">
          {" "}
          About
          <span className="text-blue-600">ArtFinder</span>
        </h1>

        <p className="max-w-2xl text-lg text-gray-800 mb-10">
          Our mission is to connect talented artists with art enthusiasts who
          appreciate the beauty and craftsmanship of unique creations.
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-orange-300 text-white font-medium shadow-md hover:from-blue-800 transition">
            Explore Our Artists→
          </button>
          <button className="px-6 py-3 rounded-lg border text-gray-200 hover:bg-blue-800 transition">
            Contact Us
          </button>
        </div>
      </section>

      <section className="bg-orange-100 text-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="flex justify-center mb-4">
              <span className="p-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl text-white">
                <FaUserGroup size={32} />
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

      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <button className="mb-6 px-4 py-2 bg-orange-100 text-gray-700 text-sm rounded-full flex items-center space-x-2">
              <span className="text-lg"><BsStars /></span>
              <span>Our Journey</span>
            </button>

            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Our story started with a deep admiration for the artists who pour their heart and soul into their creations. We noticed that many talented artists struggled to find a platform that truly showcased their work and reached a wider audience.</p>
            <p className="text-lg mb-6">
              This observation sparked the idea of Online Art Finder and exhibition, an online marketplace dedicated to connecting these artists with people who appreciate the uniqueness and beauty of handmade art.
            </p>
            <div className="bg-orange-50 p-6 rounded-l-4 border-orange-400 mb-6">
              <FaQuoteRight className="text-orange-500 text-2xl mb-2" />
              <p className="italic text-gray-700">"As we continue to grow, our commitment to these principles remains steadfast. We are dedicated to supporting our artists, inspiring creativity, and bringing beautiful, meaningful art into homes around the world."</p>
              <p className="mt-3 text-gray-600">Thank you for being a part of our story. Together, we can make a difference in the art world and beyond.</p>
            </div>

            <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg">
              <span className="p-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="text-sm text-gray-500">Questions? Call us at</p>
                <p className="font-bold text-orange-700">(+250) 784 404 173</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="./././funiture1.jpg" alt="Our Story" className="rounded-xl shadow-lg"/>
            <div className="absolute top-0 right-0 w-20 h-20 bg-orange-400 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full blur-3xl opacity-70"></div>
          </div>
        </div>
      </section>

      <section className=" max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img src="" alt="Mission Art" className="rounded-3xl shadow-2xl w-full" />
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-400 rounded-full blur-2xl opacity-70"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-400 rounded-full blur-2xl opacity-70"></div>
        </div>

        <div>
          <span className="bg-white text-gray-800 text-sm px-3 py-1 rounded-full font-medium">Our Purpose</span>
          <h2 className="text-4xl font-extrabold  text-black mt-4 mb-3">Our Mission</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">We're on a mission to revolutionize how art is discovered, shared, and collected worldwide.</p>

          <div className="space-y-4">
            {[
              {
                icon: <GiBrain className="text-pink-500 w-5 h-5" />,
                title: "Empower Artists",
                text: "We strive to provide a platform where artists from around the world can showcase their work and reach a global audience. By offering a space for their creations, we aim to support their passion and help them achieve financial independence.",
              },
              {
                icon: <CiHeart className="text-red-500 w-5 h-5" />,
                title: "Foster Creativity",
                text: "Online Art Finder and exhibition, we celebrate creativity in all its forms. Our mission is to inspire and nurture artistic expression by curating a diverse collection of art pieces that cater to various tastes and styles.",
              },
              {
                icon: <FaUserGroup className="text-blue-500 w-5 h-5" />,
                title: "Enhance Accessibility",
                text: "We believe that art should be accessible to everyone. Our platform offers a wide range of art pieces at different price points, making it easy for art lovers to find something that fits their budget and style.",
              },
              {
                icon: <FaGlobe className="text-green-500 w-5 h-5" />,
                title: "Create Community",
                text: "Online Art Finder and exhibition is more than just an eCommerce platform; it's a community of art lovers. We aim to create a space where artists and buyers can connect, share stories, and celebrate the joy of art together.",
              },

            ].map((item, index)=>(
              <div
                key={index}
                className="bg-blue-50 p-5 rounded-xl shadow-sm border border-gray-100 flex gap-3">
                   <div className="p-2 bg-purple-50 rounded-lg">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-500 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-gray-500 bg-orange-100 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 mr-1"/> Our Values
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">What We Stand For</h2>
          <p className="text-gray-600 mb-10">These core values guide everything we do and shape our commitment to the art community.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {[
              "Authentic artistic expression",
              "Fair compensation for artists",
              "Exceptional customer service",
              "Global accessibility",
              "Creative community building",
            ].map((value, index)=> (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl shadow-sm py-6 px-4 hover:shadow-lg transition">

                <div className="bg-gradient-to-br from-blue-500 to-orange-500 text-white p-3 rounded-full mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div> 
                <p className="font-medium text-gray-800 text-sm">{value}</p>
              </div> 
            ))

            }
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-blue-600 via-orange-300 to-blue-500 text-gray-700 text-center py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-lg text-gray-900 max-w-2xl mx-auto mb-8">
          Whether you're an artist looking to showcase your work or an art lover
          seeking unique pieces, we'd love to have you join our growing
          community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            Browse Artworks
          </button>
          <button className="bg-transparent border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
            Become an Artist
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm text-pink-900">
          <p>(+250) 784 404 173</p>
          <span>•</span>
          <p>mucyogretha@artfinder.com</p>
          <span>•</span>
          <p>Kigali, Rwanda</p>
        </div>
      </section>
    </div>
  );
};

export default About;
