'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isAuthenticated, loading, error } = useAuth();
  
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: '',
    isStrong: false
  });
  
  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Check password strength if password field is being updated
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };
  
  const checkPasswordStrength = (password) => {
    // Simple password strength checker
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    // Calculate score
    let score = 0;
    if (hasMinLength) score++;
    if (hasUpperCase) score++;
    if (hasLowerCase) score++;
    if (hasNumbers) score++;
    if (hasSpecialChar) score++;
    
    // Feedback based on score
    let feedback = '';
    let isStrong = false;
    
    if (score <= 2) {
      feedback = 'Weak password';
    } else if (score <= 3) {
      feedback = 'Moderate password';
    } else if (score === 4) {
      feedback = 'Strong password';
      isStrong = true;
    } else {
      feedback = 'Very strong password';
      isStrong = true;
    }
    
    setPasswordStrength({ score, feedback, isStrong });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    
    // Validate passwords match
    if (userData.password !== userData.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
    
    // Validate password strength
    if (!passwordStrength.isStrong) {
      setFormError('Please choose a stronger password');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for API (transform field names if needed)
      const registrationData = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password
      };
      
      await register(registrationData);
      router.push('/profile'); // Redirect to profile completion page after registration
    } catch (err) {
      setFormError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      
      <section className="pt-32 pb-24 container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-slate-300">Join Politek to get personalized policy insights</p>
          </div>
          
          {(formError || error) && (
            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-red-400 text-sm">{formError || error}</p>
            </div>
          )}
          
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={userData.firstName}
                      onChange={handleChange}
                      className="block w-full pl-10 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Jane"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={userData.lastName}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={userData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={userData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
                
                {userData.password && (
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            passwordStrength.score <= 2 ? 'bg-red-500' : 
                            passwordStrength.score === 3 ? 'bg-yellow-500' : 
                            'bg-green-500'
                          }`}
                          style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`ml-2 text-xs ${
                        passwordStrength.score <= 2 ? 'text-red-400' : 
                        passwordStrength.score === 3 ? 'text-yellow-400' : 
                        'text-green-400'
                      }`}>
                        {passwordStrength.feedback}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-1">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full pl-10 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
                
                {userData.password && userData.confirmPassword && (
                  <div className="mt-2 flex items-center">
                    {userData.password === userData.confirmPassword ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                        <span className="text-xs text-green-400">Passwords match</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4 text-red-400 mr-1" />
                        <span className="text-xs text-red-400">Passwords do not match</span>
                      </>
                    )}
                  </div>
                )}
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-md flex items-center justify-center transition-all shadow-lg group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-xs text-slate-400 text-center">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
              </p>
            </form>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-slate-400">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-400 hover:text-blue-300">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
