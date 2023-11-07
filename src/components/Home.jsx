import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="content">
                <span>This is the Home Page</span>
            </div>
            <Footer />
        </>
    )
} 

export default Home