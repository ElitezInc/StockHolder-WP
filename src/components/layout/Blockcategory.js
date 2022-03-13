import React from 'react';
import { Container, Col, FormControl, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faCar, faWrench } from '@fortawesome/free-solid-svg-icons';

const Blockcategory = () => {
  const data = [
    {
      "icon": faMoneyBill,
    },
    {
      "icon": faCar,
    },
    {
      "icon": faWrench,
    }
  ]

  return (
    <div style={{ backgroundColor: "#e9ecef" }}>
      <Container>
        <Col className="d-flex justify-content-between">
          <InputGroup className="mb-3 mt-3" style={{ width: "400px" }}>
            <FormControl placeholder="Email"/>
            <Button variant="btn btn-light"> Subscribe </Button>
          </InputGroup>
          <Col className="d-flex justify-content-end mt-2">
            {data.map((iconData) => {
              return (
                <span style={{width: "57px"}}>
                  <div className="icon-category mb-1 rounded d-flex justify-content-center align-items-center mx-auto"> 
                  <FontAwesomeIcon icon={ iconData.icon }/>
                  </div>
                </span>
              );
            })}
          </Col> 
        </Col>
      </Container>
    </div>
  );
}

export default Blockcategory