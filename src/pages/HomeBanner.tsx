import React from 'react';

const HomeBanner = () => {
  return (

    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">


      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4">

        <h1 className=" md:text-6xl lg:text-7xl font-bold mb-2">
          ProjectUX
        </h1>
        
        <p className="text-base font-light mb-8">
          established by the UTS UXID Society
        </p>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white cursor-pointer">
   
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
