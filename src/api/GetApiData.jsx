import React from 'react'

const GetApiData = async() => {
    const apiKey=import.meta.env.VITE_MOVIE_API_KEY;
    try{
        const response=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=avengers&page=1`);
        const data=response.json();
        return data;
    }catch(error){
        console.log(error.message);
    }
}

export default GetApiData