// client/src/features/supportSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: 'open' | 'closed' | 'pending';
}

interface SupportState {
  tickets: SupportTicket[];
}

const initialState: SupportState = {
  tickets: [],
};

const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    addTicket(state, action: PayloadAction<SupportTicket>) {
      state.tickets.push(action.payload);
    },
    setTickets(state, action: PayloadAction<SupportTicket[]>) {
      state.tickets = action.payload;
    },
  },
});

export const { addTicket, setTickets } = supportSlice.actions;
export default supportSlice.reducer;
