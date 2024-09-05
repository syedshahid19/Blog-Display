import React from 'react';
import '../../src/index.css'

const Welcome = () => {
  return (
    <div className="bgImageWrapper mx-8">
      <div className="flex flex-col items-center justify-center w-full lg:w-9/12 md:w-9/12 sm:w-11/12 font-inter mx-auto px-4">
        <h1 className="text-4xl lg:text-6xl font-semibold mb-4 lg:mb-8">Welcome to the Copy.ai blog</h1>
        <p className="text-base lg:text-lg font-normal text-richblack-400 mb-4 lg:mb-8 text-center">
          Thoughts on the future of AI in sales and marketing. You'll find practical content, tips & tricks, and how-to guides from the people creating it.
        </p>
        <div className="lg:border md:border border-pure-greys-25 flex flex-col lg:flex-row md:flex-row items-center p-2 rounded-md w-full lg:w-11/12">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="border border-pure-greys-25 lg:border-0 md:border-0 lg:border-r lg:border-pure-greys-25 md:border-r md:border-pure-greys-25 lg:ml-5 md:ml-5 lg:focus:outline-none md:focus:outline-none w-full lg:w-72 md:w-64 p-3 mb-4 lg:mb-0 md:mb-0"
          />
          <select 
            className="border border-pure-greys-25 lg:border-0 md:border-0 lg:border-r lg:border-pure-greys-25 md:border-r md:border-pure-greys-25 w-full lg:w-72 md:w-64 lg:focus:outline-none md:focus:outline-none p-3 mb-4 lg:mb-0 md:mb-0 lg:mr-7 md:mr-7" 
          >
              <option value="" selected disabled hidden className='text-richblack-400'>Select your role</option>
              <option>Marketing</option>
              <option>Sales</option>
          </select>
          <button className="bg-black text-white font-bold py-3 lg:py-5 px-6 lg:px-10 rounded-lg hover:bg-violet-500 transition-all duration-300 ease-out w-full lg:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
