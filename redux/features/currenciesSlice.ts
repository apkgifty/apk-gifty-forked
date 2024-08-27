import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type currenciesState = {
  id: number;
  name: string;
  symbol: string;
  description: string;
  rate: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

const initialState = {
  currencies: [] as currenciesState[],
};

const currencies = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    loadCurrenciesHandler: (
      state,
      action: PayloadAction<currenciesState[]>
    ) => {
      state.currencies = action.payload;
    },
  },
});

export const { loadCurrenciesHandler } = currencies.actions;

export default currencies.reducer;
