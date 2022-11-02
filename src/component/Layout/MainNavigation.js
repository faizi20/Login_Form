import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ModalBox from '../UI/ModalBox';

function MainNavigation() {
  const [user, setUser] = useState(false)

  const logoutHandler = () => {
    setUser(true)
  }

  return (
    <>
      {
        !user ?
          (<Navbar bg="light" expand="lg">
            <Container>
              <NavLink to='/' className="navbar-brand">React- Bootstrap</NavLink >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <ModalBox />
                </Nav>
              </Navbar.Collapse>
            </Container >
          </Navbar >)
          :
          (
            <Navbar bg="light" expand="lg">
              <Container>
                <NavLink to='/' className="navbar-brand">React- Bootstrap</NavLink >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavLink to='/' className="nav-link">Home</NavLink>
                    <NavLink to='/about' className="nav-link">About</NavLink>
                  </Nav>
                  <Nav className="ms-auto">
                    <Button onClick={logoutHandler}>Logout</Button>
                  </Nav>
                </Navbar.Collapse>
              </Container >
            </Navbar >
          )
      }
    </>
  )
}

export default MainNavigation
