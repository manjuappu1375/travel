// client/src/features/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bookingReducer from './bookingSlice';
// add other reducers

export const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    // others...
  },
});
