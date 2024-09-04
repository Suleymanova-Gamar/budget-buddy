import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    navHeight: 0,
};

const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    reducers: {
        setNavHeight: (state, action) => {
            state.navHeight = action.payload;
        },
    }
});
export const { setNavHeight } = mainSlice.actions;
export default mainSlice.reducer;