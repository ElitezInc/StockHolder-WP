import React from 'react';
import { Card, Button, Form, InputGroup, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const ProductsFilters = () => {

  const [typesOpen, setTypesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);
  const [pricesOpen, setPricesOpen] = useState(true);
  const [sizesOpen, setSizesOpen] = useState(true);
  const [moresOpen, setMoresOpen] = useState(true);

  const productTypeFilter = () => {
    return (
      <Card>
        <Card.Header>
          <a href="# " onClick={() => setTypesOpen(!typesOpen)} aria-expanded={typesOpen}>
            <FontAwesomeIcon icon={typesOpen ? faChevronDown : faChevronRight} className='icon-control' />
            <h6 className="title">Product type</h6>
          </a>
        </Card.Header>
        <Collapse in={typesOpen}>
          <Card.Body>
            <Form className="pb-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
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
          <a href="# " onClick={() => setBrandsOpen(!brandsOpen)} aria-expanded={brandsOpen}>
            <FontAwesomeIcon icon={brandsOpen ? faChevronDown : faChevronRight} className='icon-control' />
            <h6 className="title">Brands</h6>
          </a>
        </Card.Header>
        <Collapse in={brandsOpen}>
          <Form>
            <Card.Body className="card-body">
              <label className="custom-control custom-checkbox">
                <div className="custom-control">
                  <input type="checkbox" className="custom-control-input" />
                  <div className="custom-control-label">
                    Mercedes
                    <span className="badge bg-secondary float-end">120</span >
                  </div>
                </div>
              </label>
              <label className="custom-control custom-checkbox">
                <div className="custom-control">
                  <input type="checkbox" className="custom-control-input" />
                  <div className="custom-control-label">
                    Toyota
                    <span className="badge bg-secondary badge-light float-end">15</span>
                  </div>
                </div>
              </label>
              <label className="custom-control custom-checkbox">
                <div className="custom-control">
                  <input type="checkbox" className="custom-control-input" />
                  <div className="custom-control-label">
                    Mitsubishi
                    <span className="badge bg-secondary badge-light float-end">35</span>
                  </div>
                </div>
              </label>
              <label className='custom-control custom-checkbox'>
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">
                  Nissan
                  <span className="badge bg-secondary badge-light float-end">89</span>
                </div>
              </label>
              <label className='custom-control custom-checkbox'>
                <input type="checkbox" className="custom-control-input" />
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

  const pricerangefilter = () => {
    return (
      <Card>
        <Card.Header>
          <a href="# " onClick={() => setPricesOpen(!pricesOpen)} aria-expanded={pricesOpen}>
            <FontAwesomeIcon icon={pricesOpen ? faChevronDown : faChevronRight} className='icon-control' />
            <h6 className="title">Price range</h6>
          </a>
        </Card.Header>
        <Collapse in={pricesOpen}>
          <Form>
            <Card.Body className="card-body">
              <Form.Range type="range" class="custom-range" min="0" max="100" name="" />
              <div class="row">
                <div class="form-group col-md-6">
                  <label>Min</label>
                  <input class="form-control" placeholder="$0" type="number" />
                </div>
                <div class="form-group text-right col-md-6">
                  <label>Max</label>
                  <input class="form-control" placeholder="$1,0000" type="number" />
                </div>
              </div>
              <button class="btn btn-block btn-primary mt-3" style={{ background: '#555555' }}>Apply</button>
            </Card.Body>
          </Form>
        </Collapse>
      </Card>
    );
  }

  const sizefilter = () => {
    return (
      <Card>
        <Card.Header>
          <a href="# " onClick={() => setSizesOpen(!sizesOpen)} aria-expanded={sizesOpen}>
            <FontAwesomeIcon icon={sizesOpen ? faChevronDown : faChevronRight} className='icon-control' />
            <h6 className="title">Size</h6>
          </a>
        </Card.Header>
        <Collapse in={sizesOpen}>
          <Form>
            <Card.Body className="card-body">
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> XS </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> SM </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> LG </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> XXL </span>
              </label>
            </Card.Body>
          </Form>
        </Collapse>
      </Card>
    );
  }

  const morefilter = () => {
    return (
      <Card>
        <Card.Header>
          <a href="# " onClick={() => setMoresOpen(!moresOpen)} aria-expanded={moresOpen}>
            <FontAwesomeIcon icon={moresOpen ? faChevronDown : faChevronRight} className='icon-control' />
            <h6 className="title">More filter</h6>
          </a>
        </Card.Header>
        <Collapse in={moresOpen}>
          <Form>
            <Card.Body className="card-body">
                <div class="card-body">
                  <label class="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio" class="custom-control-input" />
                    <div class="custom-control-label">Any condition</div>
                  </label>
                  <label class="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio" class="custom-control-input" />
                    <div class="custom-control-label">Brand new </div>
                  </label>
                  <label class="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio" class="custom-control-input" />
                    <div class="custom-control-label">Used items</div>
                  </label>
                  <label class="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio" class="custom-control-input" />
                    <div class="custom-control-label">Very old</div>
                  </label>
                </div>
            </Card.Body>
          </Form>
        </Collapse>
      </Card>
    );
  }


  return (
    <div className='filter-group'>
      {productTypeFilter()}
      {brandsFilter()}
      {pricerangefilter()}
      {sizefilter()}
      {morefilter()}
    </div>
  );
};

export default ProductsFilters;