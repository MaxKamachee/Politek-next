'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "High School Teacher",
      avatar: "/images/avatars/avatar-1.jpg",
      quote: "Politek has transformed how I understand education policy. I can instantly see how new legislation will affect my classroom budget and teaching resources.",
      impact: "Saved 5 hours/week of research time",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "Small Business Owner",
      avatar: "/images/avatars/avatar-2.jpg",
      quote: "As a business owner, I never had time to understand how tax policies affected me specifically. Now I get clear visuals showing exactly how each proposal impacts my bottom line.",
      impact: "Identified $4,200 in tax benefits",
      rating: 5
    },
    {
      id: 3,
      name: "Maya Williams",
      role: "Healthcare Professional",
      avatar: "/images/avatars/avatar-3.jpg",
      quote: "I used to feel lost in the healthcare policy debate. Politek helped me see exactly how legislation would affect my patients and my own medical practice.",
      impact: "Better informed about policy impacts",
      rating: 4
    },
    {
      id: 4,
      name: "James Rodriguez",
      role: "Parent & Homeowner",
      avatar: "/images/avatars/avatar-4.jpg",
      quote: "Finally, a way to understand politics that doesn't waste my time! I can see exactly how policies affect my family's finances, our schools, and our community in seconds.",
      impact: "Made more informed voting decisions",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-slate-600'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900 rounded-full opacity-[0.07] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-slate-800 text-indigo-400 px-4 py-1 rounded-md text-sm font-medium inline-block mb-4">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Real people. Real impact.</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how Politek is changing the way people interact with politics.
          </p>
        </div>
        
        {/* Featured testimonial carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="testimonial-wrapper relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-item transition-all duration-700 ease-in-out ${index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-700">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-0">
                    <div className="md:col-span-2 md:order-2 bg-slate-700 relative min-h-[320px] md:min-h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 z-10 md:hidden"></div>
                      
                      {/* Fallback for missing image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900/40 to-blue-900/40">
                        <div className="w-24 h-24 rounded-full bg-slate-600 flex items-center justify-center text-white text-2xl font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-5 md:order-1 p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="mb-6">
                        <p className="text-xl text-white font-medium leading-relaxed">"{testimonial.quote}"</p>
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center text-white font-bold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-bold">{testimonial.name}</h4>
                          <p className="text-slate-400 text-sm">{testimonial.role}</p>
                        </div>
                        <div className="ml-auto bg-indigo-900/30 px-3 py-1 rounded-lg border border-indigo-500/30">
                          <p className="text-indigo-400 text-sm">{testimonial.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-indigo-500 w-8' : 'bg-slate-700'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Logos section */}
        <div className="mb-16">
          <p className="text-center text-slate-400 mb-8">Trusted by organizations across the political spectrum</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-32 h-16 bg-slate-800 rounded-md flex items-center justify-center text-white text-xs">
                <span className="font-medium">Think Tank Alpha</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-32 h-16 bg-slate-800 rounded-md flex items-center justify-center text-white text-xs">
                <span className="font-medium">Policy Institute</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-32 h-16 bg-slate-800 rounded-md flex items-center justify-center text-white text-xs">
                <span className="font-medium">Research Center</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-32 h-16 bg-slate-800 rounded-md flex items-center justify-center text-white text-xs">
                <span className="font-medium">Data Analytics Co.</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-32 h-16 bg-slate-800 rounded-md flex items-center justify-center text-white text-xs">
                <span className="font-medium">Gov Relations</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700">
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">92<span className="text-indigo-400">%</span></div>
                <p className="text-slate-400">Users feel more informed about political impacts</p>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">4.8<span className="text-indigo-400">/5</span></div>
                <p className="text-slate-400">Average user rating across platforms</p>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">50k<span className="text-indigo-400">+</span></div>
                <p className="text-slate-400">Active users making better political decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
