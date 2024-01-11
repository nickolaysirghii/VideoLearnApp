import { configureStore } from "@reduxjs/toolkit";
import  mainSlice  from "./Slices/theMainSlice";
import  testData  from "./Slices/testSlice";



export const store = configureStore({
    reducer: {
    mainData: mainSlice,
    tesss:testData
    }
});