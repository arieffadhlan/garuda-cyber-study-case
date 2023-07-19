import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8000/api/v1";

export const checkout = createAsyncThunk("transaction", 
  async ({ 
    cart,
    ammount,
    paymentMethod,
  }, { rejectWithValue }) => {
    try {      
      const token = localStorage.getItem("token");

      const response = await axios.post(`${url}/transaction`, {
        cart,
        ammount,
        paymentMethod,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);