import { configureStore  } from '@reduxjs/toolkit';
import { rootReducer } from "./redusers";
import thunk from 'redux-thunk';

export const store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})