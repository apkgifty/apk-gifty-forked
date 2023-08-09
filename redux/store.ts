import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";
import mobileNavReducer from "./features/mobileNavSlice";

export const store = configureStore({
  reducer: { orderReducer, mobileNavReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
