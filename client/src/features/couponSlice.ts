// client/src/features/couponSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface Coupon {
  id: string;
  code: string;
  discount: number;
  isActive: boolean;
}

interface CouponState {
  coupons: Coupon[];
}

const initialState: CouponState = {
  coupons: [],
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    setCoupons(state, action: PayloadAction<Coupon[]>) {
      state.coupons = action.payload;
    },
  },
});

export const { setCoupons } = couponSlice.actions;
export default couponSlice.reducer;
