import React from 'react';
import { Card, Button, Form, Collapse, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const ProductsFilters = () => {

  const [typesOpen, setTypesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);
  const [pricesOpen, setPricesOpen] = useState(true);
  const [sizesOpen, setSizesOpen] = useState(true);
  const [MoreOpen, setMoreOpen] = useState(true);

  const productTypeFilter = () => {
    return (
      <Card>
        <Card.Header>
          <a href={window.location.href} onClick={(event) => { event.preventDefault(); setTypesOpen(!typesOpen); }} aria-expanded={typesOpen}>
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
          <a href={window.location.href} onClick={(event) => { event.preventDefault(); setBrandsOpen(!brandsOpen); }} aria-expanded={brandsOpen}>
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
          <a href={window.location.href} onClick={(event) => { event.preventDefault(); setPricesOpen(!pricesOpen); }} aria-expanded={pricesOpen}>
            <FontAwesomeIcon icon={pricesOpen ? faChevronDown : faChevronRight} className='icon-control' />
            <h6 className="title">Price range</h6>
          </a>
        </Card.Header>
        <Collapse in={pricesOpen}>
          <Form>
            <Card.Body className="card-body">
              <Form.Range type="range" className="custom-range" min="0" max="100" name="" />
              <Row>
                <div className="form-group col-md-6">
                  <label>Min</label>
                  <input className="form-control" style={{width: '100px'}} placeholder="$0" type="number" />
                </div>
                <div className="form-group text-right col-md-6">
                  <label>Max</label>
                  <input className="form-control" style={{width: '100px'}} placeholder="$1,0000" type="number" />
                </div>
              </Row>
              <button className="btn btn-block btn-primary mt-3" style={{ background: '#555555' }}>Apply</button>
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
          <a href={window.location.href} onClick={(event) => { event.preventDefault(); setSizesOpen(!sizesOpen); }} aria-expanded={sizesOpen}>
            <FontAwesomeIcon icon={sizesOpen ? faChevronDown : faChevronRight} className='icon-control' />
            <h6 className="title">Size</h6>
          </a>
        </Card.Header>
        <Collapse in={sizesOpen}>
          <Form>
            <Card.Body className="card-body">
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> XS </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> SM </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> LG </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> XXL </span>
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
          <a href={window.location.href} onClick={(event) => { event.preventDefault(); setMoreOpen(!MoreOpen); }} aria-expanded={MoreOpen}>
            <FontAwesomeIcon icon={MoreOpen ? faChevronDown : faChevronRight} className='icon-control' />
            <h6 className="title">More filter</h6>
          </a>
        </Card.Header>
        <Collapse in={MoreOpen}>
          <Form>
            <Card.Body className="card-body">
                <div className="card-body">
                  <label className="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio" className="custom-control-input" />
                    <div className="custom-control-label">Any condition</div>
                  </label>
                  <label className="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio" className="custom-control-input" />
                    <div className="custom-control-label">Brand new </div>
                  </label>
                  <label className="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio" className="custom-control-input" />
                    <div className="custom-control-label">Used items</div>
                  </label>
                  <label className="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio" className="custom-control-input" />
                    <div className="custom-control-label">Very old</div>
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