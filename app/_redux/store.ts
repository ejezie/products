"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modal } from "./slices";
import apiSlice from "@/_services/api/api";

const rootReducer = combineReducers({
  modal,
  [apiSlice.reducerPath]: apiSlice.reducer,
});


const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(apiSlice.middleware),
});

export default store;
