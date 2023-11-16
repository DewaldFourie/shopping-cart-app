/* eslint-disable react/no-unescaped-entities */
// The shop page route
import {useContext, useEffect, useState } from "react";
import './styles/shop.css';
import loadingIcon from '../assets/loading.gif'
import ShopItem from "./ShopItem";
import { CartContext } from "../context/cartContext";

const useDataUrl = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [shopCategory, setShopCategory] = useState('products')

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/${shopCategory}`, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [shopCategory]);

    const handleCategorySelect = (category) => {
        setShopCategory(category)
    }

    return { data, error, loading, handleCategorySelect };
};


const Shop = () => {
    const { data, error, loading, handleCategorySelect } = useDataUrl();
    const { addToCart } = useContext(CartContext)

    const mensClothing = "men's clothing"
    const womensClothing = "women's clothing"

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);


    if (error) return <p>A network error was encountered</p>;


    return (
        <>
            <div className="shop-content">
                <div className="shop-container">
                    <div className="shop-header">
                        <h3 className="shop-category" onClick={() => handleCategorySelect('products')}>All Products</h3>
                        <h3 className="shop-category" onClick={() => handleCategorySelect('products/category/electronics')}>electronics</h3>
                        <h3 className="shop-category" onClick={() => handleCategorySelect('products/category/jewelery')}>jewelery</h3>
                        <h3 className="shop-category" onClick={() => handleCategorySelect(`products/category/${mensClothing}`)}>Men's Clothing</h3>
                        <h3 className="shop-category" onClick={() => handleCategorySelect(`products/category/${womensClothing}`)}>Women's Clothing</h3>
                    </div>
                    <div className={loading ? 'shop-body-loading' :'shop-body'}>
                        {loading ?
                            (<div className="loading-container">
                                <img className="loading-icon" src={loadingIcon} alt="Loading-icon" />
                            </div>
                            ) : (
                                data.map((item) => (
                                    <ShopItem key={item.id} item={item} addToCart={addToCart}/>
                                ))
                            )}
                    </div>
                </div>
            </div>
        </>
    );
};



export default Shop;