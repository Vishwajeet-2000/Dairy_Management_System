import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateCustomer } from '../../Slices/customerSlice'; // Imported  updateCustomer action from slice
import './UpdateCust.css'

const UpdateCust = () => {
  const { id } = useParams(); // fetched the customer ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Selected the current customer from Redux store
  const currentCustomer = useSelector((state) =>
    state.customers.customers.find((customer) => customer._id === id)
  );

  // Created local state for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');


  // Pre-filled the form with current post details
  useEffect(() => {
    if (currentCustomer) {
      setName(currentCustomer.name);
      setEmail(currentCustomer.email);
      setPhone(currentCustomer.phone);
      setAdress(currentCustomer.adress);
    }
  }, [currentCustomer]);

  const handleUpdateCust = (e) => {
   
    dispatch(updateCustomer({ id, updatedCustomer: { name, email, phone, adress } }));
    navigate('/add-customer')
  };

  return (
    <div className='update_customer'>
      <Form>
        <h1 className='mt-5'>Update Customer</h1>
        <Form.Group className="mb-3 mt-4">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 mt-4">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 mt-4">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Adress</Form.Label>
          <Form.Control type="text" value={adress} onChange={(e) => setAdress(e.target.value)} />
        </Form.Group>

        <Button variant="success" onClick={() => { handleUpdateCust() }} type="button">Update Customer</Button>
      </Form>
    </div>
  );
};

export default UpdateCust;
