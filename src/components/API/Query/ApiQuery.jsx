import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiQuery = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
            providesTags: ["Products"],
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: "products",
                method: "POST",
                body: newProduct,
            }),
            invalidatesTags: ["Products"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"],
        }),
        updateProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `products/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Products"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
} = ApiQuery;

export default ApiQuery;