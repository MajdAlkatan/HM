import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "login/loginUser",
    async({ email, password }, thunkAPI) => {
        const body = JSON.stringify({
            email,
            password,
        });

        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/auth/login/web/",
                body, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = res.data;

            if (res.status === 200) {
                console.log(res.data);
                return data; // Return the user data or token
            } else {
                throw new Error('Login failed');
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || 'An unknown error occurred');
        }
    }
);

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isAuthenticated: false,
        loading: false,
        user: null, // Add a user field to store user data or token
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload; // Set the user data or token
            state.isAuthenticated = true; // Mark the user as authenticated
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Set the user data or token
                state.isAuthenticated = true; // Mark the user as authenticated
            })
            .addCase(loginUser.rejected, (state) => {
                state.loading = false;
                state.isAuthenticated = false; // Reset authentication status on failure
            });
    },
});

export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;