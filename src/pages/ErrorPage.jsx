import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link ,useNavigate} from 'react-router-dom'; // Remove this if you're not using React Router

const ErrorPage = () => {
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center mt-6 px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back Home
        </Link>

        <button onClick={handleGoBack} 
        className='bg-transparent border border-blue-600 px-5 py-3 rounded-lg ml-5 hover:bg-gray-400 transition'>
            Go back to previous page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
