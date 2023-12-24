import { configureStore } from "@reduxjs/toolkit";
import  mainSlice  from "./Slices/theMainSlice";



export const store = configureStore({
    reducer: {
    mainData: mainSlice
    }
});