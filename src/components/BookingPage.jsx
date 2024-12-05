import './booking-page.css';
import RestaurantOutdoor from '../assets/restaurant.jpg';
import BookingForm from './BookingForm';


function BookingPage () {
    return (
            <div className='booking-page-container'>
                <div className='page-intro-banner'>
                    <img src={RestaurantOutdoor} alt='restaurant-outdoor'></img>
                </div>
                <div className='booking-form-container'>
                    < BookingForm />
                </div>
            </div>
    )
};

export default BookingPage ;
