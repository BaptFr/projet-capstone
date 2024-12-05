import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI } from './api';


jest.mock('./api');

beforeEach(() => {
    jest.clearAllMocks();  
  });

test('BookingForm should navigate on submit', () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText('Date');
    const timeInput = screen.getByLabelText('Time');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });
    fireEvent.click(submitButton);


  });


test('initializeTimes should fetch available times and update the state', async () => {

    fetchAPI.mockResolvedValueOnce(['17:00', '18:00', '19:00']);

    render(<BookingForm />);

    await waitFor(() => {
      const timeOptions = screen.getAllByRole('option');
      expect(timeOptions.length).toBeGreaterThan(0);
    });
  });


test('updateTimes sets availableTimes correctly', async()  => {

    render(<BookingForm />);

    const dateInput = screen.getByLabelText('Date');
    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });

    await waitFor(() => {
        const timeOptions = screen.getAllByRole('option');
        expect(timeOptions.length).toBeGreaterThan(0);
      });
    });