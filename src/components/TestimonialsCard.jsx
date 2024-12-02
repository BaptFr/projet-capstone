import './testimonials-card.css';

function TestimonialsCard ({rating, image, name, review}) {

    return (
        <>
            <div className='rating-container'>
                <div className='rating-card'>
                    <div className='rating-note'>
                        <p>{rating}</p>
                    </div>
                    <div className='rating-img'>
                        <img src={image} alt='customer-image'></img>
                        <p>{name}</p>
                    </div>
                    <div className='rating-review'>
                        <p>{review}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TestimonialsCard;