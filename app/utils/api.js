/**
 * API integration utilities for handling policy data and user profiles
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * Send user profile to the backend API
 * @param {Object} profileData - Complete user profile data
 * @returns {Promise<Object>} API response
 */
export const saveUserProfile = async (profileData) => {
  try {
    // Transform the profile data to match API expectations
    const apiProfileData = transformProfileData(profileData);
    
    console.log('Sending profile data to API:', apiProfileData);
    
    const response = await fetch(`${API_BASE_URL}/save_profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiProfileData),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
};

/**
 * Get personalized policy impact based on user profile and policy
 * @param {string} policyId - ID of the policy
 * @param {string} policySummary - Summary of the policy
 * @param {Object} userProfile - User profile data
 * @returns {Promise<Object>} Personalized policy impact
 */
export const getPersonalizedPolicyImpact = async (policyId, policySummary, userProfile) => {
  try {
    // Transform the profile data to match API expectations
    const apiProfileData = transformProfileData(userProfile);
    
    console.log('Getting personalized impact for profile:', apiProfileData);
    
    const response = await fetch(`${API_BASE_URL}/personalized_impact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        policy_summary: policySummary || `Policy ID: ${policyId}`,
        user_profile: apiProfileData
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error getting personalized policy impact:', error);
    
    // Provide a fallback response for testing purposes
    return {
      personalized_impact: "Based on your profile, this policy would have specific impacts on your situation. Error connecting to the analysis server.",
      policy_summary: policySummary || `Policy ID: ${policyId}`
    };
  }
};

/**
 * Get a user's profile from the backend API
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User profile data
 */
export const getUserProfile = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/profile/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error getting user profile:', error);
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