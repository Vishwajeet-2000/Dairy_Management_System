import React, { useState, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomers  } from '../../../Slices/customerSlice';
import { addMilkRecord } from '../../../Slices/milkSclice';
import { fetchFatRates } from '../../../Slices/fatSlice';
import Milk_List from '../Milk_list/Milk_List';

function Add_Milk() {

  const dispatch = useDispatch();

  const {customers} = useSelector(state => state.customers);
  const fatRates = useSelector((state) => state.fatRates.rates);

  const [selectedDate, setSelectedDate] = useState(getCurrentDate())
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [selectedCustomerName, setSelectedCustomerName] = useState();
  const [session, setSession] = useState('');
  const [category, setCategory] = useState('Buffalo');
  const [quantity, setQuantity] = useState('');
  const [fat, setFat] = useState('');
  const [rate, setRate] = useState(0);
  const [total, setTotal] = useState(0);

  const [success, setSuccess] = useState(true);

  useEffect(() => {
    const currentHour = new Date().getHours()
    setSession(currentHour < 12 ? 'Morning' : 'Evening')
    dispatch(fetchCustomers());
  }, [dispatch]);


  // Function to get the current date in YYYY-MM-DD format
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Handle date input change
  const handleDateChange = (e) => {
    const newdate = e.target.value;
    setSelectedDate(newdate || getCurrentDate()); // If no date is selected, use current date
  };

  // Function to save customer name with milk record
  const handleCustomerChange = (e) => {
    const selectedId = e.target.value;
    const customer = customers.find((c) => c._id === selectedId); // Find the selected customer
    setSelectedCustomerId(selectedId);
    setSelectedCustomerName(customer ? customer.name : ''); // Set customer name
  };

  useEffect(() => {
    //  dispatch(fetchCustomers());
        dispatch(fetchFatRates()); 
    }, [dispatch]);
  
    useEffect(() => {
      const selectedFatRate = fatRates.find((rate) => rate.fat === parseFloat(fat));
      setRate(selectedFatRate ? selectedFatRate.rate : 0);
      setTotal(selectedFatRate ? selectedFatRate.rate * quantity : 0);
    }, [fat, quantity, fatRates]);

  const handleAddMilk = async () => {

    const newRecord = { customerId: selectedCustomerId, customerName: selectedCustomerName, date : selectedDate, session, category, quantity, fat, rate, total };
    console.log(newRecord)
    
    dispatch(addMilkRecord(newRecord));

    setTimeout(() => {
      setSuccess(true)
     }, 1500)
  }


  return (
    <>
    <div>
    <Form>
          {success ? <h1 className='mt-2'>Add Milk <span>{session}</span></h1> : <Alert className='mt-2' variant="success"><Alert.Heading>Milk Entry added succesfully</Alert.Heading></Alert>}
          <div className='form-row'>
            <Form.Group>
              <Form.Control type="date" value={selectedDate} onChange={(e) => handleDateChange(e)} placeholder="Enter date" />
            </Form.Group>

            <Form.Group>
              <Form.Select value={session} onChange={(e) => setSession(e.target.value)}>
                <option>Morning</option>
                <option>Evening</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Select value={selectedCustomerId} placeholder="Select Member" onChange={handleCustomerChange} >
                  {customers.map(customer => (
                    // <option value={list.value}>{options.name}</option>
                    <option key={customer._id} value={customer._id}>
                      {customer.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
            {/* {setCustomerName(selectedCustomerName)} */}
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
        </div>

        <div>
          <Milk_List />
        </div>

    </>
  )
}

export default Add_Milk
