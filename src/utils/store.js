import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice";
import filterSlice from "./filterSlice";
import authSlicer from "./authSlicer";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    auth:authSlicer,
  },
});

export default store;
