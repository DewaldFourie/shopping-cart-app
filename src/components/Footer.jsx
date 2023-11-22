import './styles/footer.css'
import whatsappIcon from '../assets/whatsappIcon.png'
import facebookIcon from '../assets/facebookIcon.png'
import instagramIcon from '../assets/instagramIcon.png'

const Footer = () => {
    
    
    return (
        <>
            <div className="footer-container">
                <div className='footer-info-container'>
                    <a className='t-c-s-link' href="#">Terms & Conditions</a>
                </div>
                <div className='returns-container'>
                    <a className='return-policy-link' href="#">Returns Policy</a>
                </div>
                <div className='footer-copyright-container'>
                    <span className='copyright-text'>©VirtueVue™ created by DewaldFourie 2023</span>
                </div>
                <div className='help-centre-container'>
                    <a className='help-centre-text' href="#">Help Center</a>
                </div>
                <div className='footer-socials-container'>
                    <img className='social-icon' src={whatsappIcon} alt="whatsapp" />
                    <img className='social-icon' src={facebookIcon} alt="facebook" />
                    <img className='social-icon' src={instagramIcon} alt="instagram" />
                </div>
            </div>
        </>
    )
}

export default Footer;