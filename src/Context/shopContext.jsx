import { createContext, useState } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const currency = "$";
    const delivery_fee = 10;
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productId) => {
        const existingItem = cartItems.find(item => item._id === productId);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { _id: productId, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item._id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems(cartItems.map(item =>
                item._id === productId ? { ...item, quantity } : item
            ));
        }
    };

    return (
        <ShopContext.Provider value={{ products, currency, delivery_fee, cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;