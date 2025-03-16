'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { getPersonalizedPolicyImpact } from '../utils/api';

export default function ThankYouPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [profile, setProfile] = useState(null);
  const [policyImpact, setPolicyImpact] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Get user ID and profile from localStorage
    const storedUserId = localStorage.getItem('userId');
    const storedProfile = localStorage.getItem('userProfile');
    
    if (storedUserId) {
      setUserId(storedUserId);
    }
    
    if (storedProfile) {
      try {
        const parsedProfile = JSON.parse(storedProfile);
        setProfile(parsedProfile);
        
        // Get a sample personalized policy impact
        generateSampleImpact(parsedProfile);
      } catch (error) {
        console.error('Error parsing profile:', error);
      }
    } else {
      setIsLoading(false);
    }
  }, []);
  
  const generateSampleImpact = async (profile) => {
    try {
      // Sample policy summary for demonstration
      const samplePolicySummary = "This policy provides a 30% tax credit for residential clean energy installations (solar, wind, geothermal) and extends business energy investment tax credits until 2035. It also allocates $500 million annually from 2025-2030 for renewable energy workforce training.";
      
      // Get personalized impact
      const response = await getPersonalizedPolicyImpact(
        'sample-policy',
        samplePolicySummary,
        profile
      );
      
      setPolicyImpact(response.personalized_impact);
    } catch (error) {
      console.error('Error generating policy impact:', error);
      setPolicyImpact("Based on your profile, we'll be able to show you personalized policy implications similar to this sample.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };
  
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
          
          {userId && (
            <div className="bg-blue-900/20 p-3 rounded-lg inline-block mb-8">
              <span className="text-blue-400 font-medium">Your ID:</span>
              <span className="ml-2 text-white">{userId}</span>
            </div>
          )}
          
          <div className="bg-slate-800 rounded-xl p-8 mb-8 border border-slate-700 text-left">
            <h2 className="text-white text-xl font-semibold mb-4">Sample Personalized Policy Impact</h2>
            
            {isLoading ? (
              <div className="flex items-center justify-center py-6">
                <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
                <span className="ml-3 text-slate-300">Generating sample...</span>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-5 rounded-lg border border-indigo-500/20 mb-6">
                <h3 className="text-white font-medium flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  Sample Policy: Clean Energy Tax Credit Act
                </h3>
                <div className="text-lg text-white leading-relaxed">
                  {policyImpact}
                </div>
              </div>
            )}
            
            <h2 className="text-white text-xl font-semibold mb-4">What's Next?</h2>
            <p className="text-slate-300 mb-6">
              You now have access to your personalized policy dashboard where you can view how policies affect your specific situation.
            </p>
            <div className="bg-slate-700/50 p-4 rounded-lg mb-6">
              <h3 className="text-white font-medium mb-2">Free Tier Access:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Access to 2 policy impacts per week</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Weekly newsletter with policy updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Breaking policy alerts for important updates</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handleGoToDashboard}
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-blue-900/20 group"
            >
              Go to Your Dashboard
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}