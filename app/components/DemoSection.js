'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const DemoSection = () => {
  const [playingVideo, setPlayingVideo] = useState(false);

  return (
    <section id="demo" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-20 w-64 h-64 rounded-full bg-blue-900 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 -bottom-32 w-64 h-64 rounded-full bg-indigo-900 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video demo column */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700 aspect-video relative">
              {/* Video thumbnail or player */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-900/60 z-0"></div>
              <div className="relative h-full flex flex-col items-center justify-center">
                {!playingVideo ? (
                  <>
                    <Image 
                      src="/images/video-thumbnail.jpg" 
                      alt="Politics visualized" 
                      fill
                      className="object-cover z-0 opacity-60"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent z-10"></div>
                    <button 
                      onClick={() => setPlayingVideo(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center z-20 shadow-lg transform transition-transform hover:scale-110 relative"
                    >
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                    <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                      <h3 className="text-lg md:text-xl font-medium">See Politek in action</h3>
                      <p className="text-slate-300 text-sm">2:45 min demo</p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full">
                    <iframe
                      className="w-full h-full absolute top-0 left-0"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                      title="Politek Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
            
            {/* Video highlights */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-900 transition-colors">
                <div className="text-blue-400 text-2xl font-bold">2.5x</div>
                <div className="text-slate-300 text-sm">Faster decision making</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-900 transition-colors">
                <div className="text-indigo-400 text-2xl font-bold">92%</div>
                <div className="text-slate-300 text-sm">More confident choices</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-900 transition-colors">
                <div className="text-cyan-400 text-2xl font-bold">42M</div>
                <div className="text-slate-300 text-sm">Insights delivered</div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 lg:order-2">
            <span className="bg-slate-700 text-blue-400 px-4 py-1 rounded-md text-sm font-medium inline-block mb-4">SEE IT IN ACTION</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Politics visualized for real impact</h2>
            <p className="text-xl text-slate-300 mb-8">
              Watch how Politek transforms complex political information into personal, visual insights that help you make better decisions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-900/30 rounded-lg p-2 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-1">Visual-first approach</h3>
                  <p className="text-slate-300">
                    Complex data transformed into easily digestible visuals showing the direct impact on your life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-indigo-900/30 rounded-lg p-2 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-1">Personalized to you</h3>
                  <p className="text-slate-300">
                    Based on your profile, location, and interests, see only what matters to your specific situation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-cyan-900/30 rounded-lg p-2 text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-1">Lightning fast updates</h3>
                  <p className="text-slate-300">
                    Breaking political news analyzed in real-time, with immediate updates on how it affects you.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-blue-900/20 transition-all inline-flex items-center">
                <span>Try It Free</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <span className="block text-slate-400 text-sm mt-2">No credit card required</span>
            </div>
          </div>
        </div>
        
        {/* Trust indicators - Removed as requested */}
        
      </div>
    </section>
  );
};

export default DemoSection;
