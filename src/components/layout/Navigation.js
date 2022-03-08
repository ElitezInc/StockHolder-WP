import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { useIsAuthenticated, useAuthUser, useSignOut } from 'react-auth-kit';

const Navigation = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const signOut = useSignOut();

  return (
    <Navbar style={{backgroundColor: "#4287f5"}} expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="/#">StockHolder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="/#">Home</Nav.Link>
            <Nav.Link className="text-white" href="/#/products-page">Products</Nav.Link>
            { isAuthenticated() ?  
              <NavDropdown title={<FontAwesomeIcon icon={faUser} />} align="end" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#">Account</NavDropdown.Item>
                <NavDropdown.Item href="/#">Orders</NavDropdown.Item>
                <NavDropdown.Item href="/#">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={ window.location.href } onClick={() => signOut()} >Log out</NavDropdown.Item>
              </NavDropdown>
            : 
              <NavDropdown title={<FontAwesomeIcon icon={faUser} />} align="end" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#/login">Log in</NavDropdown.Item>
                <NavDropdown.Item href="/#">Settings</NavDropdown.Item>
              </NavDropdown>
            }

            <div className="btn-group ms-1 shopping-cart-icon count-item-cart">
              <a href="/#/Cart">
                <span>1</span>
                <FontAwesomeIcon icon={faShoppingCart} style={{color: "#ffffff"}} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;