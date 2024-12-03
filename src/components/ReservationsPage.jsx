import './reservations-page.css';
import RestaurantOutdoor from '../assets/restaurant.jpg';
import BookingForm from './BookingForm';


function ReservationsPage () {
    return (
            <div className='reservations-page-container'>
                <div className='page-intro-banner'>
                    <img src={RestaurantOutdoor} alt='restaurant-outdoor'></img>
                </div>
                <h2> RESERVATION </h2>
                <div className='reservaton-form-container'>
                    < BookingForm />
                </div>
            </div>
    )
};

export default ReservationsPage ;
