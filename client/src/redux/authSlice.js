// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { makeRequest } from "./api";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

// export const signUp = createAsyncThunk(
//   "auth/signUp",
//   async (formData, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/auth/register",
//         formData
//       );

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );

// export const signIn = createAsyncThunk(
//   "auth/signIn",
//   async (formData, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/auth/login",
//         formData
//       );

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );

export const signUp = createAsyncThunk("auth/signUp", async (formData) => {
  return makeRequest("/auth/register", "post", formData);
});

export const signIn = createAsyncThunk("auth/signIn", async (formData) => {
  return makeRequest("/auth/login", "post", formData);
});




const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;

export const authSelector = (state) => state.authReducer;
