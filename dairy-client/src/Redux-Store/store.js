import { configureStore } from '@reduxjs/toolkit';
// import customersReducer from '../features/posts/postsSlice';


export const store = configureStore({
  reducer: {
    customers: customersReducer // Use the posts reducer to manage the posts state
  }
});