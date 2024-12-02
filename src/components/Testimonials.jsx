import './testimonials.css';
import TestimonialsCard from './TestimonialsCard';
import  Gordon from '../assets/gordon.jpg';
import  Alisson from '../assets/alisson.jpg';
import  Jason from '../assets/jason.jpg';
import  Dua from '../assets/dua.jpg';

function Testimonials () {

    return (
        <>
            <div className='testimonials-container'>
                <p className='section-title2'>Testimonials</p>
                <div className='testimonials-cards-container'> 
                    <TestimonialsCard
                    rating='4.5/5'
                    image={Gordon}
                    name='Gordon R.'
                    review='" Various choices and good prices !! "'
                    />
                    <TestimonialsCard
                    rating='5/5'
                    image={Alisson}
                    name='Alisson V.'
                    review='"My favorite Restaurant in town, try it ! "'
                    />
                    <TestimonialsCard
                    rating='4/5'
                    image={Jason}
                    name='Jason S'
                    review='"Fast delivery, very good dishes with good prices."'
                    />
                    <TestimonialsCard
                    rating='4.5/5'
                    image={Dua}
                    name='Dua L'
                    review='" Varied and delicious homemade dishes. "'
                    />
                </div>
            </div>
        </>
    )
};

export default Testimonials;