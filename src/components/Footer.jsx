import { Link }  from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import './footer.css';
import Linkedin from '../assets/linkedin.png';
import Instagram from '../assets/instagram.webp';
import Facebook from '../assets/facebook.png';
import Uber from '../assets/uber.jpg';



function Footer () {
    return(
    <>
        <div className="footer-container">
            <div className='footer-logo'>
                <img src={Logo} alt='little-lemon-restaurant'></img>
            </div>
            <div className='footer-nav'>
                <p className='footer-titles'>Navigation</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/orderonline">Order online</Link></li>
                    <li><Link to="login">Login</Link></li>
                </ul>
            </div>
            <div className='footer-contact'>
                <p className='footer-titles'>Contact</p>
                <p className='footer-contact'> 565 W. Jackson Blvd<br/>
                    Chicago, IL 60661-5701<br/>
                    Tel: (312) 939-3111 <br/>
                    @: little-lemon-restaurant@gmail.com</p>
            </div>
            <div className='footer-medias'>
                <p className='footer-titles'>Social Media Links</p>
                <img src={Uber} alt='link-uber-eat'></img>
                <img src={Instagram} alt='link-instagram-eat'></img>
                <img src={Facebook} alt='link-facebook-eat'></img>
                <img src={Linkedin} alt='link-linkedin-eat'></img>
            </div>

        </div>
    </>
    );
}

    export default Footer;