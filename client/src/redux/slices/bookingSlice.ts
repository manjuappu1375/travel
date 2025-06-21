import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Booking {
  id: string;
  tourId: string;
  user: string;
  date: string;
}

interface BookingState {
  bookings: Booking[];
}

const initialState: BookingState = {
  bookings: JSON.parse(localStorage.getItem('bookings') || '[]'),
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking(state, action: PayloadAction<Booking>) {
      state.bookings.push(action.payload);
      localStorage.setItem('bookings', JSON.stringify(state.bookings));
    },
    clearBookings(state) {
      state.bookings = [];
      localStorage.removeItem('bookings');
    },
  },
});

export const { addBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
