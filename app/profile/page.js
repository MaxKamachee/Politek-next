'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { saveUserProfile } from '../utils/api';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');
    
    try {
      // Combine email with rest of profile data
      const completeProfile = {
        email,
        ...formData
      };
      
      console.log('Submitting profile:', completeProfile);
      
      // Save the profile to the backend
      const response = await saveUserProfile(completeProfile);
      console.log('Backend response:', response);
      
      // Store the user ID and profile in localStorage for demo purposes
      localStorage.setItem('userProfile', JSON.stringify(completeProfile));
      localStorage.setItem('userId', response.user_id);
      
      setSuccessMessage('Profile saved successfully!');
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/thank-you');
      }, 1500);
    } catch (error) {
      console.error('Error saving profile:', error);
      setError('Failed to save profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
          
          {successMessage && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-500/30 rounded-lg flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-green-400">{successMessage}</span>
            </div>
          )}
          
          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-red-400">{error}</span>
            </div>
          )}
          
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-8 py-4 rounded-md flex items-center justify-center transition-all text-lg shadow-lg hover:shadow-blue-900/20 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Saving Profile...' : 'Complete Profile'}
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
