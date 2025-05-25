import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pastries = () => {
  const navigate = useNavigate();

  const pastries = [
    {
      name: 'Meatpie',
      image: '/assets/meatpie-white-background.png',
      alt: 'meatpies',
      desc: '',
      regPrice: '25',
      partyPrice: '70'
    },
    {
      name: 'Doughnuts',
      image: '/assets/doughnuts-white-background.png',
      alt: 'doughnuts',
      desc: '',
      regPrice: '20',
      partyPrice: '70'
    },
    {
      name: 'Small Chops',
      image: '/assets/smallchops-white-background.png',
      alt: 'smallchops',
      desc: '',
      regPrice: '30',
      partyPrice: '150'
    },
    {
        name: 'Puffpuff',
        image: '/assets/puffpuff-white-background.png',
        alt: 'puffpuff',
        desc: '',
        regPrice: '20',
        partyPrice: '70'
      },
    {
        name: 'Mo\'s Special',
        image: '/assets/mo-white-background.png',
        alt: 'Mo',
        desc: '',
        regPrice: '15',
    },
    {
        name: 'Arams\'s Special',
        image: '/assets/red-velvet-cookie-white-background.png',
        alt: 'arams',
        desc: '',
        regPrice: '80'
    },

  ];

  return (
    <div className="bg-lightPink min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Heading Section */}
        <h2 className="text-center text-4xl font-medium text-black mb-12">
          Pastries
        </h2>

        {/* Cookie Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pastries.map((pastry, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <img
                src={pastry.image}
                alt={pastry.alt}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-md font-semibold text-black mb-3">
                {pastry.name}
              </h3>
              <button
                onClick={() =>
                  navigate(`/pastry/${pastry.name}`, {
                    state: { pastry },
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

export default Pastries;