// client/src/features/tourSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface Tour {
  id: string;
  title: string;
  country: string;
  price: number;
  rating: number;
  image: string;
}

interface TourState {
  tours: Tour[];
  loading: boolean;
  error: string | null;
}

const initialState: TourState = {
  tours: [],
  loading: false,
  error: null,
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setTours(state, action: PayloadAction<Tour[]>) {
      state.tours = action.payload;
    },
  },
});

export const { setTours } = tourSlice.actions;
export default tourSlice.reducer;
