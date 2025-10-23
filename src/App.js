import React from 'react';
import AboutMeWidget from './components/AboutMeWidget';
import GalleryWidget from './components/GalleryWidget';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Left side - empty with gradient background */}
      <div className="w-1/2 bg-gradient-to-br from-gray-900/50 via-slate-800/50 to-gray-900/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-800/20"></div>
      </div>
      
      {/* Right side - widgets */}
      <div className="w-1/2 flex flex-col justify-center space-y-8 p-8 relative z-10">
        <div className="transform hover:scale-[1.02] transition-transform duration-300">
          <AboutMeWidget />
        </div>
        <div className="transform hover:scale-[1.02] transition-transform duration-300">
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
};

export default App;