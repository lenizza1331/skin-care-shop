import { configureStore } from "@reduxjs/toolkit"; 
import items from './itemsSlice'; 
import bag from './bagSlice';

export const store = configureStore({
    reducer: {
        items,
        bag
    },

})