import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";
import mobileNavReducer from "./features/mobileNavSlice";
import filterReducer from "./features/filterSlice";
import currenciesReducer from "./features/currenciesSlice";

export const store = configureStore({
  reducer: { orderReducer, mobileNavReducer, filterReducer, currenciesReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
