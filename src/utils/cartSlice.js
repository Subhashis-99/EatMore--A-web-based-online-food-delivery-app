import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // Initialize with cart data from localStorage, or an empty array if no data is found
    items: JSON.parse(localStorage.getItem("CART")) || [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("CART", JSON.stringify(state.items));
    },

    // Remove items from the cart
    removeItem: (state, action) => {
      state.items = action.payload;
      // Sync the updated cart state to localStorage
      localStorage.setItem("CART", JSON.stringify(state.items));
    },

    // Clear all items from the cart
    clearCart: (state) => {
      state.items = []; 
      // Remove cart data from localStorage
      localStorage.removeItem("CART");
    },
  },
});

export const { additem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
