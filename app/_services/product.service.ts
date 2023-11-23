import apiSlice from "./api/api";
import { PRODUCTS } from "./CONSTANTS";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get all products
    getAllProducts: builder.query({
      query: ({ limit = 6, skip = 6 }) => ({
        url: `${PRODUCTS}?limit=${limit}&skip=${skip}`,
        method: "GET",
      }),
    }),
    // single product
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `${PRODUCTS}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } =
  productApiSlice;
