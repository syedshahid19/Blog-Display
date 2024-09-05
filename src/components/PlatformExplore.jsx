import React from 'react';
import '../index.css'; // Ensure this CSS file is included

const PlatformExplore = () => {
  return (
    <div className='platform-container bg-black text-white w-full h-full mt-24 relative flex flex-col lg:flex-row'>
      <div className='content p-4 lg:p-16 flex flex-col justify-center ml-20'>
        <p className='text-4xl lg:text-6xl font-bold mb-7'>See the Copy.ai platform in action</p>
        <p className='mb-7'>Learn how Copy.ai's Marketing OS can effortlessly streamline your tasks, eliminate the constant back-and-forth, and execute your marketing strategies at scale.</p>
        <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8'>
          <button className='bg-white text-black hover:bg-violet-500 hover:text-white duration-200 ease-in font-semibold px-6 py-3 lg:px-10 lg:py-5 rounded-lg'>Explore the Platform</button>
          <button className='bg-transparent text-white hover:animate-wiggle font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-lg border border-white'>Try for free</button>
        </div>
      </div>
      <div className='background-animation relative'>
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ff6584", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#6c63ff", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <g stroke="url(#gradient)" strokeWidth="2" fill="none">
            {/* Existing Paths */}
            <path className="draw-line" d="M50,300 L150,200 L250,300 L350,200 L450,300 L550,200 L650,300" />
            <path className="draw-line" d="M100,500 L200,400 L300,500 L400,400 L500,500 L600,400 L700,500" />
            <path className="draw-line" d="M50,100 L200,100 L200,300 L50,300 Z" />
            
            {/* Hexagonal Lines */}
            <path className="draw-line" d="M100,100 L200,50 L300,100 L300,200 L200,250 L100,200 Z" />
            <path className="draw-line" d="M400,100 L500,50 L600,100 L600,200 L500,250 L400,200 Z" />
            <path className="draw-line" d="M100,300 L200,250 L300,300 L300,400 L200,450 L100,400 Z" />
            <path className="draw-line" d="M400,300 L500,250 L600,300 L600,400 L500,450 L400,400 Z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default PlatformExplore;
