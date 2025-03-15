import React from "react";
import { Navbar, Container, NavDropdown, Collapse, Nav } from "react-bootstrap";
const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Login / Register
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.1">
                Services Detaills
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Contact us</Nav.Link>
            <Nav.Link>Search</Nav.Link>
            <Nav.Link>icon + (+212) 762283014</Nav.Link>
            <Nav.Link><button>Contact Us</button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navbars;
