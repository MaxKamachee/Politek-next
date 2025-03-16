'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Lock, AlertCircle, Bell, ThumbsUp, Eye } from 'lucide-react';
import { getPersonalizedPolicyImpact } from '../utils/api';

// Sample policy data - in production, fetch from your API
const availablePolicies = [
  {
    id: 'policy-001',
    title: 'Universal Healthcare Coverage Act',
    summary: 'This policy would expand health insurance coverage to all U.S. citizens, cap premium costs at 8.5% of income, and lower prescription drug prices by allowing Medicare to negotiate with pharmaceutical companies.',
    date: 'March 15, 2025',
    category: 'Healthcare',
    isPremium: false,
  },
  {
    id: 'policy-002',
    title: 'Small Business Tax Relief Act',
    summary: 'This legislation provides tax credits for small businesses, creates new deductions for technology investments and employee training programs, and simplifies quarterly tax filing requirements.',
    date: 'March 10, 2025',
    category: 'Taxes',
    isPremium: false,
  },
  {
    id: 'policy-003',
    title: 'Clean Energy Investment Act',
    summary: 'This policy provides a 30% tax credit for residential clean energy installations (solar, wind, geothermal) and extends business energy investment tax credits until 2035. It also allocates $500 million annually from 2025-2030 for renewable energy workforce training.',
    date: 'March 5, 2025',
    category: 'Environment',
    isPremium: true,
  },
  {
    id: 'policy-004',
    title: 'Education Funding Reform',
    summary: 'This policy increases federal education funding, directs resources to underserved districts, expands STEM programs, and provides grants for teacher development and smaller class sizes.',
    date: 'February 28, 2025',
    category: 'Education',
    isPremium: true,
  },
  {
    id: 'policy-005',
    title: 'Infrastructure Modernization Plan',
    summary: 'This plan allocates $1.2 trillion for rebuilding roads, bridges, public transportation, airports, and expanding broadband access nationwide. It prioritizes climate resilience and creates an estimated 2 million jobs over 10 years.',
    date: 'February 20, 2025',
    category: 'Infrastructure',
    isPremium: true,
  }
];

