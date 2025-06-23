import React from 'react'

const LoadingPage = () => {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 font-medium text-lg">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingPage