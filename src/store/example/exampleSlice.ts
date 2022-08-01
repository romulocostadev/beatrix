import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const exampleSlice = createSlice({
  name: 'example',
  initialState: 1,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
});

export const { increment } = exampleSlice.actions;

export const testNumber = (state: RootState) => state.exampleSlice;

export default exampleSlice.reducer;
