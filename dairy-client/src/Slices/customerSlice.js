import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to add a customer
export const addCustomer = createAsyncThunk('customers/addCustomer', async (newCustomer) => {
    const response = await axios.post('/add-customer', newCustomer); // Make a POST request to create a new post
    return response.data; // Return the added customer
  });



  // Define a slice for posts
  const postsSlice = createSlice({
    name: 'posts',
    initialState: { items: [], status: 'idle' }, // Initial state with an empty items array
    reducers: {}, // No additional reducers for now
    extraReducers: (builder) => {
      builder

      .addCase(createPost.fulfilled, (state, action) => {
        state.items.push(action.payload); // Add the new post to the state
      })

    }
});

export default postsSlice.reducer;