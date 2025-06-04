"use client"

import React, { useState } from 'react'
import AboutHero from '../AboutHero'

export default function Membership() {

    const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 'trail',
      title: 'Trail Explorer',
      price: '$29',
      period: 'Perfect for occasional hikers',
      description: 'Start your Oregon adventure with essential access',
      features: [
        'Access to 15+ state parks',
        'Basic trail maps',
        'Quarterly newsletter',
        '10% discount on gear rentals',
        'Online community access'
      ],
      color: 'red',
      highlight: 'Best for Beginners'
    },
    {
      id: 'mountain',
      title: 'Mountain Adventurer',
      price: '$59',
      period: 'For serious outdoor enthusiasts',
      description: 'Elevate your Oregon experience',
      features: [
        'All Trail Explorer benefits',
        'Unlimited state park access',
        'Premium trail maps & guides',
        '20% discount on gear rentals',
        'Exclusive member events',
        'Free entry to 5 national parks'
      ],
      color: 'blue',
      highlight: 'Most Popular'
    },
    {
      id: 'wilderness',
      title: 'Wilderness Elite',
      price: '$99',
      period: 'For the ultimate Oregon experience',
      description: 'The complete Oregon wilderness package',
      features: [
        'All Mountain Adventurer benefits',
        'Guided tours (2 per year)',
        '30% discount on gear rentals',
        'VIP access to special events',
        'Free camping permits',
        'Priority booking for cabins',
        'Emergency rescue coverage'
      ],
      color: 'green',
      highlight: 'Premium Experience'
    }
  ];

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getCardClasses = (id) => {
    let classes = "relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-400 ease-in-out ";
    
    if (hoveredCard && hoveredCard !== id) {
      classes += "opacity-75 blur-sm scale-95";
    } else {
      classes += "opacity-100 blur-none scale-100";
    }
    
    return classes;
  };

  const getButtonClasses = (color) => {
    switch (color) {
      case 'red':
        return "bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800";
      case 'blue':
        return "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800";
      case 'green':
        return "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-700";
    }
  };

  const getBarClasses = (color) => {
    switch (color) {
      case 'red':
        return "bg-red-500";
      case 'blue':
        return "bg-blue-500";
      case 'green':
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTextClasses = (color) => {
    switch (color) {
      case 'red':
        return "text-red-700";
      case 'blue':
        return "text-blue-700";
      case 'green':
        return "text-green-700";
      default:
        return "text-gray-700";
    }
  };
  
  return (
    <>



<div className="min-h-screen bg-gradient-to-br from-[#52010b] via-[#7a1c20] to-[#a8323a] py-16 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center my-16">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f7c1ad] via-[#f59c8d] to-[#f27472] mb-4">
            Oregon Adventure Membership
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the perfect plan for your outdoor adventures in the beautiful state of Oregon. All plans include access to exclusive benefits and experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={getCardClasses(plan.id)}
              onMouseEnter={() => handleMouseEnter(plan.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: hoveredCard === plan.id ? 'scale(1.05)' : '',
                zIndex: hoveredCard === plan.id ? 10 : 1
              }}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full z-10">
                  {plan.highlight}
                </div>
              )}
              
              <div className={`h-2 ${getBarClasses(plan.color)}`}></div>
              
              <div className="bg-white p-8">
                <h2 className={`text-2xl font-bold ${getTextClasses(plan.color)} mb-2`}>
                  {plan.title}
                </h2>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                
                <div className="flex items-end mb-6">
                  <span className={`text-5xl font-bold ${getTextClasses(plan.color)}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                
                <p className="text-gray-500 text-sm mb-8">{plan.period}</p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg 
                        className={`h-5 w-5 ${getTextClasses(plan.color)} flex-shrink-0 mr-2 mt-0.5`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white ${getButtonClasses(plan.color)} transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-200">
            All plans include a 30-day money-back guarantee. Adventure responsibly!
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-white text-sm">Trail Explorer</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-white text-sm">Mountain Adventurer</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-white text-sm">Wilderness Elite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    </>
  )
}
