// import React from 'react'

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c5e] relative overflow-hidden">
//       {/* Gradient overlay for depth */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-pink-500/10" />

//       <div className="relative container mx-auto px-6 py-16 lg:py-24">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="inline-block">
//               <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200 text-sm font-medium border border-purple-400/30">
//                 Discover Amazing Art
//               </span>
//             </div>

//             <div className="space-y-4">
//               <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance">
//                 Where Art Meets{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
//                   Digital Magic
//                 </span>
//               </h1>

//               <p className="text-lg lg:text-xl text-purple-100/80 leading-relaxed max-w-xl text-pretty">
//                 Connect directly with talented artists, discover unique masterpieces, and build your dream collection.
//                 From emerging talents to established masters - all in one platform.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 size="lg"
//                 className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40"
//               >
//                 Explore Artworks
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-purple-300/30 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-base font-semibold rounded-xl backdrop-blur-sm transition-all"
//               >
//                 <Play className="mr-2 h-5 w-5 fill-white" />
//                 Watch Demo
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
//               <div className="space-y-1">
//                 <div className="text-3xl lg:text-4xl font-bold text-white">2,500+</div>
//                 <div className="text-sm text-purple-200/70">Active Artists</div>
//               </div>
//               <div className="space-y-1">
//                 <div className="text-3xl lg:text-4xl font-bold text-white">15,000+</div>
//                 <div className="text-sm text-purple-200/70">Artworks Sold</div>
//               </div>
//               <div className="space-y-1">
//                 <div className="text-3xl lg:text-4xl font-bold text-white">8,000+</div>
//                 <div className="text-sm text-purple-200/70">Happy Customers</div>
//               </div>
//               <div className="space-y-1">
//                 <div className="text-3xl lg:text-4xl font-bold text-white">50+</div>
//                 <div className="text-sm text-purple-200/70">Countries Served</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Artwork Carousel */}
//           <div className="relative">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 group">
//               {/* Artwork Image */}
//               <img
//                 src={currentArtwork.image || "/placeholder.svg"}
//                 alt={currentArtwork.title}
//                 className="w-full aspect-[4/5] object-cover"
//               />

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
//                 aria-label="Previous artwork"
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
//                 aria-label="Next artwork"
//               >
//                 <ChevronRight className="h-6 w-6" />
//               </button>

//               {/* Artwork Info Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 space-y-3">
//                 {/* Badges */}
//                 <div className="flex gap-2 flex-wrap">
//                   {currentArtwork.badges.map((badge, index) => (
//                     <span
//                       key={index}
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         index === 0 ? "bg-purple-500 text-white" : "bg-white/20 text-white backdrop-blur-sm"
//                       }`}
//                     >
//                       {badge}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Title and Artist */}
//                 <div>
//                   <h3 className="text-2xl font-bold text-white mb-1">{currentArtwork.title}</h3>
//                   <p className="text-white/80 text-sm">by {currentArtwork.artist}</p>
//                 </div>

//                 {/* Price and Likes */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-baseline gap-2">
//                     <span className="text-2xl font-bold text-white">{currentArtwork.price} RWF</span>
//                     <span className="text-sm text-white/60 line-through">{currentArtwork.originalPrice} RWF</span>
//                   </div>

//                   <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                     <Heart className="h-4 w-4 text-white fill-white" />
//                     <span className="text-white font-medium text-sm">{currentArtwork.likes}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Carousel Dots */}
//               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//                 {artworks.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-2 h-2 rounded-full transition-all ${
//                       index === currentSlide ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default Home

import React from 'react'

const home = () => {
  return (
    <div>home</div>
  )
}

export default home