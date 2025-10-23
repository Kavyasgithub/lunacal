import React, { useState } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&auto=format'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addImage = () => {
    const newImages = [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop&auto=format'
    ];
    const randomImage = newImages[Math.floor(Math.random() * newImages.length)];
    setImages([...images, randomImage]);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, images.length - 2));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, images.length - 2)) % Math.max(1, images.length - 2));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-6 relative border border-gray-700/50 backdrop-blur-sm">
      {/* Question mark icon */}
      <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-gray-300 text-sm font-medium">?</span>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
      
      {/* Header with Gallery label and controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="bg-black/80 rounded-2xl px-6 py-3 shadow-lg border border-gray-700/30">
            <span className="text-white font-medium">Gallery</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-600/50"
            onClick={addImage}
          >
            ✨ ADD IMAGE
          </button>
          
          <div className="flex space-x-2">
            <button
              onClick={prevImage}
              className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-gray-600/50"
            >
              <span className="text-white text-lg">←</span>
            </button>
            <button
              onClick={nextImage}
              className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-gray-600/50"
            >
              <span className="text-white text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="flex space-x-4 overflow-hidden relative z-10">
        {visibleImages.map((src, index) => (
          <div
            key={currentIndex + index}
            className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 group cursor-pointer relative border border-gray-600/30"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src={src}
              alt={`Gallery ${currentIndex + index}`}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-blue-400/50 rounded-2xl transition-all duration-300"></div>
          </div>
        ))}
      </div>
      
      {/* Image counter */}
      <div className="flex justify-center mt-4">
        <div className="bg-black/60 rounded-full px-3 py-1 text-xs text-gray-300 border border-gray-700/50">
          {currentIndex + 1} - {Math.min(currentIndex + 3, images.length)} of {images.length}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;