// Cart Component (Parent to cartItem component)

import { useContext } from 'react'
import './styles/cart.css'
import { CartContext } from '../context/cartContext'
import PropTypes from 'prop-types'
import CartItem from './CartItem'


const Cart = ({ isOpen, closeCart }) => {

    const { cartItems, addToCart, decrementItemInCart, deleteItemFromCart, clearCart, getCartItemTotal, getCartPriceTotal } = useContext(CartContext)


    return (
        <div className={`cart ${isOpen ? 'open' : ''}`}>
            <div className='cart-left'>
                <div className='cart-header left'>
                    <h2>Shopping Cart</h2>
                    <span className='number-of-items'>{getCartItemTotal()} Items</span>
                    <button className='close-cart-mobile' onClick={closeCart}>X</button>
                </div>
                <hr />
                <div className='cart-content'>
                    {cartItems.length === 0 ? (
                        <div className='cart-empty-container'>
                            <h3>Sorry, The Cart is Empty</h3>
                            <h4>Go to the Shop to fill it up!</h4>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div className='cart-item-container' key={item.id}>
                                <CartItem
                                    item={item} 
                                    addToCart={addToCart}
                                    decrementItemInCart={decrementItemInCart}
                                    deleteItemFromCart={deleteItemFromCart}
                                />
                            </div>
                        ))
                    )}
                </div>
                <div className='closeCart-btn-container'>
                    <button className='closeCart-btn' onClick={closeCart}>🔙 TO SHOP</button>
                    <button className={`closeCart-btn empty-cart-btn ${cartItems.length === 0 ? 'invisible' : 'visible'}`} onClick={clearCart}>EMPTY CART</button>
                </div>
            </div>
            <div className='cart-right'>
                <div className='cart-header right'>
                    <h3>Summary</h3>
                </div>
                <hr />
                <div className='total-items'>
                    <h4>ITEMS: {getCartItemTotal()}</h4>
                    <h4>$ {getCartPriceTotal().toFixed(2)}</h4>
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
                    <h4>$ {getCartPriceTotal().toFixed(2)}</h4>
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