import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
// interface
import { BasicAlertProps, showAlertProps } from '@/interface/BasicAlert';

const INITIAL_STATE: BasicAlertProps = {
  show: false,
  message: '',
  variant: 'success'
}

export const alertSlice = createSlice({
  name: "alertSlice",
  initialState: INITIAL_STATE,
  reducers: {
    showAlert: (state, action: PayloadAction<showAlertProps>) => {
      state.show = true;
      state.message = action.payload.message;
      state.variant = action.payload.variant || "success";
    },
    hideShow: (state) => {
      state.message = INITIAL_STATE.message;
      state.show = INITIAL_STATE.show;
      state.variant = INITIAL_STATE.variant;
    }
  }
});

export const { showAlert, hideShow } = alertSlice.actions

export default alertSlice.reducer;
