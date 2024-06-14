import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './Pages/Login/LoginSlice'
import HotelSlice from './Pages/Hotel/Hotel_Dashboard/HotelPage'


export default configureStore({
    reducer: {
        login: loginSlice,
        hotel: HotelSlice,
    },


});