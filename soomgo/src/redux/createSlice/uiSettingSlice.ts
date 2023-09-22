import { createSlice } from "@reduxjs/toolkit";

const uiSettingSlice = createSlice({
    name: 'UISetting',
    initialState: {
        browserWidth: window.innerWidth,
    },
    reducers: {
        setBrowserWidth: (state, action) => {
            state.browserWidth = action.payload;
        }
    }
});

export default uiSettingSlice;
export const { setBrowserWidth } = uiSettingSlice.actions;