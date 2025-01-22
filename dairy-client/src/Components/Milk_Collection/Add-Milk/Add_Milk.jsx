import React, { useState, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomers  } from '../../../Slices/customerSlice';
import { addMilkRecord } from '../../../Slices/milkSclice';

function Add_Milk() {

  const dispatch = useDispatch();

  // useEffect(() => {
  //  dispatch(fetchCustomers()); 
  // }, [dispatch]);
  
  const {customers} = useSelector(state => state.customers);
  console.log(customers)

  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [fat, setFat] = useState('');
  const [session, setSession] = useState('');
  const [category, setCategory] = useState('Buffalo');

  const [success, setSuccess] = useState(true);

  useEffect(() => {
    const currentHour = new Date().getHours()
    setSession(currentHour < 12 ? 'Morning' : 'Evening')
    dispatch(fetchCustomers());
  }, [dispatch]);


  const handleFatChange = (e) => {
    // const selectedFat = parseFloat(e.target.value);
    // setFat(selectedFat);

    // // Find the rate for the selected fat
    // const foundRate = fatRates.find(rateObj => rateObj.fat === selectedFat);
    // setRate(foundRate ? foundRate.rate : 0);
  };


  const handleAddMilk = async () => {

    // setSuccess(false)
    const total = quantity * 30;
    const newRecord = { customerId: selectedCustomer, date: new Date(), session, category, quantity, fat, total };
    console.log(newRecord)
    console.log(customerName)

    
    dispatch(addMilkRecord(newRecord));

    setTimeout(() => {
      setSuccess(true)
     }, 1500)
  }

  return (
    <>
    <Form>
          {success ? <h1 className='mt-2'>Add Milk <span>{session}</span></h1> : <Alert className='mt-2' variant="success"><Alert.Heading>Milk Entry added succesfully</Alert.Heading></Alert>}
          <div className='form-row'>
            <Form.Group>
              {/* <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date" /> */}
            </Form.Group>

            <Form.Group>
              <Form.Select value={selectedCustomer} placeholder="Select Member" onChange={(e) => {setSelectedCustomer(e.target.value); setCustomerName(customers.name)} } >
                  {customers.map(customer => (
                    // <option value={list.value}>{options.name}</option>
                    <option key={customer._id} value={customer._id}>
                      {customer.name}
                      
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>

            
            {/* <Form.Group> <Form.Select value={session} readOnly> </Form.Select></Form.Group> */}

            <Form.Group>
              <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Select Category</option>
                <option>Buffalo</option>
                <option>Cow</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Control type="text" value={quantity} onChange={(e) => { setQuantity(e.target.value); }} placeholder="Enter quantity" />
            </Form.Group>

            <Form.Group>
              <Form.Control type="text" value={fat} onChange={(e) => { setFat(e.target.value); }} placeholder="Enter Fat" />
            </Form.Group>

            <Form.Group>
              {/* <Form.Control type="number" value={total} readOnly placeholder="Total" /> */}
            </Form.Group>


            <div className='save_btn'>
              <Button variant="primary" onClick={() => { handleAddMilk(); setSuccess(false); }} type="button">Save</Button>
            </div>
          </div>
        </Form>     
    </>
  )
}

export default Add_Milk
