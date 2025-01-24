import { createSlice } from "@reduxjs/toolkit";
import reducer from "./authSlice";

const initialState = {
    mode: "light"
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.mode = action.payload.mode;
        }
    }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

https://github.com/Uday2902/event-management-system.git