'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Lock, AlertCircle, Bell, ThumbsUp, Eye, Calendar, BarChart3, FileText, User, Loader2 } from 'lucide-react';
import { getPersonalizedPolicyImpact, getWeeklyAnalysisUsage, recordAnalysisUsage } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';

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
    isPremium: false, // Changed to false since summaries are available to all
  },
  {
    id: 'policy-004',
    title: 'Education Funding Reform',
    summary: 'This policy increases federal education funding, directs resources to underserved districts, expands STEM programs, and provides grants for teacher development and smaller class sizes.',
    date: 'February 28, 2025',
    category: 'Education',
    isPremium: false, // Changed to false since summaries are available to all
  },
  {
    id: 'policy-005',
    title: 'Infrastructure Modernization Plan',
    summary: 'This plan allocates $1.2 trillion for rebuilding roads, bridges, public transportation, airports, and expanding broadband access nationwide. It prioritizes climate resilience and creates an estimated 2 million jobs over 10 years.',
    date: 'February 20, 2025',
    category: 'Infrastructure',
    isPremium: false, // Changed to false since summaries are available to all
  }
];

export default function Dashboard() {
  const router = useRouter();
  const { user, isAuthenticated, loading } = useAuth();
  
  const [profile, setProfile] = useState(null);
  const [viewedPolicies, setViewedPolicies] = useState([]);
  const [activePolicy, setActivePolicy] = useState(null);
  const [policyImpact, setPolicyImpact] = useState('');
  const [isLoadingPolicy, setIsLoadingPolicy] = useState(false);
  const [viewMode, setViewMode] = useState('summary'); // 'summary' or 'personal'
  const [emailPreferences, setEmailPreferences] = useState({
    weeklyDigest: true,
    breakingPolicies: true
  });
  
  // Free tier limitations - 2 personal analyses per week
  const FREE_PERSONAL_ANALYSIS_LIMIT = 2;
  
  // Weekly analysis usage data
  const [weeklyAnalysesData, setWeeklyAnalysesData] = useState({
    analyses: [],
    lastResetTime: null,
    limit: FREE_PERSONAL_ANALYSIS_LIMIT,
    resetDays: 7
  });
  
  // Check if user is authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);
  
  // Load weekly analyses data and user profile
  useEffect(() => {
    if (isAuthenticated && user) {
      // Set profile from user data
      setProfile(user);
      
      // Load weekly analysis usage data
      const loadWeeklyUsage = async () => {
        try {
          const usageData = await getWeeklyAnalysisUsage();
          setWeeklyAnalysesData(usageData);
        } catch (error) {
          console.error('Error loading weekly analysis usage:', error);
          // Use a local fallback if API fails
          const storedWeeklyAnalyses = localStorage.getItem('weeklyAnalysesData');
          if (storedWeeklyAnalyses) {
            try {
              setWeeklyAnalysesData(JSON.parse(storedWeeklyAnalyses));
            } catch (parseError) {
              console.error('Error parsing stored weekly analyses:', parseError);
              initializeWeeklyAnalyses();
            }
          } else {
            initializeWeeklyAnalyses();
          }
        }
      };
      
      // Load viewed policies
      const storedViewedPolicies = localStorage.getItem('viewedPolicies');
      if (storedViewedPolicies) {
        try {
          setViewedPolicies(JSON.parse(storedViewedPolicies));
        } catch (error) {
          console.error('Error parsing viewed policies:', error);
        }
      }
      
      loadWeeklyUsage();
    }
  }, [isAuthenticated, user]);
  
  // Initialize weekly analyses data if needed
  const initializeWeeklyAnalyses = () => {
    const now = new Date();
    const newData = {
      analyses: [],
      lastResetTime: now.toISOString(),
      limit: FREE_PERSONAL_ANALYSIS_LIMIT,
      resetDays: 7
    };
    setWeeklyAnalysesData(newData);
    localStorage.setItem('weeklyAnalysesData', JSON.stringify(newData));
  };
  
  const remainingAnalyses = weeklyAnalysesData.limit - weeklyAnalysesData.analyses.length;
  
  const handleViewPolicy = (policy) => {
    // Update active policy and reset to summary view by default
    setActivePolicy(policy);
    setViewMode('summary');
    setPolicyImpact('');
  };
  
  const handleRequestPersonalAnalysis = async (policy) => {
    // Check if already analyzed this policy in this week's allocation
    if (weeklyAnalysesData.analyses.includes(policy.id)) {
      setViewMode('personal');
      loadPolicyImpact(policy);
      return;
    }
    
    // Check if weekly free tier limit reached
    if (weeklyAnalysesData.analyses.length >= weeklyAnalysesData.limit) {
      // Show upgrade prompt but keep the policy viewable in summary mode
      setActivePolicy({
        ...policy,
        needsUpgrade: true
      });
      return;
    }
    
    try {
      // Record analysis usage with the API
      const updatedUsage = await recordAnalysisUsage(policy.id);
      setWeeklyAnalysesData(updatedUsage);
      
      // Also update local storage as a backup
      const updatedWeeklyAnalyses = {
        ...weeklyAnalysesData,
        analyses: [...weeklyAnalysesData.analyses, policy.id]
      };
      localStorage.setItem('weeklyAnalysesData', JSON.stringify(updatedWeeklyAnalyses));
      
      // Switch to personal view and load impact
      setViewMode('personal');
      loadPolicyImpact(policy);
    } catch (error) {
      console.error('Error recording analysis usage:', error);
      // Fallback to local storage if API fails
      const updatedWeeklyAnalyses = {
        ...weeklyAnalysesData,
        analyses: [...weeklyAnalysesData.analyses, policy.id]
      };
      setWeeklyAnalysesData(updatedWeeklyAnalyses);
      localStorage.setItem('weeklyAnalysesData', JSON.stringify(updatedWeeklyAnalyses));
      
      // Still allow the user to view the analysis
      setViewMode('personal');
      loadPolicyImpact(policy);
    }
  };
  
  const loadPolicyImpact = async (policy) => {
    if (!profile) return;
    
    setIsLoadingPolicy(true);
    try {
      const response = await getPersonalizedPolicyImpact(policy.id, policy.summary, profile);
      setPolicyImpact(response.personalized_impact);
    } catch (error) {
      console.error('Error loading policy impact:', error);
      setPolicyImpact('Unable to load personalized impact at this time. Please try again later.');
    } finally {
      setIsLoadingPolicy(false);
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
  
  // Check if a policy has been personally analyzed in this week's allocation
  const isPolicyAnalyzedThisWeek = (policyId) => {
    return weeklyAnalysesData.analyses.includes(policyId);
  };
  
  // Calculate the next reset date from the last reset time
  const getNextResetDate = (lastResetTimeStr) => {
    try {
      const lastReset = new Date(lastResetTimeStr);
      const nextReset = new Date(lastReset);
      nextReset.setDate(nextReset.getDate() + (weeklyAnalysesData.resetDays || 7));
      
      // Format the date in a user-friendly way
      return nextReset.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error calculating next reset date:', error);
      return 'in 7 days';
    }
  };
  
  // Generate sample personalized impact for demonstration
  const getSamplePersonalImpact = (policy) => {
    return `Based on your profile, this ${policy.category.toLowerCase()} policy would likely result in several key benefits for your situation. As someone living in ${profile?.location || user?.city || 'your area'}, you would see direct impacts on your monthly expenses, quality of services available to you, and potentially long-term financial outcomes. To see the full personalized analysis with precise numbers and detailed recommendations, please use one of your personal impact analyses.`;
  };
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading your dashboard...</p>
        </div>
      </main>
    );
  }
  
  // If not authenticated and not loading, the user will be redirected in the useEffect
  if (!isAuthenticated && !loading) {
    return null;
  }
  
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
              {user && (
                <p className="text-slate-400 mt-1">
                  Welcome back, {user.first_name || user.email}
                </p>
              )}
            </div>
            
            {remainingAnalyses === 0 && (
              <div className="mt-4 md:mt-0">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-md flex items-center shadow-lg hover:shadow-blue-900/20 font-medium">
                  Upgrade to Premium
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            )}
          </div>
          
          {/* Personal Analysis Limit Banner */}
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg p-5 mb-8 border border-blue-500/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-start mb-4 md:mb-0">
                <User className="h-12 w-12 text-blue-400 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-white text-xl font-bold mb-1">Personal Impact Analyses</h2>
                  <p className="text-slate-300">
                    {remainingAnalyses > 0 
                      ? `You have ${remainingAnalyses} free personal ${remainingAnalyses === 1 ? 'analysis' : 'analyses'} remaining this week.` 
                      : "You've used all your free personal analyses for this week."}
                    {weeklyAnalysesData.lastResetTime && 
                      ` Your analyses will reset on ${getNextResetDate(weeklyAnalysesData.lastResetTime)}.`}
                  </p>
                  <p className="text-blue-300 text-sm mt-2">
                    <strong>Policy summaries are always available</strong> - personal impact analyses are limited to 2/week on free plan.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 justify-center">
                <div className="w-16 h-16 border-8 border-slate-700 rounded-full flex items-center justify-center relative">
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-blue-500"
                    style={{ 
                      clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
                      opacity: 0.3
                    }}
                  ></div>
                  <span className="text-white font-bold text-lg">{remainingAnalyses}</span>
                </div>
                <span className="text-white font-medium">of</span>
                <div className="w-16 h-16 border-8 border-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{weeklyAnalysesData.limit}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            {/* Policy list */}
            <div className="lg:col-span-3">
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <div className="p-4 border-b border-slate-700 bg-slate-800/80 flex justify-between items-center">
                  <h2 className="text-white font-bold text-lg">Available Policies</h2>
                  <span className="text-slate-300 text-sm flex items-center">
                    <FileText className="h-4 w-4 text-blue-400 mr-1" />
                    {availablePolicies.length} policies
                  </span>
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
                        {isPolicyAnalyzedThisWeek(policy.id) ? (
                          <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full border border-green-500/30">
                            Analyzed
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
            
            {/* Policy details panel */}
            <div className="lg:col-span-4">
              {activePolicy ? (
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 h-full">
                  <div className="p-4 border-b border-slate-700 bg-slate-800/80 flex justify-between items-center">
                    <div className="flex items-center">
                      <h2 className="text-white font-bold text-lg mr-3">Policy Details</h2>
                      <div className="flex space-x-1">
                        <button 
                          onClick={() => setViewMode('summary')}
                          className={`px-3 py-1 text-sm rounded-md ${viewMode === 'summary' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}
                        >
                          Summary
                        </button>
                        <button 
                          onClick={() => handleRequestPersonalAnalysis(activePolicy)}
                          className={`px-3 py-1 text-sm rounded-md flex items-center ${viewMode === 'personal' ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300'}`}
                          disabled={remainingAnalyses === 0 && !isPolicyAnalyzedThisWeek(activePolicy.id)}
                        >
                          {remainingAnalyses === 0 && !isPolicyAnalyzedThisWeek(activePolicy.id) && (
                            <Lock className="h-3 w-3 mr-1" />
                          )}
                          Personal Impact
                        </button>
                      </div>
                    </div>
                    <span className="text-sm text-slate-400">{activePolicy.date}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{activePolicy.title}</h3>
                    
                    {/* Summary View - Always Available */}
                    {viewMode === 'summary' && (
                      <>
                        <div className="mb-8">
                          <h4 className="text-indigo-400 font-medium mb-2">Policy Summary:</h4>
                          <p className="text-slate-300">{activePolicy.summary}</p>
                        </div>
                        
                        <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50 mb-6">
                          <h4 className="text-white font-medium flex items-center mb-4">
                            <User className="h-5 w-5 mr-2 text-blue-400" />
                            Personal Impact Preview:
                          </h4>
                          <div className="text-slate-300 mb-6">
                            {getSamplePersonalImpact(activePolicy)}
                          </div>
                          <button
                            onClick={() => handleRequestPersonalAnalysis(activePolicy)}
                            className={`px-4 py-2 rounded-md flex items-center justify-center ${
                              remainingAnalyses > 0 || isPolicyAnalyzedThisWeek(activePolicy.id)
                                ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                : 'bg-slate-700 text-slate-300 cursor-not-allowed'
                            }`}
                            disabled={remainingAnalyses === 0 && !isPolicyAnalyzedThisWeek(activePolicy.id)}
                          >
                            {isPolicyAnalyzedThisWeek(activePolicy.id) ? (
                              <>See Your Personal Analysis</>
                            ) : remainingAnalyses > 0 ? (
                              <>Use 1 Personal Analysis</>
                            ) : (
                              <>
                                <Lock className="h-4 w-4 mr-2" />
                                Upgrade for More Analyses
                              </>
                            )}
                          </button>
                        </div>
                        
                        <div className="border-t border-slate-700 pt-6 mt-6">
                          <h4 className="text-indigo-400 font-medium mb-3">Key Provisions:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-400 mr-3 mt-0.5">1</div>
                              <span className="text-slate-300">Primary provision of this policy with significant general impact</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-400 mr-3 mt-0.5">2</div>
                              <span className="text-slate-300">Secondary provision with moderate general impact</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-400 mr-3 mt-0.5">3</div>
                              <span className="text-slate-300">Minor provision with limited general impact</span>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                    
                    {/* Personal Impact View - Limited by Weekly Quota */}
                    {viewMode === 'personal' && (
                      <>
                        {/* If we need to show upgrade prompt but in personal view mode */}
                        {activePolicy.needsUpgrade ? (
                          <div className="p-6 bg-indigo-900/20 border border-indigo-500/30 rounded-lg flex flex-col items-center">
                            <Lock className="h-10 w-10 text-indigo-400 mb-3" />
                            <h3 className="text-white font-medium text-lg mb-2">Personal Analysis Limit Reached</h3>
                            <p className="text-slate-300 text-center mb-4">
                              You've used your {FREE_PERSONAL_ANALYSIS_LIMIT} free personal analyses this week. 
                              Upgrade to premium for unlimited personal impact analyses.
                            </p>
                            {weeklyAnalysesData.lastResetTime && (
                              <p className="text-slate-400 text-sm mb-4">
                                Your free analyses will reset on {getNextResetDate(weeklyAnalysesData.lastResetTime)}, or you can upgrade now for immediate access.
                              </p>
                            )}
                            <div className="flex flex-col sm:flex-row gap-3">
                              <button 
                                onClick={() => setViewMode('summary')}
                                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md"
                              >
                                View Summary
                              </button>
                              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-md flex items-center shadow-lg">
                                Upgrade Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ) : isLoadingPolicy ? (
                          <div className="flex items-center justify-center py-12">
                            <Loader2 className="h-8 w-8 text-blue-400 animate-spin mr-3" />
                            <span className="text-slate-300">Analyzing policy impact...</span>
                          </div>
                        ) : (
                          <>
                            <div className="mb-8">
                              <h4 className="text-indigo-400 font-medium mb-2">Your Personal Impact Analysis:</h4>
                              <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-6 rounded-lg border border-indigo-500/20 mb-6">
                                <div className="text-lg text-white leading-relaxed">
                                  {policyImpact}
                                </div>
                                
                                {/* Visual impact indicators */}
                                <div className="mt-6 pt-4 border-t border-indigo-500/20">
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/20">
                                      <div className="text-blue-300 text-sm font-medium mb-1">Financial Impact</div>
                                      <div className="flex items-end">
                                        <span className="text-green-400 text-2xl font-bold">+$3,200</span>
                                        <span className="text-slate-400 text-xs ml-1 mb-1">/year</span>
                                      </div>
                                    </div>
                                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/20">
                                      <div className="text-blue-300 text-sm font-medium mb-1">Time Savings</div>
                                      <div className="flex items-end">
                                        <span className="text-green-400 text-2xl font-bold">12</span>
                                        <span className="text-slate-400 text-xs ml-1 mb-1">hours/month</span>
                                      </div>
                                    </div>
                                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/20">
                                      <div className="text-blue-300 text-sm font-medium mb-1">Quality Score</div>
                                      <div className="flex items-end">
                                        <span className="text-green-400 text-2xl font-bold">88</span>
                                        <span className="text-slate-400 text-xs ml-1 mb-1">/100</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="border-t border-slate-700 pt-6">
                              <h4 className="text-indigo-400 font-medium mb-4">Recommended Actions:</h4>
                              <div className="space-y-4">
                                <div className="flex items-start">
                                  <ThumbsUp className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                                  <div>
                                    <h5 className="text-white font-medium">Take advantage of new tax credits</h5>
                                    <p className="text-sm text-slate-400">File Form XYZ with your next quarterly tax return to claim these credits immediately</p>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <ThumbsUp className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                                  <div>
                                    <h5 className="text-white font-medium">Update your business technology plan</h5>
                                    <p className="text-sm text-slate-400">Schedule tech upgrades to align with the new deduction schedule</p>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <ThumbsUp className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                                  <div>
                                    <h5 className="text-white font-medium">Consult with your accountant</h5>
                                    <p className="text-sm text-slate-400">Review eligibility requirements to maximize your benefits</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="bg-slate-700/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-10 w-10 text-slate-500" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Select a policy</h3>
                    <p className="text-slate-400 max-w-md">
                      Choose a policy from the list to see its summary and analyze how it impacts you based on your profile information.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Personal Analysis vs Summary Explanation */}
          <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-800/70 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">Understanding Your Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-700/30 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="h-6 w-6 text-blue-400 mr-2" />
                  <h4 className="text-lg font-medium text-white">Policy Summaries</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2">✓</div>
                    <span className="text-slate-300">Available for all policies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2">✓</div>
                    <span className="text-slate-300">General information about what the policy does</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2">✓</div>
                    <span className="text-slate-300">Key provisions and timelines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2">✓</div>
                    <span className="text-slate-300">Unlimited access on all plans</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-indigo-900/20 p-5 rounded-lg border border-indigo-500/20">
                <div className="flex items-center mb-3">
                  <User className="h-6 w-6 text-indigo-400 mr-2" />
                  <h4 className="text-lg font-medium text-white">Personal Impact Analyses</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-indigo-400 mr-2">✓</div>
                    <span className="text-slate-300">Customized to your specific situation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-indigo-400 mr-2">✓</div>
                    <span className="text-slate-300">Personalized financial impact calculations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-indigo-400 mr-2">✓</div>
                    <span className="text-slate-300">Tailored action recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-indigo-400 mr-2">✓</div>
                    <span className="text-slate-300">Limited to 2/week on free plan, unlimited on premium</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-md flex items-center shadow-lg hover:shadow-blue-900/20 font-medium">
                Upgrade for Unlimited Personal Analyses
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}