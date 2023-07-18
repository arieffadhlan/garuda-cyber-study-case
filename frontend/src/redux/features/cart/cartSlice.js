import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
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
    }
  }
});

export const { 
  clearCartState, 
  setCart
} = cartSlice.actions;

export default cartSlice.reducer;