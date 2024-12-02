import Button from './Button';
import SpecialCard from './SpecializationsCard.jsx';
import './specializations.css';
import GreekSalad from '../assets/greeksalad.jpg';
import Bruchetta from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemondessert.jpg';


function Specializations () {

    return (
        <>
            <div className='specials-container'>
                <div className= 'specials-title-container'>
                    <p className='section-title1'>This weeks specials!</p>
                    <div className='specials-button'>
                    <Button title='Online Menu' />
                    </div>
                </div>
                <div className='specials-offers'>
                    <SpecialCard
                        source = {GreekSalad}
                        title= 'Greek Salad'
                        description='The famous greek salad of 
                        Cruispy lettuce, peppers, olives
                        and our Chicago style feta cheese, garnished with
                        crunchy garlic and rosemary
                        croutons.'
                    />
                    <SpecialCard
                        source ={Bruchetta}
                        title= 'Bruchetta'
                        description='Our Bruschetta is made from 
                        grilled bread with garlic and 
                        seasoned with salt and olive oil'
                    />
                    <SpecialCard
                        source ={LemonDessert}
                        title= 'Lemon Dessert'
                        description='This comes straight from
                        grilled bread that has been
                        smeared with garlic and
                        seasoned with salt and olive
                        oil.'
                    />
                </div>
            </div>
        </>
    )
};

export default Specializations;