import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "login/loginUser",
  async ({ email, password }, thunkAPI) => {
    const body = JSON.stringify({
      email,
      password,
    });

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/auth/login/web/",
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = res.data;

      if (res.status === 200) {
        console.log(data);
        return data;
      } else {
        console.log(thunkAPI.rejectWithValue(data));
      }
    } catch (err) {
      console.log(thunkAPI.rejectWithValue(thunkAPI.res.data));
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: false,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default loginSlice.reducer;