import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const ProductDetails = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [selectedFillings, setSelectedFillings] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [customText, setCustomText] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Add or remove flavors
  const handleFlavorChange = (flavor) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor));
    } else {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  // Add or remove fillings
  const handleFillingChange = (filling) => {
    if (selectedFillings.includes(filling)) {
      setSelectedFillings(selectedFillings.filter((f) => f !== filling));
    } else {
      setSelectedFillings([...selectedFillings, filling]);
    }
  };

  // const handleAddToCart = () => {
  //   const item = {
  //     // id: cake.id,
  //     // name: cake.name,
  //     // imageUrl: cake.image,
  //     quantity: 1,
  //     // totalPrice: calculatedPrice,
  //     selectedSize,
  //     // selectedFlavours,
  //     selectedFillings,
  //     // frosting,
  //     customText,
  //     selectedColor,
  //   };

  //   addToCart(item);
  // };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-deepPink">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-20 p-2 border rounded-lg"
            />
          </div>

          {/* Flavors Selection */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Choose Flavors:</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.flavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => handleFlavorChange(flavor)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFlavors.includes(flavor)
                      ? 'bg-deepPink text-white'
                      : 'bg-lightPink'
                  }`}
                >
                  {flavor} {selectedFlavors.includes(flavor) && '✕'}
                </button>
              ))}
            </div>
          </div>

          {/* Fillings Selection */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Select Fillings:</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.fillings.map((filling) => (
                <button
                  key={filling}
                  onClick={() => handleFillingChange(filling)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFillings.includes(filling)
                      ? 'bg-deepPink text-white'
                      : 'bg-lightPink'
                  }`}
                >
                  {filling} {selectedFillings.includes(filling) && '✕'}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Choose Color:</label>
            <div className="flex space-x-2 mt-2">
              {['#FF0000', '#00FF00', '#0000FF', '#FFC0CB', '#FFFF00'].map(
                (color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? 'border-deepPink' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">Choose Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Custom Text */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">
              Custom Text on Cake:
            </label>
            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
              rows="3"
              placeholder="E.g., Happy Birthday Sarah!"
            />
          </div>

          {/* Delivery Date */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">
              Preferred Delivery Date:
            </label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
            />
          </div>

          {/* Additional Notes */}
          <div className="mt-6">
            <label className="block font-medium text-gray-700">
              Any Additional Instructions:
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
              rows="3"
              placeholder="Let us know if there's anything special you'd like!"
            />
          </div>

          {/* Allergen Info */}
          <p className="text-sm text-gray-500 mt-4">
            ⚠️ {product.allergens}
          </p>

          {/* Add to Cart Button */}
          <button 
            // onClick={handleAddToCart}
            className="mt-8 w-full bg-deepPink text-white py-3 rounded-lg hover:bg-lightPink transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
