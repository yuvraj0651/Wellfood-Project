import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            }
            else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
        increaseCartQuantity: (state, action) => {
            let existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1
            }
        },
        decreaseCartQuantity: (state, action) => {
            let existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (!existingItem) return;

            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    clearCart
} = CartSlice.actions;

export default CartSlice.reducer;