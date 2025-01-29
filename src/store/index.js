import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import themeReducer from './themeSlice';
import formReducer from './formSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        form: formReducer
    }
})

export default store;
