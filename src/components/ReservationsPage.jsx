import './reservations-page.css';
import RestaurantOutdoor from '../assets/restaurant.jpg';
import Button from './Button';

function ReservationsPage () {

    return (
        <>
        <div className="reservations-page-container">
            <div className="page-intro-banner">
                <img src={RestaurantOutdoor} alt='restaurant-outdoor'></img>
            </div>
            <div className='calendar-container'>
                <p className='section-title3'>DATE</p>
            </div>
            <div className='hours-container'>
                <p className='section-title3'>TIME</p>
            </div>
            <div className='numbers-container'>
                <p className='section-title3'>SELECTION</p></div>
            <div>
            <div className='occasion-container'>
                <p className='section-title3'>OCCASION</p></div>
            <div>
            </div>
                < Button title='Continue'/>
            </div>
        </div>
        </>
    )
}

export default ReservationsPage ;
