'use client';

import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const AppExampleSection = () => {
  const [selectedTab, setSelectedTab] = useState('healthcare');
  const [activePersona, setActivePersona] = useState('homeowner');

  const examples = {
    healthcare: {
      policy: "Universal Healthcare Coverage Act",
      summary: "This policy would expand health insurance coverage to all U.S. citizens, cap premium costs at 8.5% of income, and lower prescription drug prices by allowing Medicare to negotiate with pharmaceutical companies.",
      impacts: {
        homeowner: "As a homeowner in Phoenix with a family of 4, your healthcare premiums would be capped at $595/month (saving approximately $4,800/year) and all pre-existing conditions would be covered with no additional charge.",
        renter: "As a renter in Chicago making $65,000/year, your healthcare premiums would be capped at $460/month and your out-of-pocket maximum would decrease by $2,000 annually.",
        business: "As a small business owner with 15 employees, you would qualify for new tax credits covering 35% of premium contributions, reducing your healthcare costs by approximately $23,000 annually."
      }
    },
    taxes: {
      policy: "Small Business Tax Relief Act",
      summary: "This legislation provides tax credits for small businesses, creates new deductions for technology investments and employee training programs, and simplifies quarterly tax filing requirements.",
      impacts: {
        homeowner: "As a homeowner with a side business, you would save approximately $800/year through simplified home office deductions and qualify for a new $1,200 tech investment credit.",
        renter: "As a freelancer renting in Austin, you'd save 5 hours quarterly with simplified filing requirements and qualify for new $2,200 deductions for workspace and professional development expenses.",
        business: "As a tech startup owner, your business would qualify for an estimated $8,500 in annual tax savings through expanded R&D credits and new deductions for employee training and technology investments."
      }
    },
    education: {
      policy: "Education Funding Reform",
      summary: "This policy increases federal education funding, directs resources to underserved districts, expands STEM programs, and provides grants for teacher development and smaller class sizes.",
      impacts: {
        homeowner: "As a homeowner with school-age children in Denver, your local district would receive 28% more funding, potentially increasing your property value by 4-6% while providing your children with expanded STEM programs.",
        renter: "As a renter with children attending public school in Atlanta, your children's school would receive funding for reduced class sizes (average of 4 fewer students per class) and new technology resources.",
        business: "As a business owner in the education technology sector, you'd qualify for new contract opportunities worth up to $500,000 in your state and tax incentives for providing internship programs."
      }
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-20 w-64 h-64 rounded-full bg-blue-900 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 -bottom-32 w-64 h-64 rounded-full bg-indigo-900 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-slate-700 text-indigo-400 px-4 py-1 rounded-md text-sm font-medium inline-block mb-4">APP DASHBOARD</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See your personalized policy dashboard</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Every policy is analyzed based on your specific situation. Here's what your dashboard looks like:
          </p>
        </div>
        
        {/* Interactive dashboard demo */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
            <div className="p-4 border-b border-slate-700 bg-slate-800/80 flex justify-between items-center">
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-blue-500 mr-2"
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
                <h2 className="text-white font-bold text-lg">Politek Dashboard</h2>
              </div>
              
              <div className="flex items-center text-slate-400">
                <div className="mr-4 border-r border-slate-700 pr-4">
                  <span className="text-blue-400 font-medium">2</span>/2 views this week
                </div>
                <span>Resets in 5 days</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Left sidebar - User & Policies */}
              <div className="bg-slate-800/50 border-r border-slate-700 p-5">
                {/* User profile summary */}
                <div className="bg-slate-900/50 rounded-lg p-4 mb-6">
                  <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-3">Your Profile</h3>
                  <div className="flex flex-wrap gap-2">
                    <PersonaTag 
                      active={activePersona === 'homeowner'}
                      onClick={() => setActivePersona('homeowner')}
                      label="Homeowner"
                    />
                    <PersonaTag 
                      active={activePersona === 'renter'}
                      onClick={() => setActivePersona('renter')}
                      label="Renter"
                    />
                    <PersonaTag 
                      active={activePersona === 'business'}
                      onClick={() => setActivePersona('business')}
                      label="Business Owner"
                    />
                    
                    <div className="w-full mt-2 border-t border-slate-700 pt-2">
                      <div className="text-xs text-slate-400 mb-1">Location</div>
                      <div className="text-slate-300">
                        {activePersona === 'homeowner' ? 'Phoenix, AZ' : 
                         activePersona === 'renter' ? 'Chicago, IL' : 
                         'Austin, TX'}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-3">Available Policies</h3>
                <div className="space-y-3">
                  <PolicyButton 
                    active={selectedTab === 'healthcare'}
                    onClick={() => setSelectedTab('healthcare')}
                    label="Healthcare Reform"
                    date="Mar 15, 2025"
                    viewed={true}
                  />
                  <PolicyButton 
                    active={selectedTab === 'taxes'}
                    onClick={() => setSelectedTab('taxes')}
                    label="Tax Relief Act"
                    date="Mar 10, 2025"
                    viewed={true}
                  />
                  <PolicyButton 
                    active={selectedTab === 'education'}
                    onClick={() => setSelectedTab('education')}
                    label="Education Reform"
                    date="Mar 5, 2025"
                    premium={true}
                  />
                  
                  {/* Free tier limit indicator */}
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-3 mt-4">
                    <div className="flex items-center text-sm text-indigo-300 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Free Tier Limit Note
                    </div>
                    <p className="text-xs text-slate-300">You can view policy summaries for all policies, but personal impact analysis is limited to 2 per week on the free tier.</p>
                    <div className="mt-2 text-xs text-slate-400">Your personal analysis count resets in 5 days</div>
                  </div>
                </div>
              </div>
              
              {/* Main content - Policy details */}
              <div className="md:col-span-2 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl text-white font-bold">{examples[selectedTab].policy}</h3>
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                    Recent Policy
                  </span>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-indigo-400 font-medium mb-2">What it does:</h4>
                  <p className="text-slate-300">{examples[selectedTab].summary}</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-6 rounded-lg border border-indigo-500/20">
                  <h4 className="text-white font-medium flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Your Personal Impact:
                  </h4>
                  <div className="text-lg text-white leading-relaxed">
                    {examples[selectedTab].impacts[activePersona]}
                  </div>
                  
                  {/* Visual impact indicators */}
                  <div className="mt-6 pt-4 border-t border-indigo-500/20">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/20">
                        <div className="text-blue-300 text-sm font-medium mb-1">Financial Impact</div>
                        <div className="flex items-end">
                          <span className="text-green-400 text-2xl font-bold">+$4,800</span>
                          <span className="text-slate-400 text-xs ml-1 mb-1">/year</span>
                        </div>
                      </div>
                      <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/20">
                        <div className="text-blue-300 text-sm font-medium mb-1">Time Savings</div>
                        <div className="flex items-end">
                          <span className="text-green-400 text-2xl font-bold">15</span>
                          <span className="text-slate-400 text-xs ml-1 mb-1">hours/month</span>
                        </div>
                      </div>
                      <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/20">
                        <div className="text-blue-300 text-sm font-medium mb-1">Quality Score</div>
                        <div className="flex items-end">
                          <span className="text-green-400 text-2xl font-bold">92</span>
                          <span className="text-slate-400 text-xs ml-1 mb-1">/100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-indigo-400 font-medium">Actionable Insights</h4>
                    <span className="text-slate-400 text-sm">Updated Mar 15, 2025</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <h5 className="text-white font-medium">Register for new premium cap</h5>
                        <p className="text-sm text-slate-400">Complete registration form by April 15 to lock in your new premium rate</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <h5 className="text-white font-medium">Review your plan coverage</h5>
                        <p className="text-sm text-slate-400">Schedule a review with your provider to maximize new benefits</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <h5 className="text-white font-medium">Explore prescription savings</h5>
                        <p className="text-sm text-slate-400">Check if your medications qualify for the new negotiated prices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Weekly limit feature highlight */}
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Summaries for all, personal impact for 2</h3>
              <p className="text-slate-300 mb-6">
                Our free plan gives you access to summaries for all policies, with 2 personalized impact analyses per week. Premium unlocks unlimited personal impact analyses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-white">Weekly free views reset automatically</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-white">Personalized to your exact situation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-white">Premium upgrades available anytime</span>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="#signup" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-6 py-3 rounded-md transition-all shadow-lg hover:shadow-blue-900/20 group"
                >
                  Create Your Free Account
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg border border-blue-500/10 p-4 transform rotate-1">
                    <div className="text-blue-400 text-sm font-medium mb-1">This Week</div>
                    <div className="space-y-2">
                      <div className="bg-slate-900 rounded h-2 w-full"></div>
                      <div className="bg-slate-900 rounded h-2 w-3/4"></div>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="text-xs text-slate-400">2 policies</div>
                      <div className="text-xs text-green-400">Available</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg border border-blue-500/10 p-4 transform -rotate-1">
                    <div className="text-blue-400 text-sm font-medium mb-1">Next Week</div>
                    <div className="space-y-2">
                      <div className="bg-slate-900 rounded h-2 w-full"></div>
                      <div className="bg-slate-900 rounded h-2 w-3/4"></div>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="text-xs text-slate-400">2 policies</div>
                      <div className="text-xs text-green-400">Upcoming</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg border border-blue-500/10 p-4 transform rotate-1 mt-4">
                  <div className="text-blue-400 text-sm font-medium mb-1">Premium</div>
                  <div className="space-y-2">
                    <div className="bg-slate-900 rounded h-2 w-full"></div>
                    <div className="bg-slate-900 rounded h-2 w-full"></div>
                    <div className="bg-slate-900 rounded h-2 w-full"></div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="text-xs text-slate-400">Unlimited</div>
                    <div className="text-xs text-indigo-400">Upgrade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PersonaTag = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
      active 
        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30' 
        : 'bg-slate-700/50 text-slate-400 border border-slate-600/50 hover:text-slate-300'
    }`}
  >
    {label}
  </button>
);

const PolicyButton = ({ active, onClick, label, date, viewed, premium }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
      active 
        ? 'bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-white border border-indigo-500/30' 
        : 'bg-slate-800/50 text-slate-400 hover:text-slate-300 hover:bg-slate-800 border border-slate-700/50'
    }`}
  >
    <div className="flex flex-col items-start">
      <span className="font-medium text-sm">{label}</span>
      <span className="text-xs text-slate-500">{date}</span>
    </div>
    {viewed && (
      <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full border border-green-500/30">
        Viewed
      </span>
    )}
    {premium && !viewed && (
      <span className="bg-slate-700 text-slate-300 text-xs px-2 py-0.5 rounded-full border border-slate-600 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Premium
      </span>
    )}
  </button>
);

export default AppExampleSection;