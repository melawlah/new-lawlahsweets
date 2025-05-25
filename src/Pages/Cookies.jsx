import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cookies = () => {
  const navigate = useNavigate();

  const cookies = [
    {
      name: 'Chocolate Chip Cookies',
      image: '/assets/choc-chip-white-background.png',
      alt: 'Chocolate Chip Cookies',
    },
    {
      name: 'Double Chocolate Chip Cookies',
      image: '/assets/double-choc-chip-white-backg.png',
      alt: 'Double Chocolate Chip Cookies',
    },
    {
      name: 'Red Velvet Cookies',
      image: '/assets/red-velvet-cookie-white-background.png',
      alt: 'Red Velvet Cookies',
    },
    {
      name: 'Plain Cookies',
      image: '/assets/plain-cookie-white-background.png',
      alt: 'Plain Cookies',
    },
  ];

  return (
    <div className="bg-lightPink min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Heading Section */}
        <h2 className="text-center text-4xl font-medium text-black mb-12">
          Cookies
        </h2>

        {/* Cookie Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cookies.map((cookie, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <img
                src={cookie.image}
                alt={cookie.alt}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-md font-semibold text-black mb-3">
                {cookie.name}
              </h3>
              <button
                onClick={() =>
                  navigate(`/cookie/${cookie.name}`, {
                    state: { cookie },
                  })
                }
                className="bg-deepPink text-white px-4 py-2 rounded-md hover:bg-lightPink hover:text-deepPink transition-all text-sm font-medium"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cookies;