import  insta from '../../icons/Instagram_icon-icons.com_66804.svg';
import  whatsapp from '../../icons/whatsapp_icon-icons.com_62756.svg';
import  facebook from '../../icons/facebook_icon-icons.com_65926.svg';



export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__block block-one">
                <h3>Super Skin Shop</h3>
            </div>
            <div className="footer__block block-two">
                <a href="#"><img className='icon' src={insta}/></a>
                <a href="#"><img className='icon'  src={facebook}/></a>
                <a href="#"><img className='icon' src={whatsapp}/></a>

            </div>
            <div className="footer__block block-three">
                <h5>Contacts</h5>
                <p>Email: info@superskinshop.com</p>
                <p>Text Us: (500) 000-0022</p>
                <p>Call Us: (500) 000-2200</p>
            </div>
            <div className="footer__block block-four">
                <h5>Information</h5>
                <a href="#">Privacy Policy</a>
                <a href="#">Refund Policy</a>
                <a href="#">Shipping Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div className="footer__block rights">
                <p>Designed and Develope by Leniza Yuva©️2022
                All rights reserved</p>
                <p>The website was developed for educational purposes and is not a real offer</p>
            </div>
        </div>
    )
}