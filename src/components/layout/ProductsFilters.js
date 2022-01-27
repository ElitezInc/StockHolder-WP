import React from 'react';
import { Card, Button, Form, InputGroup, Collapse} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const ProductsFilters = () => {
  
  const [typesOpen, setTypesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);

  const productTypeFilter = () => {
    return (
      <Card>
          <Card.Header>
            <a href={() => false} onClick={() => setTypesOpen(!typesOpen)} aria-expanded={typesOpen}>
              <FontAwesomeIcon icon={typesOpen ? faChevronDown : faChevronRight} className='icon-control' />
              <h6 className="title">Product type</h6>
            </a>
          </Card.Header>
          <Collapse in={typesOpen}>
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
        </Collapse>
      </Card>
    );
  }

  const brandsFilter = () => {
    return (
        <Card>
          <Card.Header>
            <a href={() => false} onClick={() => setBrandsOpen(!brandsOpen)} aria-expanded={brandsOpen}>
              <FontAwesomeIcon icon={brandsOpen ? faChevronDown : faChevronRight} className='icon-control' />
              <h6 className="title">Brands</h6>
            </a>
          </Card.Header>
          <Collapse in={brandsOpen}>
            <Form>
              <Card.Body className="card-body">
                <label class="custom-control custom-checkbox">
                  <div class="custom-control">
                    <input type="checkbox" checked="" class="custom-control-input"/>
                    <div className="custom-control-label">
                      Mercedes
                      <span className="badge bg-secondary float-end">120</span >
                    </div>
                  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <div class="custom-control">
                    <input type="checkbox" checked="" class="custom-control-input"/>
                    <div className="custom-control-label">
                      Toyota
                      <span className="badge bg-secondary badge-light float-end">15</span>
                    </div>
                  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <div class="custom-control">
                    <input type="checkbox" checked="" class="custom-control-input"/>
                    <div className="custom-control-label">
                      Mitsubishi
                      <span className="badge bg-secondary badge-light float-end">35</span>
                    </div>
                  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" checked="" class="custom-control-input"/>
                  <div className="custom-control-label">
                    Nissan
                    <span className="badge bg-secondary badge-light float-end">89</span>
                  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" checked="" class="custom-control-input"/>
                  <div className="custom-control-label">
                    Honda
                    <span className="badge bg-secondary badge-light float-end">30</span>
                  </div>
                </label>
              </Card.Body>
            </Form>
          </Collapse>
      </Card>
    );
  }

  return (
    <div className='filter-group'>
      { productTypeFilter() }
      { brandsFilter() }
    </div>
  );
};

export default ProductsFilters;