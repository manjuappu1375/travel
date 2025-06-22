// client/src/features/reviewSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface Review {
  id: string;
  tourId: string;
  userId: string;
  rating: number;
  comment: string;
}

interface ReviewState {
  reviews: Review[];
}

const initialState: ReviewState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<Review>) {
      state.reviews.push(action.payload);
    },
    setReviews(state, action: PayloadAction<Review[]>) {
      state.reviews = action.payload;
    },
  },
});

export const { addReview, setReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
