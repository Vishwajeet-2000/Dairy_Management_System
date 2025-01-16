import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './Components/Header/Head'
import Container from 'react-bootstrap/esm/Container';
import AddCustomer from './Components/AddCustomer/AddCustomer';
import Home from './Components/HomePage/Home';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-customer' element={<AddCustomer />} />
            <Route path='/signup' element={<Signup />} />
          </Routes> 
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
