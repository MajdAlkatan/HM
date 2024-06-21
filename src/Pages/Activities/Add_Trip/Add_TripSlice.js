import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTour = createAsyncThunk(
    "tours/addTour",
    async({ name, photos, duration, refund_rate, description, allow_points, guid_id, takeoff_date }, thunkAPI) => {
        const formData = new FormData();
        const token = thunkAPI.getState().auth.token;
        console.log(token)
        formData.append("name", name);
        formData.append("duration", duration.toString());
        formData.append("refund_rate", refund_rate.toString());
        formData.append("description", description);
        formData.append("allow_points", JSON.stringify(allow_points));
        formData.append("guid_id", guid_id);
        formData.append("takeoff_date", takeoff_date);

        photos.forEach((photo, index) => {
            formData.append(`photos[${index}]`, photo);
        });

        try {
            const res = await axios.post(
                "http://localhost:8000/services/activities/tours/",
                formData, {
                    headers: {
                        'Accept': "application/json",
                        // Authorization: `JWT ${`token`}`,
                    },

                }
            );

            const data = res.data;

            if (res.status === 201) {
                console.log(res.data);
                return data;
            } else {
                throw new Error('make tour failed');
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || 'An unknown error occurred');
        }
    }
);

const TourSlice = createSlice({
    name: "tours",
    initialState: {
        loading: false,
        tours: null,
        isAuthenticated: false,
        token: null,
    },
    reducers: {
        setTour: (state, action) => {
            state.tours = action.payload;
            state.isAuthenticated = true;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(addTour.pending, (state) => {
                state.loading = true;
            })
            .addCase(addTour.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.token = localStorage.getItem('token');
                state.tours.push(action.payload);
            })
            .addCase(addTour.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { setTour } = TourSlice.actions;

export default TourSlice.reducer;