import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type filterStates = {
  currencyType: string;
  giftCardType: string;
};

const initialState = {
  currencyType: "USD",
  giftCardType: "All",
} as filterStates;

const filterOptions = createSlice({
  name: "filterOptions",
  initialState,
  reducers: {
    mainPageNavHandler: (state, action: PayloadAction<string>) => {
      //   state.mainPageNavOpen = action.payload;
      console.log(action.payload);
    },
    dashboardPageNavHandler: (state, action: PayloadAction<string>) => {
      console.log("action", action.payload);
      state.giftCardType = action.payload;
      //   state.dashboardNavOpen = action.payload;
    },
  },
});

export const { dashboardPageNavHandler, mainPageNavHandler } =
  filterOptions.actions;

export default filterOptions.reducer;
