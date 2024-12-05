import React, { useState, useEffect } from 'react';
import { fetchAPI, submitApi } from './api';
import './booking-form.css';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        fetchAPI(today).then(times => setAvailableTimes(times));
      }, []);

      const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setResDate(selectedDate);
        fetchAPI(selectedDate).then(times => setAvailableTimes(times));
      };

      const handleTimeChange = (e) => setResTime(e.target.value);
      const handleGuestsChange = (e) => setGuests(e.target.value);
      const handleOccasionChange = (e) => setOccasion(e.target.value);

      const isFormValid = resDate && resTime && guests && occasion;

      const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { date: resDate, time: resTime, guests, occasion };
        const isSubmitted = await submitApi(formData);

        if (isSubmitted) {
            navigate('/confirmation');
        }else {
            alert('Time slot already booked !')
        }

      };


    return (
        <>
            <h2>Make you reservation</h2>
                <div>
                    <form onSubmit={handleSubmit}>
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
                        <label htmlFor='guests'>Number of guests:</label>
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
                            <option value='' disabled>Select an occasion</option>
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