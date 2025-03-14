'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'user', text: 'How would this policy affect my small business taxes?' },
    { sender: 'ai', text: 'Based on your business profile (tech startup with 12 employees), you would see a 12% reduction in quarterly taxes due to new R&D credits, saving approximately $3,200 annually.' }
  ]);

  // Animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Shortened to 3 steps with emphasis on visuals and PolitekAI
  const steps = [
    {
      id: 1,
      title: "Visual Policy Summaries",
      description: "Complex policies transformed into clear visuals that you can understand at a glance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      imageContent: (
        <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-lg overflow-hidden">
          <div className="mb-4 flex justify-between items-center">
            <h4 className="text-lg font-medium text-white">Clean Energy Tax Credit</h4>
            <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">Just Passed</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Left column: Before policy */}
            <div className="bg-slate-700/50 p-3 rounded-lg">
              <div className="text-sm text-slate-400 mb-2">Before Policy</div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Solar Installation</span>
                  <span className="text-xs text-red-400">-$18,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Annual Energy Cost</span>
                  <span className="text-xs text-red-400">-$2,400/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Property Value</span>
                  <span className="text-xs text-green-400">+$10,000</span>
                </div>
                <div className="h-px bg-slate-600 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-slate-300">10-Year Net</span>
                  <span className="text-xs font-medium text-red-400">-$2,000</span>
                </div>
              </div>
            </div>
            
            {/* Right column: After policy */}
            <div className="bg-slate-700/50 p-3 rounded-lg border-2 border-green-500/30">
              <div className="text-sm text-slate-400 mb-2">After Policy</div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Solar Installation</span>
                  <span className="text-xs text-red-400">-$9,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Annual Energy Cost</span>
                  <span className="text-xs text-red-400">-$2,400/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Property Value</span>
                  <span className="text-xs text-green-400">+$10,000</span>
                </div>
                <div className="h-px bg-slate-600 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-slate-300">10-Year Net</span>
                  <span className="text-xs font-medium text-green-400">+$25,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs h-10 bg-slate-700 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[90%] bg-gradient-to-r from-green-500 to-green-400"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-sm font-medium">90% Benefit</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Personalized Impact Analysis",
      description: "See exactly how each policy affects your finances, time, and community based on your profile.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      imageContent: (
        <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-full mr-3 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-medium">Your Impact Dashboard</h4>
              <p className="text-sm text-slate-400">Based on your profile and location</p>
            </div>
          </div>
          <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-300">Your Profile</span>
              <button className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-300 hover:bg-slate-500 transition-colors">Edit</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">Homeowner</span>
              <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/30">Small Business</span>
              <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-500/30">Parent</span>
              <span className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-500/30">Austin, TX</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-slate-700/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span className="text-sm font-medium text-white">Financial Impact</span>
                </div>
                <span className="text-green-400 font-bold">+$4,250/year</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[75%] animate-pulse"></div>
              </div>
              <div className="flex mt-2 gap-x-2">
                <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-0.5 rounded">Tax Credits: +$2,500</span>
                <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-0.5 rounded">Energy Savings: +$1,750</span>
              </div>
            </div>
            <div className="p-3 bg-slate-700/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                  <span className="text-sm font-medium text-white">Local Schools</span>
                </div>
                <span className="text-blue-400 font-bold">+18% funding</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[60%] animate-pulse"></div>
              </div>
              <div className="flex mt-2 gap-x-2">
                <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-0.5 rounded">New STEM Programs</span>
                <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-0.5 rounded">Smaller Class Sizes</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Ask Questions with PolitekAI",
      description: "Have follow-up questions? Chat directly with our AI assistant to clarify policy details.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      imageContent: (
        <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-lg">
          <div className="mb-4 flex justify-between items-center">
            <h4 className="text-lg font-medium text-white flex items-center">
              <span className="w-4 h-4 bg-indigo-500 rounded-full mr-2 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
              </span>
              PolitekAI Assistant
            </h4>
          </div>
          <div className="bg-slate-900 rounded-lg p-3 mb-4 max-h-60 overflow-y-auto space-y-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center relative">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about policy details..."
              className="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button 
              className="absolute right-2 text-indigo-400 hover:text-indigo-300 p-1"
              onClick={() => {
                if (chatInput.trim()) {
                  setChatMessages([...chatMessages, { sender: 'user', text: chatInput }]);
                  setChatInput('');
                  // Simulate AI response
                  setTimeout(() => {
                    setChatMessages(prev => [...prev, { 
                      sender: 'ai', 
                      text: 'This policy would reduce your business tax burden by approximately 12% through new deductions for technology investments and employee training programs.'
                    }]);
                  }, 1000);
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="mt-3 text-xs text-slate-400">
            <div className="flex items-start">
              <svg className="h-4 w-4 text-indigo-400 mt-0.5 flex-shrink-0 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Ask specific questions about how policies affect you personally</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -left-64 top-1/4 w-96 h-96 bg-indigo-900 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -right-64 bottom-1/4 w-96 h-96 bg-blue-900 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute left-1/3 top-3/4 w-64 h-64 bg-cyan-900 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <span className="bg-slate-700 text-indigo-400 px-4 py-1 rounded-md text-sm font-medium inline-block mb-4 shadow-lg shadow-indigo-900/20">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Visual-first political clarity</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See policy impacts at a glance with clear visuals and minimal text—politics that anyone can understand.
          </p>
        </motion.div>

        {/* Interactive Step Navigator */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500" 
                style={{ width: `${(activeStep - 1) * 50}%` }}
              ></div>
            </div>

            {/* Step circles */}
            <div className="flex justify-between relative z-10">
              {steps.map(step => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep >= step.id ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-indigo-900/30' : 'bg-slate-700 text-slate-400'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step.id}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Step Content */}
        {steps.map(step => (
          <motion.div 
            key={step.id} 
            initial="hidden"
            animate={activeStep === step.id ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } }
            }}
            className="transition-all duration-500"
          >
            {activeStep === step.id && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white mr-4 shadow-lg shadow-indigo-900/20">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-300 text-lg mb-6">{step.description}</p>
                  <div className="flex space-x-4">
                    {step.id > 1 && (
                      <motion.button 
                        onClick={() => setActiveStep(step.id - 1)}
                        className="px-5 py-2 border border-slate-600 rounded-md text-slate-300 hover:bg-slate-700 transition-colors flex items-center"
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Previous
                      </motion.button>
                    )}
                    {step.id < steps.length && (
                      <motion.button 
                        onClick={() => setActiveStep(step.id + 1)}
                        className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-md text-white transition-all flex items-center shadow-md hover:shadow-lg hover:shadow-indigo-900/20"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </motion.button>
                    )}
                  </div>
                </div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full transform transition-all duration-300 hover:scale-[1.02]">
                    {step.imageContent}
                  </div>
                  <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 blur-2xl opacity-30"></div>
                  <div className="absolute -left-5 -bottom-5 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 blur-2xl opacity-30"></div>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
