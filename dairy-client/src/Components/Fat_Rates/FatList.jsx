import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFatRates } from '../../Slices/fatSlice';

function Fat_List() {

    const dispatch = useDispatch();

    const fatRates = useSelector((state) => state.fatRates.rates);

    useEffect(() => {
        dispatch(fetchFatRates());
      }, [dispatch]);

  return (
    <div>
      <div className='table_box'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Fat</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
            {
                fatRates.length > 0 ? fatRates.map((item, index) =>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.fat}</td>
                    <td>{item.rate}</td>               
                  </tr>) : <tr><td colSpan={3}> No result found</td></tr>
              }
            </tbody>
          </Table>
        </div>
    </div>
  )
}

export default Fat_List
