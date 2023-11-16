import PropTypes from 'prop-types';
import './styles/shop.css';

const ShopItem = ({ item, addToCart }) => {


    return (
        <div className='shop-item-container'>
            <div className='shop-item-image-container'>
                <img className='shop-item-image' src={item.image} alt="shop-item-image" />
            </div>
            <div className='shop-item-details-container'>
                <div className='shop-item-text-container'>
                    <div className='shop-item-name-container'>
                        <h5 className='shop-item-name'>{item.title}</h5>
                    </div>
                    <div className='shop-item-info-container'>
                        <span className='shop-item-info'>Rating: {item.rating.rate}</span>
                    </div>
                </div>
                <div className='shop-item-price-container'>
                    <h4 className='shop-item-price'>$ {item.price}</h4>
                    <button className='add-to-cart-button' onClick={() => addToCart(item)}>Add to Cart</button>
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