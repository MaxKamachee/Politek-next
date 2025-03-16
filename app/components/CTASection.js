'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ChevronRight, CheckCircle, Smartphone } from 'lucide-react';

const SignupCTASection = () => {
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
    <section id="signup" className="py-20 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-64 w-96 h-96 bg-indigo-900 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 -right-64 w-96 h-96 bg-blue-900 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-72 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 0L800 400H0L400 0Z" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Get political clarity <span className="text-blue-400">instantly</span> on any device
          </h2>
          
          <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
            Create your free account to access personalized policy impact assessments and visualizations. See exactly how politics affects your life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center">
              <CheckCircle className="text-green-400 h-5 w-5 mr-2" />
              <span className="text-white">2 policy views/week</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-400 h-5 w-5 mr-2" />
              <span className="text-white">Weekly resets</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-400 h-5 w-5 mr-2" />
              <span className="text-white">No credit card</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-400 h-5 w-5 mr-2" />
              <span className="text-white">Mobile & desktop</span>
            </div>
          </div>
        </div>
        
        {/* Signup Form Section with device mockups */}
        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Create your free account</h3>
              <p className="text-slate-300">Start getting personalized policy insights today</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-slate-300 mb-1">Email address</label>
                <input 
                  type="email" 
                  id="signup-email"
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
                className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center group"
              >
                <span>{isLoading ? 'Processing...' : 'Continue to Complete Your Profile'}</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-slate-400 text-center mt-4">
                By signing up, you agree to our <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
              </p>
            </form>
          </div>
          
          <div className="md:col-span-2 flex flex-col justify-center items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl h-96 w-48 p-1 shadow-xl rotate-1 transform">
                <div className="bg-slate-900 rounded-3xl h-full w-full overflow-hidden">
                  {/* This would be the mobile app screenshot */}
                  <div className="h-full w-full bg-slate-800 flex flex-col">
                    <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
                      <div className="text-white text-xs font-bold">Politek</div>
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                      </div>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                      <div className="bg-slate-700 rounded-lg p-2 mb-2">
                        <div className="text-xs text-white font-semibold">Dashboard</div>
                        <div className="h-1 w-1/3 bg-blue-400 rounded-full mt-1"></div>
                      </div>
                      
                      <div className="bg-slate-900/60 rounded-lg p-2 mb-2">
                        <div className="text-xs text-slate-300">Healthcare Policy</div>
                        <div className="h-1 w-1/4 bg-slate-600 rounded-full mt-1"></div>
                      </div>
                      
                      <div className="bg-slate-900/60 rounded-lg p-2 mb-2">
                        <div className="text-xs text-slate-300">Tax Policy</div>
                        <div className="h-1 w-1/4 bg-slate-600 rounded-full mt-1"></div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg p-2 mt-auto">
                        <div className="text-xs text-white font-semibold">Your Impact</div>
                        <div className="h-1 w-1/2 bg-indigo-400 rounded-full mt-1"></div>
                        <div className="mt-2 flex">
                          <div className="h-2 w-8 bg-green-500 rounded-full"></div>
                          <div className="h-2 w-5 bg-blue-500 rounded-full ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-400/20 h-2 w-20 rounded-full blur-md"></div>
            </div>
            <div className="text-sm text-slate-400 mt-6 text-center">
              <Smartphone className="h-5 w-5 text-blue-400 mx-auto mb-2" />
              Available on all devices
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="pt-4">
            <p className="text-slate-400 mb-2">Trusted by people across the political spectrum</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-2 text-white font-medium">4.9/5</span>
              </div>
              <div className="text-white font-medium">
                <span className="text-blue-400 font-bold">50K+</span> Active Users
              </div>
              <div className="text-white font-medium">
                <span className="text-green-400 font-bold">100%</span> Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupCTASection;