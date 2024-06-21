import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './Pages/Login/LoginSlice'
import HotelSlice from './Pages/Hotel/Hotel_Dashboard/HotelPage'
import TourSlice from './Pages/Activities/Add_Trip/Add_TripSlice'


export default configureStore({
    reducer: {
        login: loginSlice,
        hotel: HotelSlice,
        tours: TourSlice,
    },


});