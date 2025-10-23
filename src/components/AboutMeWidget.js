import React, { useState } from 'react';

const AboutMeWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="text-gray-300 leading-relaxed animate-fadeIn">
            <p className="mb-4 text-gray-200">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
            </p>
            <p className="text-gray-300">
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        );
      case 'experiences':
        return (
          <div className="text-gray-300 leading-relaxed animate-fadeIn">
            <p className="mb-4 text-gray-200">
              🚀 <span className="font-semibold">3+ Years at Salesforce</span> - Building relationships and driving growth
            </p>
            <p className="mb-3 text-gray-300">
              • Led enterprise sales initiatives resulting in 150% quota achievement
            </p>
            <p className="mb-3 text-gray-300">
              • Managed key accounts worth $2M+ in annual recurring revenue
            </p>
            <p className="text-gray-300">
              • Specialized in CRM solutions and digital transformation strategies
            </p>
          </div>
        );
      case 'recommended':
        return (
          <div className="text-gray-300 leading-relaxed animate-fadeIn">
            <p className="mb-4 text-gray-200">
              💡 <span className="font-semibold">Key Recommendations</span>
            </p>
            <p className="mb-3 text-gray-300">
              • Focus on building authentic relationships rather than just selling products
            </p>
            <p className="mb-3 text-gray-300">
              • Listen actively to understand unique client challenges and pain points
            </p>
            <p className="text-gray-300">
              • Provide tailored solutions that align with long-term business objectives
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-6 relative border border-gray-700/50 backdrop-blur-sm">
      {/* Question mark icon */}
      <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-gray-300 text-sm font-medium">?</span>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
      
      {/* Tab navigation */}
      <div className="flex bg-black/80 rounded-3xl p-1 mb-6 max-w-fit shadow-inner border border-gray-700/30">
        <button
          className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'about' 
              ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg ring-2 ring-gray-500/50' 
              : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'experiences' 
              ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg ring-2 ring-gray-500/50' 
              : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'recommended' 
              ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg ring-2 ring-gray-500/50' 
              : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      
      {/* Content */}
      <div className="pl-2 relative z-10">
        <div className="transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutMeWidget;