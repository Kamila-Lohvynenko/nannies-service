import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNannies } from './operations';
import { INanny } from './../../types/NannyInterface';

interface INanniesState {
  items: INanny[];
  total: number | null;
  error: boolean;
  loading: boolean;
  notFound: boolean;
}

const initialState: INanniesState = {
  items: [],
  total: null,
  error: false,
  loading: false,
  notFound: false,
};

const handlePending = (state: INanniesState) => {
  state.error = false;
  state.notFound = false;
  state.loading = true;
};
const handleRejected = (state: INanniesState) => {
  state.error = true;
  state.loading = false;
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState,
  reducers: {
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNannies.pending, handlePending)
      .addCase(
        fetchNannies.fulfilled,
        (state, { payload }: PayloadAction<INanny[]>) => {
          state.items = payload;
          if (payload.length === 0) {
            state.notFound = true;
          }
          state.loading = false;
        },
      )
      .addCase(fetchNannies.rejected, handleRejected),
});

export const nanniesReducer = nanniesSlice.reducer;
export const { resetItems } = nanniesSlice.actions;
