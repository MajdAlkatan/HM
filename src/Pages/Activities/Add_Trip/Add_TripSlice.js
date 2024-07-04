import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTour = createAsyncThunk(
    "tours/addTour",
    async({ name, photos, duration, refund_rate, description, allow_points, guid_id, takeoff_date }, thunkAPI) => {
        const formData = new FormData();

        formData.append("name", name);
        formData.append("duration", duration);
        formData.append("refund_rate", refund_rate);
        formData.append("description", description);
        formData.append("allow_points", allow_points);
        formData.append("guide_id", guid_id);
        formData.append("takeoff_date", takeoff_date);
        photos.forEach((photo, index) => {
            formData.append(`photos[${index}]image`, photo);
        });






        console.log(`JWT ${localStorage.getItem('token')}`)



        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        try {
            const res = await axios.post(
                "http://localhost:8000/services/activities/tours/",
                formData, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`,


                    },

                }
            );

            const data = res.data;

            if (res.status === 201) {
                console.log(res.data);
                return data;
            } else {
                throw new Error('Failed to make tour');
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                console.error(`Status: ${err.response.status}, Status Text: ${err.response.statusText}`);
                console.error(err.response.data);
            } else {
                const errorMessage = err.response && err.response.data ? err.response.data.message : err.message;
                console.error(errorMessage);
            }
            return thunkAPI.rejectWithValue('error');
        }
    });


const TourSlice = createSlice({
    name: "tours",
    initialState: {
        loading: false,
        tours: [],
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
            .addCase(addTour.rejected, (state, action) => {
                state.loading = false;
                console.error('Failed to add tour:', action.error.message);

            });
    },
});

export const { setTour } = TourSlice.actions;

export default TourSlice.reducer;