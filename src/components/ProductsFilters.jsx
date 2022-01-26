import React from 'react';
import { Row, Col, Card, Button, CardGroup, Container, Form, InputGroup } from 'react-bootstrap';

const ProductsFilters = () => {
  return (
    <Form>
    <Container className="container mt-4 mb-4">
      <Row xs={1} className="mt-4 mb-4">
        <Col className="col-xs-12 col-md-4">
          <Card>
            <CardGroup className="filter-group">
              <Card.Header>
                <a
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_1"
                  aria-expanded="true"
                >
                  <i className="icon-control fa fa-chevron-down" />
                  <h6 className="title">Product type</h6>
                </a>
              </Card.Header>
              <div className="filter-content collapse show" id="collapse_1">
                <Card.Body>
                  <Form className="pb-3">
                    <div className="input-group">
                      <InputGroup
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <Button className="btn-light" type="button">
                          <i className="fa fa-search" />
                        </Button>
                      </div>
                    </div>
                  </Form>
                  <ul className="list-menu">
                    <li>
                      <a href="/#">People </a>
                    </li>
                    <li>
                      <a href="/#">Watches </a>
                    </li>
                    <li>
                      <a href="/#">Cinema </a>
                    </li>
                    <li>
                      <a href="/#">Clothes </a>
                    </li>
                    <li>
                      <a href="/#">Home items </a>
                    </li>
                    <li>
                      <a href="/#">Animals</a>
                    </li>
                    <li>
                      <a href="/#">People </a>
                    </li>
                  </ul>
                </Card.Body>
              </div>
            </CardGroup>
          </Card>
        </Col>
      </Row>
    </Container>
    </Form>
  )
};

export default ProductsFilters;