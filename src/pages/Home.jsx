import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section className="bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">CineMate</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita atque reprehenderit similique amet qui distinctio labore fugiat et sit.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <NavLink
              to="/movie"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </NavLink>
            <NavLink
              to="/about"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* Right Image (Optional Illustration) */}
        <div className="md:w-1/2">
          <img
            src="/hero.jpg"
            alt="Hero Illustration"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Home