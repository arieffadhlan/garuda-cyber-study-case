import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  voucher: null,
  loading: false,
  success: false,
  error: null
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCartState: (state) => {
      state.carts = [];
      state.loading = false;
      state.success = false;
      state.error = null;
    },
    setCart: (state, action) => {
      state.carts = action.payload;
    },
    setVoucher: (state, action) => {
      state.voucher = action.payload;
    }
  }
});

export const { 
  clearCartState, 
  setCart,
  setVoucher
} = cartSlice.actions;

export default cartSlice.reducer;