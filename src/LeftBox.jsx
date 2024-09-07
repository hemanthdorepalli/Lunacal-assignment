import React from 'react';

const LeftSide = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg h-full w-1/2 md:block hidden relative overflow-hidden">
    
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-2xl font-bold">
        <span>
        <svg
        className="w-32 h-32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          className="fill-blue-400"
        >
          <animate
            attributeName="cy"
            values="50;10;50"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
        </span>
      </div>
    </div>
  );
};

export default LeftSide;
