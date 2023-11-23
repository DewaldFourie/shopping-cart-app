import PropTypes from 'prop-types';
import './styles/shop.css';
import { useState } from 'react';
import StarRating from './StarRating';

const ShopItem = ({ item, addToCart }) => {

    const [showNotification, setShowNotification] = useState(false)


    const handleAddToCart = () => {
        addToCart(item)
        setShowNotification(true)
        setTimeout(() => {
            setShowNotification(false)
        }, 2000)
    }


    return (
        <div className='shop-item-container'>
            <div className='shop-item-image-container'>
                <img className={`shop-item-image`} src={item.image} alt="shop-item-image" />
            </div>
            <div className='shop-item-details-container'>
                <div className='shop-item-text-container'>
                    <div className='shop-item-name-container'>
                        <h5 className='shop-item-name'>{item.title.slice(0, 40)}</h5>
                    </div>
                </div>
                <div className='shop-item-price-container'>
                    <StarRating rating={item.rating.rate} totalStars={5} />
                    <h4 className='shop-item-price'>$ {item.price.toFixed(2)}</h4>
                </div>
                <div className='shop-item-btn-container'>
                    <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button>
                    {showNotification && <div className='added-to-cart-notification'>✓ Added to Cart</div>}
                </div>
            </div>
        </div>
    );
};

ShopItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,
        }),
        price: PropTypes.number.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};


export default ShopItem;


