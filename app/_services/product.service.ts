import apiSlice from "./api/api";
import {
  PRODUCTS,
  PRODUCTS_CATEGORIES,
  PRODUCTS_OF_CATEGORY,
} from "./CONSTANTS";

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
    // product categories
    getProductCategories: builder.query({
      query: () => ({
        url: PRODUCTS_CATEGORIES,
        method: "GET",
      }),
    }),
    // products of category
    getProductsOfCategory: builder.query({
      query: (category) => ({
        url: `${PRODUCTS_OF_CATEGORY}/${category}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
  useGetProductsOfCategoryQuery,
} = productApiSlice;
