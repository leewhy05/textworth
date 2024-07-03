import React, { useState } from 'react';
import Logo from "../assets/Texsworth Logo.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <Navbar className='sec sticky-top' expand="lg">
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
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      Virtual Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='fw-bold'>action </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      Preview Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='fw-bold'>action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      Virtual Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='fw-bold'>action </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className=''>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
      Preview Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='fw-bold'>action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
  );
}

export default MyNavbar;