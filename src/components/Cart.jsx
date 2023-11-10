// Cart Component (Parent to cartItem component)

import { useEffect, useState } from 'react'
import './styles/cart.css'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import testItemImage from '../assets/shirt.jpg'

const Cart = ({ isOpen, closeCart, onTotalItemsChange }) => {

    // demo items for testing and designing purposes
    const [demoItems, setDemoItems] = useState([
        {
            id: 1,
            imageSrc: testItemImage,
            name: 'Item 1',
            size: 'M',
            quantity: 1,
            price: 45.00,
        },
        {
            id: 2,
            imageSrc: testItemImage,
            name: 'Item 2',
            size: 'L',
            quantity: 1,
            price: 30.00,
        },
        {
            id: 3,
            imageSrc: testItemImage,
            name: 'Item 3',
            size: 'S',
            quantity: 1,
            price: 25.00,
        },
    ]);

    // function to sum all the quantities in the items List to get total Quantity
    const calculateTotalQuantity = (items) => {
        return items.reduce((total, item) => total + item.quantity, 0);
    }

    // function to sum all the prices of the items List times their quantity to get total Price
    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.quantity * item.price, 0)
    } 

    // state initiation
    const [totalItems, setTotalItems] = useState(calculateTotalQuantity(demoItems));
    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(demoItems));

    // update function to set the new items List if added or removed
    const updateTotalItems = (updatedItems) => {
        setDemoItems(updatedItems)
        setTotalItems(calculateTotalQuantity(updatedItems))
        setTotalPrice(calculateTotalPrice(updatedItems))
    }

    // function called in the cartItem component if an item is removed from cart    
    const removeItem = (itemToRemove) => {
        const updatedItems = demoItems.filter((item) => item.id !== itemToRemove.id);
        setDemoItems(updatedItems);
        setTotalItems(calculateTotalQuantity(updatedItems));
        setTotalPrice(calculateTotalPrice(updatedItems))
    }

    // function called in the cartItem component to keep track of items changes
    useEffect(() => {
        onTotalItemsChange(totalItems);
    }, [totalItems, onTotalItemsChange])


    return (
        <div className={`cart ${isOpen ? 'open' : ''}`}>
            <div className='cart-left'>
                <div className='cart-header left'>
                    <h2>Shopping Cart</h2>
                    <span className='number-of-items'>{totalItems} Items</span>
                    <button className='close-cart-mobile' onClick={closeCart}>X</button>
                </div>
                <hr />
                <div className='cart-content'>
                    {demoItems.length === 0 ? (
                        <div className='cart-empty-container'>
                            <h3>Sorry, The Cart is Empty</h3>
                            <h4>Go to the Shop to fill it up!</h4>
                        </div>
                    ) : (
                        demoItems.map((item) => (
                            <div className='cart-item-container' key={item.id}>
                                <CartItem
                                    item={item} 
                                    updateTotalItems={updateTotalItems} 
                                    demoItems={demoItems} 
                                    removeItem={removeItem}
                                />
                            </div>
                        ))
                    )}
                </div>
                <div className='closeCart-btn-container'>
                    <button className='closeCart-btn' onClick={closeCart}>🔙 TO SHOP</button>
                </div>
            </div>
            <div className='cart-right'>
                <div className='cart-header right'>
                    <h3>Summary</h3>
                </div>
                <hr />
                <div className='total-items'>
                    <h4>ITEMS: {totalItems}</h4>
                    <h4>$ {totalPrice.toFixed(2)}</h4>
                </div>
                <div className='shipping-container'>
                    <h4>SHIPPING</h4>
                    <select className='shipping-box' name="shipping" id="shipping">
                        <option value="standard-delivery">Standard Delivery</option>
                        <option value="express-delivery">Express Delivery</option>
                        <option value="priority-delivery">priority Delivery</option>
                    </select>
                </div>
                <div className='voucher-code-container'>
                    <h4>GIVE CODE</h4>
                    <input className='voucher-box' type="text" placeholder='Enter your code'/>
                </div>
                <hr />
                <div className='total-price-container'>
                    <h4>TOTAL PRICE:</h4>
                    <h4>$ {totalPrice.toFixed(2)}</h4>
                </div>
                <div className='checkout-btn-container'>
                    <button>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
} 

Cart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeCart: PropTypes.func.isRequired,
    onTotalItemsChange: PropTypes.func.isRequired,
};

export default Cart;