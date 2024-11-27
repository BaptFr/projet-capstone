import Button from './Button';
import SpecialCard from './SpecializationsCard.jsx';
import './specializations.css';

function Specializations () {

    return (
        <>
            <div className='specials-container'>
                <div className= 'specials-title-container'>
                    <p id='specials-title'>This weeks specials!</p>
                    <div className='specials-button'>
                    <Button title='Online Menu' />
                    </div>
                </div>
                <div className='specials-offers'>
                    <SpecialCard></SpecialCard>
                    <SpecialCard></SpecialCard>
                    <SpecialCard></SpecialCard>
                </div>
            </div>
        </>
    )
};

export default Specializations;