import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggleSlice',
  initialState: {
    isDiffRes: false,
  },
  reducers: {
    toggleDiffRes: (state) => {
      state.isDiffRes = !state.isDiffRes;
    },
  },
});

export const { toggleDiffRes} = toggleSlice.actions;

export default toggleSlice.reducer;
