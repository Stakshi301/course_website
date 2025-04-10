import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from './Slice';

export const Store=configureStore({
    reducer:{
        theme:ToggleSlice,
    }
})