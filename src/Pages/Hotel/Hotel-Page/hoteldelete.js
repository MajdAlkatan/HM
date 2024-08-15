import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for deleting a hotel
export const deleteHotel = createAsyncThunk(
  'hotels/deleteHotel',
  async (hotelId, { rejectWithValue }) => {
    try {
       await axios.delete(`http://127.0.0.1:8000/services/properties/${hotelId}/`);
      return hotelId; // Return the hotelId to remove it from the state
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const hotelDeleteSlice = createSlice({
  name: 'hotels',
  initialState: {
    hotels: [],   // Stores the list of hotels
    loading: false, // Loading state for the delete operation
    error: null,  // Error state for the delete operation
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteHotel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteHotel.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = state.hotels.filter(hotel => hotel.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteHotel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default hotelDeleteSlice.reducer;
