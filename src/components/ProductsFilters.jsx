import React from 'react';
import { Col, Card, Button, Form, InputGroup, Collapse} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const ProductsFilters = () => {
  
  const [open, setOpen] = useState(false);

  const productTypeFilter = () => {
    return (
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
    );
  }

  const brandsFilter = () => {
    return (
        <Card>
          <Card.Header>
          </Card.Header>
          <Form>
            <Card.Body className="card-body">
            <Form.Check 
              type={'checkbox'}
              id={`one`}
              label={`Mercedes <span className="badge bg-secondary float-end">${120}</span >`}
            />
            <Form.Check 
              type={'checkbox'}
              id={`two`}
              label={`Mercedes <span className="badge bg-secondary float-end">${65}</span >`}
            />
            <Form.Check 
              type={'checkbox'}
              id={`three`}
              label={`Mercedes ${'<span className="badge bg-secondary float-end"'}>${35}</span >`}
            />
            <hr/>
            <div class="custom-control">
              <input type="checkbox" checked="" class="custom-control-input"/>
              <div className="custom-control-label">
                Mercedes
                <span className="badge bg-secondary float-end">120</span >
              </div>
            </div>
            <div class="custom-control">
              <Form.Check class="custom-control-input" />
              <div className="custom-control-label">
                Toyota
                <span className="badge bg-secondary badge-light float-end">15</span>
              </div>
            </div>
            <div class="custom-control">
              <Form.Check class="custom-control-input" />
              <div className="custom-control-label">
                Mitsubishi
                <span className="badge bg-secondary badge-light float-end">35</span>
              </div>
            </div>
            <label class="custom-control custom-checkbox">
              <Form.Check className="custom-control-input" />
              <div className="custom-control-label">
                Nissan
                <span className="badge bg-secondary badge-light float-end">89</span>
              </div>
            </label>
            <label class="custom-control custom-checkbox">
              <Form.Check className="custom-control-input" />
              <div className="custom-control-label">
                Honda
                <span className="badge bg-secondary badge-light float-end">30</span>
              </div>
            </label>
            </Card.Body>
          </Form>
      </Card>
    );
  }

  return (
    <Col md={3} className="mt-4 mb-4">
      { productTypeFilter() }
      { brandsFilter() }
    </Col>
  );
};

export default ProductsFilters;