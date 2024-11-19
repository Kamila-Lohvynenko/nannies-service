import { configureStore } from '@reduxjs/toolkit';
import { nanniesReducer } from '../nannies/slice';

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
