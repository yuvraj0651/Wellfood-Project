import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    productItems: [],
    isLoading: false,
    isError: null,
}

export const fetchApiData = createAsyncThunk(
    "fetch/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            let response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                return rejectWithValue("Sorry there some error in fetching the api data");
            };
            let data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log("The Error is: ", error);
            return rejectWithValue(error.message)
        }
    }
)

export const ApiThunk = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchApiData.pending, (state) => {
            state.isLoading = true;
            state.isError = null;
        })
        builder.addCase(fetchApiData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productItems = action.payload;
        })
        builder.addCase(fetchApiData.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        })
    }
});

export default ApiThunk.reducer;