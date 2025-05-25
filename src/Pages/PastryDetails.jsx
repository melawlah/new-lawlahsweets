import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PastryDetails = () => {
  const { state } = useLocation();
  const pastry = state?.pastry;

  const hasPartyPrice = pastry?.partyPrice !== undefined;
  const [priceType, setPriceType] = useState('regular');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const selectedPrice =
    !hasPartyPrice || priceType === 'regular'
      ? pastry?.regPrice || 0
      : pastry?.partyPrice || 0;

  return (
    <div className="bg-lightPink min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src={pastry?.image || '/assets/fallback-pastry.png'}
            alt={pastry?.name || 'Pastry'}
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="p-6 lg:p-10 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-deepPink">
            {pastry?.name || 'Pastry'}
          </h2>
          <p className="text-gray-700 leading-relaxed">{pastry?.desc}</p>

          {/* Conditional Price Options */}
          {hasPartyPrice ? (
            <div>
              <label className="block font-medium mb-2 text-deepPink">Choose Pricing</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="priceType"
                    value="regular"
                    checked={priceType === 'regular'}
                    onChange={() => setPriceType('regular')}
                  />
                  <span className="text-sm text-gray-800">Regular (${pastry.regPrice})</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="priceType"
                    value="party"
                    checked={priceType === 'party'}
                    onChange={() => setPriceType('party')}
                  />
                  <span className="text-sm text-gray-800">Party (${pastry.partyPrice})</span>
                </label>
              </div>
            </div>
          ) : (
            <div>
              <label className="block font-medium mb-1 text-deepPink">Price</label>
              <div className="text-gray-800 text-lg">${pastry?.regPrice}</div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <label className="block font-medium mb-1 text-deepPink">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block font-medium mb-1 text-deepPink">Notes for the Baker</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="4"
              placeholder="e.g. No nuts, please write ‘Happy Birthday’"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPink resize-none"
            />
          </div>

          {/* Price Display */}
          <div className="text-lg font-medium text-gray-800">
            Total Price:{' '}
            <span className="text-deepPink">${(selectedPrice * quantity).toFixed(2)}</span>
          </div>

          {/* Add to Cart */}
          <button className="bg-deepPink text-white mt-2 px-6 py-3 rounded-lg hover:bg-lightPink hover:text-deepPink font-medium transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastryDetails;
