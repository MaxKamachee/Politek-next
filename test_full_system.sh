#!/bin/bash

# Test the full system (backend + frontend)

# Check if backend is running
nc -z localhost 8000 > /dev/null 2>&1
if [ $? -ne 0 ]; then
  echo "ERROR: Backend is not running. Please start it with: ./run_backend.sh"
  exit 1
fi

# Start the frontend
echo "Starting the frontend..."
npm run dev

# Instructions for testing
cat << 'INSTRUCTIONS'

The frontend and backend are now running. To test the full system:

1. Open http://localhost:3000 in your browser
2. Enter your email in the signup form and click "Continue to Complete Your Profile"
3. Fill out the profile form and submit
4. You should be redirected to the thank-you page that shows a personalized policy impact

Your profile data is now saved in the backend and you can see it by going to:
http://localhost:8000/profile/YOUR_USER_ID

The user ID is displayed on the thank-you page.

Press Ctrl+C to stop the frontend.

INSTRUCTIONS
