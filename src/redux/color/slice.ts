import { createSlice } from '@reduxjs/toolkit';

const initialState: { color: 'red' | 'blue' | 'green' } = {
  color: 'green',
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export const colorReducer = colorSlice.reducer;
