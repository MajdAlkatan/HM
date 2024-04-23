import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './Login/LoginSlice'

const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    devTools: true
});
export { store };