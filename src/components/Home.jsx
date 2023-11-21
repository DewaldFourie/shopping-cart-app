// The home page route
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './styles/home.css'
import Testimonial from "./Testimonial.jsx";
import data from "../assets/data.json"
import qualityIcon from '../assets/qualityIcon.png'
import deliveryIcon from '../assets/deliveryIcon.png'
import customerService from '../assets/customerService.png'


const Home = () => {

    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/shop');
    };

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="home-content">
                <div className="banner-container">
                    <div className="banner-container-info">
                        <p className="banner-container-text">
                        Discover the latest trends in fashion, explore cutting-edge electronics, and adorn yourself with exquisite jewelry. 
                        Your journey to a more stylish and tech-savvy you begins here!
                        </p>
                        <button className="banner-container-btn" onClick={handleShopNowClick}>Shop Now</button>
                    </div>
                </div>
                <div className="segment-1-container">
                    <div className="segment-1-info">
                        <p className="segment-1-text">
                        <b>VirtueVogue</b> brings you a curated collection of style and innovation. 
                        Unleash your shopping desires and redefine your lifestyle with our diverse range of products. 
                        Elevate your wardrobe, amplify your gadgets, and adorn yourself with elegance. 
                        </p>
                    </div>
                </div>
                <div className="segment-2-container">
                        <Testimonial testimonialData={data} />
                </div>
                <div className="segment-3-container">
                    <div className="segment-3-info">
                        <div className="info-element">
                            <img className="info-element-icon" src={qualityIcon} alt="segmet-3-icon" />
                            <h3>Quality You Can Trust</h3>
                        </div>
                        <div className="info-element">
                            <img className="info-element-icon" src={deliveryIcon} alt="segmet-3-icon" />
                            <h3>International Shipping </h3>
                        </div>
                        <div className="info-element">
                            <img className="info-element-icon" src={customerService} alt="segmet-3-icon" />
                            <h3>Outstanding Customer Service</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Home