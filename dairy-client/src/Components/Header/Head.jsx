import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'

function Head() {

  const auth = localStorage.getItem('user')
  const navigate = useNavigate()

  const logout = ()=>{
    localStorage.clear();
    navigate('/signup')
  }


  return (
    <div>
      <Navbar className="my_nav" bg="primary" data-bs-theme="dark">
        <Container>
          <Link to="/">Mahalaxmi</Link>
          <Nav className="me-auto">
            <Link to="/add-customer">Add Customer</Link>
            <Link to="/add-milk">Add Milk</Link>
           { auth ? <Link onClick={logout} to="/signup">Log out ({JSON.parse(auth).name})</Link> : 
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </> }
          </Nav>
          </Container>
      </Navbar>
    </div>
  )
}

export default Head

