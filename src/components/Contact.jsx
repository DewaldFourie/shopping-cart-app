// The contact page route

import { useEffect } from "react";
import './styles/contact.css'
import phoneIcon from '../assets/phoneIcon.png'
import supportIcon from '../assets/supportIcon.png'
import chatIcon from '../assets/chatIcon.png'

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
                                    <img className="contact-icon-image" src={phoneIcon} alt="contact-icon" />
                                </div>
                                <h3 className="contact-title">By Phone</h3>
                                <div className="contact-text-box">
                                    <p>Call us on: +534 251 8547</p>
                                    <p>Office hours: 8am - 5pm</p>
                                </div>
                                <div className="contact-btn-container">
                                    <button>click me</button>
                                </div>
                            </div>
                            <div className="contact-section">
                                <div className="contact-icon">
                                    <img className="contact-icon-image" src={supportIcon} alt="contact-icon" />
                                </div>
                                <h3 className="contact-title">Open Support Inquiry </h3>
                                <div className="contact-text-box">
                                    <p>Available 24/7</p>
                                    <p>We'll get back to you ASAP!</p>
                                </div>
                                <div className="contact-btn-container">
                                    <button>click me</button>
                                </div>                  
                            </div>
                            <div className="contact-section">
                                <div className="contact-icon">
                                    <img className="contact-icon-image" src={chatIcon} alt="contact-icon" />
                                </div>
                                <h3 className="contact-title">Live Chat</h3>
                                <div className="contact-text-box">
                                    <p>Chat with our Support Staff</p>
                                    <p>Operating hours: 7am - 10pm</p>
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