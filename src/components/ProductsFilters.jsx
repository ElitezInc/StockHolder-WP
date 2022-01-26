import React from 'react';
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'

const ProductsFilters = () => {
  return (
      <Row className="mt-4 mb-4">
        <Col xs={12} md={4}>
          <Card>
            <div className="filter-group">
              <Card.Header>
                <a href="/#" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true">
                  <FontAwesomeIcon icon={faChevronDown} className='icon-control' />
                  <h6 className="title">Product type</h6>
                </a>
              </Card.Header>
              <div className="filter-content collapse show" id="collapse_1">
                <Card.Body>
                  <Form className="pb-3">
                    <div className="input-group">
                      <InputGroup type="text" className="form-control" placeholder="Search" />
                      <div className="input-group-append">
                        <Button className="btn-light" type="button">
                          <FontAwesomeIcon icon={faSearch} />
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
            </div>
          </Card>

          

        </Col>
      </Row>
  )
};

export default ProductsFilters;