import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
    name: "auth",
    initialState: {
        AuthUserData: JSON.parse(localStorage.getItem("USERDATA"))
    },
    reducers: {
        addUserData: (state, action) => {
            state.AuthUserData = action.payload;
            localStorage.setItem("USERDATA", JSON.stringify(action.payload));
         },
        removeUserData: (state) => {
            state.AuthUserData = null;
            localStorage.removeItem("USERDATA");
        },
    }
})

export const { addUserData, removeUserData } = authSlicer.actions;
export default authSlicer.reducer;