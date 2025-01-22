import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateMilkRecord } from '../../../Slices/milkSclice'; // Imported  updatePost action from slice

function Update_Milk() {

  const { id } = useParams(); // fetched the milkRecord ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Selected the current customer from Redux store
  const currentMilkRecord = useSelector((state) =>
    state.milkRecords.records.find((record) => record._id === id)
  );

  // Created local state for form fields
  const [category, setCategory] = useState('');
  const [session, setSession] = useState('');
  const [quantity, setQuantity] = useState('');
  const [fat, setFat] = useState('');

  // Pre-filled the form with current post details
  useEffect(() => {
    if (currentMilkRecord) {
      setCategory(currentMilkRecord.category);
      setSession(currentMilkRecord.session);
      setQuantity(currentMilkRecord.quantity);
      setFat(currentMilkRecord.fat);
    }
  }, [currentMilkRecord]);

  const handleUpdateMilk = (e) => {
   
    dispatch(updateMilkRecord({ id, updatedMilkRecord: { category, session, quantity, fat } }));
    navigate('/add-milk')
  };

  return (
    <div>
       <Form>
        <h1 className='mt-5'>Update Milk Record</h1>


        <Form.Group>
            {/* <Form.Control type="text" value={customer._id} placeholder="{}" /> */}
        </Form.Group>

{/* 
        <Form.Group>
              <Form.Select value={selectedCustomer} placeholder="Select Member" onChange={(e) => {setSelectedCustomer(e.target.value); setCustomerName(customers.name)} } >
                  {customers.map(customer => (
                    // <option value={list.value}>{options.name}</option>
                    <option key={customer._id} value={customer._id}>
                      {customer.name}
                      
                    </option>
                  ))}
              </Form.Select>
            </Form.Group> */}

            <Form.Group>
              <Form.Select value={session} onChange={(e) => setSession(e.target.value)}>
                <option>Select session</option>
                <option>Morning</option>
                <option>Evening</option>
              </Form.Select>
            </Form.Group> <br /><br />
            {/* <Form.Group> <Form.Select value={session} readOnly> </Form.Select></Form.Group> */}

            <Form.Group>
              <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Select Category</option>
                <option>Buffalo</option>
                <option>Cow</option>
              </Form.Select>
            </Form.Group> <br /><br />



            <Form.Group>
              <Form.Control type="text" value={quantity} onChange={(e) => { setQuantity(e.target.value); }} placeholder="Enter quantity" />
            </Form.Group> <br /><br />

            <Form.Group>
              <Form.Control type="text" value={fat} onChange={(e) => { setFat(e.target.value); }} placeholder="Enter Fat" />
            </Form.Group> <br /><br />

            <Form.Group>
              {/* <Form.Control type="number" value={total} readOnly placeholder="Total" /> */}
            </Form.Group>


            <div className='save_btn'>
              <Button variant="primary" onClick={() => { handleUpdateMilk()}} type="button">Save</Button>
            </div>
        </Form>     
    </div>
  )
}

export default Update_Milk
