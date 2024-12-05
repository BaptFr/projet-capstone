import { Link } from 'react-router-dom';
import Chef from '../assets/restaurant-chef-b.jpg';
import './confirmation-page.css';

function ConfirmationPage () {
    return (
        <>
            <div className='confirmation-container'>
                <img aria-label='Chef-picture' src={Chef}></img>
                <p aria-label='Reservation confirmation and link to home page'><Link to="/">RESERVATION CONFIRMED <br/>
                    Get back to Home page
                </Link></p>
            </div>
        </>
    )
};

export default ConfirmationPage;