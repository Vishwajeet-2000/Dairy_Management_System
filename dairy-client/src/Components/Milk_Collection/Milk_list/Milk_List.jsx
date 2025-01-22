import React, { useEffect } from 'react';
import { Table, Button, Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMilkRecords, deleteMilkRecord } from '../../../Slices/milkSclice';
import './Milk_List.css'

function Milk_List() {

    const dispatch = useDispatch();
    const {records} = useSelector((state) => state.milkRecords);

    console.log(records)

    useEffect(() => {
          dispatch(fetchMilkRecords());
      }, [dispatch]);


    const handleDeleteCustomer = (id) => {
      dispatch(deleteMilkRecord(id)); // Dispatch action to delete a post
    };

  return (
    <div className='milk_entry_list'>
        <div className='table_box'>
      <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl.no</th>
                            <th>Date</th>
                            <th>Member</th>
                            <th>Shift</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Fat</th>
                            <th>Total</th>
                            <th colSpan={2}>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            records.length > 0  ? records.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.date}</td>
                                    <td>{item.customerId}</td>
                                    <td>{item.session}</td>
                                    <td>{item.category}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.fat}</td>
                                    <td>{item.total}</td>
                                    {/* <td className='updateBtn'><Button variant="success" onClick={() => navigate("/update/" + item._id)} type="button">Update</Button></td> */}
                                    <td className='deleteBtn'><Button variant="danger" onClick={() => handleDeleteCustomer(item._id)} type="button">Delete</Button></td>
                                </tr>) : <tr><td colSpan={6}> No result found</td></tr>
                        } 
                    </tbody>
                </Table>
                </div>
    </div>
  )
}

export default Milk_List
