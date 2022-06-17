import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stockData: {},
};

export const selectedStock = createSlice({
  name: "selectedStock",
  initialState,
  reducers: {
    setStockData: (state, action) => {
      state.stockData = action.payload;
    },
  },
});

export const { setStockData } = selectedStock.actions;

export default selectedStock.reducer;
