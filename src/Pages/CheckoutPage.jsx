// // src/pages/CheckoutPage.js
// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';

// const CheckoutPage = () => {
//   const { cart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();
//   const [customerInfo, setCustomerInfo] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     province: '',
//     postalCode: '',
//     paymentMethod: 'creditCard', // Default
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerInfo(prevInfo => ({ ...prevInfo, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (cart.length > 0 && customerInfo.name && customerInfo.email && customerInfo.address && customerInfo.city && customerInfo.province && customerInfo.postalCode) {
//       // In a real application, you would send the order details
//       // (cart items and customer info) to your backend for processing.
//       console.log('Order submitted:', { cart, customerInfo });
//       clearCart(); // Clear the cart after successful (simulated) order
//       navigate('/order-confirmation');
//     } else {
//       alert('Please ensure your cart is not empty and all customer information is filled.');
//     }
//   };

//   const subtotal = cart.reduce((total, item) => total + item.totalPrice * item.quantity, 0);
//   const shippingCost = 5.00; // Example
//   const taxRate = 0.08; // Example
//   const total = subtotal + shippingCost + (subtotal * taxRate); // Basic total

//   if (cart.length === 0) {
//     return (
//       <div className="py-16 text-center">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty.</h2>
//         <Link to="/products" className="cursor-pointer inline-block bg-deepPink text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-colors duration-300">
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="py-10 lg:py-16 bg-lightPink">
//       <div className="container mx-auto bg-white rounded-lg shadow-md p-6 lg:p-8">
//         <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">Checkout</h1>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Customer Information</h2>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
//               <input type="text" id="name" name="name" value={customerInfo.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
//               <input type="email" id="email" name="email" value={customerInfo.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
//               <input type="text" id="address" name="address" value={customerInfo.address} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
//               <input type="text" id="city" name="city" value={customerInfo.city} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="province" className="block text-gray-700 text-sm font-bold mb-2">Province:</label>
//               <input type="text" id="province" name="province" value={customerInfo.province} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="postalCode" className="block text-gray-700 text-sm font-bold mb-2">Postal Code:</label>
//               <input type="text" id="postalCode" name="postalCode" value={customerInfo.postalCode} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>
//             <ul className="border rounded-md p-4 mb-4">
//               {cart.map((item) => (
//                 <li key={item.id} className="flex justify-between py-2 border-b last:border-b-0">
//                   <span>{item.quantity} x {item.name}</span>
//                   <span>${(item.totalPrice * item.quantity).toFixed(2)}</span>
//                 </li>
//               ))}
//               <li className="flex justify-between py-2 font-semibold">
//                 <span>Subtotal:</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </li>
//               <li className="flex justify-between py-2">
//                 <span>Shipping:</span>
//                 <span>${shippingCost.toFixed(2)}</span>
//               </li>
//               <li className="flex justify-between py-2">
//                 <span>Tax:</span>
//                 <span>${(subtotal * taxRate).toFixed(2)}</span>
//               </li>
//               <li className="flex justify-between py-2 font-semibold text-lg">
//                 <span>Total:</span>
//                 <span>${total.toFixed(2)}</span>
//               </li>
//             </ul>

//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Method</h2>
//             <div className="mb-4">
//               <label className="inline-flex items-center">
//                 <input type="radio" name="paymentMethod" value="creditCard" checked={customerInfo.paymentMethod === 'creditCard'} onChange={handleChange} className="form-radio h-5 w-5 text-deepPink focus:ring-deepPink" />
//                 <span className="ml-2 text-gray-700">Credit Card</span>
//               </label>
//               {/* Add more payment options as needed */}
//             </div>

//             <button type="submit" className="block bg-deepPink text-white py-3 px-6 rounded-md hover:bg-pink-700 transition-colors duration-300 w-full">
//               Place Order
//             </button>
//             <div className="mt-4 text-center text-gray-600">
//               <Link to="/cart" className="hover:underline cursor-pointer">Back to Cart</Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;



// src/pages/CheckoutPage.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: 'Fredericton',
    province: 'New Brunswick',
    postalCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length > 0 && Object.values(customerInfo).every(field => field.trim() !== '')) {
      console.log('Order submitted:', { cart, customerInfo });
      clearCart();
      navigate('/order-confirmation');
    } else {
      alert('Please ensure your cart is not empty and all fields are filled.');
    }
  };

  const subtotal = cart.reduce((total, item) => total + item.totalPrice * item.quantity, 0);
  const shippingCost = 5.00;
  const taxRate = 0.15; // 15% HST for New Brunswick
  const total = subtotal + shippingCost + (subtotal * taxRate);

  if (cart.length === 0) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty.</h2>
        <Link to="/products" className="cursor-pointer inline-block bg-deepPink text-white py-2 px-6 rounded-lg hover:bg-pink-700 transition duration-300">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 lg:py-16 bg-lightPink">
      <div className="container mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section - Shipping & Payment Info */}
          <div>
            {/* Shipping Info */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Shipping Information</h2>

              {['name', 'email', 'address', 'city', 'province', 'postalCode'].map((field) => (
                <div key={field} className="mb-6">
                  <label htmlFor={field} className="block font-semibold text-gray-700 mb-2 capitalize">
                    {field === 'postalCode' ? 'Postal Code' : field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={customerInfo[field]}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                    placeholder={
                      field === 'address' ? '123 King St' :
                      field === 'postalCode' ? 'E3B 1X5' :
                      ''
                    }
                    required
                  />
                </div>
              ))}
            </div>

            {/* Payment Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Payment Information</h2>

              <div className="mb-6">
                <label htmlFor="cardName" className="block font-semibold text-gray-700 mb-2">Cardholder Name:</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={customerInfo.cardName}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="cardNumber" className="block font-semibold text-gray-700 mb-2">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={customerInfo.cardNumber}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                  placeholder="4242 4242 4242 4242"
                  required
                />
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="block font-semibold text-gray-700 mb-2">Expiry Date:</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={customerInfo.expiryDate}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                    placeholder="12/24"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="block font-semibold text-gray-700 mb-2">CVV:</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={customerInfo.cvv}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="billingAddress" className="block font-semibold text-gray-700 mb-2">Billing Address:</label>
                <input
                  type="text"
                  id="billingAddress"
                  name="billingAddress"
                  value={customerInfo.billingAddress}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                  placeholder="123 King St, Fredericton, NB"
                  required
                />
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Order Summary</h2>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
              <ul className="divide-y divide-gray-200 mb-6">
                {cart.map(item => (
                  <li key={item.id} className="flex justify-between py-3">
                    <span>{item.quantity} × {item.name}</span>
                    <span>${(item.totalPrice * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between py-2 font-medium text-gray-700">
                <span>Subtotal</span>
                <span>CAD ${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-gray-600">
                <span>Shipping</span>
                <span>CAD ${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-gray-600">
                <span>Tax (15% HST)</span>
                <span>CAD ${(subtotal * taxRate).toFixed(2)}</span>
              </div>

              <div className="border-t pt-4 mt-4 flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>CAD ${total.toFixed(2)}</span>
              </div>

              <button type="submit" className="w-full bg-deepPink hover:bg-pink-700 text-white font-bold py-4 rounded-2xl mt-8 transition-all">
                Place Order
              </button>

              <div className="text-center mt-6 text-gray-600">
                <Link to="/cart" className="hover:underline">← Back to Cart</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

