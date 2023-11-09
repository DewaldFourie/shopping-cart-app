import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// The base component of the web app that loads the Navbar and Footer and
// uses an Outlet to render the different client side routes 

const Base = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Base