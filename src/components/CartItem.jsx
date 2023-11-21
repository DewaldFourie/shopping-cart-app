
import PropTypes from 'prop-types';
import './styles/cart.css';

const CartItem = ({ item, addToCart, decrementItemInCart, deleteItemFromCart }) => {

    return (
        <div className='cart-item'>
            <div className='item-image-container'>
                <img className="cart-item-image" src={item.image} alt={item.image} />
            </div>
            <div className='item-details-container'>
                <span className='item-name'>{item.title.slice(0, 20)}</span>
                <div className='item-info'>
                    <span>Rating: </span>
                    <span>{item.rating.rate}</span>
                </div>
            </div>
            <div className='item-quantity-container'>
                {/* <div className='item-quantity-text'>
                    <span>Qty:</span>
                </div> */}
                <div className='item-quantity-display'>
                    <button className='quantity-adjust-btn' onClick={() => decrementItemInCart(item)}>-</button>
                    <input
                        className="quantity-input"
                        type="text" value={item.quantity}
                        readOnly
                    />
                    <button className='quantity-adjust-btn' onClick={() => addToCart(item)}>+</button>
                </div>
            </div>
            <div className='item-price-container'>
                <span className='cart-item-price'>$ {(item.price).toFixed(2)}</span>
            </div>
            <div className='item-remove-container'>
                <button className='item-remove-button' onClick={() => deleteItemFromCart(item)}>✕</button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,
        }),
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
    decrementItemInCart: PropTypes.func.isRequired,
    deleteItemFromCart: PropTypes.func.isRequired,
};


export default CartItem;