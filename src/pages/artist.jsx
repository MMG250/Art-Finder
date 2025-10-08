import React from 'react'

const Artist = () => {
  return (
    <div className='bg-white items-center justify-center text-white'>
        <section className='bg-gradient-to-r from-blue-600 via-orange-300 to-blue-600 text-white flex flex-col items-center justify-center w-[70%] min-h-96 mx-auto text-center'>
            <div className='mb-6 px-5 py-2 bg-gradient-to-r from-blue-600 to-orange-300 text-sm rounded-full text-white hover:bg-white/20 transition '>7 Verified Artists</div>
           <h1 className="text-4xl sm:text-6xl font-bold mb-3">
          {" "}
          Meet Our
          <span className="text-blue-600">Creative Artists</span>
        </h1>
        <p className='text-2xl mb-8'>Connect directly with talented artists from around the world. Each artist is verified and ready to bring your creative visions to life.</p>

        <div className="flex space-x-64">
            <button className='rounded-lg border text-gray-200 hover:bg-blue-600 transition  '>Search artists</button>
            <button className='rounded-lg border text-gray-200 hover:bg-blue-600 transition'>Filter</button>
        </div>
        </section>
    </div>
  )
}

export default Artist