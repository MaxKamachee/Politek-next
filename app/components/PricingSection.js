'use client';

import React, { useState } from 'react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  const plans = [
    {
      name: "Free",
      description: "Basic political insights for individual use",
      price: {
        monthly: 0,
        annual: 0
      },
      features: [
        "Access to all policy summaries",
        "2 personalized impact analyses per week",
        "Weekly impact analysis resets",
        "Basic data visualization",
        "Email updates on major policies"
      ],
      limitations: [
        "Limited personalized analyses",
        "Limited policy archive access",
        "No advanced visualization tools",
        "No custom alerts"
      ],
      ctaText: "Get Started",
      ctaHighlighted: false,
      badgeText: ""
    },
    {
      name: "Premium",
      description: "Comprehensive political insights for engaged citizens",
      price: {
        monthly: 9.99,
        annual: 7.99
      },
      features: [
        "Access to all policy summaries",
        "Unlimited personalized impact analyses",
        "Full policy archive access",
        "Advanced data visualization",
        "Custom policy alerts",
        "Priority support",
        "Comparative policy analysis",
        "Personal impact dashboard",
        "Policy briefing downloads"
      ],
      limitations: [
        "Limited API access"
      ],
      ctaText: "Start Free Trial",
      ctaHighlighted: true,
      badgeText: "MOST POPULAR"
    },
    {
      name: "Enterprise",
      description: "Organizational solutions for teams and advocacy groups",
      price: {
        monthly: 29.99,
        annual: 24.99
      },
      features: [
        "Everything in Premium",
        "Team collaboration features",
        "API access",
        "Data exports",
        "Custom branding",
        "Historical policy library (10+ years)",
        "Dedicated account manager",
        "Training and onboarding",
        "Custom integrations"
      ],
      limitations: [],
      ctaText: "Contact Sales",
      ctaHighlighted: false,
      badgeText: ""
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-900 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-900 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-slate-800 text-blue-400 px-4 py-1 rounded-md text-sm font-medium inline-block mb-4">PRICING</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Choose the plan that works for you</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From free weekly policy insights to unlimited premium access, we have a plan for every need.
          </p>
          
          {/* Pricing switch */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`text-sm mr-3 ${isAnnual ? 'text-white font-medium' : 'text-slate-400'}`}>Annual</span>
            <button 
              onClick={togglePricing} 
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-slate-700 focus:outline-none"
              aria-pressed={!isAnnual}
            >
              <span className="sr-only">Toggle pricing</span>
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-1' : 'translate-x-7'}`}
              />
            </button>
            <span className={`text-sm ml-3 ${!isAnnual ? 'text-white font-medium' : 'text-slate-400'}`}>Monthly</span>
            
            <div className="ml-5 bg-indigo-900/30 text-indigo-400 text-xs font-medium px-3 py-1 rounded-full border border-indigo-500/20">
              Save 20% with annual billing
            </div>
          </div>
        </div>
        
        {/* Weekly limit highlight */}
        <div className="max-w-5xl mx-auto mb-12 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg p-6 border border-blue-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Access model that makes sense</h3>
              <p className="text-slate-300">
                Everyone gets access to all policy summaries. Free users can personalize 2 analyses per week to see specific impacts. Premium users get unlimited personal analyses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <h4 className="text-blue-400 font-medium mb-2">Free</h4>
                <div className="text-white font-bold text-3xl mb-1">2</div>
                <div className="text-slate-400 text-sm">Personal analyses weekly</div>
                <div className="text-slate-400 text-sm mt-2 font-medium">All policy summaries</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <h4 className="text-indigo-400 font-medium mb-2">Premium</h4>
                <div className="text-white font-bold text-3xl mb-1">∞</div>
                <div className="text-slate-400 text-sm">Unlimited personalization</div>
                <div className="text-slate-400 text-sm mt-2 font-medium">Advanced features</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`relative rounded-xl overflow-hidden border ${plan.ctaHighlighted ? 'border-blue-500 shadow-lg shadow-blue-900/20' : 'border-slate-700'}`}
            >
              {/* Plan header with highlight for featured plan */}
              <div className={`${plan.ctaHighlighted ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-slate-800'} p-6`}>
                {plan.badgeText && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-yellow-500 text-slate-900 text-xs font-bold uppercase py-1 px-3 transform translate-x-2 -translate-y-1 rotate-12">
                      {plan.badgeText}
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-300 mb-4 min-h-[40px]">{plan.description}</p>
                
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                  <span className="text-slate-300 ml-2">/mo</span>
                </div>
                
                {isAnnual && plan.price.annual > 0 && (
                  <div className="text-xs text-slate-300 mt-1">
                    Billed annually (${(plan.price.annual * 12).toFixed(2)})
                  </div>
                )}
              </div>
              
              {/* Plan features */}
              <div className="bg-slate-900 p-6">
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-slate-400 mb-3 font-medium">Features</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-slate-400 mb-3 font-medium">Limitations</h4>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-slate-400">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button 
                  className={`w-full py-3 px-4 rounded-md font-medium transition-all ${plan.ctaHighlighted ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-900/20 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'}`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ section */}
        <div className="max-w-3xl mx-auto mt-24">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-white font-medium mb-2">What's the difference between summaries and personal impact analyses?</h4>
              <p className="text-slate-300 text-sm">Policy summaries explain what a policy does in clear, simple language. Personal impact analyses show exactly how that policy would affect your specific situation based on your profile details.</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-white font-medium mb-2">How does the weekly reset work?</h4>
              <p className="text-slate-300 text-sm">Every week, free users get 2 new personal impact analyses. These reset automatically 7 days after your last reset. You always have access to all policy summaries regardless of tier.</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-white font-medium mb-2">What happens after I use my 2 free personal analyses?</h4>
              <p className="text-slate-300 text-sm">You'll still have access to all policy summaries and your previous personalized analyses, but you'll need to wait for the weekly reset or upgrade to premium for unlimited personalization.</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-white font-medium mb-2">Can I get a custom plan for my organization?</h4>
              <p className="text-slate-300 text-sm">Absolutely! Our Enterprise plan can be customized to your organization's specific needs. Contact our sales team for tailored pricing and features.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;