'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Store email in localStorage for use on the profile page
    localStorage.setItem('userEmail', email);
    
    // Simulate a short delay for UX purposes
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to profile completion page
      router.push('/profile');
    }, 500);
  };

  return (
    <section className="container mx-auto px-4 pt-32 pb-24 relative">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-900 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-indigo-900 opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-cyan-900 opacity-10 rounded-full blur-3xl animate-blob animation-delay-6000"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up animation-delay-200">
          Politics <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">visualized</span>
            <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 400 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C49.1406 4.05226 146.854 -0.923666 198.663 3.99626C250.473 8.91618 292.155 7.63822 352.716 5.07916C390.847 3.4996 431.544 1.99996 445 1.99996" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <defs>
                <linearGradient id="paint0_linear" x1="2" y1="2" x2="445" y2="2" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
          </span> for your decisions
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          See <span className="text-white font-medium">how politics affects you personally</span>, with no bias and no jargon. Access your dashboard from any device.
        </p>
      </div>
      
      {/* Sign Up Box */}
      <div className="max-w-2xl mx-auto mb-16 p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-xl animate-fade-in-up animation-delay-600">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Try Politek for free</h2>
          <p className="text-slate-300">Get personalized political insights with our app</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email address</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com" 
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-8 py-4 rounded-md flex items-center justify-center transition-all text-lg shadow-lg hover:shadow-blue-900/20 group"
          >
            {isLoading ? 'Processing...' : 'Create Your Free Account'}
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="text-center">
            <p className="text-xs text-slate-400 mt-2">
              Free account includes 2 policy views per week
            </p>
            <div className="flex items-center justify-center mt-4 space-x-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm text-slate-300">Secure & Private</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-slate-300">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </form>
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
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.5s forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>
    </section>
  );
};

export default Hero;