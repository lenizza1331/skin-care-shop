import { createSlice } from '@reduxjs/toolkit'



export const bagSlice = createSlice({
    name: 'bag',
    initialState: {
        bagItems: [],
    },
    reducers: {
        addItemToCart : (state, action) => {
            const timeId = new Date().getTime();
            state.bagItems.push({
                id : timeId,
                itemId: action.payload.item.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity*action.payload.item.price,
                totalQuantity : action.payload.quantity,
            })
        },
        removeItemFromCart :  (state, action) => {
            state.bagItems = state.bagItems.filter(
                bagItem => bagItem.id !== action.payload.bagItemId
            )
        }
    }
})


export const getTotalQuantity = state => {
    return state.bag.bagItems.reduce((total, bagItems) => {
        return bagItems.totalQuantity + total
    }, 0)
}

export const getTotalPrice = state => {
    return state.bag.bagItems.reduce((total, bagItems) => {
        return bagItems.totalPrice + total
    }, 0)
}
export const getBagItems = state => state.bag.bagItems;
export const { addItemToCart, removeItemFromCart } = bagSlice.actions;
export default bagSlice.reducer;