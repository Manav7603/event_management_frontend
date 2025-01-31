import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    authType: "signup"
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            // state.user = action.payload.user;
            // state.token = action.payload.token
        },
        logout: (state, action) => {
            state.isAuthenticated = false,
                state.user = null,
                state.token = null
        },
        setAuthType: (state, action) => {
            state.authType = action.payload.authType;
        }
    }
});

export const { login, logout, setAuthType } = authSlice.actions;
export default authSlice.reducer;
