import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItem: [],
}

export const WishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            let existingItem = state.wishlistItem.find((item) => item.id === action.payload.id);

            if (!existingItem) {
                state.wishlistItem.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItem = state.wishlistItem.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const {
    addToWishlist , 
    removeFromWishlist
} = WishlistSlice.actions;

export default WishlistSlice.reducer;