import { createSlice } from '@reduxjs/toolkit';

export const resInfoSlice = createSlice({
  name: 'resInfo',
  initialState: {
    data: JSON.parse(localStorage.getItem('RESINFO')) || {},
  },
  reducers: {
    setResInfo: (state, action) => {
      state.data = action.payload;
      localStorage.setItem('RESINFO', JSON.stringify(action.payload));
    },
    removeResInfo: (state, action) => {
      state.data = {};
      localStorage.removeItem("RESINFO");
    },
  },
});

export const { setResInfo,removeResInfo } = resInfoSlice.actions;
export default resInfoSlice.reducer;
