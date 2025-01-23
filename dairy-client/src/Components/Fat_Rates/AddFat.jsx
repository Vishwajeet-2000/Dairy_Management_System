import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { addOrUpdateFatRate } from '../../Slices/fatSlice';

function AddFat() {
    const dispatch = useDispatch();
    const [fat, setFat] = useState('');
    const [rate, setRate] = useState('');

    const [success, setSuccess] = useState(true); 
  
    const handleAddFat = () => {
      dispatch(addOrUpdateFatRate({ fat: parseFloat(fat), rate: parseFloat(rate) }));
 
      setTimeout(() => {
        setSuccess(true)
        setFat('')
        setRate('')
      }, 1200)
    };

  return (
    <div className='add_fat'>
    <Form>
      {success ? <h1 className='mt-5'>Add / Update Fat</h1> : <Alert className='mt-5' variant="success"><Alert.Heading>Fat added succesfully</Alert.Heading></Alert>}
      <Form.Group className="mb-2 mt-4">
        <Form.Label>Fat</Form.Label>
        <Form.Control type="number" step="0.30" value={fat} onChange={(e) => setFat(e.target.value)} placeholder="Enter Fat" required/>
      </Form.Group>

      <Form.Group className="mb-2 mt-4">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" step="0.30" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Enter rate" required/>
      </Form.Group>

      <Button variant="primary" onClick={() => { handleAddFat() ; setSuccess(false)}} type="button">Add / Update Fat</Button>
    </Form>
    </div>
  )
}

export default AddFat
