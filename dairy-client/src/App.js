import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './Components/Header/Head'
import Container from 'react-bootstrap/esm/Container';
import AddCustomer from './Components/AddCustomer/AddCustomer';
import Home from './Components/HomePage/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/login';
import PrivateComponent from './Components/PrivateComponent';
import UpdateCust from './Components/UpdateCust/UpdateCust';
import Add_Milk from './Components/Milk_Collection/Add-Milk/Add_Milk';
import Milk_List from './Components/Milk_Collection/Milk_list/Milk_List';
import Update_Milk from './Components/Milk_Collection/Update-Milk/Update_Milk';
import AddFat from './Components/Fat_Rates/AddFat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Container>
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path='/' element={<Home />} />
              <Route path='/add-customer' element={<AddCustomer />} />
              <Route path='/update-cust/:id' element={<UpdateCust />} />
              <Route path='/add-milk' element={<Add_Milk />} />
              <Route path='/milk-list' element={<Milk_List />} />
              <Route path='/add-fat' element={<AddFat />} />
              <Route path='/update-milk-record/:id' element={<Update_Milk />} />

            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
