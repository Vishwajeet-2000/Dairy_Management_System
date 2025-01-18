import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Form, Alert } from 'react-bootstrap';
import { addCustomer } from '../../Slices/customerSlice'; // imported action from slice

import './AddCustomer.css'

function AddCustomer() {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(true);

  const handleAddCustomer = async () => {

    if (!name || !email || !phone || !adress) {
      setError(true)
      setSuccess(true)
      return false
    }

    const newCustomer = {name, email, phone, adress}
    console.log(newCustomer)

    dispatch(addCustomer(newCustomer));

    setTimeout(() => {
      setSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setAdress('')
    }, 1500)
  }

  return (
    <div>
      <div className='add_customer'>
        <Form>
          {success ? <h1 className='mt-2'>Add Customer</h1> : <Alert className='mt-2' variant="success"><Alert.Heading>Customer added succesfully</Alert.Heading></Alert>}
          <div className='form-row'>
            <Form.Group>
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Customer name" />
              {error && !name && <Form.Text className="text-muted">*Enter a valid customer name</Form.Text>}
            </Form.Group>

            <Form.Group>
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Customer email" />
              {error && !email && <Form.Text className="text-muted">*Enter a valid email</Form.Text>}
            </Form.Group>

            <Form.Group>
              {/* <Form.Label>Phone</Form.Label> */}
              <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Customer phone number" />
              {error && !phone && <Form.Text className="text-muted">*Enter a valid phone number</Form.Text>}
            </Form.Group>

            <Form.Group>
              {/* <Form.Label>Adress </Form.Label> */}
              <Form.Control type="text" value={adress} onChange={(e) => setAdress(e.target.value)} placeholder="Customer adress" />
              {error && !adress && <Form.Text className="text-muted">*Enter a valid adress</Form.Text>}
            </Form.Group>
            <div className='customer_btn'>
              <Button variant="primary" onClick={() => { handleAddCustomer(); setSuccess(false); }} type="button">Add Customer</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default AddCustomer
