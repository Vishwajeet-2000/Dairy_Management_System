import { configureStore } from '@reduxjs/toolkit';
import customersReducer from '../Slices/customerSlice';


export const store = configureStore({
  reducer: {
    customers: customersReducer // Use the posts reducer to manage the posts state
  }
});