import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    navHeight: 0,
    userAuthorized: false
};

const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    reducers: {
        setNavHeight: (state, action) => {
            state.navHeight = action.payload;
        },
        setUserAuth: (state, action) => {
            state.userAuthorized = action.payload;
        },
    }
});
export const { setNavHeight, setUserAuth } = mainSlice.actions;
export default mainSlice.reducer;