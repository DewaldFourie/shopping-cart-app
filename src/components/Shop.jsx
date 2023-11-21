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
    const [activeCategory, setActiveCategory] = useState('products')


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
        setActiveCategory(category)
    }

    return { data, error, loading, handleCategorySelect, activeCategory };
};


const Shop = () => {
    const { data, error, loading, handleCategorySelect, activeCategory } = useDataUrl();
    const { addToCart } = useContext(CartContext)

    const shopCategories = [
        { name: 'All Products', url: 'products' },
        { name: 'Electronics', url: 'products/category/electronics' },
        { name: "Men's Clothing", url: "products/category/men's clothing" },
        { name: "Women's Clothing", url: "products/category/women's clothing" },
        { name: 'Jewelery', url: 'products/category/jewelery' },
        
    ]

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
                        {shopCategories.map((category, index) => (
                            <h3
                                key={index}
                                className={`shop-category ${activeCategory === category.url ? 'active' : ''}`}
                                onClick={() => handleCategorySelect(category.url)}
                            >
                                {category.name}
                            </h3>
                        ))}
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