import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Slices/Cart/CartSlice";
import WishlistReducer from "../Slices/Wishlist/WishlistSlice";
import CompareReducer from "../Slices/Compare/CompareList";
import productReducer from "../../API/Thunk/ApiThunk";
import ApiQuery from "../../API/Query/ApiQuery";
import LoggerMiddleware from "../../API/Middleware/LoggerMiddleware";

const store = configureStore({
    reducer: {
        cart: CartReducer,
        wishlist: WishlistReducer,
        compare: CompareReducer,

        products: productReducer,
        [ApiQuery.reducerPath]: ApiQuery.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            LoggerMiddleware,
            ApiQuery.middleware);
    }
});

export default store;