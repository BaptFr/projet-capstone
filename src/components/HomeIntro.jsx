
import './homeIntro.css';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';
import IntroPic from '../assets/restaurantfood.jpg';

function HomeIntro () {

    return (
        <>
            <div className="two-columns">
                <div className='text-part'>
                    <h1> Little Lemon </h1>
                    <h3> Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    < Link to="/reservations">< Button title="Reserve a table"/> </Link>
                </div>
                <div className='offbeat-picture'>
                    <img src={IntroPic} alt='bruschettas'></img>
                </div>
            </div>
        </>
    )
};

export default HomeIntro ;