import { fireEvent, render, screen } from '@testing-library/react';
import Bookings from '../pages/booking';

describe('Booking page', () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test('should have one or more available booking time options', async () => {
    render(
      
        <Bookings/>
    
    );

    const timeOptions = await screen.findAllByTestId('re_time');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption => 
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test('should update available booking time options when changing booking date', async() => {
    render(
      
        <Bookings/>
    
    );

    const bookingDate = '2023-04-01';
    const dateInput = screen.getByLabelText("Date");
    const initialTimeOptions = await screen.findAllByTestId('res_time');
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions = await screen.findAllByTestId('res_time');

    expect(dateInput).toHaveValue(bookingDate);
    initialTimeOptions.forEach(timeOption => 
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach(timeOption => 
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });
});