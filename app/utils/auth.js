/**
 * Authentication service for handling user login, registration, and session management
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * Register a new user
 * @param {Object} userData - User registration data (email, password, etc.)
 * @returns {Promise<Object>} User data and token
 */
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Registration failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Store authentication data
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userId', data.user.id);
    
    return data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

/**
 * Log in an existing user
 * @param {Object} credentials - User login credentials (email, password)
 * @returns {Promise<Object>} User data and token
 */
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Login failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Store authentication data
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userId', data.user.id);
    
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Log out the current user
 */
export const logoutUser = () => {
  // Remove auth data from local storage
  localStorage.removeItem('authToken');
  localStorage.removeItem('userId');
  localStorage.removeItem('userProfile');
  
  // Any additional cleanup needed
};

/**
 * Check if a user is currently logged in
 * @returns {boolean} True if logged in, false otherwise
 */
export const isLoggedIn = () => {
  if (typeof window === 'undefined') return false; // For server-side rendering
  
  const token = localStorage.getItem('authToken');
  return !!token;
};

/**
 * Get the current user ID
 * @returns {string|null} User ID if logged in, null otherwise
 */
export const getCurrentUserId = () => {
  if (typeof window === 'undefined') return null; // For server-side rendering
  
  return localStorage.getItem('userId');
};

/**
 * Get the current auth token for API requests
 * @returns {string|null} Auth token if logged in, null otherwise
 */
export const getAuthToken = () => {
  if (typeof window === 'undefined') return null; // For server-side rendering
  
  return localStorage.getItem('authToken');
};

/**
 * Get user profile for the current logged-in user
 * @returns {Promise<Object>} User profile data
 */
export const getUserProfile = async () => {
  try {
    const userId = getCurrentUserId();
    const token = getAuthToken();
    
    if (!userId || !token) {
      throw new Error('User not logged in');
    }
    
    const response = await fetch(`${API_BASE_URL}/users/${userId}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Failed to get user profile: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

/**
 * Update the current user's profile
 * @param {Object} profileData - Updated profile data
 * @returns {Promise<Object>} Updated user profile
 */
export const updateUserProfile = async (profileData) => {
  try {
    const userId = getCurrentUserId();
    const token = getAuthToken();
    
    if (!userId || !token) {
      throw new Error('User not logged in');
    }
    
    const response = await fetch(`${API_BASE_URL}/users/${userId}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Failed to update user profile: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};