import React from 'react';
import { Container, Row, Col, Card, CardGroup} from "react-bootstrap";

const Newproducts = () => {
 
      return(
        <div className="mt-3">
              <Container>
                  <Row className="d-flex justify-content-center">
                      <Col md={4}>
                          <Card>
                              <Card.Body>
                                  <Card.Title>Card title</Card.Title>
                                  <Card.Text>
                                      This is a wider card with supporting text below as a natural lead-in to
                                      additional content. This content is a little bit longer.
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                    </Col>
                    <Col md={4}>
                          <Card className="ms-1">
                              <Card.Body>
                                  <Card.Title>Card title</Card.Title>
                                  <Card.Text>
                                      This card has supporting text below as a natural lead-in to additional
                                      content.{' '}
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                    </Col>
                    <Col md={4}>
                          <Card>
                              <Card.Body>
                                  <Card.Title>Card title</Card.Title>
                                  <Card.Text>
                                      This is a wider card with supporting text below as a natural lead-in to
                                      additional content. This card has even longer content than the first to
                                      show that equal height action.
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                    </Col>
                  </Row>
              </Container>
        </div>
  
      );
  }
  
  export default Newproducts