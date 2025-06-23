import React from 'react'
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom'

const MovieDetails = () => {
    const movieDetails=useLoaderData();
    console.log(movieDetails)
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-8">
        
        {/* Poster */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={movieDetails.Poster}
            alt="Movie Poster"
            className="w-full h-auto rounded-lg object-cover shadow"
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Movie Title</h2>
          <p className="text-sm text-gray-500">Released: <span className="font-medium">{movieDetails.Released}</span></p>
          <p className="text-sm text-gray-500">Genre: <span className="font-medium">{movieDetails.Genre}</span></p>
          <p className="text-sm text-gray-500">Director: <span className="font-medium">{movieDetails.Director}</span></p>
          <p className="text-sm text-gray-500">Actors: <span className="font-medium">{movieDetails.Actors}</span></p>

          <div>
            <p className="mt-4 text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold">Plot:</span> {movieDetails.Plot}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="bg-yellow-400 text-black font-semibold px-3 py-1 rounded-full text-sm shadow">
              ⭐ IMDb: {movieDetails.imdbRating}
            </div>
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {movieDetails.Rated}
            </div>
          </div>
        </div>
      </div>
      <NavLink onClick={handleGoBack} className='flex justify-center px-3 py-3 mt-8 bg-blue-600 text-white rounded-lg'>Go Back</NavLink>
    </section>
  )
}

export default MovieDetails