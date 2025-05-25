// src/pages/OrderConfirmationPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';

const OrderConfirmationPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className='py-34'> 
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <svg className="mx-auto h-12 w-12 text-deepPink mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank you for your order!</h2>
          <p className="text-gray-600 mb-4">Your order has been successfully placed and is being processed.</p>
          <p className="text-gray-600 mb-4">You will receive a confirmation email with your order details shortly.</p>
          <Link to="/" className="inline-block bg-deepPink text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-colors duration-300 cursor-pointer">
            Back to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default OrderConfirmationPage;