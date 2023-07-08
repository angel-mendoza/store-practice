import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
// interface
import { Product } from '@/interface/Products';

const INITIAL_STATE = {
  products: [] as Product[],
}

export const shoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState: INITIAL_STATE,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      state.products = [
        ...state.products,
        action.payload
      ]
    },
  }
});

export const { addCart } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer;
