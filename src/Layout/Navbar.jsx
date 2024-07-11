import React, { useState } from 'react';
import Logo from "../assets/Texsworth Logo.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
   <div className='container sticky-top'>
     <Navbar className='sec' expand="lg">
      <Container>
      <main className='d-flex justify-content-between align-items-cente sticky-top'>
      <Navbar.Brand href="/" className='col-6'><img src={Logo} alt="" className='w-50'/></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle-button border-none" style={{ width: '30px' }} onClick={() => setShowOffcanvas(true)} />
      
      <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
        <Nav className="me-auto col-6">
        <div className='d-flex justify-content-between align-items-center  pt-5'>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      List Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Lists" className='fw-bold'>Primary One</Dropdown.Item>
        <Dropdown.Item href="/PrimaryTwo" className='fw-bold'>Primary Two</Dropdown.Item>
        <Dropdown.Item href="/PrimaryThree" className='fw-bold'>Primary Three</Dropdown.Item>
        <Dropdown.Item href="/PrimaryFour" className='fw-bold'>Primary Four</Dropdown.Item>
        <Dropdown.Item href="/PrimaryFive" className='fw-bold'>Primary Five</Dropdown.Item>
        <Dropdown.Item href="/PrimarySix" className='fw-bold'>Primary Six</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      Virtual Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/" className='fw-bold'>action </Dropdown.Item>
        <Dropdown.Item href="/">Another action</Dropdown.Item>
        <Dropdown.Item href="/">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      Preview Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/" className='fw-bold'>action</Dropdown.Item>
        <Dropdown.Item href="/">Another action</Dropdown.Item>
        <Dropdown.Item href="/">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            </div>
        </Nav>
      </Navbar.Collapse>
      
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
          <div >
          <div className=''>
          <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      List Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Lists" className='fw-bold'>Primary One</Dropdown.Item>
        <Dropdown.Item href="/PrimaryTwo" className='fw-bold'>Primary Two</Dropdown.Item>
        <Dropdown.Item href="/PrimaryThree" className='fw-bold'>Primary Three</Dropdown.Item>
        <Dropdown.Item href="/PrimaryFour" className='fw-bold'>Primary Four</Dropdown.Item>
        <Dropdown.Item href="/PrimaryFive" className='fw-bold'>Primary Five</Dropdown.Item>
        <Dropdown.Item href="/PrimarySix" className='fw-bold'>Primary Six</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      Virtual Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/" className='fw-bold'>action </Dropdown.Item>
        <Dropdown.Item href="/">Another action</Dropdown.Item>
        <Dropdown.Item href="/">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      Preview Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/" className='fw-bold'>action</Dropdown.Item>
        <Dropdown.Item href="/">Another action</Dropdown.Item>
        <Dropdown.Item href="/">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            </div>
            {/* Add more Nav.Link items as needed */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </main>
      </Container>
    </Navbar>
   </div>
  );
}

export default MyNavbar;