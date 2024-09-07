// import React, { useState, useEffect, useRef } from 'react';

// const RightSide = () => {
//   const [showScrollButton, setShowScrollButton] = useState(false);
//   const scrollContainerRef = useRef(null);

//   const handleScroll = () => {
//     if (scrollContainerRef.current.scrollTop > 200) {
//       setShowScrollButton(true);
//     } else {
//       setShowScrollButton(false);
//     }
//   };

//   // Scroll to top function
//   const scrollToTop = () => {
//     scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     scrollContainer.addEventListener("scroll", handleScroll);
//     return () => {
//       scrollContainer.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col gap-4 h-full flex-1">
//       <div className="bg-gray-800 rounded-lg w-full flex-1 overflow-y-auto p-4 md:p-6 relative" ref={scrollContainerRef}>
//         {/* Navbar */}
//         <nav className="flex flex-col md:flex-row justify-center items-center mb-6">
//           <ul className="flex flex-wrap justify-center gap-4 text-gray-300 text-xs sm:text-sm md:text-base">
//             <li>
//               <a href="#about" className="hover:text-white hover:no-underline hover:bg-gradient-to-r from-purple-400 to-blue-500 py-2 px-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ">
//                 About Me
//               </a>
//             </li>
//             <li>
//               <a href="#experiences" className="hover:text-white hover:no-underline hover:bg-gradient-to-r from-purple-400 to-blue-500 py-2 px-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
//                 Experiences
//               </a>
//             </li>
//             <li>
//               <a href="#recommendations" className="hover:text-white hover:no-underline hover:bg-gradient-to-r from-purple-400 to-blue-500 py-2 px-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
//                 Recommended
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* About Me Section */}
//         <section id="about" className="bg-gray-700 bg-gradient-to-r from-purple-700 to-blue-900 rounded-lg p-4 md:p-6 text-gray-300 shadow-lg mb-6 transform transition-all duration-300 hover:scale-105">
//           <h2 className="text-white text-lg sm:text-xl md:text-3xl font-bold mb-4">About Me</h2>
//           <p className="leading-relaxed text-xs sm:text-sm md:text-base">
//             Hello! I am a software developer passionate about creating beautiful web applications.
//             I love learning new technologies and improving my skills.
//           </p>
//         </section>

//         {/* Experiences Section */}
//         <section id="experiences" className="bg-gray-700 bg-gradient-to-r from-green-600 to-blue-700 rounded-lg p-4 md:p-6 text-gray-300 shadow-lg mb-6 transform transition-all duration-300 hover:scale-105">
//           <h2 className="text-white text-lg sm:text-xl md:text-3xl font-bold mb-4">Experiences</h2>
//           <ul className="list-disc list-inside text-xs sm:text-sm md:text-base">
//             <li>Frontend Developer at XYZ - 2022 to Present</li>
//             <li>Full-Stack Developer at ABC - 2020 to 2022</li>
//           </ul>
//         </section>

//         {/* Recommendations Section */}
//         <section id="recommendations" className="bg-gray-700 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg p-4 md:p-6 text-gray-300 shadow-lg mb-6 transform transition-all duration-300 hover:scale-105">
//           <h2 className="text-white text-lg sm:text-xl md:text-3xl font-bold mb-4">Recommendations</h2>
//           <p className="leading-relaxed text-xs sm:text-sm md:text-base">
//             "A highly skilled developer with great attention to detail." - John Doe
//           </p>
//           <p className="leading-relaxed mt-4 text-xs sm:text-sm md:text-base">
//             "A pleasure to work with and always delivers on time." - Jane Smith
//           </p>
//         </section>

//         {/* Scroll to Top Button */}
//         {showScrollButton && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-125 animate-bounce"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
//             </svg>
//           </button>
//         )}
//       </div>

//       <div className="bg-gray-800 rounded-lg w-full flex-1 p-4 md:p-6">
//         {/* Top Section: Gallery Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//           <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Gallery</h2>
//           <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 text-xs sm:text-sm md:text-base">
//             Add Photo
//           </button>
//         </div>

