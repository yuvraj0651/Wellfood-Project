import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    compareItems: [],
}

export const CompareList = createSlice({
    name: "compare",
    initialState,
    reducers: {
        addToCompare: (state, action) => {
            let existingItem = state.compareItems.find((item) => item.id === action.payload.id);

            if (!existingItem) {
                state.compareItems.push(action.payload);
            }
        },
        removeFromCompare: (state, action) => {
            state.compareItems = state.compareItems.filter((item) => item.id !== action.payload.id);
        },
    },
})

export const {
    addToCompare,
    removeFromCompare
} = CompareList.actions;

export default CompareList.reducer;