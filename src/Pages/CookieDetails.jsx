// import React, { useState } from 'react';

// const CookieDetails = ({ cookie }) => {
//   const [size, setSize] = useState('small');
//   const [quantity, setQuantity] = useState('6');
//   const [amount, setAmount] = useState(1);

//   return (
//     <div className="bg-lightPink min-h-screen py-12 px-4 sm:px-8">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left: Image */}
//         <div className="w-full">
//           <img
//             src={cookie?.image || '/assets/choc-chip-white-background.png'}
//             alt={cookie?.name || 'Cookie'}
//             className="w-full h-auto rounded-xl shadow-md object-cover"
//           />
//         </div>

//         {/* Right: Details */}
//         <div className="bg-white rounded-xl shadow-md p-6 lg:p-10 flex flex-col gap-6">
//           <h2 className="text-3xl font-semibold text-deepPink">
//             {cookie?.name || 'Chocolate Chip Cookies'}
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             Indulge in our rich, buttery cookies made with premium ingredients. Soft in the center, crisp on the edges — perfect for every craving.
//           </p>

//           {/* Size Selection */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Select Size</label>
//             <select
//               value={size}
//               onChange={(e) => setSize(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             >
//               <option value="small">Small</option>
//               <option value="medium">Medium</option>
//               <option value="large">Large</option>
//             </select>
//           </div>

//           {/* Quantity Selection */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Pieces</label>
//             <select
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             >
//               <option value="6">6 Pieces</option>
//               <option value="12">12 Pieces</option>
//             </select>
//           </div>

//           {/* Number of Sets */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Number of Packs</label>
//             <input
//               type="number"
//               value={amount}
//               min="1"
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             />
//           </div>

//           {/* Add to Cart */}
//           <button className="bg-deepPink text-white mt-4 px-6 py-3 rounded-lg hover:bg-lightPink hover:text-deepPink font-medium transition duration-300">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookieDetails;




// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const CookieDetails = () => {
//   const location = useLocation();
//   const cookie = location.state?.cookie;

//   const [size, setSize] = useState('small');
//   const [quantity, setQuantity] = useState('6');
//   const [amount, setAmount] = useState(1);

//   return (
//     <div className="bg-lightPink min-h-screen py-12 px-4 sm:px-8">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left: Image */}
//         <div className="w-full">
//           <img
//             src={cookie?.image || '/assets/choc-chip-white-background.png'}
//             alt={cookie?.name || 'Cookie'}
//             className="w-full h-auto rounded-xl shadow-md object-cover"
//           />
//         </div>

//         {/* Right: Details */}
//         <div className=" p-6 lg:p-10 flex flex-col gap-6">
//           <h2 className="text-3xl font-semibold text-deepPink">
//             {cookie?.name || 'Chocolate Chip Cookies'}
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             Indulge in our rich, buttery cookies made with premium ingredients.
//             Soft in the center, crisp on the edges — perfect for every craving.
//           </p>

//           {/* Size Selection */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Select Size</label>
//             <select
//               value={size}
//               onChange={(e) => setSize(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             >
//               <option value="small">Small</option>
//               <option value="medium">Medium</option>
//               <option value="large">Large</option>
//             </select>
//           </div>

//           {/* Quantity Selection */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Pieces</label>
//             <select
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             >
//               <option value="6">6 Pieces</option>
//               <option value="12">12 Pieces</option>
//             </select>
//           </div>

//           {/* Number of Sets */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Number of Packs</label>
//             <input
//               type="number"
//               value={amount}
//               min="1"
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             />
//           </div>

//           {/* Add to Cart */}
//           <button className="bg-deepPink text-white mt-4 px-6 py-3 rounded-lg hover:bg-lightPink hover:text-deepPink font-medium transition duration-300">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookieDetails;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CookieDetails = () => {
  const location = useLocation();
  const cookie = location.state?.cookie;

  const [size, setSize] = useState('small');
  const [quantity, setQuantity] = useState('6');
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(10); // Initial price based on default selection

  // Price chart
  const priceMap = {
    small: {
      6: 10,
      12: 15,
    },
    medium: {
      6: 18,
      12: 24,
    },
    large: {
      6: 20,
      12: 30,
    },
  };

  useEffect(() => {
    const basePrice = priceMap[size][quantity];
    setPrice(basePrice * amount);
  }, [size, quantity, amount]);

  return (
    <div className="bg-lightPink min-h-screen py-12 px-4 sm:px-8">
      <div className="bg-white max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src={cookie?.image || '/assets/choc-chip-white-background.png'}
            alt={cookie?.name || 'Cookie'}
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="p-6 lg:p-10 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-deepPink">
            {cookie?.name || 'Chocolate Chip Cookies'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Indulge in our rich, buttery cookies made with premium ingredients.
            Soft in the center, crisp on the edges — perfect for every craving.
          </p>

          {/* Size Selection */}
          <div>
            <label className="block font-medium mb-1 text-deepPink">Select Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {/* Quantity Selection */}
          <div>
            <label className="block font-medium mb-1 text-deepPink">Pieces</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
            >
              <option value="6">6 Pieces</option>
              <option value="12">12 Pieces</option>
            </select>
          </div>

          {/* Number of Sets */}
          <div>
            <label className="block font-medium mb-1 text-deepPink">Number of Packs</label>
            <input
              type="number"
              value={amount}
              min="1"
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
            />
          </div>

          {/* Price Display */}
          <div className="text-lg font-semibold text-deepPink">
            Total: ${price.toFixed(2)}
          </div>

          {/* Add to Cart */}
          <button className="bg-deepPink text-white mt-4 px-6 py-3 rounded-lg hover:bg-lightPink hover:text-deepPink font-medium transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieDetails;


