import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="content">
                <span>This is the Contact Page</span>
            </div>
            <Footer />
        </>
    )
} 

export default Contact