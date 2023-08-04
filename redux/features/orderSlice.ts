import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OrderState = {
  status: string;
  stop: string | null;
};

const initialState = {
  status: "0",
  stop: null,
} as OrderState;

export const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    updateStop: (state, action: PayloadAction<string | null>) => {
      state.stop = action.payload;
    },
  },
});

export const { updateStatus, updateStop } = order.actions;

export default order.reducer;
