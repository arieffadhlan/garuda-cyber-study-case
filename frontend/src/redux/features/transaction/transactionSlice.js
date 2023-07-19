import { createSlice } from "@reduxjs/toolkit";
import { checkout } from "./transactionAction";

const initialState = {
  transactions: [],
  transactionData: {},
  selectedTransaction: {},
  selectedPaymentMethod: null,
  loading: false,
  success: false,
  error: null
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    clearTransactionState: (state) => {
      state.transactions = [];
      state.transactionData = {};
      state.selectedTransaction = {};
      state.selectedPaymentMethod = null;
      state.loading = false;
      state.success = false;
      state.error = null;
    },    
    clearTransactionMessage: (state) => {
      state.transactionData = {};
      state.success = false;
    },    
    clearSelectedPaymentMethod: (state) => {
      state.selectedPaymentMethod = null;
    },
    setSelectedTransaction: (state, action) => {
      state.selectedTransaction = action.payload;
    },
    setSelectedPaymentMethod: (state, action) => {
      state.selectedPaymentMethod = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Checkout
    builder.addCase(checkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkout.fulfilled, (state, action) => {
      state.selectedTransaction = action.payload.data;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(checkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { 
  clearTransactionState,
  clearTransactionMessage,
  clearSelectedPaymentMethod,
  setSelectedTransaction, 
  setSelectedPaymentMethod 
} = transactionSlice.actions;

export default transactionSlice.reducer;