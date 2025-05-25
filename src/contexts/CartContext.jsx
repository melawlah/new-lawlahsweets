// src/contexts/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from local storage on initial load
    const storedCart = localStorage.getItem('cakeShopCart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem('cakeShopCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          JSON.stringify(cartItem.selectedFlavours) === JSON.stringify(item.selectedFlavours) &&
          JSON.stringify(cartItem.selectedFillings) === JSON.stringify(item.selectedFillings) &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor &&
          cartItem.customText === item.customText &&
          cartItem.frosting === item.frosting
      );

      if (existingItemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += item.quantity;
        return newCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (itemId, optionsToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(
        item.id === itemId &&
        JSON.stringify(item.selectedFlavours) === JSON.stringify(optionsToRemove.selectedFlavours) &&
        JSON.stringify(item.selectedFillings) === JSON.stringify(optionsToRemove.selectedFillings) &&
        item.selectedSize === optionsToRemove.selectedSize &&
        item.selectedColor === optionsToRemove.selectedColor &&
        item.customText === optionsToRemove.customText &&
        item.frosting === optionsToRemove.frosting
      ))
    );
  };

  const updateItemQuantity = (itemId, quantity, optionsToUpdate) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId &&
        JSON.stringify(item.selectedFlavours) === JSON.stringify(optionsToUpdate.selectedFlavours) &&
        JSON.stringify(item.selectedFillings) === JSON.stringify(optionsToUpdate.selectedFillings) &&
        item.selectedSize === optionsToUpdate.selectedSize &&
        item.selectedColor === optionsToUpdate.selectedColor &&
        item.customText === optionsToUpdate.customText &&
        item.frosting === optionsToUpdate.frosting
          ? { ...item, quantity: parseInt(quantity, 10) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};