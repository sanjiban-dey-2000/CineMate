import React from 'react'

const GetMovieData = async({params}) => {
   const apiKey=import.meta.env.VITE_MOVIE_API_KEY;
   const movieID=params.movieID;
    try{
        const response=await fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`);
        const data=response.json();
        return data;
    }catch(error){
        console.log(error.message);
    }
}

export default GetMovieData