import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type mobilNavStates = {
  mainPageNavOpen: boolean;
  dashboardNavOpen: boolean;
};

const initialState = {
  mainPageNavOpen: false,
  dashboardNavOpen: false,
} as mobilNavStates;

const mobile = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    mainPageNavHandler: (state, action: PayloadAction<boolean>) => {
      state.mainPageNavOpen = action.payload;
    },
    dashboardPageNavHandler: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.dashboardNavOpen = action.payload;
    },
  },
});

export const { dashboardPageNavHandler, mainPageNavHandler } = mobile.actions;

export default mobile.reducer;
