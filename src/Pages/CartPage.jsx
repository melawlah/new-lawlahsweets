// src/pages/CartPage.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'; // Or solid

const CartPage = () => {
  const { cart, removeFromCart, updateItemQuantity } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false); // Placeholder
  const shippingCost = 25.00; // Example shipping cost
  const taxRate = 0.15; // Example tax rate (8%)

  const handleQuantityChange = (itemId, quantity, options) => {
    if (quantity > 0) {
      updateItemQuantity(itemId, quantity, options);
    }
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.id, {
      selectedFlavours: item.selectedFlavours,
      selectedFillings: item.selectedFillings,
      selectedSize: item.selectedSize,
      selectedColor: item.selectedColor,
      customText: item.customText,
      frosting: item.frosting,
    });
  };

  const applyDiscount = () => {
    // In a real application, you would validate the discount code
    if (discountCode === 'SWEETDEAL') {
      setDiscountApplied(true);
      alert('Discount applied!');
    } else if (discountCode) {
      alert('Invalid discount code.');
      setDiscountApplied(false);
    }
  };

  const subtotal = cart.reduce((total, item) => total + item.totalPrice * item.quantity, 0);
  const discountAmount = discountApplied ? subtotal * 0.10 : 0; // Example 10% discount
  const preTaxTotal = subtotal - discountAmount;
  const tax = preTaxTotal * taxRate;
  const total = preTaxTotal + shippingCost + tax;

  if (cart.length === 0) {
    return (
      <div className="py-44">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty.</h2>
          <p className="text-gray-600 mb-4">Looks like you haven't added any delicious treats yet.</p>
          <Link to="/celebration-cakes" className="inline-block bg-deepPink text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-colors duration-300">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 lg:py-16 bg-lightPink">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6 lg:p-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">Your Cart</h1>

        <ul className="space-y-6 mb-8">
          {cart.map((item, index) => (
            <li key={index} className="flex flex-col lg:flex-row items-center gap-4 border-b pb-6">
              <div className="w-24 h-24 rounded-md overflow-hidden shadow-sm">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item?.selectedSize && <span>Size: {item?.selectedSize}</span>}
                  {item?.selectedFlavours?.length > 0 && <span>, Flavours: {item?.selectedFlavours.join(', ')}</span>}
                  {item?.selectedFillings?.length > 0 && <span>, Fillings: {item?.selectedFillings.join(', ')}</span>}
                  {item?.frosting && <span>, Frosting: {item?.frosting}</span>}
                  {item?.customText && <span>, Text: "{item?.customText}"</span>}
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1, {
                        selectedFlavours: item.selectedFlavours,
                        selectedFillings: item.selectedFillings,
                        selectedSize: item.selectedSize,
                        selectedColor: item.selectedColor,
                        customText: item.customText,
                        frosting: item.frosting,
                      })}
                    >
                      <MinusIcon className="h-5 w-5" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value, {
                        selectedFlavours: item.selectedFlavours,
                        selectedFillings: item.selectedFillings,
                        selectedSize: item.selectedSize,
                        selectedColor: item.selectedColor,
                        customText: item.customText,
                        frosting: item.frosting,
                      })}
                      className="w-12 text-center border-l border-r focus:outline-none"
                    />
                    <button
                      className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1, {
                        selectedFlavours: item.selectedFlavours,
                        selectedFillings: item.selectedFillings,
                        selectedSize: item.selectedSize,
                        selectedColor: item.selectedColor,
                        customText: item.customText,
                        frosting: item.frosting,
                      })}
                    >
                      <PlusIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <span className="text-gray-700">${(item.totalPrice * item.quantity).toFixed(2)}</span>
                </div>
              </div>
              <button
                className="text-gray-500 hover:text-red-500 focus:outline-none"
                onClick={() => handleRemoveItem(item)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </li>
          ))}
        </ul>

        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="w-full md:w-auto p-3 border rounded-md focus:ring-deepPink focus:border-deepPink"
            />
            <button
              onClick={applyDiscount}
              className="bg-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-400 transition-colors duration-300 ml-2"
            >
              Apply
            </button>
          </div>
          {discountApplied && <p className="text-deepPink mt-2">Discount applied!</p>}
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {discountAmount > 0 && (
            <div className="flex justify-between text-deepPink mb-2">
              <span>Discount:</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Estimated Shipping:</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-4">
            <span>Estimated Tax ({taxRate * 100}%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-800 text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout" // Replace with your actual checkout page URL
            // className="pointer-events-none cursor-default block bg-deepPink text-white py-3 px-6 rounded-md hover:bg-pink-700 transition-colors duration-300 mt-6 text-center"
            className="cursor-pointer block bg-deepPink text-white py-3 px-6 rounded-md hover:lightPink hover:border-1 hover:border-deepPink transition-colors duration-300 mt-6 text-center"
          >
            Proceed to Checkout
          </Link>
          <div className="mt-4 text-center text-gray-600">
            <Link to="/celebration-cakes" className="hover:underline cursor-pointer">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;