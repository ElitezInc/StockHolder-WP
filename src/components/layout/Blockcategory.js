import React from 'react';
import Navigation from './Navigation';
import { useEffect, useState } from "react";
import { Container, Col, FormControl, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Blockcategory = () => {

  return (
    <div style={{ backgroundColor: "#e9ecef" }}>
      <Container>
        <Col className="d-flex justify-content-between">
          <InputGroup className="mb-3 mt-3" style={{ width: "400px" }}>
            <FormControl placeholder="Email"/>
            <Button variant="btn btn-light"> Subscribe </Button>
          </InputGroup>
        </Col>
      </Container>
    </div>
  );
}

export default Blockcategory