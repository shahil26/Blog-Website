// components/common/Loading.js
import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'blue' }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };
  
  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white'
  };
  
  return (
    <div className={`animate-spin rounded-full ${sizeClasses[size]} border-t-2 border-b-2 ${colorClasses[color]}`}></div>
  );
};

const Loading = ({ message = 'Loading...', fullScreen = false }) => {
  const containerClass = fullScreen 
    ? 'min-h-screen flex flex-col justify-center items-center'
    : 'flex flex-col justify-center items-center py-12';
    
  return (
    <div className={containerClass}>
      <LoadingSpinner />
      <p className="mt-4 text-gray-600">{message}</p>
    </div>
  );
};

export default Loading;
export { LoadingSpinner };