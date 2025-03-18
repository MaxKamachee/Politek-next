'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn, loginUser, logoutUser, registerUser, getUserProfile } from '../utils/auth';
import { trackUserActivity } from '../utils/api';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component to wrap around components that need authentication
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        if (isLoggedIn()) {
          // Get user profile if logged in
          const userProfile = await getUserProfile();
          setUser(userProfile);
          
          // Track user session start
          trackUserActivity('session_start');
        }
      } catch (err) {
        console.error('Error checking authentication status:', err);
        // If error getting user profile, log them out
        logoutUser();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkLoggedIn();
    
    // Cleanup: track session end when component unmounts
    return () => {
      if (user) {
        trackUserActivity('session_end');
      }
    };
  }, []);

  // Login function
  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await loginUser(credentials);
      setUser(data.user);
      
      // Track successful login
      trackUserActivity('login', { method: 'email' });
      
      return data;
    } catch (err) {
      setError(err.message || 'Failed to login');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await registerUser(userData);
      setUser(data.user);
      
      // Track successful registration
      trackUserActivity('register', { method: 'email' });
      
      return data;
    } catch (err) {
      setError(err.message || 'Failed to register');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    // Track logout before removing user data
    if (user) {
      trackUserActivity('logout');
    }
    
    logoutUser();
    setUser(null);
    router.push('/');
  };

  // Value object to be provided by the context
  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;