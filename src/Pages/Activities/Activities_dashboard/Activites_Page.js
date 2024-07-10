import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const ActivitesPage = createAsyncThunk(
    'activites/ActivitesPage',
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

const ActivitesSlice = createSlice({
    name: "activites",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(ActivitesPage.pending, (state) => {
                state.loading = true;
            })
            .addCase(ActivitesPage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(ActivitesPage.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            });
    },
});


export default ActivitesSlice.reducer;