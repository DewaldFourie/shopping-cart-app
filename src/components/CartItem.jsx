import { useState } from 'react';
import PropTypes from 'prop-types'
import './styles/cart.css'

const CartItem = ({ item , updateTotalItems, demoItems, removeItem}) => {

    const [quantity, setQuantity] = useState(item.quantity || 1);

    const incrementItemQuantity = (itemId) => {
        return demoItems.map((i) => {
            if (i.id === itemId) {
                return { ...i, quantity: i.quantity + 1 };
            }
            return i;
        });
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
        updateTotalItems(incrementItemQuantity(item.id))
    }; 

    const decrementItemQuantity = (itemId) => {
        return demoItems.map((i) => {
            if (i.id === itemId) {
                return { ...i, quantity: i.quantity - 1 };
            }
            return i;
        });
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            updateTotalItems(decrementItemQuantity(item.id))
        }
    };

    const handleInputChange = (e) => {
        // Prevent direct input into the input field
        e.preventDefault();
    };

    const removeCartItem = () => {
        const updatedItems = demoItems.filter((i) => i.id !== item.id);
        updateTotalItems(updatedItems);
        removeItem(item)
    }

    return (
        <div className='cart-item'>
            <div className='item-image-container'>
                <img className="cart-item-image" src={item.imageSrc} alt={item.imageSrc} />
            </div>
            <div className='item-details-container'>
                <span className='item-name'>{item.name}</span>
                <div className='item-info'>
                    <span>Size: </span>
                    <span>{item.size}</span>
                </div>
            </div>
            <div className='item-quantity-container'>
                {/* <div className='item-quantity-text'>
                    <span>Qty:</span>
                </div> */}
                <div className='item-quantity-display'>
                    <button className='quantity-adjust-btn' onClick={decrementQuantity}>-</button>
                    <input 
                        className="quantity-input" 
                        type="number" value={quantity} 
                        onChange={handleInputChange} 
                        readOnly    
                    />
                    <button className='quantity-adjust-btn' onClick={incrementQuantity}>+</button>
                </div>
            </div>
            <div className='item-price-container'>
                <span>$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div className='item-remove-container'>
                <button className='item-remove-button' onClick={removeCartItem}>x</button>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        quantity: PropTypes.number,
        price: PropTypes.number.isRequired,
        imageSrc: PropTypes.string.isRequired,
    }).isRequired,
    updateTotalItems: PropTypes.func.isRequired, 
    demoItems: PropTypes.array.isRequired, 
    removeItem: PropTypes.func.isRequired,
};


export default CartItem