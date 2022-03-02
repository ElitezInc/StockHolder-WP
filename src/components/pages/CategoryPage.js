import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navigation from '../layout/Navigation';

const CategoryPage = () => {

  const categoryList = () => {
    return(
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="wp-content/uploads/2022/01/logo-1.jpg" />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <span className="fs-3">Clothes</span>
            <Button href="/#/products-page/clothes" variant="primary">View products</Button>
          </Card.Title>
        </Card.Body>
      </Card>
      </> 
    );
  }

  return (
    <>
    <Navigation logoName={"logo.svg"} />
    <Row>
      <Col className="d-flex align-items-center" style={{backgroundColor: "#dedede", height: "150px"}}>
        <h1 className="display-1 ms-5" >Product categories</h1>
      </Col>
    </Row>
    <Container>
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-center">
          { categoryList() }
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default CategoryPage;