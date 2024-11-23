import { FetchNanniesParams } from '../../types/FetchNanniesParamsInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { filter: FetchNanniesParams } = {
  filter: {},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FetchNanniesParams>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
