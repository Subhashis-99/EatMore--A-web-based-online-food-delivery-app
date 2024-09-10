import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import authSlicer from "./authSlicer";
import resInfoSlice from "./resInfoSlice";
import toggleSlice from "./toggleSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    auth: authSlicer,
    resInfo: resInfoSlice,
    toggle: toggleSlice,
  },
});

export default store;
