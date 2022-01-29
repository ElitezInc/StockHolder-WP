import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Container} from "react-bootstrap";

const Navigation = ({
  logoName
}) => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/#">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="/#/products-page">Products</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#">Action</NavDropdown.Item>
              <NavDropdown.Item href="/#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/#">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;