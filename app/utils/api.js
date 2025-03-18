/**
 * API integration utilities for handling policy data, user activities, and analytics
 */

import { getAuthToken, getCurrentUserId } from './auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * Helper function to make authenticated API requests
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<Response>} Fetch response
 */
const authenticatedFetch = async (endpoint, options = {}) => {
  const token = getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `API error: ${response.status}`);
  }

  return response;
};

/**
 * Track user activity in the system
 * @param {string} activityType - Type of activity (e.g., 'login', 'view_policy', 'personal_analysis')
 * @param {Object} activityData - Additional activity data
 * @returns {Promise<Object>} API response
 */
export const trackUserActivity = async (activityType, activityData = {}) => {
  try {
    const userId = getCurrentUserId();
    
    if (!userId) {
      console.warn('Cannot track activity: No user ID found');
      return null;
    }
    
    const response = await authenticatedFetch('/analytics/track', {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        activity_type: activityType,
        timestamp: new Date().toISOString(),
        data: activityData
      })
    });
    
    return await response.json();
  } catch (error) {
    console.error(`Error tracking activity (${activityType}):`, error);
    // Don't throw - we don't want tracking errors to break the app flow
    return null;
  }
};

/**
 * Fetch available policies from the API
 * @param {Object} filters - Optional filters for policies
 * @returns {Promise<Array>} List of policies
 */
export const getPolicies = async (filters = {}) => {
  try {
    // Build query string from filters
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, value);
      }
    });
    
    const query = queryParams.toString() ? `?${queryParams.toString()}` : '';
    const response = await authenticatedFetch(`/policies${query}`);
    const data = await response.json();
    
    // Track this view
    trackUserActivity('view_policies_list', { filters });
    
    return data;
  } catch (error) {
    console.error('Error fetching policies:', error);
    throw error;
  }
};

/**
 * Get detailed information about a specific policy
 * @param {string} policyId - ID of the policy
 * @returns {Promise<Object>} Policy details
 */
export const getPolicyDetails = async (policyId) => {
  try {
    const response = await authenticatedFetch(`/policies/${policyId}`);
    const data = await response.json();
    
    // Track this view
    trackUserActivity('view_policy_details', { policy_id: policyId });
    
    return data;
  } catch (error) {
    console.error(`Error fetching policy details for ${policyId}:`, error);
    throw error;
  }
};

/**
 * Get personalized policy impact based on user profile and policy
 * @param {string} policyId - ID of the policy
 * @param {string} policySummary - Summary of the policy
 * @param {Object} userProfile - User profile data (optional - will fetch from backend if available)
 * @returns {Promise<Object>} Personalized policy impact
 */
export const getPersonalizedPolicyImpact = async (policyId, policySummary, userProfile = null) => {
  try {
    const userId = getCurrentUserId();
    
    // If the user is logged in and no profile is provided, try to get it from the backend
    if (userId && !userProfile) {
      try {
        const profileResponse = await authenticatedFetch(`/users/${userId}/profile`);
        userProfile = await profileResponse.json();
      } catch (profileError) {
        console.error('Error fetching user profile for impact analysis:', profileError);
        // Continue with null profile
      }
    }
    
    const requestBody = {
      policy_id: policyId,
      policy_summary: policySummary,
      ...(userProfile ? { user_profile: userProfile } : {})
    };
    
    const response = await authenticatedFetch('/policies/personalized_impact', {
      method: 'POST',
      body: JSON.stringify(requestBody)
    });
    
    const data = await response.json();
    
    // Track this personalized analysis
    trackUserActivity('personal_policy_analysis', { 
      policy_id: policyId,
      analysis_id: data.analysis_id || null
    });
    
    return data;
  } catch (error) {
    console.error(`Error getting personalized policy impact for ${policyId}:`, error);
    
    // Provide a fallback response for testing purposes
    return {
      personalized_impact: "Based on your profile, this policy would have specific impacts on your situation. Error connecting to the analysis server.",
      policy_summary: policySummary || `Policy ID: ${policyId}`
    };
  }
};

