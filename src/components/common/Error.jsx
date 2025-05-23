// components/common/Error.js
import React from 'react';

const Error = ({ 
  title = 'Something went wrong', 
  message = 'Please try again later.', 
  onRetry = null,
  showRetry = false 
}) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-red-800 mb-2">{title}</h3>
      <p className="text-red-700 mb-4">{message}</p>
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;