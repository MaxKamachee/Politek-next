#!/bin/bash

# Exit on error
set -e

echo "===== Starting Politek Signup Flow Modification ====="

# 1. Create a new profile page
echo "Creating new profile page component..."
mkdir -p app/profile
cat > app/profile/page.js << 'EOL'
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    location: '',
    housingStatus: '',
    household: '',
    employment: '',
    income: '',
    education: '',
    interests: [],
    otherFactors: ''
  });

  useEffect(() => {
    // Get email from localStorage that was passed from landing page
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      // If no email is found, redirect back to the landing page
      router.push('/');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return {
          ...prev,
          interests: prev.interests.filter(i => i !== interest)
        };
      } else {
        return {
          ...prev,
          interests: [...prev.interests, interest]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine email with rest of profile data
    const completeProfile = {
      email,
      ...formData
    };
    
    // In production, you would send this data to your backend
    console.log('Submitting profile:', completeProfile);
    
    // Store the complete profile in localStorage for demo purposes
    localStorage.setItem('userProfile', JSON.stringify(completeProfile));
    
    // Redirect to a thank you or dashboard page
    router.push('/thank-you');
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      
      <section className="pt-32 pb-24 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Complete Your Profile</h1>
            <p className="text-xl text-slate-300">
              Help us deliver more relevant policy insights by telling us about yourself.
              The more information you provide, the more personalized your experience will be.
            </p>
            {email && (
              <div className="mt-4 p-3 bg-blue-900/30 rounded-lg inline-block">
                <span className="text-blue-400 font-medium">Your email:</span>
                <span className="ml-2 text-white">{email}</span>
              </div>
            )}
          </div>
          
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Location Section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Your Location</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-slate-300 mb-2">City, State</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Phoenix, Arizona"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              {/* Housing Section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Housing Information</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="housingStatus" className="block text-sm font-medium text-slate-300 mb-2">Housing Status</label>
                    <select
                      id="housingStatus"
                      name="housingStatus"
                      value={formData.housingStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your housing status</option>
                      <option value="homeowner">Homeowner</option>
                      <option value="renter">Renter</option>
                      <option value="temporary">Temporary Housing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="household" className="block text-sm font-medium text-slate-300 mb-2">Household Information</label>
                    <input
                      type="text"
                      id="household"
                      name="household"
                      value={formData.household}
                      onChange={handleChange}
                      placeholder="e.g. Family of 4, 2 children under 18"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              {/* Employment & Education Section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Employment & Education</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="employment" className="block text-sm font-medium text-slate-300 mb-2">Employment Status</label>
                    <input
                      type="text"
                      id="employment"
                      name="employment"
                      value={formData.employment}
                      onChange={handleChange}
                      placeholder="e.g. Software Developer, Teacher, Small Business Owner"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="income" className="block text-sm font-medium text-slate-300 mb-2">Annual Income Range</label>
                    <select
                      id="income"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select income range</option>
                      <option value="under-30k">Under $30,000</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k-75k">$50,000 - $75,000</option>
                      <option value="75k-100k">$75,000 - $100,000</option>
                      <option value="100k-150k">$100,000 - $150,000</option>
                      <option value="over-150k">Over $150,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-slate-300 mb-2">Highest Education Level</label>
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="some-college">Some College</option>
                      <option value="associates">Associate's Degree</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="doctorate">Doctorate or Professional Degree</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Interests & Other Factors Section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Policy Interests & Other Factors</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Policy Areas of Interest (select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Healthcare', 'Education', 'Taxes', 'Housing', 'Environment', 'Immigration', 'Infrastructure', 'Defense', 'Technology'].map(interest => (
                      <div key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`interest-${interest.toLowerCase()}`}
                          checked={formData.interests.includes(interest.toLowerCase())}
                          onChange={() => handleInterestChange(interest.toLowerCase())}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-600 rounded bg-slate-700"
                        />
                        <label htmlFor={`interest-${interest.toLowerCase()}`} className="ml-2 text-sm text-slate-300">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="otherFactors" className="block text-sm font-medium text-slate-300 mb-2">
                    Other Relevant Factors 
                    <span className="text-slate-400 ml-1">(health conditions, student loans, business ownership, etc.)</span>
                  </label>
                  <textarea
                    id="otherFactors"
                    name="otherFactors"
                    value={formData.otherFactors}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about any other factors that might affect how policies impact you..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-8 py-4 rounded-md flex items-center justify-center transition-all text-lg shadow-lg hover:shadow-blue-900/20 group"
                >
                  Complete Profile
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-slate-400 text-center mt-4">
                  By submitting this form, you're helping us provide more relevant policy analysis tailored to your situation.
                  Your information is kept private and secure.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
EOL

# 2. Create a thank you / confirmation page
echo "Creating thank you page component..."
mkdir -p app/thank-you
cat > app/thank-you/page.js << 'EOL'
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ThankYouPage() {
  const router = useRouter();
  
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      
      <section className="pt-32 pb-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-900/30 text-green-400">
            <CheckCircle size={48} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Profile Complete!</h1>
          <p className="text-xl text-slate-300 mb-8">
            Thank you for providing your information. We'll now be able to deliver highly personalized policy insights that are relevant to your specific situation.
          </p>
          
          <div className="bg-slate-800 rounded-xl p-8 mb-8 border border-slate-700 text-left">
            <h2 className="text-white text-xl font-semibold mb-4">What happens next?</h2>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4 text-blue-400">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/30">1</div>
                </div>
                <div>
                  <p className="text-slate-300">We'll analyze your profile to identify which policies will impact you the most.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 text-blue-400">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/30">2</div>
                </div>
                <div>
                  <p className="text-slate-300">Your first personalized newsletter will arrive in your inbox within 24 hours.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 text-blue-400">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/30">3</div>
                </div>
                <div>
                  <p className="text-slate-300">Each week, you'll receive clear, jargon-free updates on how new policies affect you personally.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => router.push('/')}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-indigo-500 transition-all group"
            >
              Return to Home
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
EOL

# 3. Modify the Hero.js component to only ask for email
echo "Modifying the Hero component to simplify the signup form..."
cat > app/components/Hero.js << 'EOL'
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
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">personalized</span>
            <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 400 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C49.1406 4.05226 146.854 -0.923666 198.663 3.99626C250.473 8.91618 292.155 7.63822 352.716 5.07916C390.847 3.4996 431.544 1.99996 445 1.99996" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <defs>
                <linearGradient id="paint0_linear" x1="2" y1="2" x2="445" y2="2" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
          </span> for your inbox
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Your weekly newsletter that explains <span className="text-white font-medium">how politics affects you personally</span>, with no bias and no jargon.
        </p>
      </div>
      
      {/* Newsletter Signup Box - Simplified to email only */}
      <div className="max-w-2xl mx-auto mb-16 p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-xl animate-fade-in-up animation-delay-600">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Try Politek for free</h2>
          <p className="text-slate-300">Get personalized political insights delivered to your inbox</p>
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
            {isLoading ? 'Processing...' : 'Continue to Complete Your Profile'}
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-xs text-slate-400 text-center mt-2">
            We'll send you a weekly digest of politics that actually matters to you. Unsubscribe anytime.
          </p>
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
EOL

# 4. Update the CTA Section to match the simplified signup flow
echo "Updating the CTA section to match the simplified signup flow..."
cat > app/components/CTASection.js << 'EOL'
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Get political clarity in your inbox <span className="text-blue-400">every week</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Join thousands of readers who receive our personalized political newsletter. Understand how politics affects you specifically.
          </p>
        </div>
        
        {/* Signup Form Section - Simplified */}
        <div className="max-w-2xl mx-auto p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Start your free subscription</h3>
            <p className="text-slate-300">No credit card required, unsubscribe anytime</p>
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
        
        {/* Trust indicators */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <div className="pt-4">
            <p className="text-slate-400 mb-2">Trusted by readers across the political spectrum</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />