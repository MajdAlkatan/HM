import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './Pages/Login/LoginSlice'

export default configureStore({
    reducer: {
        login: loginSlice,
    },

});