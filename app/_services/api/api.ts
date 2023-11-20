import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "../custom-query/customQuery";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({}),
  keepUnusedDataFor: 50000,
});

export default apiSlice;