/**
 * Save or update user profile to the backend API
 * @param {Object} profileData - Complete user profile data
 * @returns {Promise<Object>} API response
 */
export const saveUserProfile = async (profileData) => {
  try {
    const userId = getCurrentUserId();
    
    // Transform the profile data to match API expectations
    const apiProfileData = transformProfileData(profileData);
    
    let endpoint = '/users/profile';
    let method = 'POST';
    
    // If user is logged in, update their profile instead of creating a new one
    if (userId) {
      endpoint = `/users/${userId}/profile`;
      method = 'PUT';
    }
    
    const response = await authenticatedFetch(endpoint, {
      method,
      body: JSON.stringify(apiProfileData)
    });
    
    const data = await response.json();
    
    // Track profile creation/update
    trackUserActivity('update_profile', {
      profile_id: data.profile_id || null
    });
    
    return data;
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
};

/**
 * Get a user's weekly analysis usage stats
 * @returns {Promise<Object>} Weekly usage data
 */
export const getWeeklyAnalysisUsage = async () => {
  try {
    const userId = getCurrentUserId();
    
    if (!userId) {
      throw new Error('User not logged in');
    }
    
    const response = await authenticatedFetch(`/users/${userId}/analysis_usage`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching weekly analysis usage:', error);
    
    // Fallback to local storage for testing or if API fails
    const localData = localStorage.getItem('weeklyAnalysesData');
    if (localData) {
      try {
        return JSON.parse(localData);
      } catch (parseError) {
        console.error('Error parsing local weekly analyses data:', parseError);
      }
    }
    
    // Return default empty structure if all else fails
    return {
      analyses: [],
      lastResetTime: new Date().toISOString(),
      limit: 2,
      resetDays: 7
    };
  }
};

/**
 * Record a personal analysis usage
 * @param {string} policyId - ID of the analyzed policy
 * @returns {Promise<Object>} Updated usage data
 */
export const recordAnalysisUsage = async (policyId) => {
  try {
    const userId = getCurrentUserId();
    
    if (!userId) {
      throw new Error('User not logged in');
    }
    
    const response = await authenticatedFetch(`/users/${userId}/analysis_usage`, {
      method: 'POST',
      body: JSON.stringify({
        policy_id: policyId,
        timestamp: new Date().toISOString()
      })
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error recording analysis usage:', error);
    throw error;
  }
};

/**
 * Transform the frontend profile data to match the API expectations
 * @param {Object} profileData - Frontend profile data
 * @returns {Object} Transformed profile data for API
 */
export const transformProfileData = (profileData) => {
  // Create a copy of the profile data to avoid modifying the original
  const transformedData = { ...profileData };
  
  // Rename housingStatus to housing_status if present
  if ('housingStatus' in transformedData) {
    transformedData.housing_status = transformedData.housingStatus;
    delete transformedData.housingStatus;
  }
  
  // Rename household to household_info if present
  if ('household' in transformedData && !('household_info' in transformedData)) {
    transformedData.household_info = transformedData.household;
    delete transformedData.household;
  }
  
  // Rename employment to employment_info if present
  if ('employment' in transformedData && !('employment_info' in transformedData)) {
    // If income is available, include it in employment_info
    if ('income' in transformedData) {
      transformedData.employment_info = `${transformedData.employment}, ${transformedData.income}`;
    } else {
      transformedData.employment_info = transformedData.employment;
    }
    delete transformedData.employment;
  }
  
  // Rename otherFactors to other_factors if present
  if ('otherFactors' in transformedData) {
    transformedData.other_factors = transformedData.otherFactors;
    delete transformedData.otherFactors;
  }
  
  // Rename education to education_level if present
  if ('education' in transformedData) {
    transformedData.education_level = transformedData.education;
    delete transformedData.education;
  }
  
  // Rename income to income_range if present
  if ('income' in transformedData && !('income_range' in transformedData)) {
    transformedData.income_range = transformedData.income;
    delete transformedData.income;
  }
  
  return transformedData;
};