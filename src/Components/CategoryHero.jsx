import React from "react";

const CategoryHero = ({ bgImg, title }) => {
  return (
    <div className="relative w-full h-[10vh] md:h-[25vh]  overflow-hidden">
      {/* Background Image */}
      {/* <img
        src={bgImg}
        alt="Delicious Cakes"
        className="w-full h-full object-cover"
      /> */}

      {/* Overlay with Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-12">
        {/* Dynamic Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-snug drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CategoryHero;
