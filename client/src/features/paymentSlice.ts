// client/src/features/paymentSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: string;
  method: string;
}

interface PaymentState {
  payments: Payment[];
}

const initialState: PaymentState = {
  payments: [],
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPayments(state, action: PayloadAction<Payment[]>) {
      state.payments = action.payload;
    },
  },
});

export const { setPayments } = paymentSlice.actions;
export default paymentSlice.reducer;
