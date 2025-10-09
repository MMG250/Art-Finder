import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import artist1 from "../assets/artist1.jpg";
import artist2 from "../assets/artist2.jpg";
import artist3 from "../assets/artist3.jpg";
import artist4 from "../assets/artist4.jpg";
import artist5 from "../assets/artist5.jpg";
import artist6 from "../assets/artist6.jpg";

const Artist = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-white via-blue-300 to-white text-white flex flex-col items-center justify-center w-[70%] min-h-96 mx-auto text-center'>
        <div className='mb-6 px-5 py-2 bg-white text-sm rounded-full text-black hover:bg-white/20 transition'>
          7 Verified Artists
        </div>
        <h1 className="text-4xl text-black sm:text-6xl font-bold mb-3">
          Meet Our <span className="text-blue-600">Creative Artists</span>
        </h1>
        <p className='text-2xl text-black mb-8'>
          Connect directly with talented artists from around the world. Each artist is verified and ready to bring your creative visions to life.
        </p>

        <div className="flex space-x-60 justify-center">
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder='Search Fav Artists....'
              className='border border-gray-300 bg-white rounded-full px-5 py-2 w-64'
            />
          </div>
          <button className='rounded-full border text-black bg-blue-300 px-6 hover:bg-orange-300 transition'>
            Filter
          </button>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16 mt-12">
          <div className="bg-gradient-to-r from-white via-blue-200 to-white p-6 rounded-2xl shadow text-center">
            <FaUserGroup className="w-6 h-6 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">7+</h3>
            <p className="text-black">Verified Artists</p>
          </div>
          <div className="bg-gradient-to-r from-white via-blue-200 to-white p-6 rounded-2xl shadow text-center">
            <FiCheckCircle className="w-6 h-8 text-yellow-500 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-gray-800">100%</h3>
            <p className="text-black">Approval Rate</p>
          </div>
          <div className="bg-gradient-to-r from-white via-blue-200 to-white p-6 rounded-2xl shadow text-center">
            <CiStar className="w-6 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-gray-800">4.9</h3>
            <p className="text-black">Average Rating</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="bg-gradient-to-r from-white via-blue-200 to-white rounded-2xl shadow hover:shadow-xl transition p-4"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w- h-56 object-cover rounded-xl mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-blue-500 font-medium bg-blue-100 px-3 py-1 rounded-full">
                {artist.tag}
              </span>
              <span className="text-yellow-600 flex items-center text-sm">
                <CiStar className="w-4 h-4 mr-1" /> {artist.rating}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {artist.name}
            </h3>
            <p className="text-gray-500 text-sm mb-3">{artist.role}</p>
            <div className="flex justify-between text-gray-600 text-sm mb-3">
              <p>{artist.followers} Followers</p>
              <p>{artist.artworks} Artworks</p>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-100 text-blue-500 px-4 py-1 rounded-full text-sm hover:bg-purple-200 transition">
                Follow
              </button>
              <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="bg-blue-500 text-white px-8 py-3 mb-8 rounded-full font-medium hover:bg-orange-300 transition">
          Load More Artists
        </button>
      </div>
      </section>
    </>
  )
}

const artists = [
  {
    id: 1,
    name: "Mucyo",
    role: "Painter",
    image: artist1,
    followers: "4.2k",
    artworks: 35,
    rating: "4.8",
    tag: "Top Rated",
  },
  {
    id: 2,
    name: "Gretta",
    role: "Digital Artist",
    image: artist2,
    followers: "2.9k",
    artworks: 27,
    rating: "4.6",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Munyambonera",
    role: "Sculptor",
    image: artist3,
    followers: "3.1k",
    artworks: 18,
    rating: "4.7",
    tag: "Trending",
  },
  {
    id: 4,
    name: "Akkra",
    role: "Illustrator",
    image: artist4,
    followers: "2.3k",
    artworks: 22,
    rating: "4.5",
    tag: "Creative",
  },
  {
    id: 5,
    name: "Gavin",
    role: "Visual Designer",
    image: artist5,
    followers: "5.2k",
    artworks: 40,
    rating: "4.9",
    tag: "Popular",
  },
  {
    id: 6,
    name: "Merci",
    role: "Frontend Developer",
    image: artist6,
    followers: "1.8k",
    artworks: 16,
    rating: "4.3",
    tag: "Tech Art",
  },
  {
    id: 7,
    name: "sonia",
    role: "Photographer",
    image: artist2,
    followers: "3.6k",
    artworks: 30,
    rating: "4.7",
    tag: "Top Rated",
  },
];

export default Artist
