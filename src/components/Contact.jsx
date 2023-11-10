// The contact page route

import { useEffect } from "react";
import './styles/contact.css'

const Contact = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="contact-content">
                    <div className="contact-container">
                        <div className="contact-header">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="contact-body">
                            <div className="contact-section">
                                <div className="contact-icon">
                                    <img src="#" alt="contact-icon" />
                                </div>
                                <h3 className="contact-title">By Phone</h3>
                                <div className="contact-text-box">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
                                </div>
                                <div className="contact-btn-container">
                                    <button>click me</button>
                                </div>
                            </div>
                            <div className="contact-section">
                                <div className="contact-icon">
                                    <img src="#" alt="contact-icon" />
                                </div>
                                <h3 className="contact-title">Open Support Inquiry </h3>
                                <div className="contact-text-box">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
                                </div>
                                <div className="contact-btn-container">
                                    <button>click me</button>
                                </div>                  
                            </div>
                            <div className="contact-section">
                                <div className="contact-icon">
                                    <img src="#" alt="contact-icon" />
                                </div>
                                <h3 className="contact-title">Live Chat</h3>
                                <div className="contact-text-box">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
                                </div>
                                <div className="contact-btn-container">
                                    <button>click me</button>
                                </div>
                            </div>
                        </div>
                        <div className="contact-footer">
                            t&c`s
                        </div>
                    </div>
            </div>
        </>
    )
} 

export default Contact