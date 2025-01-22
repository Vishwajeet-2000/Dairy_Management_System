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
