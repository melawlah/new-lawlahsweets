import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 lg:w-2/5 mb-12 md:mb-0">
          <img
            src='https://res.cloudinary.com/lawlah/image/upload/v1747678853/chef-pic_cyeabp.jpg'
            alt="Lawlah"
            className="w-full h-auto rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 lg:w-3/5 md:pl-12">
          <div className="text-center md:text-left">
            {/* Small Text: Our Journey */}
            <p className="text-deepPink text-sm font-semibold uppercase tracking-wider mb-3">
              Our Promise
            </p>

            {/* Large Text: What We Believe In */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-snug mb-6">
              Crafting Sweet Memories with Passion
            </h2>

            {/* Paragraph with big quote */}
            <p className="text-md md:text-lg text-black/80 mb-8 leading-relaxed relative">
              <span className="text-4xl text-deepPink mr-2">“</span>
              Our creations are more than just desserts; they are expressions of love and art. Each bite is filled with
              warmth, creativity, and the promise of making every occasion memorable.
              <span className="text-4xl text-deepPink ml-2">”</span>
            </p>

            {/* Signature-style closing */}
            <div className="mt-12 text-center md:text-left">
              <p className="text-xl text-deepPink font-semibold mb-1">
                Funmilola
              </p>
              <p className="text-md text-gray-500">Creative Director</p>

              {/* Signature */}
              <p className="mt-4 text-6xl font-bold text-deepPink font-signature transform hover:rotate-3 transition-transform duration-300">
                Lawlah
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
