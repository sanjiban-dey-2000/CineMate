import React from 'react'
import GetApiData from '../api/GetApiData';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';

/*const movies = [
{
  title: 'Inception',
  year: 2010,
  image: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
},
  {
    title: 'The Dark Knight',
    year: 2008,
    image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
  {
    title: 'Interstellar',
    year: 2014,
    image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
  },
  {
    title: 'Parasite',
    year: 2019,
    image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
  },
    { title: 'The Shawshank Redemption', year: 1994, image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
  { title: 'The Godfather', year: 1972, image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
  { title: 'The Godfather Part II', year: 1974, image: 'https://image.tmdb.org/t/p/w500/amvmeQWheahG3StKwIE1f7jRnkZ.jpg' },
  { title: 'The Dark Knight', year: 2008, image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
  { title: "Schindler's List", year: 1993, image: 'https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg' },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003, image: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' },
  { title: 'Forrest Gump', year: 1994, image: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg' },
  { title: 'Inception', year: 2010, image: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg' },
  { title: 'Parasite', year: 2019, image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
  { title: 'Interstellar', year: 2014, image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { title: 'Spirited Away', year: 2001, image: 'https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg' },
  { title: 'The Good, the Bad and the Ugly', year: 1966, image: 'https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg' },
  { title: 'Goodfellas', year: 1990, image: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg' },
  { title: 'Fight Club', year: 1999, image: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg' },
  { title: 'The Matrix', year: 1999, image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, image: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' },
];*/

const Movie = () => {
 const movieData=useLoaderData();
 console.log(movieData);
  return (
     <section className="bg-white py-16" id="movies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Movies</h2>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movieData.Search.map((movie, index) => (
            <div key={index} className="bg-white flex flex-col justify-center shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{movie.Title}</h3>
                <p className="text-gray-500">{movie.Year}</p>
              </div>
              <NavLink to={`/movie/${movie.imdbID}`} className='w-full py-5 text-center bg-amber-600 text-amber-50 font-semibold'>Watch More</NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Movie