import { Link }  from 'react-router-dom';
import Logo from"../assets/Logo.svg";
import './nav.css';

function Nav () {
    return(
        <nav>
            <img src={Logo}alt="logo-lemon"></img>
            <ul>
                <li aria-label='Home pagelink'><Link to="/">Home</Link></li>
                <li aria-label='About page link'><Link to="/about">About</Link></li>
                <li aria-label='Menu page link'><Link to="/menu">Menu</Link></li>
                <li aria-label='Booking page link'><Link to="/booking">Reservations</Link></li>
                <li aria-label='Order page link'><Link to="/orderonline">Order online</Link></li>
                <li aria-label='Login page link'><Link to="login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;