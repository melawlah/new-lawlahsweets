// import React, { useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import Navbar from '../Components/NavBar';
// import Footer from '../Components/Footer';

// const productDetails = {
//   celebrationCake: {
//     name: 'Celebration Cake',
//     description: 'A beautiful cake perfect for any celebration, customizable with various flavors and fillings.',
//     flavours: ['Vanilla', 'Chocolate', 'Red Velvet', 'Lemon', 'Carrot'],
//     fillings: ['Buttercream', 'Ganache', 'Jam', 'Cream Cheese', 'Custard'],
//     sizes: ['6 inches', '8 inches', '10 inches'],
//     servings: ['Serves 8-10 people', 'Serves 12-15 people', 'Serves 18-20 people'],
//     allergens: 'Contains eggs, dairy, gluten. May contain nuts.',
//     dietary: 'Not suitable for vegans or those with gluten intolerance.',
//     allowCustomText: true,
//     allowFlavours: true,
//     allowSize: true,
//     allowDate: true,
//     basePrices: { '6 inches': 50, '8 inches': 70, '10 inches': 90 },
//     flavourPrice: 20,
//   },
//   weddingCake: {
//     name: 'Wedding Cake',
//     description: 'An elegant wedding cake designed to make your special day even more memorable.',
//     flavours: ['Vanilla', 'Chocolate', 'Strawberry', 'Almond', 'Coconut'],
//     fillings: ['Buttercream', 'Whipped Cream', 'Fruit Compote', 'Mousse'],
//     sizes: ['5 and 8 inches', '6 and 9 inches', '7 and 10 inches'],
//     servings: ['Serves 20-25 people', 'Serves 30-35 people', 'Serves 40-45 people'],
//     allergens: 'Contains dairy, gluten. May contain nuts.',
//     dietary: 'Contains eggs. Not suitable for vegans.',
//     allowCustomText: false,
//     allowFlavours: true,
//     allowSize: true,
//     allowDate: true,
//     basePrices: { '5 and 8 inches': 120, '6 and 9 inches': 150, '7 and 10 inches': 180 },
//     flavourPrice: 20,
//   },
//   cupcakes: {
//     name: 'Cupcakes',
//     description: 'Delicious cupcakes, perfect for parties or as a sweet treat.',
//     flavours: ['Vanilla', 'Chocolate', 'Lemon', 'Oreo', 'Peanut Butter'],
//     fillings: ['Buttercream', 'Jam', 'Cream Cheese'],
//     sizes: ['Single', 'Box of 6', 'Box of 12'],
//     servings: ['Serves 1 per cupcake', 'Serves 6 per box', 'Serves 12 per box'],
//     allergens: 'Contains dairy, gluten. May contain nuts.',
//     dietary: 'Contains eggs.',
//     allowCustomText: true,
//     allowFlavours: true,
//     allowSize: true,
//     allowDate: true,
//     basePrices: { Single: 10, 'Box of 6': 50, 'Box of 12': 90 },
//     flavourPrice: 20,
//   },
//   pastries: {
//     name: 'Pastries',
//     description: 'Freshly baked pastries, perfect for breakfast or a light snack.',
//     flavours: ['Apple', 'Cherry', 'Chocolate', 'Custard', 'Berry'],
//     fillings: ['Cream', 'Jam', 'Custard', 'Fruit Filling'],
//     sizes: ['Small', 'Medium', 'Large'],
//     servings: ['Serves 2-4 people', 'Serves 6-8 people', 'Serves 10-12 people'],
//     allergens: 'Contains dairy, gluten. May contain nuts.',
//     dietary: 'Contains eggs.',
//     allowCustomText: false,
//     allowFlavours: true,
//     allowSize: true,
//     allowDate: true,
//     basePrices: { Small: 15, Medium: 25, Large: 35 },
//     flavourPrice: 20,
//   },
//   corporateCake: {
//     name: 'Corporate Cake',
//     description: 'A professional cake designed for corporate events, customizable with your company logo.',
//     flavours: ['Vanilla', 'Chocolate', 'Marble', 'Coffee', 'Spice'],
//     fillings: ['Buttercream', 'Ganache', 'Caramel', 'Mocha'],
//     sizes: ['8 inches', '10 inches', '12 inches'],
//     servings: ['Serves 15-20 people', 'Serves 25-30 people', 'Serves 35-40 people'],
//     allergens: 'Contains eggs, dairy, gluten. May contain nuts.',
//     dietary: 'Not suitable for vegans or those with gluten intolerance.',
//     allowCustomText: true,
//     allowFlavours: true,
//     allowSize: true,
//     allowDate: true,
//     basePrices: { '8 inches': 80, '10 inches': 100, '12 inches': 120 },
//     flavourPrice: 20,
//   },
// };

