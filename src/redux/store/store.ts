import { configureStore } from '@reduxjs/toolkit';
import { nanniesReducer } from '../nannies/slice';
import { filtersReducer } from '../filters/slice';
import { authReducer } from '../auth/slice';
import { colorReducer } from '../color/slice';

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    filters: filtersReducer,
    auth: authReducer,
    color: colorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
