import { configureStore } from '@reduxjs/toolkit';
import customersReducer from '../Slices/customerSlice';
import milkReducer from '../Slices/milkSclice';
import fatReducer from '../Slices/fatSlice'


export const store = configureStore({
  reducer: {
    customers: customersReducer , // Use the customer reducer to manage the customer state
    milkRecords : milkReducer ,
    fatRates : fatReducer
  }
});