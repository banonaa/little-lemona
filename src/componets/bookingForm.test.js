
import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '../componets/bookingForm';

describe('Booking form', () => {
  const availableTime = ['17:00', '17:30'];
  const today = new Date().toISOString().split('T')[0];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  test('should correctly render all fields and their default values', async () => {
    render(
      <BookingForm availableTime={availableTime} submitForm={submitForm} />
    );

    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId('booking-time-option');
    const guestInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId(`booking-occasion-option`);
    const submitInput = screen.getByRole('button');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'booking-date');
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'booking-time');
    expect(timeOptions.length).toBe(2);

    expect(guestInput).toBeInTheDocument();
    expect(guestInput).toHaveAttribute('id', 'booking-number-guests');
    expect(guestInput).toHaveAttribute('type', 'number');
    expect(guestInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'booking-occasion');
    expect(occasionOptions.length).toBe(2);

    expect(submitInput).toBeInTheDocument();
    expect(submitInput).toHaveAttribute('type', 'submit');
    expect(submitInput).toBeEnabled();
  });

  test('should successfully submit form with default values', () => {
    render(
      <BookingForm availableTimes={availableTime} submitForm={submitForm} />
    );

    const submitInput = screen.getByRole('button');
    fireEvent.click(submitInput);

    expect(submitForm).toHaveBeenCalledWith({ 
      date: today, 
      time: availableTime[0], 
      guests: 1, 
      occasion: 'Birthday', 
    });
  });

  test(
    `should display an error message and disable sumbit button when date 
    field's value is empty`, () => {
    render(
      <BookingForm 
        availableTime={availableTime} 
        dispatch={dispatch} 
        submitForm={submitForm} 
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.blur(dateInput);
    const errorMessage = screen.getByTestId('error-message');
    const submitInput = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please choose a valid date');
    expect(submitInput).toBeDisabled();
  });

  test(
    `should display an error message and disable sumbit button when number of  
    guests field's value is empty`, () => {
    render(
      <BookingForm 
        availableTime={availableTime} 
        dispatch={dispatch} 
        submitForm={submitForm} 
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestInput, { target: { value: '' } });
    fireEvent.blur(guestInput);
    const errorMessage = screen.getByTestId('error-message');
    const submitInput = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please enter a number between 1 and 10');
    expect(submitInput).toBeDisabled();
  });
});