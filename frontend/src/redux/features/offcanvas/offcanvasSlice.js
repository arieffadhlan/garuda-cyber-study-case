import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false
}

const offcanvasSlice = createSlice({
  name: "offcanvas",
  initialState,
  reducers: {
    openOffcanvas: (state) => {
      state.show = true;
    },
    closeOffcanvas: (state) => {
      state.show = false;
    }
  }
});

export const { openOffcanvas, closeOffcanvas } = offcanvasSlice.actions;
export default offcanvasSlice.reducer;