import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const HotelPage = createAsyncThunk(
    'hotel/HotelPage',
    async() => {
        try {
            const response = await axios.get("http://localhost:8000/services/activities/sites/", {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                }
            });
            const data = response.data;
            console.log(data)
            return data;



        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }

    }
);

const HotelSlice = createSlice({
    name: "hotel",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(HotelPage.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(HotelPage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(HotelPage.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            });
    },
});


export default HotelSlice.reducer;