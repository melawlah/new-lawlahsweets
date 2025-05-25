// src/components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <section
    className="h-[50vh] md:h-[90vh] flex items-center"

    //   style={{
    //     backgroundImage: "url('/hero-bg.jpg')", // Replace with your image
    //   }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-lightPink/70"></div> */}

      {/* Content Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 px-12">
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-medium text-black leading-snug text-center sm:text-left">
            Bespoke cakes tailored to <br />
            your tastes and style, making <br />
            every celebration even more <br />
            unforgettable.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center sm:items-start">
            <a
              href="/celebration-cakes"
              className="cursor-pointer bg-deepPink text-white px-8 py-2 text-sm rounded-lg font-medium hover:bg-lightPink/80 hover:border-1 hover:border-deepPink hover:text-deepPink sm:w-40 text-center transition-colors"
            >
              See Our Works
            </a>
            <a
              href="#contact"
              className="cursor-pointer bg-lightPink text-deepPink px-8 py-2 text-sm rounded-lg font-medium border-1 border-deepPink hover:bg-deepPink hover:text-white sm:w-40 text-center transition-colors"
            >
              Contact Us
            </a>
          </div>




        </div>

        {/* Right Side: Cake Image */}
        <div className="hidden md:block">
          <img
            src="/assets/lawlah-sweets-hero-section-image.png" // Replace with your cake image
            alt="Delicious Cake"
            className="w-full max-w-lg scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
