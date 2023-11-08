import { useState } from 'react'
import './styles/cart.css'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

const Cart = ({ isOpen, closeCart }) => {

    const [demoItems, setDemoItems] = useState([
        {
            id: 1,
            imageSrc: 'item1.jpg',
            name: 'Item 1',
            size: 'M',
            quantity: 1,
            price: 45.00,
        },
        {
            id: 2,
            imageSrc: 'item2.jpg',
            name: 'Item 2',
            size: 'L',
            quantity: 1,
            price: 30.00,
        },
        {
            id: 3,
            imageSrc: 'item3.jpg',
            name: 'Item 3',
            size: 'S',
            quantity: 1,
            price: 25.00,
        },
    ]);

    const calculateTotalQuantity = (items) => {
        return items.reduce((total, item) => total + item.quantity, 0);
    }

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.quantity * item.price, 0)
    } 

    const [totalItems, setTotalItems] = useState(calculateTotalQuantity(demoItems));
    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(demoItems));

    const updateTotalItems = (updatedItems) => {
        setDemoItems(updatedItems)
        setTotalItems(calculateTotalQuantity(updatedItems))
        setTotalPrice(calculateTotalPrice(updatedItems))
    }

    const removeItem = (itemToRemove) => {
        const updatedItems = demoItems.filter((item) => item.id !== itemToRemove.id);
        setDemoItems(updatedItems);
        setTotalItems(calculateTotalQuantity(updatedItems));
        setTotalPrice(calculateTotalPrice(updatedItems))
    }

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
                    <button onClick={closeCart}>Back to Shop</button>
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
                    <select name="shipping" id="shipping">
                        <option value="standard-delivery">Standard Delivery</option>
                        <option value="express-delivery">Express Delivery</option>
                        <option value="priority-delivery">priority Delivery</option>
                    </select>
                </div>
                <div className='voucher-code-container'>
                    <h4>GIVE CODE</h4>
                    <input type="text" placeholder='Enter your code'/>
                </div>
                <hr />
                <div className='total-price-container'>
                    <h4>TOTAL PRICE</h4>
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
};

export default Cart;