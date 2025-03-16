'use client';

import React, { useState, useEffect } from 'react';
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
          <span className="bg-slate-800 text-blue-400 px-4 py-1 rounded-md text-sm font-medium inline-block mb-4 shadow-lg shadow-blue-900/20">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Politics explained, personalized</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how politics affects you specifically, with interactive visualizations in our intuitive dashboard.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
        >
          {/* Feature 1: Dashboard */}
          <motion.div 
            variants={fadeInUpVariants}
            className="bg-slate-800 rounded-xl p-6 border border-blue-500 shadow-lg shadow-blue-900/20 hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-blue-900/30 rounded-lg mb-6 flex items-center justify-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Interactive Dashboard</h3>
            <p className="text-slate-300 mb-4">Access your personal policy dashboard from any device to see how politics directly affects your situation.</p>
            
            {/* Example box */}
            <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <h4 className="text-sm font-medium text-slate-400 mb-3">Free Access</h4>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2 detailed policy views per week
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly resets for fresh insights
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Feature 2: Personalized Impact */}
          <motion.div 
            variants={fadeInUpVariants}
            className="bg-slate-800 rounded-xl p-6 border border-indigo-500 shadow-lg shadow-indigo-900/20 hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-indigo-900/30 rounded-lg mb-6 flex items-center justify-center text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Personalized Impact</h3>
            <p className="text-slate-300 mb-4">Each policy is analyzed based on your profile to show specifically how it affects your finances, career, and community.</p>
            
            {/* Example box */}
            <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <h4 className="text-sm font-medium text-slate-400 mb-3">Sample Impact</h4>
              <p className="text-sm text-slate-300"><span className="text-indigo-400 font-medium">Based on your profile:</span> As a homeowner in Arizona considering solar, this tax credit would reduce your installation costs by approximately $9,000.</p>
            </div>
          </motion.div>
          
          {/* Feature 3: Mobile & Desktop */}
          <motion.div 
            variants={fadeInUpVariants}
            className="bg-slate-800 rounded-xl p-6 border border-cyan-500 shadow-lg shadow-cyan-900/20 hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-cyan-900/30 rounded-lg mb-6 flex items-center justify-center text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Access Anywhere</h3>
            <p className="text-slate-300 mb-4">Use Politek on any device - desktop, tablet, or mobile. Your personalized dashboard is always available where you need it.</p>
            
            {/* Example box */}
            <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <h4 className="text-sm font-medium text-slate-400 mb-3">Available On</h4>
              <div className="flex justify-around">
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-slate-400 mt-1">Desktop</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-slate-400 mt-1">Mobile</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-slate-400 mt-1">Tablet</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Weekly Limits Feature Highlight */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
          className="max-w-3xl mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/20 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="w-24 h-24 rounded-full bg-blue-900/40 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Fresh Insights Every Week</h3>
              <p className="text-slate-300 mb-4">
                Our free tier gives you access to 2 detailed policy analyses per week. Your views reset weekly, so you always get fresh content to explore.
              </p>
              <div className="flex items-center">
                <div className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Weekly resets</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Upgrade anytime</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;