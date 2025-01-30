import authReducer from './authSlice';
import formReducer from './formSlice';
import themeReducer from './themeSlice';
import eventsReducer from './eventsSlice'
import participantsReducer from './participantsSlice'
import { configureStore } from '@reduxjs/toolkit';
import { backendAPI } from '../services/backendAPI';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        [backendAPI.reducerPath]: backendAPI.reducer,
        auth: authReducer,
        theme: themeReducer,
        form: formReducer,
        events: eventsReducer,
        participants: participantsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendAPI.middleware)
})

setupListeners(store.dispatch);
export default store;