// const colorOptions = [
//   { name: 'Pink', hex: '#FFC0CB' },
//   { name: 'White', hex: '#FFFFFF' },
//   { name: 'Red', hex: '#FF6347' },
//   { name: 'Purple', hex: '#D8BFD8' },
//   { name: 'Blue', hex: '#87CEEB'},
//   { name: 'Yellow', hex: '#FFD700'},
//   { name: 'Green', hex: '#90EE90'},
//   { name: 'Orange', hex: '#FFA500'},
// ];

// const ProductPage = () => {
//   const { category } = useParams();
//   const location = useLocation();
//   console.log(location, "location")
//   const product = productDetails[category];

//   const imageUrl = location.state?.imageUrl || `./assets/${category}.jpg`;
//   const isTwoTier = location.state?.isTwoTier || false;
//   const frosting = location.state?.frosting || '';

//   if (!product) {
//     return (
//       <div className="bg-lightPink text-center py-16 text-gray-600">
//         Product not found.
//       </div>
//     );
//   }

//   const [quantity, setQuantity] = useState(1);
//   const [selectedFlavours, setSelectedFlavours] = useState([]);
//   const [selectedFillings, setSelectedFillings] = useState([]);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState(colorOptions[0].hex);
//   const [customText, setCustomText] = useState('');
//   const [deliveryDate, setDeliveryDate] = useState('');
//   const [additionalNotes, setAdditionalNotes] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [flavourError, setFlavourError] = useState(false);
//   const [fillingError, setFillingError] = useState(false);

//   const servingInfo = selectedSize ? product.servings[product.sizes.indexOf(selectedSize)] : '';
//   const basePrice = selectedSize ? product.basePrices[selectedSize] : 0;

//   const frostingPrices = {
//     'Whipped Cream': 10,
//     'Buttercream': 15,
//     'Fondant': 20,
//   };

//   const frostingPrice = frostingPrices[frosting] || 0;
//   const totalPrice = basePrice + frostingPrice + selectedFlavours.length * product.flavourPrice;

//   const handleFlavourSelect = (flavour) => {
//     setFlavourError(false);
//     if (!selectedFlavours.includes(flavour)) {
//       setSelectedFlavours([...selectedFlavours, flavour]);
//     }
//   };

//   const handleRemoveFlavour = (flavour) => {
//     setSelectedFlavours(selectedFlavours.filter((f) => f !== flavour));
//   };

//   const handleFillingSelect = (filling) => {
//     setFillingError(false);
//     if (!selectedFillings.includes(filling)) {
//       setSelectedFillings([...selectedFillings, filling]);
//     }
//   };

//   const handleRemoveFilling = (filling) => {
//     setSelectedFillings(selectedFillings.filter((f) => f !== filling));
//   };

//   const toggleModal = () => {
//     if (selectedFlavours.length === 0) {
//       setFlavourError(true);
//       return;
//     }
//     if (selectedFillings.length === 0) {
//       setFillingError(true);
//       return;
//     }
//     setIsModalOpen(!isModalOpen);
//   };

//   const getMinDeliveryDate = () => {
//     const today = new Date();
//     today.setDate(today.getDate() + 7);
//     return today.toISOString().split('T')[0];
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-lightPink py-16 px-4 md:px-12">
//         <div className="container mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16">
//             <div className="relative">
//               <img
//                 src={imageUrl}
//                 alt={product.name}
//                 className="w-full rounded-2xl object-cover transition-transform duration-500 transform hover:scale-105"
//               />
//             </div>

//             <div className="space-y-8">
//               <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
//                 {product.name}
//               </h1>
//               {isTwoTier ? <p> This is a two tier cake! </p> : <p> This is a single tier cake </p> }
//               <p><strong>Frosting:</strong> {frosting}</p>
//               <p className="text-gray-600 leading-relaxed">{product.description}</p>
//               <p className="text-gray-700 font-medium">{servingInfo}</p>
//               <p className="text-xl font-semibold text-gray-900">Total Price: ${totalPrice}</p>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Quantity
//                 </label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                   className="w-24 p-3 border border-gray-300 rounded-lg focus:ring-deepPink focus:border-deepPink"
//                 />
//               </div>

