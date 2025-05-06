import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, Color } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, selectedColor: Color) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const newSubtotal = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);

    // Calculate item count
    const newItemCount = cart.reduce(
      (count, item) => count + item.quantity,
      0
    );
    setItemCount(newItemCount);
  }, [cart]);

  const addToCart = (product: Product, quantity: number, selectedColor: Color) => {
    // Check if product already exists in cart with same color
    const existingItemIndex = cart.findIndex(
      item => item.product.id === product.id && item.selectedColor.name === selectedColor.name
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new item if it doesn't exist
      setCart([...cart, { product, quantity, selectedColor }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const updatedCart = cart.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        itemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};