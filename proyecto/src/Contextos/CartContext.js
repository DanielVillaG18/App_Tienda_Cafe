import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);

      if (productIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += product.quantity || 1;
        return updatedCart;
      }

      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      quantity <= 0
        ? prevCart.filter((item) => item.id !== productId)
        : prevCart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => {
  return useContext(CartContext);
};
