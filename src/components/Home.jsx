// The home page route

import { useEffect } from "react";
import './styles/home.css'


const Home = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="home-content">
                <span>This is the Home Page</span>
            </div>
        </>
    )
} 

export default Home