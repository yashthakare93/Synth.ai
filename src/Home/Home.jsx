import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleTryVerseClick = () => {
    navigate('/verce.ai');
  };

  return (
    <div className="min-h-screen lg:bg-gradient-to-r bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
      <div className="flex flex-col justify-center items-start lg:p-24 p-20">
          <div className="flex ">
            <h1 className="text-5xl font-bold text-white ">Verce AI</h1>
          </div>
          <h4 className="lg:text-2xl sm:text-sm text-white pt-2">
            Expand your knowledge and capabilities – get answers to your questions, get things done, create and connect with Verse AI.
          </h4>
          <button
            onClick={handleTryVerseClick}
            className="mt-4 px-6 py-3 text-lg font-semibold rounded-full bg-white text-black"
          >
            Try Verse AI
          </button>
        </div>
        <div className="hidden md:block ">
        <svg className="animate-bounce w-16 h-16 text-white absolute bottom-8 right-8 " fill="none" stroke='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          
          <svg className="animate-spin w-16 h-16 text-white absolute  bottom-36 right-49" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg><svg className="animate-pulse w-20 h-20 text-white absolute  bottom-56 right-96" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path>
          </svg>
          <svg className="animate-pulse w-5 h-5 text-white absolute  bottom-46 right-44 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path>
          </svg>
          <svg className="animate-pulse w-20 h-20 text-gray-100 absolute  bottom-56 right-96 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
