import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";

// The base component of the web app that loads the Navbar and Footer and
// uses an Outlet to render the different client side routes 

const Base = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Programmatically navigate to the /home path when the component mounts
        navigate('/home');
    }, [navigate]); // Dependency array ensures this effect runs only once


    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Base