export default function Dashboard() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [profile, setProfile] = useState(null);
  const [viewedPolicies, setViewedPolicies] = useState([]);
  const [activePolicy, setActivePolicy] = useState(null);
  const [policyImpact, setPolicyImpact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailPreferences, setEmailPreferences] = useState({
    weeklyDigest: true,
    breakingPolicies: true
  });
  
  // Free tier limitations - 2 policies per week
  const FREE_POLICY_LIMIT = 2;
  
  // Calculate remaining views and reset if needed
  const [weeklyViewsData, setWeeklyViewsData] = useState({
    views: [],
    lastResetTime: null
  });
  
  // Check if we need to reset weekly views
  useEffect(() => {
    const storedWeeklyViews = localStorage.getItem('weeklyViewsData');
    
    if (storedWeeklyViews) {
      try {
        const parsedData = JSON.parse(storedWeeklyViews);
        setWeeklyViewsData(parsedData);
        
        // Check if we need to reset (it's been a week since last reset)
        const lastReset = parsedData.lastResetTime ? new Date(parsedData.lastResetTime) : null;
        const now = new Date();
        
        if (lastReset) {
          // Add 7 days to last reset
          const resetDate = new Date(lastReset);
          resetDate.setDate(resetDate.getDate() + 7);
          
          // If we've passed the reset date, reset the views
          if (now > resetDate) {
            const newData = {
              views: [],
              lastResetTime: now.toISOString()
            };
            setWeeklyViewsData(newData);
            localStorage.setItem('weeklyViewsData', JSON.stringify(newData));
          }
        }
      } catch (error) {
        console.error('Error parsing weekly views data:', error);
        resetWeeklyViews();
      }
    } else {
      // Initialize weekly views data
      resetWeeklyViews();
    }
  }, []);
  
  const resetWeeklyViews = () => {
    const now = new Date();
    const newData = {
      views: [],
      lastResetTime: now.toISOString()
    };
    setWeeklyViewsData(newData);
    localStorage.setItem('weeklyViewsData', JSON.stringify(newData));
  };
  
  const remainingViews = FREE_POLICY_LIMIT - weeklyViewsData.views.length;
  
  useEffect(() => {
    // Get user ID and profile from localStorage
    const storedUserId = localStorage.getItem('userId');
    const storedProfile = localStorage.getItem('userProfile');
    
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Redirect to login if no user ID found
      router.push('/');
      return;
    }
    
    if (storedProfile) {
      try {
        const parsedProfile = JSON.parse(storedProfile);
        setProfile(parsedProfile);
      } catch (error) {
        console.error('Error parsing profile:', error);
      }
    }
    
    // Load viewed policies from localStorage
    const storedViewedPolicies = localStorage.getItem('viewedPolicies');
    if (storedViewedPolicies) {
      try {
        setViewedPolicies(JSON.parse(storedViewedPolicies));
      } catch (error) {
        console.error('Error parsing viewed policies:', error);
      }
    }
  }, [router]);

  const handleViewPolicy = async (policy) => {
    // Check if already viewed this policy in this week's allocation
    if (weeklyViewsData.views.includes(policy.id)) {
      setActivePolicy(policy);
      loadPolicyImpact(policy);
      return;
    }
    
    // Check if weekly free tier limit reached
    if (weeklyViewsData.views.length >= FREE_POLICY_LIMIT && policy.isPremium) {
      // Set the active policy to show the upgrade prompt
      setActivePolicy({
        ...policy,
        needsUpgrade: true
      });
      return;
    }
    
    // Add to all-time viewed policies (for historical tracking)
    if (!viewedPolicies.includes(policy.id)) {
      const updatedViewedPolicies = [...viewedPolicies, policy.id];
      setViewedPolicies(updatedViewedPolicies);
      localStorage.setItem('viewedPolicies', JSON.stringify(updatedViewedPolicies));
    }
    
    // Add to this week's viewed policies
    if (!weeklyViewsData.views.includes(policy.id)) {
      const updatedWeeklyViews = {
        ...weeklyViewsData,
        views: [...weeklyViewsData.views, policy.id]
      };
      setWeeklyViewsData(updatedWeeklyViews);
      localStorage.setItem('weeklyViewsData', JSON.stringify(updatedWeeklyViews));
    }
    
    setActivePolicy(policy);
    loadPolicyImpact(policy);
  };
  
  const loadPolicyImpact = async (policy) => {
    if (!profile) return;
    
    setIsLoading(true);
    try {
      const response = await getPersonalizedPolicyImpact(policy.id, policy.summary, profile);
      setPolicyImpact(response.personalized_impact);
    } catch (error) {
      console.error('Error loading policy impact:', error);
      setPolicyImpact('Unable to load personalized impact at this time. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleUpdateEmailPreferences = (preference) => {
    setEmailPreferences(prev => ({
      ...prev,
      [preference]: !prev[preference]
    }));
    
    // In a real app, you would call your API to update the user's email preferences
    // For now, just show a success message with setTimeout
    const preferenceLabel = preference === 'weeklyDigest' ? 'Weekly digest' : 'Breaking policy alerts';
    const newValue = !emailPreferences[preference];
    
    alert(`${preferenceLabel} ${newValue ? 'enabled' : 'disabled'} successfully!`);
  };
  
  // Check if a policy is viewed in all-time history
  const isPolicyViewed = (policyId) => {
    return viewedPolicies.includes(policyId);
  };
  
  // Check if a policy is viewed in this week's allocation
  const isPolicyViewedThisWeek = (policyId) => {
    return weeklyViewsData.views.includes(policyId);
  };
  
  // Calculate the next reset date from the last reset time
  const getNextResetDate = (lastResetTimeStr) => {
    try {
      const lastReset = new Date(lastResetTimeStr);
      const nextReset = new Date(lastReset);
      nextReset.setDate(nextReset.getDate() + 7);
      
      // Format the date in a user-friendly way
      return nextReset.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Error calculating next reset date:', error);
      return 'in 7 days';
    }
  };
  
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      
      <section className="pt-32 pb-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Your Policy Dashboard</h1>
              <p className="text-xl text-slate-300">
                See how recent policies affect you personally
              </p>
            </div>
            
            {viewedPolicies.length >= FREE_POLICY_LIMIT && (
              <div className="mt-4 md:mt-0">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-md flex items-center shadow-lg hover:shadow-blue-900/20 font-medium">
                  Upgrade to Premium
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            )}
          </div>
          
          {/* Free tier notice */}
          {remainingViews > 0 ? (
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mb-8 flex items-start">
              <Eye className="text-blue-400 h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-blue-300 font-medium">Free Tier Access</h3>
                <p className="text-slate-300">
                  You have <span className="text-blue-300 font-medium">{remainingViews} free policy views</span> remaining this week. 
                  Upgrade to premium for unlimited policy insights.
                </p>
                {weeklyViewsData.lastResetTime && (
                  <p className="text-slate-400 text-xs mt-1">
                    Views reset weekly. Next reset: {getNextResetDate(weeklyViewsData.lastResetTime)}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-4 mb-8 flex items-start">
              <AlertCircle className="text-indigo-400 h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-indigo-300 font-medium">Weekly Free Tier Limit Reached</h3>
                <p className="text-slate-300">
                  You've used all your free policy views for this week. 
                  <button className="ml-2 text-indigo-400 hover:text-indigo-300 underline">
                    Upgrade to premium
                  </button> for unlimited access to all policy impacts.
                </p>
                {weeklyViewsData.lastResetTime && (
                  <p className="text-slate-400 text-xs mt-1">
                    Next reset: {getNextResetDate(weeklyViewsData.lastResetTime)}
                  </p>
                )}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            {/* Policy list */}
            <div className="lg:col-span-3">
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <div className="p-4 border-b border-slate-700 bg-slate-800/80">
                  <h2 className="text-white font-bold text-lg">Available Policies</h2>
                </div>
                
                <div className="divide-y divide-slate-700">
                  {availablePolicies.map((policy) => (
                    <div 
                      key={policy.id}
                      className={`p-4 hover:bg-slate-700/50 transition-colors cursor-pointer ${activePolicy?.id === policy.id ? 'bg-slate-700/70' : ''}`}
                      onClick={() => handleViewPolicy(policy)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-medium">{policy.title}</h3>
                        {isPolicyViewed(policy.id) ? (
                          <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full border border-green-500/30">
                            Viewed
                          </span>
                        ) : policy.isPremium && viewedPolicies.length >= FREE_POLICY_LIMIT ? (
                          <span className="bg-slate-700 text-slate-300 text-xs px-2 py-0.5 rounded-full border border-slate-600 flex items-center">
                            <Lock className="h-3 w-3 mr-1" /> Premium
                          </span>
                        ) : (
                          <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5 rounded-full border border-blue-500/30">
                            {policy.category}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-400 line-clamp-2">{policy.summary}</p>
                      <div className="mt-2 text-xs text-slate-500">{policy.date}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Email preferences panel */}
              <div className="mt-8 bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <div className="p-4 border-b border-slate-700 bg-slate-800/80">
                  <h2 className="text-white font-bold text-lg">Email Preferences</h2>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-start">
                      <Bell className="h-5 w-5 text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-medium">Weekly policy digest</h3>
                        <p className="text-sm text-slate-400">Receive a weekly summary of policies relevant to you</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={emailPreferences.weeklyDigest}
                        onChange={() => handleUpdateEmailPreferences('weeklyDigest')}
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-t border-slate-700">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-medium">Breaking policy alerts</h3>
                        <p className="text-sm text-slate-400">Get notified immediately when important policies drop</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={emailPreferences.breakingPolicies}
                        onChange={() => handleUpdateEmailPreferences('breakingPolicies')}
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Policy impact panel */}
            <div className="lg:col-span-4">
              {activePolicy ? (
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 h-full">
                  <div className="p-4 border-b border-slate-700 bg-slate-800/80 flex justify-between items-center">
                    <h2 className="text-white font-bold text-lg">Policy Impact</h2>
                    <span className="text-sm text-slate-400">{activePolicy.date}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{activePolicy.title}</h3>
                    
                    <div className="mb-8">
                      <h4 className="text-indigo-400 font-medium mb-2">Policy Summary:</h4>
                      <p className="text-slate-300">{activePolicy.summary}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-6 rounded-lg border border-indigo-500/20 mb-6">
                      <h4 className="text-white font-medium flex items-center mb-4">
                        <ThumbsUp className="h-5 w-5 mr-2 text-indigo-400" />
                        Your Personal Impact:
                      </h4>
                      
                      {isLoading ? (
                        <div className="flex items-center justify-center py-6">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                          <span className="ml-3 text-slate-300">Analyzing policy impact...</span>
                        </div>
                      ) : (
                        <div className="text-lg text-white leading-relaxed">
                          {policyImpact}
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t border-slate-700 pt-6 mt-6">
                      <h4 className="text-indigo-400 font-medium mb-3">Key Provisions:</h4>
                      <ul className="space-y-2">
                        {/* Example provisions - in a real app, these would come from your API */}
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-400 mr-3 mt-0.5">1</div>
                          <span className="text-slate-300">Allocates $1.2 trillion for infrastructure improvements over 10 years</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-400 mr-3 mt-0.5">2</div>
                          <span className="text-slate-300">Creates an estimated 2 million jobs across construction, engineering, and related sectors</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-400 mr-3 mt-0.5">3</div>
                          <span className="text-slate-300">Prioritizes climate resilience and electrification of transit systems</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Show upgrade prompt for premium locked content */}
                    {(activePolicy.needsUpgrade || (activePolicy.isPremium && !isPolicyViewedThisWeek(activePolicy.id) && weeklyViewsData.views.length >= FREE_POLICY_LIMIT)) && (
                      <div className="mt-8 p-6 bg-indigo-900/20 border border-indigo-500/30 rounded-lg flex flex-col items-center">
                        <Lock className="h-10 w-10 text-indigo-400 mb-3" />
                        <h3 className="text-white font-medium text-lg mb-2">Premium Content</h3>
                        <p className="text-slate-300 text-center mb-4">
                          You've reached your free tier limit of {FREE_POLICY_LIMIT} policy views this week. 
                          Upgrade to premium to unlock unlimited policy impacts.
                        </p>
                        {weeklyViewsData.lastResetTime && (
                          <p className="text-slate-400 text-sm mb-4">
                            Your free views will reset on {getNextResetDate(weeklyViewsData.lastResetTime)}, or you can upgrade now for immediate access.
                          </p>
                        )}
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-md flex items-center shadow-lg hover:shadow-blue-900/20 font-medium">
                          Upgrade Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="bg-slate-700/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-10 w-10 text-slate-500" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Select a policy</h3>
                    <p className="text-slate-400 max-w-md">
                      Choose a policy from the list to see how it impacts you based on your profile information.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}