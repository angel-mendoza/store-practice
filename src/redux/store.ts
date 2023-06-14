import { configureStore } from '@reduxjs/toolkit'

// Slices
import alertSlice from './slice/alertSlice';

export const store = configureStore({
  reducer: {
    alert: alertSlice
  },
})

export type RootState = ReturnType<typeof store.getState>