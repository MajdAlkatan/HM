import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SitePage = createAsyncThunk(
    'site/SitePage',
    async(id) => {
        try {
            const response = await axios.get(`http://localhost:8000/services/activities/sites/${id}`, {
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

const SiteSlice = createSlice({
    name: "site",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(SitePage.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(SitePage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(SitePage.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            });
    },
});


export default SiteSlice.reducer;