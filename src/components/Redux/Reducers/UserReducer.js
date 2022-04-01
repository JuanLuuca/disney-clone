import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const UserReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoginState: (state, action) => {
            state.name = action.payload;
            state.email = action.payload;
            state.photo = action.payload;
        },
        setLogOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const { setLoginState, setLogOutState } = UserReducer.actions;

export const selectUserName = (state) => state.user;
export const selectUserEmail = (state) => state.user;
export const selectUserPhoto = (state) => state.user;

export default UserReducer;