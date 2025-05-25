import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Cakes',
    image: '/assets/celebration-cakes.png',
    link: '/celebration-cakes',
  },
  {
    id: 2,
    name: 'Cookies',
    image: '/assets/red-velvet-cookies.png',
    link: '/cookies',
  },
  {
    id: 3,
    name: 'Cupcakes',
    image: '/assets/doughnuts (3).png',
    link: '/cupcakes',
  },
  {
    id: 4,
    name: 'Pastries',
    image: '/assets/doughnuts (5).png',
    link: '/pastries',
  },
];

const CategorySection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto text-center px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-deepPink mb-8">
          Discover by Category
        </h2>
        <p className="text-black/70 mb-16 text-lg max-w-2xl mx-auto leading-relaxed">
          Indulge in our irresistible range of freshly baked treats: rich, velvety cakes, buttery cookies, and a variety of mouthwatering pastries. Every bite is crafted with love and premium ingredients.
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={category.link}
              // className="pointer-events-none cursor-default group relative rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:shadow-2xl hover:scale-105"
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-semibold mb-3 tracking-wide">
                    {category.name}
                  </h3>
                  <span className="bg-deepPink text-white px-6 py-2 rounded-full font-medium shadow-lg cursor-pointer">
                    View More
                  </span>
                </div>
              </div>

              {/* Floating Tag */}
              <div className="absolute top-4 left-4 bg-white text-deepPink text-sm px-3 py-1 rounded-full shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-deepPink group-hover:text-white">
                {category.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
