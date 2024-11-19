import { createSlice } from '@reduxjs/toolkit';
import { fetchNannies } from './operations';

const handlePending = (state: any) => {
  state.error = false;
  state.notFound = false;
  state.loading = true;
};
const handleRejected = (state: any, { payload }: any) => {
  if (payload.status === 404) {
    state.notFound = true;
    state.loading = false;
  } else {
    state.error = true;
    state.loading = false;
  }
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: {
    items: [],
    total: null,
    error: null,
    loading: false,
    notFound: false,
  },
  reducers: {
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNannies.pending, handlePending)
      .addCase(fetchNannies.fulfilled, (state, { payload }) => {
        console.log(payload);

        // state.items = [...state.items, ...payload.items];
        // state.total = payload.total;
        state.loading = false;
      })
      .addCase(fetchNannies.rejected, handleRejected),
});

export const nanniesReducer = nanniesSlice.reducer;
export const { resetItems } = nanniesSlice.actions;
