import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact, { contactData } from './pages/Contact';
import Movie from './pages/Movie';
import AppLayout from './components/layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import GetApiData from './api/GetApiData';
import MovieDetails from './pages/MovieDetails';
import GetMovieData from './api/GetMovieData';
const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/movie",
          element:<Movie/>,
          loader:GetApiData,
        },
        {
          path:"/movie/:movieID",
          element:<MovieDetails/>,
          loader:GetMovieData,
        },
        {
          path:"/contact",
          element:<Contact/>,
          action: contactData,
        }
      ]
    },
    
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App