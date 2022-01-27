import React from 'react';
import { Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'

const ProductsFilters = () => {
  return (
    <Col md={3} className="mt-4 mb-4">
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
      <Card>
        <div className="filter-group">
          <Card.Header className="card-header">
            <a href="/#" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="true">
            <FontAwesomeIcon icon={faChevronDown} className='icon-control'/><FontAwesomeIcon />
              <h6 className="title">Brands </h6>
            </a>
          </Card.Header>
            <Card.Body className="card-body">
              <InputGroup type="checkbox" checked="" className="custom-control-input" />
              <div className="custom-control-label">Mercedes
                <span className="badge bg-secondary float-end">120</span >
              </div>
              <InputGroup type="checkbox" checked="" className="custom-control-input" />
              <div className="custom-control-label">Toyota
                <b className="badge bg-secondary badge-light float-end">15</b>
              </div>
              <InputGroup type="checkbox" checked="" className="custom-control-input" />
              <div className="custom-control-label">Mitsubishi
                <b className="badge bg-secondary badge-light float-end">35</b>
              </div>
              <InputGroup type="checkbox" checked="" className="custom-control-input" />
              <div className="custom-control-label">Nissan
                <b className="badge bg-secondary badge-light float-end">89</b>
              </div>
              <InputGroup type="checkbox" className="custom-control-input" />
              <div className="custom-control-label">Honda
                <b className="badge bg-secondary badge-light float-end">30</b>
              </div>
            </Card.Body>
        </div>
      </Card>
    </Col>
  )
};

export default ProductsFilters;