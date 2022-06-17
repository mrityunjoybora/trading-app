import { configureStore } from "@reduxjs/toolkit";
import selectedStockReducer from "./slices/stock";

export const store = configureStore({
  reducer: {
    selectedStock: selectedStockReducer,
  },
});
