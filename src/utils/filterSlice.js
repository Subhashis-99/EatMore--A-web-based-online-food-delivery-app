import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterVal: null,
  },
  reducers: {
    setFilterValue: (state, action) => {
      state.filterVal = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
