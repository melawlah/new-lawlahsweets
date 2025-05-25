// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const CupcakeDetails = () => {
//   const { state } = useLocation();
//   const cupcake = state?.cupcake;

//   const name = cupcake?.name || 'Cupcake Set';

//   // Determine price and description based on cupcake name
//   const getCupcakeDetails = (name) => {
//     switch (name.toLowerCase()) {
//       case '6 cupcakes':
//         return { price: 18, desc: 'A box of 6 gourmet cupcakes. Perfect for intimate celebrations or a sweet treat.' };
//       case '12 cupcakes':
//         return { price: 30, desc: 'A dozen cupcakes for parties, birthdays, or just because!' };
//       default:
//         return { price: 0, desc: 'Delicious handcrafted cupcakes made to order.' };
//     }
//   };

//   const { price, desc } = getCupcakeDetails(name);

//   const [flavour, setFlavour] = useState('');
//   const [frosting, setFrosting] = useState('');
//   const [color, setColor] = useState('');
//   const [deliveryDate, setDeliveryDate] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [notes, setNotes] = useState('');
//   const [file, setFile] = useState(null);

//   const totalPrice = (price * quantity).toFixed(2);

//   return (
//     <div className="bg-lightPink min-h-screen py-12 px-4 sm:px-8">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left: Image */}
//         <div className="w-full">
//           <img
//             src={cupcake?.image || '/assets/cupcake-placeholder.png'}
//             alt={name}
//             className="w-full h-auto rounded-xl shadow-md object-cover"
//           />
//         </div>

//         {/* Right: Form */}
//         <div className="bg-white rounded-xl shadow-md p-6 lg:p-10 flex flex-col gap-6">
//           <h2 className="text-3xl font-semibold text-deepPink">{name}</h2>
//           <p className="text-gray-700 leading-relaxed">{desc}</p>

//           {/* Cake Flavour */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Cake Flavour</label>
//             <select
//               value={flavour}
//               onChange={(e) => setFlavour(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             >
//               <option value="">Select Flavour</option>
//               <option value="vanilla">Vanilla</option>
//               <option value="chocolate">Chocolate</option>
//               <option value="red velvet">Red Velvet</option>
//               <option value="lemon">Lemon</option>
//             </select>
//           </div>

//           {/* Frosting */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Frosting</label>
//             <select
//               value={frosting}
//               onChange={(e) => setFrosting(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             >
//               <option value="">Select Frosting</option>
//               <option value="buttercream">Buttercream</option>
//               <option value="cream cheese">Cream Cheese</option>
//               <option value="ganache">Ganache</option>
//               <option value="whipped cream">Whipped Cream</option>
//             </select>
//           </div>

//           {/* Color Theme */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Color Theme</label>
//             <input
//               type="text"
//               value={color}
//               placeholder="e.g. Pastel pink and gold"
//               onChange={(e) => setColor(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             />
//           </div>

//           {/* Delivery Date */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Delivery Date</label>
//             <input
//               type="date"
//               value={deliveryDate}
//               onChange={(e) => setDeliveryDate(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             />
//           </div>

//           {/* Quantity */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Quantity</label>
//             <input
//               type="number"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
//             />
//           </div>

//           {/* Notes */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Notes for the Baker</label>
//             <textarea
//               rows="3"
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               placeholder="e.g. Make it gluten-free. Write 'Happy B-day, Ella!'"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink resize-none"
//             />
//           </div>

//           {/* File Upload */}
//           <div>
//             <label className="block font-medium mb-1 text-deepPink">Upload Reference Image</label>
//             <input
//               type="file"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
//               file:rounded-md file:border-0 file:text-sm file:font-semibold
//               file:bg-deepPink file:text-white hover:file:bg-lightPink"
//             />
//           </div>

//           {/* Total Price */}
//           <div className="text-lg font-medium text-gray-800">
//             Total Price: <span className="text-deepPink">${totalPrice}</span>
//           </div>

//           {/* Add to Cart */}
//           <button className="bg-deepPink text-white mt-2 px-6 py-3 rounded-lg hover:bg-lightPink hover:text-deepPink font-medium transition duration-300">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CupcakeDetails;


