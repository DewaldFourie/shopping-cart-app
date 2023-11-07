import './styles/cart.css'
import PropTypes from 'prop-types'

const Cart = ({ isOpen, closeCart }) => {
    return (
        <div className={`cart ${isOpen ? 'open' : ''}`}>
            <div className='cart-left'>
                <div className='cart-header left'>
                    <h2>Shopping Cart</h2>
                    <span className='number-of-items'>#items</span>
                </div>
                <hr />
                <div className='cart-content'>
                    {/* will be a dynamically generated items */}
                    <div className='cart-item'>
                        <span>ITEM 1</span>
                    </div>
                    <hr />
                    <div className='cart-item'>
                        <span>ITEM 2</span>
                    </div>
                    <hr />
                    <div className='cart-item'>
                        <span>ITEM 3</span>
                    </div>
                    <hr />
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
                    <h4>#ITEMS</h4>
                    <h4>$120.00</h4>
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
                    <h4>$125.00</h4>
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