import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for adding a room
export const addRoom = createAsyncThunk(
  'rooms/addRoom',
  async (roomData, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      // Append room data to FormData
      formData.append('property_id', roomData.property_id);
      formData.append('name', roomData.name);
      formData.append('type', roomData.type);
      formData.append('description', roomData.description);
      formData.append('number', roomData.number);
      formData.append('price', roomData.price);
      formData.append('multi_night_discount', roomData.multi_night_discount);
      formData.append('available_start_date', roomData.available_start_date);
      formData.append('available_end_date', roomData.available_end_date);
      formData.append('points_discount_price', roomData.points_discount_price);
      formData.append('points_discount', roomData.points_discount);

      // Append images
      roomData.photos.forEach((photo, index) => {
        formData.append(`photos[${index}]image`, photo);
      });

      // Append bed details
      roomData.beds.forEach((bed, index) => {
        formData.append(`beds[${index}]number`, bed.number);
        formData.append(`beds[${index}]type`, bed.type);
      });

      const response = await axios.post('http://127.0.0.1:8000/services/properties/sup-properties/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addRoom.pending, (state) => {
        state.loading = true;
      })
      .addCase(addRoom.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(addRoom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = roomSlice.actions;
export default roomSlice.reducer;