//               {product.allowFlavours && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Select Flavours {flavourError && <span className="text-red-500"> (Required)</span>}
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {product.flavours.map((flavour) => (
//                       <button
//                         key={flavour}
//                         onClick={() => handleFlavourSelect(flavour)}
//                         className={`px-3 py-1 rounded-full border transition-colors duration-300 ${
//                           selectedFlavours.includes(flavour)
//                             ? 'bg-gray-800 text-white border-gray-800'
//                             : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//                         }`}
//                       >
//                         {flavour}
//                       </button>
//                     ))}
//                   </div>
//                   {selectedFlavours.length > 0 && (
//                     <div className="mt-2">
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {selectedFlavours.map((flavour) => (
//                           <div
//                             key={flavour}
//                             className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
//                           >
//                             {flavour}
//                             <button
//                               onClick={() => handleRemoveFlavour(flavour)}
//                               className="ml-2 text-red-500"
//                             >
//                               ×
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//               {product.fillings && product.fillings.length > 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Select Fillings {fillingError && <span className="text-red-500"> (Required)</span>}
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {product.fillings.map((filling) => (
//                       <button
//                         key={filling}
//                         onClick={() => handleFillingSelect(filling)}
//                         className={`px-3 py-1 rounded-full border transition-colors duration-300 ${
//                           selectedFillings.includes(filling)
//                             ? 'bg-gray-800 text-white border-gray-800'
//                             : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//                         }`}
//                       >
//                         {filling}
//                       </button>
//                     ))}
//                   </div>
//                   {selectedFillings.length > 0 && (
//                     <div className="mt-2">
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {selectedFillings.map((filling) => (
//                           <div
//                             key={filling}
//                             className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
//                           >
//                             {filling}
//                             <button
//                               onClick={() => handleRemoveFilling(filling)}
//                               className="ml-2 text-red-500"
//                             >
//                               ×
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//               {product.allowSize && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Select Size
//                   </label>
//                   <select
//                     value={selectedSize}
//                     onChange={(e) => setSelectedSize(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-deepPink focus:border-deepPink"
//                   >
//                     <option value="">-- Select Size --</option>
//                     {product.sizes.map((size, index) => (
//                       <option key={size} value={size}>
//                         {size} ({product.servings[index]})
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Select Color
//                 </label>
//                 <div className="flex space-x-2">
//                   {colorOptions.map((color) => (
//                     <div
//                       key={color.name}
//                       onClick={() => setSelectedColor(color.hex)}
//                       className={`w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 ${
//                         selectedColor === color.hex ? 'border-2 border-gray-800 scale-110' : 'border border-gray-300'
//                       }`}
//                       style={{ backgroundColor: color.hex }}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {product.allowCustomText && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Custom Text
//                   </label>
//                   <textarea
//                     value={customText}
//                     onChange={(e) => setCustomText(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-deepPink focus:border-deepPink"
//                     placeholder="Enter custom text..."
//                   />
//                 </div>
//               )}

//               {product.allowDate && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Delivery Date
//                   </label>
//                   <input
//                     type="date"
//                     value={deliveryDate}
//                     onChange={(e) => setDeliveryDate(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-deepPink focus:border-deepPink"
//                     min={getMinDeliveryDate()}
//                   />
//                 </div>
//               )}

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Additional Notes
//                 </label>
//                 <textarea
//                   value={additionalNotes}
//                   onChange={(e) => setAdditionalNotes(e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-deepPink focus:border-deepPink"
//                   placeholder="Any other instructions for the baker..."
//                 />
//               </div>

//               <button
//                 className="w-full text-white py-3 rounded-lg font-semibold transition-colors duration-300"
//                 style={{ backgroundColor: '#720D43' }}
//                 onClick={toggleModal}
//               >
//                 View Order Details
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="absolute inset-0 bg-black opacity-50"
//             onClick={toggleModal}
//           ></div>
//           <div className="relative bg-white rounded-xl shadow-2xl w-11/12 md:w-2/3 p-8">
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-gray-600 text-2xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Order Summary
//             </h2>
//             <div className="space-y-2 text-gray-800">
//               <p><strong>Product:</strong> {product.name}</p>
//               <p><strong>Quantity:</strong> {quantity}</p>
//               {selectedFlavours.length > 0 && <p><strong>Flavours:</strong> {selectedFlavours.join(', ')}</p>}
//               {selectedFillings.length > 0 && <p><strong>Fillings:</strong> {selectedFillings.join(', ')}</p>}
//               {selectedSize && <p><strong>Size:</strong> {selectedSize} ({servingInfo})</p>}
//               <p><strong>Color:</strong> {colorOptions.find(c => c.hex === selectedColor)?.name}</p>
//               {customText && <p><strong>Custom Text:</strong> {customText}</p>}
//               {deliveryDate && <p><strong>Delivery Date:</strong> {deliveryDate}</p>}
//               {additionalNotes && <p><strong>Additional Notes:</strong> {additionalNotes}</p>}
//               <p><strong>Frosting:</strong> {frosting}</p>
//               <p className="text-sm"><strong>Allergens:</strong> {product.allergens} | <strong>Dietary Restrictions:</strong> {product.dietary}</p>
//               <p><strong>Total Price:</strong> ${totalPrice}</p>
//             </div>
//             <div className="flex justify-end mt-6 space-x-4">
//               <button
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
//                 onClick={() => {
//                   alert('Product added to cart!');
//                   toggleModal();
//                 }}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors duration-300"
//                 onClick={toggleModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default ProductPage;



import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { CartContext } from '../contexts/CartContext';

const productDetails = {
  celebrationCake: {
    name: 'Celebration Cake',
    flavours: ['Vanilla', 'Chocolate', 'Red Velvet', 'Lemon', 'Carrot', 'Strawberry', 'Coconut', 'Fruit'],
    fillings: ['Buttercream', 'White Chocolate', 'Dark Chocolate', 'Milk Chocolate', 'Whipped Cream', 'Cream Cheese', 'Salted Caramel Sauce'],
    sizes: ['6 inches', '8 inches', '10 inches'],
    twoTierSizes: ['5 and 8 inches', '6 and 9 inches', '7 and 10 inches'],
    servings: ['Serves 8-10 people', 'Serves 12-15 people', 'Serves 18-20 people'],
    twoTierServings: ['Serves 20-25 people', 'Serves 30-35 people', 'Serves 40-45 people'],
    allergens: 'Contains eggs, dairy, gluten. May contain nuts.',
    dietary: 'Not suitable for vegans or those with gluten intolerance.',
    allowCustomText: true,
    allowFlavours: true,
    allowSize: true,
    allowDate: true,
    basePrices: { '6 inches': 50, '8 inches': 70, '10 inches': 90, '5 and 8 inches': 120, '6 and 9 inches': 150, '7 and 10 inches': 180 },
    flavourPrice: 20,
    canBeTwoTier: true,
    note: 'N.B. The final cake price depends on the size and the number of cake flavours you choose.'
  },
  weddingCake: {
    name: 'Wedding Cake',
    description: 'An elegant wedding cake designed to make your special day even more memorable.',
    flavours: ['Vanilla', 'Chocolate', 'Strawberry', 'Almond', 'Coconut'],
    fillings: ['Buttercream', 'Whipped Cream', 'Fruit Compote', 'Mousse'],
    sizes: ['5 and 8 inches', '6 and 9 inches', '7 and 10 inches'],
    servings: ['Serves 20-25 people', 'Serves 30-35 people', 'Serves 40-45 people'],
    allergens: 'Contains dairy, gluten. May contain nuts.',
    dietary: 'Contains eggs. Not suitable for vegans.',
    allowCustomText: false,
    allowFlavours: true,
    allowSize: true,
    allowDate: true,
    basePrices: { '5 and 8 inches': 120, '6 and 9 inches': 150, '7 and 10 inches': 180 },
    flavourPrice: 20,
    canBeTwoTier: false,
  },
  cupcakes: {
    name: 'Cupcakes',
    description: 'Delicious cupcakes, perfect for parties or as a sweet treat.',
    flavours: ['Vanilla', 'Chocolate', 'Lemon', 'Oreo', 'Peanut Butter'],
    fillings: ['Buttercream', 'Jam', 'Cream Cheese'],
    sizes: ['Single', 'Box of 6', 'Box of 12'],
    servings: ['Serves 1 per cupcake', 'Serves 6 per box', 'Serves 12 per box'],
    allergens: 'Contains dairy, gluten. May contain nuts.',
    dietary: 'Contains eggs.',
    allowCustomText: true,
    allowFlavours: true,
    allowSize: true,
    allowDate: true,
    basePrices: { Single: 10, 'Box of 6': 50, 'Box of 12': 90 },
    flavourPrice: 20,
    canBeTwoTier: false,
  },
  pastries: {
    name: 'Pastries',
    description: 'Freshly baked pastries, perfect for breakfast or a light snack.',
    flavours: ['Apple', 'Cherry', 'Chocolate', 'Custard', 'Berry'],
    fillings: ['Cream', 'Jam', 'Custard', 'Fruit Filling'],
    sizes: ['Small', 'Medium', 'Large'],
    servings: ['Serves 2-4 people', 'Serves 6-8 people', 'Serves 10-12 people'],
    allergens: 'Contains dairy, gluten. May contain nuts.',
    dietary: 'Contains eggs.',
    allowCustomText: false,
    allowFlavours: true,
    allowSize: true,
    allowDate: true,
    basePrices: { Small: 15, Medium: 25, Large: 35 },
    flavourPrice: 20,
    canBeTwoTier: false,
  },
  corporateCake: {
    name: 'Corporate Cake',
    description: 'A professional cake designed for corporate events, customizable with your company logo.',
    flavours: ['Vanilla', 'Chocolate', 'Marble', 'Coffee', 'Spice'],
    fillings: ['Buttercream', 'Ganache', 'Caramel', 'Mocha'],
    sizes: ['8 inches', '10 inches', '12 inches'],
    servings: ['Serves 15-20 people', 'Serves 25-30 people', 'Serves 35-40 people'],
    allergens: 'Contains eggs, dairy, gluten. May contain nuts.',
    dietary: 'Not suitable for vegans or those with gluten intolerance.',
    allowCustomText: true,
    allowFlavours: true,
    allowSize: true,
    allowDate: true,
    basePrices: { '8 inches': 80, '10 inches': 100, '12 inches': 120 },
    flavourPrice: 20,
    canBeTwoTier: false,
  },
};

const colorOptions = [
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'Purple', hex: '#800080' },
  {name: 'Lavendar', hex: '#E6E6FA'},
  { name: 'Blue', hex: '#0041c2'}
];

const ProductPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const product = productDetails[category];
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const imageUrl = location.state?.imageUrl || `./assets/${category}.jpg`;
  const isTwoTierProp = location.state?.isTwoTier || false;
  const frosting = location.state?.frosting || '';
  const name = location.state?.name || '';
  const desc = location.state?.desc;

  const [isTwoTier, setIsTwoTier] = useState(isTwoTierProp);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [selectedFillings, setSelectedFillings] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].hex);
  const [customText, setCustomText] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flavourError, setFlavourError] = useState(false);
  const [fillingError, setFillingError] = useState(false);
  const [addToCartMessage, setAddToCartMessage] = useState(null);
   const [file, setFile] = useState(null);

  const currentSizes = isTwoTier && product?.twoTierSizes ? product.twoTierSizes : product?.sizes || [];
  const currentServings = (size) => {
    const sizesArray = isTwoTier && product?.twoTierSizes ? product.twoTierSizes : product?.sizes || [];
    const servingsArray = isTwoTier && product?.twoTierServings ? product.twoTierServings : product?.servings || [];
    const index = sizesArray.indexOf(size);
    return index !== -1 ? servingsArray[index] : '';
  };
  const servingInfo = selectedSize ? currentServings(selectedSize) : '';
  const basePrice = selectedSize ? product?.basePrices[selectedSize] : 0;

  const frostingPrices = {
    'Whipped Cream': 10,
    'Buttercream': 15,
    'Fondant': 20,
  };

  const frostingPrice = frostingPrices[frosting] || 0;
  const totalPrice = basePrice + frostingPrice + (selectedFlavours.length * product?.flavourPrice || 0);

  const handleFlavourSelect = (flavour) => {
    setFlavourError(false);
    if (!selectedFlavours.includes(flavour)) {
      setSelectedFlavours([...selectedFlavours, flavour]);
    }
  };

  const handleRemoveFlavour = (flavour) => {
    setSelectedFlavours(selectedFlavours.filter((f) => f !== flavour));
  };

  const handleFillingSelect = (filling) => {
    setFillingError(false);
    if (!selectedFillings.includes(filling)) {
      setSelectedFillings([...selectedFillings, filling]);
    }
  };

  const handleRemoveFilling = (filling) => {
    setSelectedFillings(selectedFillings.filter((f) => f !== filling));
  };

  const toggleModal = () => {
    if (selectedFlavours.length === 0) {
      setFlavourError(true);
      return;
    }
    if (selectedFillings.length === 0) {
      setFillingError(true);
      return;
    }
    setIsModalOpen(!isModalOpen);
  };

  const getMinDeliveryDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    return today.toISOString().split('T')[0];
  };

  // try {
    const handleAddToCart = () => {
      if (!selectedFlavours.length && product?.allowFlavours) {
        setFlavourError(true);
        return;
      }
      if (!selectedFillings.length && product?.fillings?.length > 0) {
        setFillingError(true);
        return;
      }
      if (!selectedSize && product?.allowSize) {
        alert('Please select a size.');
        return;
      }
  
      const newItem = {
        id: category, // Or generate a more unique ID if needed
        name: product.name,
        imageUrl: imageUrl,
        quantity: parseInt(quantity),
        selectedFlavours: selectedFlavours,
        selectedFillings: selectedFillings,
        selectedSize: selectedSize,
        selectedColor: selectedColor,
        customText: customText,
        deliveryDate: deliveryDate,
        additionalNotes: additionalNotes,
        frosting: frosting,
        totalPrice: totalPrice,
      };
  
      addToCart(newItem); // Use the addToCart function from the context
      setAddToCartMessage({name: product.name, quantity: parseInt(quantity)})
      setTimeout(() => setAddToCartMessage(null), 3000)
      toggleModal();
    };
  // } catch (err) {
  //   console.error("Error adding to cart:", err);
  // }
 

  useEffect(() => {
    setIsTwoTier(isTwoTierProp);
  }, [isTwoTierProp]);

  return (
    <>
      <Navbar />
      {addToCartMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-deepPink/10 border border-deepPink text-black px-4 py-3 rounded shadow-md z-50">
          {addToCartMessage.quantity} x {addToCartMessage.name} added to cart.
          <Link to="/cart" className="ml-2 text-deepPink hover:underline cursor-pointer">View Cart & Checkout</Link>
          <button onClick={() => setAddToCartMessage(null)} className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none">
            (Continue Shopping)
          </button>
        </div>
      )}
      <div className="bg-lightPink/95 min-h-screen py-8 ">
        <div className="container mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16">
            <div className="relative">
              <img
                src={imageUrl}
                alt={product?.name}
                className="w-full rounded-2xl object-cover transition-transform duration-500 transform hover:scale-105"
              />
            </div>

            <div className="space-y-8">
              <h1 className="text-2xl font-medium text-gray-900">
                {name}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              <p className="text-gray-500 text-xs italic">
                {product.note}
              </p>
              {product?.allowFlavours && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                  What cake flavours would you like? {flavourError && <span className="text-red-500"> (Required)</span>}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.flavours?.map((flavour) => (
                      <button
                        key={flavour}
                        onClick={() => handleFlavourSelect(flavour)}
                        className={`px-4 py-1 text-sm rounded-full border transition-colors duration-300 ${
                          selectedFlavours.includes(flavour)
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {flavour}
                      </button>
                    ))}
                  </div>
                  {selectedFlavours.length > 0 && (
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedFlavours.map((flavour) => (
                          <div
                            key={flavour}
                            className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                          >
                            {flavour}
                            <button
                              onClick={() => handleRemoveFlavour(flavour)}
                              className="ml-2 text-red-500"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {product?.fillings && product.fillings.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose delicious fillings for your cake {fillingError && <span className="text-red-500"> (Required)</span>}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.fillings.map((filling) => (
                      <button
                        key={filling}
                        onClick={() => handleFillingSelect(filling)}
                        className={`px-3 py-1 text-sm rounded-full border transition-colors duration-300 ${
                          selectedFillings.includes(filling)
                            ? 'bg-gray-800 text-white border-gray-800'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {filling}
                      </button>
                    ))}
                  </div>
                  {selectedFillings.length > 0 && (
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedFillings.map((filling) => (
                          <div
                            key={filling}
                            className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                          >
                            {filling}
                            <button
                              onClick={() => handleRemoveFilling(filling)}
                              className="ml-2 text-red-500"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {product?.allowSize && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose a cake size that fits your celebration
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full p-3 border-gray-300 shadow-sm border rounded-lg no-outline"
                  >
                    <option value="">-- Select size --</option>
                    {currentSizes.map((size) => (
                      <option key={size} value={size} className='text-xl'>
                        {size} ({currentServings(size)})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pick a colour
                </label>
                <div className="flex space-x-2">
                  {colorOptions.map((color) => (
                    <div
                      key={color.name}
                      onClick={() => setSelectedColor(color.hex)}
                      className={`w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 ${
                        selectedColor === color.hex ? 'border-2 border-gray-800 scale-110' : 'border border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>

              {product?.allowCustomText && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Text
                  </label>
                  <textarea
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg no-outline shadow-sm focus:ring-deepPink focus:border-deepPink"
                      placeholder="Enter custom text..."
                    />
                  </div>
                )}

                {product?.allowDate && (
                  <div>
                    <label className="block text-sm font-sm text-gray-700 mb-2">
                      Delivery Date
                    </label>
                    <input
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 shadow-sm rounded-lg focus:outline-deepPink focus:border-deepPink"
                      min={getMinDeliveryDate()}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg no-outline shadow-sm focus:ring-deepPink focus:border-deepPink"
                    placeholder="Want something extra? Let our baker know here."
                  />
                </div>
                {/* File Upload */}
                <div className="mt-6">
                  <label className="block font-medium text-sm text-gray-700">Upload a Reference Image:</label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-deepPink file:text-white hover:file:bg-lightPink mt-2 hover:file:border-1 hover:file:border-deepPink hover:file:text-deepPink"
                  />
                </div>

                <button
                  className="w-full text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  style={{ backgroundColor: '#720D43' }}
                  onClick={toggleModal}
                >
                  View Order Details
                </button>
              </div>
            </div>
          </div>
        </div>

    {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleModal}
        ></div>

        <div className="relative w-full max-w-2xl mx-4 md:mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <button
            onClick={toggleModal}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-3xl transition"
            aria-label="Close Modal"
          >
            &times;
          </button>

          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Order Summary
          </h2>

          <div className="space-y-4 text-gray-800 text-base">
            <p><span className="font-medium">Cake Design:</span> {name}</p>
            {selectedFlavours.length > 0 && (
              <p><span className="font-medium">Flavours:</span> {selectedFlavours.join(', ')}</p>
            )}
            {selectedFillings.length > 0 && (
              <p><span className="font-medium">Fillings:</span> {selectedFillings.join(', ')}</p>
            )}
            {selectedSize && (
              <p><span className="font-medium">Size:</span> {selectedSize} <span className="text-gray-500">({servingInfo})</span></p>
            )}
            <p><span className="font-medium">Color:</span> {colorOptions.find(c => c.hex === selectedColor)?.name}</p>
            {customText && (
              <p><span className="font-medium">Custom Text:</span> {customText}</p>
            )}
            {deliveryDate && (
              <p><span className="font-medium">Delivery Date:</span> {deliveryDate}</p>
            )}
            {additionalNotes && (
              <p><span className="font-medium">Note for our Baker:</span> {additionalNotes}</p>
            )}
            <p><span className="font-medium">Frosting:</span> {frosting}</p>

            <div className="text-sm text-gray-600">
              <p><span className="font-medium">Allergens:</span> {product?.allergens}</p>
              <p><span className="font-medium">Dietary Restrictions:</span> {product?.dietary}</p>
            </div>

            <hr className="my-4 border-t border-gray-200" />

            <p className="text-lg font-semibold text-gray-900">
              Total: <span className="text-deepPink">${totalPrice.toFixed(2)}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-deepPink text-white px-6 py-3 rounded-xl font-medium hover:bg-lightPink hover:text-deepPink transition"
            >
              Add to Cart
            </button>
            <button
              className="w-full sm:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
  </div>
)}


        <Footer />
      </>
    );
  };

  export default ProductPage;