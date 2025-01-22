import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import moment from 'moment-timezone';
import { addCustomer, fetchCustomers, deleteCustomer } from '../../Slices/customerSlice'; // imported action from slice

import './AddCustomer.css'

function AddCustomer() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {customers} = useSelector(state => state.customers);

   useEffect(() => {
     dispatch(fetchCustomers()); // Fetch customers when the component mounts
   }, [dispatch]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(true);

  const [searchTerm, setSearchTerm] = useState(''); // Local state for search term


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
  
  const handleDeleteCustomer = (id) => {
    dispatch(deleteCustomer(id)); // Dispatch action to delete a post
  };

  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
  };
  // Filter posts based on search term
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
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

      <div className='customer_list'>
        <Form>
          <Form.Group className="mb-3 mt-4 searchBar">
            <Form.Label>Search for Customer</Form.Label>
            <Form.Control type="text" onChange={searchHandle} placeholder="Enter customer info" />
          </Form.Group>
        </Form>
        <div className='table_box'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Name</th>
                <th>email</th>
                <th>Phone</th>
                <th>Adress</th>
                <th colSpan={2}>Operations</th>
              </tr>
            </thead>
            <tbody>
            {
                filteredCustomers.length > 0 ? filteredCustomers.map((item, index) =>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.adress}</td>
                     {/* <td>{moment(item.createdAt).tz('Asia/Kolkata').format('DD-MM-YYYY hh:mm:ss A')}</td>  */}
                    <td className='updateBtn'><Button variant="success" onClick={() => navigate("/update-cust/" + item._id)} type="button">Update</Button></td>
                    <td className='deleteBtn'><Button variant="danger" onClick={() => handleDeleteCustomer(item._id)} type="button">Delete</Button></td>
                  </tr>) : <tr><td colSpan={6}> No result found</td></tr>
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default AddCustomer
