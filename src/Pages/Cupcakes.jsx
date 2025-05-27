import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cupcakes = () => {
  const navigate = useNavigate();

  const cupcakes = [
    // {
    //   name: 'Box of 6 Cupcakes',
    //   image: 'https://res.cloudinary.com/lawlah/image/upload/v1745872306/cupcake_p96sh7.png',
    //   alt: 'box-of-6-cupcakes',
    // },
    {
      name: 'Cupcakes',
      image: '/assets/doughnuts (3).png',
      alt: 'box-of-12-cupcakes',
    },
  ];

  return (
    <div className="bg-lightPink min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Heading Section */}
        <h2 className="text-center text-4xl font-medium text-black mb-12">
          Cupcakes
        </h2>

        {/* Cupcake Cards Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cupcakes.map((cupcake, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <img
                src={cupcake.image}
                alt={cupcake.alt}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-md font-semibold text-black mb-3">
                {cupcake.name}
              </h3>
              <button
                onClick={() =>
                  navigate(`/cupcake/${cupcake.name}`, {
                    state: { cupcake },
                  })
                }
                className="bg-deepPink text-white px-4 py-2 rounded-md hover:bg-lightPink hover:text-deepPink transition-all text-sm font-medium"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {cupcakes.map((cupcake) => (
              <Link
                key={cupcake.name}
                to={`/cupcake/${cupcake.name}`}
                state={{
                  imageUrl: cupcake.image,
                  name: cupcake.name,
                }}
                className="group bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-center">
                  <img
                    src={cupcake.image}
                    alt={cupcake.name}
                    className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cupcake.name} 
                  </h3>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Cupcakes;