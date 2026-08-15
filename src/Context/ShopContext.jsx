import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (productId) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item._id === productId);

      if (existingItem) {
        return prev.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { _id: productId, quantity: 1 }];
    });
  };

  useEffect(() => {
    const handleAddToCart = (event) => {
      addToCart(event.detail.productId);
    };

    window.addEventListener("add-to-cart", handleAddToCart);

    return () => {
      window.removeEventListener("add-to-cart", handleAddToCart);
    };
  }, []);

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item._id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        delivery_fee,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
