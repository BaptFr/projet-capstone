import React, { useState, useEffect } from 'react';
import './booking-form.css';


function BookingForm () {

    const[resDate, setResDate] = useState('');
    const[resTime, setResTime] = useState('');
    const[guests, setGuests] = useState('');
    const[occasion, setOccasion] = useState('');
    const [availableTimes, setAvailabletimes] = useState ([
        '17h30', '18h00', '18h30', '19h00', '19h30', '20h00',
        '20h30', '21h00', '21h30', '22h00'
    ]);

    const updateTime = (selectedDate) => [
        setAvailabletimes([
        '17h30', '18h00', '18h30', '19h00', '19h30', '20h00',
        '20h30', '21h00', '21h30', '22h00'
        ])
    ];

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setResDate(selectedDate);
        updateTime(selectedDate);
    };

    const handleTimeChange = (e) => setResTime(e.target.value);
    const handleGuestsChange = (e) => setGuests(e.target.value);
    const handleOccasionChange = (e) => setOccasion(e.target.value);

    const isFormValid = resDate && resTime && guests && occasion;

    return (
        <>
            <div>
                <form>
                    <label htmlFor='res-date'>Choose a date:</label>
                    <input aria-label='Date calendar choice'
                        type='date'
                        id='res-date'
                        value={resDate}
                        onChange={handleDateChange}
                        />
                    <label htmlFor='res-time'>Choose time:</label>
                    <select aria-label='Time selection'
                        id='res-time'
                        value={resTime}
                        onChange={handleTimeChange}
                    >
                    <option value='' aria-label='Time choices'>Selection</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}> {time} </option>
                        ))}
                    </select>
                    <label htmlfor='guests'>Number of guests:</label>
                    <input  aria-label='Guests number'
                        placeholder='1' min='1' max='15'
                        type='number'
                        id='guests'
                        value={guests}
                        onChange={handleGuestsChange}
                    />
                    <label htmlFor='occasion'>Occasion:</label>
                    <select aria-label='Occasion selection'
                        id='occasion'
                        value={occasion}
                        onChange={handleOccasionChange}
                        >
                        <option aria-label='Birthday option'>Birthday</option>
                        <option aria-label='Anniversary option'>Anniversary</option>
                        <option aria-label='Retreat option'>Retreat</option>
                    </select>
                    <input aria-label='Confirm reservation'
                    type='submit'
                    value='MAKE YOUR RESERVATION'
                    id='submit'
                    disabled={!isFormValid}
                    />
                </form>
            </div>

        </>
    )
};

export default BookingForm;