import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action of Async thunk to add a customer
export const addCustomer = createAsyncThunk('customers/addCustomer', async (newCustomer) => {
    const response = await axios.post('http://localhost:9000/add-customer', newCustomer); // Make a POST request to create a new customer
    return response.data; // Return the added customer
  });


// Action - Async thunk to fetch customers
export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
    const response = await axios.get('http://localhost:9000/get-customers'); // Make a GET request to fetch customers
    return response.data; // Return the fetched customers
  });


// Action - Async thunk to delete a customer
export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (id) => {
  const result = await axios.delete(`http://localhost:9000/del-customer/${id}`); // Make a DELETE request to remove a customer
  return id; // Return the ID of the deleted customer
});

// Action - Async thunk to updtae a customer
export const updateCustomer = createAsyncThunk('customers/updateCustomer', async ({ id, updatedCustomer }) => {
  const response = await axios.put(`http://localhost:9000/update-cust/${id}`, updatedCustomer); // Make a PUT request to update a post
  return response.data; // Return the updated post
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

      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.customers = action.payload; // Update state with fetched customers
        state.status = 'succeeded'; // Set status to succeeded
      })

      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.customers = state.customers.filter(customer => customer._id !== action.payload); // Remove the deleted post from the state
      })

      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.customers.findIndex(customer => customer._id === action.payload._id); // Find the updated post
        if (index !== -1) {
          state.customers[index] = action.payload; // Update the post in the state
        }
      })


    }
});

export default customersSlice.reducer;