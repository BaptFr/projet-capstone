import './card.css';
import DeliveryLogo from '../assets/Basket.svg';

function SpecialCard ({source, title, description}) {

    return (
        <article className='card'>

            <div className='card-pic'>
                <img src={source} alt='special-dishe'></img>
            </div>
            <div className='card-text-container'>
                <div className='card-title'>
                    <p>{title}</p>
                </div>
                <div className='card-description'> 
                    <p> {description}</p>
                </div>
                <div className='delivery-link'>
                    <p>Order a delivery </p>
                    <img src={DeliveryLogo} alt='delivery'></img>
                </div>
            </div>


        </article>
    )
};

export default SpecialCard;