import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const login = createAsyncThunk(
    'users/login',
    async({ email, password }, thunkAPI) => {
        const body = JSON.stringify({
            email,
            password,
        });

        try {
            const res = await axios('/auth/login/web/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body,
            });

            const data = await res.json();

            if (res.status === 200) {
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);
const loginSlice = createSlice({
        name: 'login',
        initialState: {},
        reducers: {

        },
        extraReducers: builder => {
            builder
                .addCase(login.pending, state => {
                    state.loading = true;
                })
                .addCase(login.fulfilled, state => {
                    state.loading = false;
                    state.isAuthenticated = true;
                })
                .addCase(login.rejected, state => {
                    state.loading = false;
                })
        }
    })
    //export const {} = loginSlice.actions;
export default loginSlice.reducer;