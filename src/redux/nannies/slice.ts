import { createSlice } from '@reduxjs/toolkit';
import { fetchNannies } from './operations';
import { INanny } from './../../types/NannyInterface';

interface INanniesState {
  items: INanny[];
  lastDocId: string | null;
  hasMore: boolean;
  total: number | null;
  error: boolean;
  loading: boolean;
  notFound: boolean;
}

const initialState: INanniesState = {
  items: [],
  lastDocId: null,
  hasMore: true,
  total: null,
  error: false,
  loading: false,
  notFound: false,
};

// const handlePending = (state: INanniesState) => {
//   state.error = false;
//   state.notFound = false;
//   state.loading = true;
// };
// const handleRejected = (state: INanniesState) => {
//   state.error = true;
//   state.loading = false;
// };

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState,
  reducers: {
    resetItems: (state) => {
      state.items = [];
      state.lastDocId = null;
      state.hasMore = true;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNannies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchNannies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.data];
        state.lastDocId = action.payload.lastDocId;
        state.hasMore = action.payload.data.length === 3;
      })
      .addCase(fetchNannies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const nanniesReducer = nanniesSlice.reducer;
export const { resetItems } = nanniesSlice.actions;
