'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('features');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute left-0 top-1/3 w-64 h-64 rounded-full bg-blue-900 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute right-0 bottom-1/3 w-64 h-64 rounded-full bg-indigo-900 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
      <div className="absolute left-1/4 bottom-0 w-32 h-32 rounded-full bg-cyan-900 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <span className="bg-slate-800 text-blue-400 px-4 py-1 rounded-md text-sm font-medium inline-block mb-4 shadow-lg shadow-blue-900/20">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Political information reimagined</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cut through the noise and see exactly how politics affects your daily life with visual-first insights.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
        >
          {/* Feature 1: Visual Impact Metrics */}
          <motion.div 
            variants={fadeInUpVariants}
            className="bg-slate-800 rounded-xl p-6 border border-blue-500 shadow-lg shadow-blue-900/20 hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-blue-900/30 rounded-lg mb-6 flex items-center justify-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Visual Impact Metrics</h3>
            <p className="text-slate-300 mb-4">See the real-world impact of policies with clear visualizations of dollars saved, time gained, and more.</p>
            
            {/* Data visualization example */}
            <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <h4 className="text-sm font-medium text-slate-400 mb-2">Example: Tax Policy Impact</h4>
              <div className="flex items-end space-x-3 mb-3 h-24">
                <div className="relative group">
                  <div className="bg-blue-500 h-16 w-8 rounded-t-sm" title="Current"></div>
                  <div className="absolute -bottom-6 left-0 text-xs text-slate-500 transform -translate-x-1/4">Current</div>
                </div>
                <div className="relative group">
                  <div className="bg-blue-600 h-10 w-8 rounded-t-sm" title="Proposed"></div>
                  <div className="absolute -bottom-6 left-0 text-xs text-slate-500 transform -translate-x-1/4">Proposed</div>
                </div>
                <div className="relative group">
                  <div className="bg-green-500 h-24 w-8 rounded-t-sm" title="Savings"></div>
                  <div className="absolute -bottom-6 left-0 text-xs text-slate-500 transform -translate-x-1/4">Savings</div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-slate-400">Your savings:</span>
                <span className="text-lg font-bold text-green-500">$1,240/yr</span>
              </div>
            </div>
          </motion.div>
          
          {/* Feature 2: Personalized */}
          <motion.div 
            variants={fadeInUpVariants}
            className="bg-slate-800 rounded-xl p-6 border border-indigo-500 shadow-lg shadow-indigo-900/20 hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-indigo-900/30 rounded-lg mb-6 flex items-center justify-center text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Personalized Insights</h3>
            <p className="text-slate-300 mb-4">Receive tailored analysis based on your location, occupation, family status, and interests.</p>
            
            {/* Personalization example */}
            <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <h4 className="text-sm font-medium text-slate-400 mb-3">Your profile impacts:</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span> Teacher</span>
                  <span className="text-sm text-indigo-400">+$420 supplies budget</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span> Parent</span>
                  <span className="text-sm text-blue-400">+$300 child tax credit</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span> Homeowner</span>
                  <span className="text-sm text-emerald-400">+$520 energy credit</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Feature 3: Fast */}
          <motion.div 
            variants={fadeInUpVariants}
            className="bg-slate-800 rounded-xl p-6 border border-cyan-500 shadow-lg shadow-cyan-900/20 hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-cyan-900/30 rounded-lg mb-6 flex items-center justify-center text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Lightning Fast Understanding</h3>
            <p className="text-slate-300 mb-4">Get the information you need in 30 seconds, not 30 minutes. No more trudging through dense reports.</p>
            
            {/* Time-saving example */}
            <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <h4 className="text-sm font-medium text-slate-400 mb-2">Healthcare Bill Breakdown</h4>
              <div className="flex items-center mt-3">
                <div className="h-3 rounded-full bg-slate-700 flex-grow overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-[30%]"></div>
                </div>
                <span className="text-sm text-cyan-400 ml-3 whitespace-nowrap">30 sec</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">vs. 30+ minutes reading full legislation</div>
              <div className="mt-3 flex items-start space-x-2">
                <svg className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-slate-300">Key provisions summarized in natural language</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional CTA */}
        <div className="text-center mt-8">
          <motion.button 
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={fadeInUpVariants}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3 rounded-md inline-flex items-center transition-all shadow-lg hover:shadow-blue-900/20 text-lg font-medium group"
          >
            Explore all features
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
