import authReducer from './slices/authSlice';
import formReducer from './slices/formSlice';
import themeReducer from './slices/themeSlice';
import eventsReducer from './slices/eventsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { backendAPI } from '../services/backendAPI';
import participantsReducer from './slices/participantsSlice';
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
