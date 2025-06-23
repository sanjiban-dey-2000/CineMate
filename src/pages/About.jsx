import React from 'react'

const About = () => {
  return (
     <section className="bg-gray-50 py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/about.png"
            alt="About Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg mb-4">
            At <span className="text-blue-600 font-medium">CineMate</span>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam eius culpa libero saepe, tenetur aperiam similique illum. Quas tempore quisquam natus dolores quod neque hic. Amet tenetur sunt quia perferendis mollitia. Magni reprehenderit accusantium perferendis corporis, corrupti molestias laborum perspiciatis suscipit at eius fugiat ab labore, nam magnam quidem.
          </p>
          <p className="text-gray-600 text-lg">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium deserunt ex exercitationem veniam ea saepe pariatur? Accusantium, atque! Dolorem?
          </p>
        </div>
      </div>
    </section>
  )
}

export default About