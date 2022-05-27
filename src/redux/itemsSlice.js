import { createSlice } from '@reduxjs/toolkit'



export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        selectedCategory: 'ALL'
    },
    reducers: {
        filterCategory : (state, action) => {
            state.selectedCategory = action.payload;
        },
    }
})

export const { filterCategory } = itemsSlice.actions;
export const getSelectedCategory = state => state.items.selectedCategory;
export default itemsSlice.reducer