
import './homeIntro.css';
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
                    < Button title="Reserve a table"/>
                </div>
                <div className='offbeat-picture'>
                    <img src={IntroPic} alt='bruschettas'></img>
                </div>
            </div>
        </>
    )
};

export default HomeIntro ;