import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CupcakeDetails = () => {
  const { state } = useLocation();
  const cupcake = state?.cupcake;
  const name = cupcake?.name || 'Cupcake Set';

  const getCupcakeDetails = (name) => {
    switch (name.toLowerCase()) {
      case '6 cupcakes':
        return {
          price: 18,
          desc: 'A box of 6 gourmet cupcakes. Perfect for intimate celebrations or a sweet treat.',
        };
      case '12 cupcakes':
        return {
          price: 30,
          desc: 'A dozen cupcakes for parties, birthdays, or just because!',
        };
      default:
        return {
          price: 0,
          desc: 'Delicious handcrafted cupcakes made to order.',
        };
    }
  };

  const { price, desc } = getCupcakeDetails(name);

  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [selectedFrostings, setSelectedFrostings] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState(null);
  const [addToCartMessage, setAddToCartMessage] = useState(null);

  const totalPrice = (price * quantity).toFixed(2);

  const flavors = ['Vanilla', 'Chocolate', 'Red Velvet', 'Lemon'];
  const frostings = ['Buttercream', 'Cream Cheese', 'Ganache', 'Whipped Cream'];
  const colors = ['#FFC0CB', '#FFD700', '#00CED1', '#A52A2A', '#800080'];

  const toggleItem = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const newItem = {
      // id: category, // Or generate a more unique ID if needed
       name: name,
      // imageUrl: imageUrl,
       quantity: parseInt(quantity),
       selectedFlavours: selectedFlavours,
       selectedFrostings: selectedFrostings,
      // selectedSize: selectedSize,
       selectedColor: selectedColor,
       notes: notes,
       deliveryDate: deliveryDate,
      // additionalNotes: additionalNotes,
      // frosting: frosting,
       totalPrice: totalPrice,
    };

    addToCart(newItem); // Use the addToCart function from the context
    setAddToCartMessage({name: "cupcake", quantity: parseInt(quantity)})
    setTimeout(() => setAddToCartMessage(null), 3000)
    // toggleModal();
  };

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <div className="container mx-auto bg-white rounded-2xl shadow-lg overflow-hidden py-12 px-8"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <img
          src={cupcake?.image || '/assets/cupcake-placeholder.png'}
          alt={name}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />

        {/* Info & Form */}
        <div>
          <h1 className="text-3xl font-bold text-deepPink">{name}</h1>
          <p className="text-gray-600 mt-4">{desc}</p>

          {/* Flavors */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Choose Flavors:</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {flavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() =>
                    toggleItem(selectedFlavours, setSelectedFlavours, flavor)
                  }
                  className={`px-4 py-2 rounded-lg ${
                    selectedFlavours.includes(flavor)
                      ? 'bg-deepPink text-white'
                      : 'bg-lightPink text-gray-800'
                  }`}
                >
                  {flavor} {selectedFlavours.includes(flavor) && '✕'}
                </button>
              ))}
            </div>
          </div>

          {/* Frosting */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Choose Frosting:</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {frostings.map((frosting) => (
                <button
                  key={frosting}
                  onClick={() =>
                    toggleItem(selectedFrostings, setSelectedFrostings, frosting)
                  }
                  className={`px-4 py-2 rounded-lg ${
                    selectedFrostings.includes(frosting)
                      ? 'bg-deepPink text-white'
                      : 'bg-lightPink text-gray-800'
                  }`}
                >
                  {frosting} {selectedFrostings.includes(frosting) && '✕'}
                </button>
              ))}
            </div>
          </div>

          {/* Color Theme */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Choose Color Theme:</label>
            <div className="flex space-x-2 mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? 'border-deepPink' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Delivery Date */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Delivery Date:</label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
            />
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 p-2 border rounded-lg mt-2"
            />
          </div>

          {/* Notes */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Notes for the Baker:</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. 'Happy Birthday Nana!' or 'Use gluten-free base'"
              className="w-full p-2 border rounded-lg mt-2"
              rows="3"
            />
          </div>

          {/* File Upload */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Upload a Reference Image:</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-deepPink file:text-white hover:file:bg-lightPink mt-2"
            />
          </div>

          {/* Total Price */}
          <div className="mt-6 text-lg font-semibold text-gray-800">
            Total Price: <span className="text-deepPink">${totalPrice}</span>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="mt-8 w-full bg-deepPink text-white py-3 rounded-lg hover:bg-lightPink transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CupcakeDetails;


