'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Play, Star } from 'lucide-react';

const Hero = () => {
  const [isAITyping, setIsAITyping] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [activePolicy, setActivePolicy] = useState('healthcare');
  const fullText = "How will this policy affect my small business?";
  
  // Simulated typing effect
  useEffect(() => {
    if (isAITyping) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsAITyping(false);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isAITyping]);

  // Sample policy data
  const policyTypes = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Universal Healthcare Coverage Act',
      impact: 'Family premiums reduced by $4,800/year',
      highlight: 'Expanded coverage for all pre-existing conditions',
      status: 'Proposed'
    },
    {
      id: 'education',
      name: 'Education',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: 'Education Funding Reform',
      impact: 'School funding increased by 28% in your district',
      highlight: 'Reduced class sizes and expanded STEM programs',
      status: 'Just Passed'
    },
    {
      id: 'taxes',
      name: 'Taxes',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Small Business Tax Relief Act',
      impact: 'Estimated $8,500 yearly savings for your business',
      highlight: 'New deductions for technology investments and hiring',
      status: 'In Committee'
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Infrastructure Modernization Plan',
      impact: 'Commute time reduced by 15 minutes',
      highlight: '$12M allocated to improve roads in your county',
      status: 'Just Passed'
    },
  ];

  const currentPolicy = policyTypes.find(policy => policy.id === activePolicy);

  return (
    <section className="container mx-auto px-4 pt-32 pb-24 relative">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-900 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-indigo-900 opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-cyan-900 opacity-10 rounded-full blur-3xl animate-blob animation-delay-6000"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up animation-delay-200">
          Visualize <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">policy impact</span>
            <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 400 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C49.1406 4.05226 146.854 -0.923666 198.663 3.99626C250.473 8.91618 292.155 7.63822 352.716 5.07916C390.847 3.4996 431.544 1.99996 445 1.99996" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <defs>
                <linearGradient id="paint0_linear" x1="2" y1="2" x2="445" y2="2" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
          </span> on your life
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          See how <span className="text-white font-medium">any policy</span> affects your finances, family, and future with clear visual breakdowns.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up animation-delay-600">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-8 py-4 rounded-md flex items-center justify-center transition-all text-lg shadow-lg hover:shadow-blue-900/20 group">
            Visualize Your Impact
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      
      
      {/* Add animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: scale(1); }
          33% { transform: scale(1.1); }
          66% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.5s forwards;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;
