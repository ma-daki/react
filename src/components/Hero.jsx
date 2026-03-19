import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className="flex flex-col item-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center tracking-wide">
        VirtualR build <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text">tools for developers</span>
      </h1>
      <p className="text-center text-lg text-neutral-500 max-w-4xl mt-10">
        Empower your creativity and productivity with our intuitive platform, designed to streamline your workflow and bring your ideas to life.
      </p>
      <div className="flex justify-center space-x-4 my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 border rounded-md ml-2">Start for free</a>
        <a href="#" className="bg-transparent hover:bg-neutral-800 border py-2 px-2 border rounded-md ml-2">Documentation</a>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-lg shadow-orange-900/20 mx-2 my-4'>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-lg shadow-orange-900/20 mx-2 my-4'>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Hero