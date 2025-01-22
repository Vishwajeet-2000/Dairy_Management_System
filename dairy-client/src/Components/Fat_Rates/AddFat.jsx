import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrUpdateFatRate } from './features/fatRates/fatRateSlice';

function AddFat() {
    const dispatch = useDispatch();
    const [fat, setFat] = useState('');
    const [rate, setRate] = useState('');
  
    const handleSubmit = () => {
      dispatch(addOrUpdateFatRate({ fat: parseFloat(fat), rate: parseFloat(rate) }));
      setFat('');
      setRate('');
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="number" step="0.1" placeholder="Enter Fat" value={fat} onChange={(e) => setFat(e.target.value)} required />

      <input type="number" step="0.01" placeholder="Enter Rate" value={rate} onChange={(e) => setRate(e.target.value)} required />

      <button type="button" onClick={() => handleAddFat()}>Add/Update Fat Rate</button>
    </form>
    </div>
  )
}

export default AddFat
