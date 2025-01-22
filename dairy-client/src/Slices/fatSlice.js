import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Add or Update Fat Rate
export const addOrUpdateFatRate = createAsyncThunk('fatRates/addOrUpdateFatRate', async (data) => {
    const response = await axios.post('http://localhost:9000/add-fat', data);
    return response.data;
  });



  const fatRateSlice = createSlice({
    name: 'fatRates',
    initialState: {
      rates: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder

      .addCase(addOrUpdateFatRate.fulfilled, (state, action) => {
        const existingIndex = state.rates.findIndex((rate) => rate.fat === action.payload.fat);
        if (existingIndex !== -1) {
          state.rates[existingIndex] = action.payload;
        } else {
          state.rates.push(action.payload);
        }
      });

    },
});

export default fatRateSlice.reducer;