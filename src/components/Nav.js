import Logo from"../assets/Logo.svg";
import './nav.css';

function Nav () {
    return(
        <nav>
            <img src={Logo}alt="logo-lemon"></img>
            <ul>
                <li><a href="/#">Home</a></li> 
                <li> <a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderonline">Order online</a></li>
                <li><a href="login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;