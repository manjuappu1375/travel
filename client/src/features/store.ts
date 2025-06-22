// client/src/features/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bookingReducer from './bookingSlice';
import wishlistReducer from './wishlistSlice';
import tourReducer from './tourSlice';
import reviewReducer from './reviewSlice';
import couponReducer from './couponSlice';
import paymentReducer from './paymentSlice';
import supportReducer from './supportSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    wishlist: wishlistReducer,
    tour: tourReducer,
    review: reviewReducer,
    coupon: couponReducer,
    payment: paymentReducer,
    support: supportReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
