import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action of Async thunk to add a customer
export const addCustomer = createAsyncThunk('customers/addCustomer', async (newCustomer) => {
    const response = await axios.post('http://localhost:9000/add-customer', newCustomer); // Make a POST request to create a new post
    return response.data; // Return the added customer
  });



  // Define a slice for customer
  const customersSlice = createSlice({
    name: 'customers',
    initialState: { customers: [], status: 'idle' }, // Initial state with an empty items array
    reducers: {}, // No additional reducers for now
    extraReducers: (builder) => {
      builder

      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload); // Add the new customer to the state
      })

    }
});

export default customersSlice.reducer;