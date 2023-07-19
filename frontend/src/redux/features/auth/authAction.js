import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8000/api/v1";
const config = {
  headers: {
    "Content-Type": "application/json"
  }
}

export const updateProfile = createAsyncThunk("updateProfile", 
  async ({ id, name, email, phone_number, address }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`${url}/user/${id}`, {
        name,
        email,
        phone_number,
        address
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

export const registerUser = createAsyncThunk("auth/register", 
  async ({ name, email, phone_number, password, address }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/register`, {
        name,
        email,
        phone_number,
        password,
        address
      }, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const loginUser = createAsyncThunk("auth/login", 
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/login`, {
        email,
        password
      }, config);

      localStorage.setItem("token", response.data.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);