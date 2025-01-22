import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action of Async thunk to add a customer
export const addMilkRecord = createAsyncThunk('milkRecords/addMilk', async (newMilk) => {
  const response = await axios.post('http://localhost:9000/add-milk', newMilk); // Make a POST request to create a new Milk Record 
  return response.data; // Return the added milk record
});


export const fetchMilkRecords = createAsyncThunk('milkRecords/fetchAllMilk', async () => {
  const response = await axios.get('http://localhost:9000/get-milk-records');
  console.log("returned to slice after exicution")
  return response.data;
});


export const deleteMilkRecord = createAsyncThunk('milkRecords/deleteMilk', async (id) => {
  await axios.delete(`http://localhost:9000/dlt-milk-record/${id}`);
  return id;
});


// Define a slice for customer
const milkSlice = createSlice({
  name: 'milkRecords',
  initialState: { records: [], status: 'idle' }, // Initial state with an empty items array
  reducers: {}, // No additional reducers for now
  extraReducers: (builder) => {
    builder

    .addCase(addMilkRecord.fulfilled, (state, action) => {
        state.records.push(action.payload);
      })

    
    .addCase(fetchMilkRecords.fulfilled, (state, action) => {
      state.records = action.payload;
      state.status = 'succeeded';
    })


    .addCase(deleteMilkRecord.fulfilled, (state, action) => {
      state.records = state.records.filter(record => record._id !== action.payload);
    })


    .addMatcher(
      (action) => action.type.startsWith('milkRecords') && action.type.endsWith('/pending'),
      (state) => {
        state.status = 'loading';
    })


    .addMatcher(
      (action) => action.type.startsWith('milkRecords') && action.type.endsWith('/rejected'),
      (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    });

}
});

export default milkSlice.reducer;