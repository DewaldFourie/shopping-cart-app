// The shop page route

import { useEffect, useState } from "react";
import './styles/shop.css';
import ShopItem from "./ShopItem";

const useDataUrl = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, error, loading };
};

const Shop = () => {
    const { data, error, loading } = useDataUrl();

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
                        <h2>Shop Name</h2>
                        <h2>Shop List</h2>
                    </div>
                    <div className={loading ? 'shop-body-loading' :'shop-body'}>
                        {loading ?
                            (<div className="loading-container">
                                <img src="" alt="Loading-icon" />
                            </div>
                            ) : (
                                data.map((item) => (
                                    <ShopItem key={item.id} item={item} />
                                ))
                            )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;