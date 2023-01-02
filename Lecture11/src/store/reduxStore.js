import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';


const store = configureStore({
    reducer: {
        userLogin: loginReducer,
    }
});


export default store;
