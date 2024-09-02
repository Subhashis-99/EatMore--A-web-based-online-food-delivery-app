import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import authSlicer from "./authSlicer";
import resInfoSlice from "./resInfoSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    auth: authSlicer,
    resInfo: resInfoSlice,
  },
});

export default store;
