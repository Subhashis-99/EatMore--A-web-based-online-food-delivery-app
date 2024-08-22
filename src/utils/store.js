import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice";
import filterSlice from "./filterSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },
});

export default store;
