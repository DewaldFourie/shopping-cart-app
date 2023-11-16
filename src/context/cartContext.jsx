import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    // init the state of the cart by using the local storage if there are any, or setting an empty cart array
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') 
                                                ? JSON.parse(localStorage.getItem('cartItems')) : []
                                                )

    // function to add items to the cart
    const addToCart = (item) => {
        // check if the item is already in the cart
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

        if (isItemInCart) {
            setCartItems(
                // if the item is in the cart, increase quantity by 1, else return cart item
                cartItems.map((cartItem) => 
                    cartItem.id === item.id
                        ? {...cartItem, quantity: cartItem.quantity + 1}
                        : cartItem
                )
            );
        } else {
            // if the item is not in the cart, add the item
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    }

    // function to remove items from cart
    const decrementItemInCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart && isItemInCart.quantity > 1) {
            // If the quantity is greater than 1, decrease the quantity by 1
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
    };

    // function to completely delete all quantities of an item in the cart
    const deleteItemFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
    }

    //function to clear the cart 
    const clearCart = () => {
        setCartItems([]); // set the cartItems array to empty
    }

    // function to get the total items in the users cart
    const getCartItemTotal = () => {
        // use reduce to calculate the total quantity of all items in the cart
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    // function to get the cart total
    const getCartPriceTotal = () => {
        // use reduce to calculate the total price of all the items in the cart
        return cartItems.reduce((total, item) =>  total + item.price * item.quantity, 0)
    }

    // hook to persist cart state in browser
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // hook to get the cart items from the browser
    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems))
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                decrementItemInCart,
                deleteItemFromCart,
                clearCart,
                getCartItemTotal,
                getCartPriceTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};