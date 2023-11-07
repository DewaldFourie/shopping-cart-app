import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Shop = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="content">
                <span>This is the Shop page</span>
            </div>
            <Footer /> 
        </>
    )
} 

export default Shop