//         {/* Gallery Section: Left and Right Arrows */}
//         <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
//           <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-110">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Image Display Section */}
//           <div className="flex overflow-x-auto space-x-2 md:space-x-4">
//             <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-600 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
//               <img src="https://via.placeholder.com/150" alt="Image 1" className="object-cover w-full h-full" />
//             </div>
//             <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-600 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
//               <img src="https://via.placeholder.com/150" alt="Image 2" className="object-cover w-full h-full" />
//             </div>
//             <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-600 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
//               <img src="https://via.placeholder.com/150" alt="Image 3" className="object-cover w-full h-full" />
//             </div>
//           </div>

//           <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-110">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RightSide;
import React, { useState, useEffect, useRef } from 'react';

const RightSide = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current.scrollTop > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 h-full flex-1">
      <div className="bg-gray-800 rounded-lg w-full flex-1 overflow-y-auto p-4 md:p-6 relative" ref={scrollContainerRef}>
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-center items-center mb-6">
          <ul className="flex flex-wrap justify-center gap-4 text-gray-300 text-xs sm:text-sm md:text-base">
            <li>
              <a href="#about" className="hover:text-white hover:no-underline hover:bg-gradient-to-r from-purple-400 to-blue-500 py-2 px-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                About Me
              </a>
            </li>
            <li>
              <a href="#experiences" className="hover:text-white hover:no-underline hover:bg-gradient-to-r from-purple-400 to-blue-500 py-2 px-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Experiences
              </a>
            </li>
            <li>
              <a href="#recommendations" className="hover:text-white hover:no-underline hover:bg-gradient-to-r from-purple-400 to-blue-500 py-2 px-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Recommendations
              </a>
            </li>
          </ul>
        </nav>

        {/* About Me Section */}
        <section id="about" className="bg-gray-700 bg-gradient-to-r from-purple-700 to-blue-900 rounded-lg p-4 md:p-6 text-gray-300 shadow-lg mb-6 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-white text-lg sm:text-xl md:text-3xl font-bold mb-4">About Me</h2>
          <p className="leading-relaxed text-xs sm:text-sm md:text-base">
          Hello! I am a software developer passionate about crafting elegant and functional web applications. With a solid foundation in both frontend and backend technologies, I thrive on solving complex problems and delivering seamless user experiences. I am continually driven by a curiosity to explore new technologies, methodologies, and best practices. My commitment to lifelong learning and skill improvement keeps me at the forefront of the industry, enabling me to create innovative solutions and contribute effectively to dynamic teams.
          </p>
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="bg-gray-700 bg-gradient-to-r from-green-600 to-blue-700 rounded-lg p-4 md:p-6 text-gray-300 shadow-lg mb-6 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-white text-lg sm:text-xl md:text-3xl font-bold mb-4">Experiences</h2>
          <ul className="list-disc list-inside text-xs sm:text-sm md:text-base">
            <li>Frontend Developer</li>
            <li>Full-Stack Developer</li>
            <li>Web Technologies: HTML, CSS,Tailwind CSS, Bootstrap, ReactJS, NodeJS, RESTful Web Services</li>
            <li>Languages: Core Java, JavaScript</li>
            <li>Frameworks: Spring Boot, Spring MVC, Spring Security, Collections, Hibernate/JPA</li>
          </ul>
        </section>

        {/* Recommendations Section */}
        <section id="recommendations" className="bg-gray-700 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg p-4 md:p-6 text-gray-300 shadow-lg mb-6 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-white text-lg sm:text-xl md:text-3xl font-bold mb-4">Recommendations</h2>
          <p className="leading-relaxed text-xs sm:text-sm md:text-base">
            A highly skilled developer with great attention to detail.
          </p>
          <p className="leading-relaxed mt-4 text-xs sm:text-sm md:text-base">
            A pleasure to work with and always delivers on time.
          </p>
        </section>

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-125 animate-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="bg-gray-800 rounded-lg w-full flex-1 p-4 md:p-6 h-1/2">
        {/* Top Section: Gallery Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Gallery</h2>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 text-xs sm:text-sm md:text-base">
            Add Photo
          </button>
        </div>

        {/* Gallery Section: Left and Right Arrows */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Display Section */}
          <div className="flex overflow-x-auto space-x-2 md:space-x-4">
            <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-600 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/150" alt="Image 1" className="object-cover w-full h-full" />
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-600 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/150" alt="Image 2" className="object-cover w-full h-full" />
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-600 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/150" alt="Image 3" className="object-cover w-full h-full" />
            </div>
          </div>

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
