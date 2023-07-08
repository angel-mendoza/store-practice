import { configureStore } from '@reduxjs/toolkit'

// Slices
import alertSlice from './slice/alertSlice';
import shoppingCartSlice from './slice/shoppingCartSlice';

export const store = configureStore({
  reducer: {
    alert: alertSlice,
    shoppingCart: shoppingCartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>