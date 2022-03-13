import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useIsAuthenticated, useAuthUser, useSignOut } from 'react-auth-kit';
import { Link } from "react-router-dom";

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
            <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/products-page">Products</Nav.Link>
            { isAuthenticated() ?  
              <NavDropdown title={<FontAwesomeIcon icon={faUser} />} align="end" id="basic-nav-dropdown">
                <NavDropdown.Item>Account</NavDropdown.Item>
                <NavDropdown.Item>Orders</NavDropdown.Item>
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => signOut()} >Log out</NavDropdown.Item>
              </NavDropdown>
            : 
              <NavDropdown title={<FontAwesomeIcon icon={faUser} />} align="end" id="basic-nav-dropdown">
               <NavDropdown.Item as={Link} to="/login">Log in</NavDropdown.Item>
              <NavDropdown.Item href="/#">Settings</NavDropdown.Item>
              </NavDropdown>
            }

            <div className="btn-group ms-1 shopping-cart-icon count-item-cart">
              <Link to="/Cart">
                <span>1</span>
                <FontAwesomeIcon icon={faShoppingCart} style={{color: "#ffffff"}} />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;