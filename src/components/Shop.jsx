
import { useEffect } from "react";
import './styles/shop.css'

const Shop = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="shop-content">
                <span>This is the Shop page</span>
            </div>
        </>
    )
} 

export default Shop