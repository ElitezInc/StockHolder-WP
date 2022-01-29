import React from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons'

const ProductsTopBar = () => {
  return(
      <div className="head-backand">
          <Form className='d-flex'>
              <span className='me-md-auto'>32 Items found</span>
              <Form.Select className='me-2' style={{width: '200px'}} aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Most expensive</option>
                <option value="2">Cheapest</option>
                <option value="3">Most popular</option>
              </Form.Select>
              <div className="btn-group">
                  <a href={location.hash} className="btn btn-outline-secondary" data-toggle="tooltip" title="" data-original-title="List view">
                    <FontAwesomeIcon icon ={faBars} />
                  </a>
                  <a href={location.hash} className="btn  btn-outline-secondary active" data-toggle="tooltip" title="" data-original-title="Grid view">
                      <FontAwesomeIcon icon ={faTh} /> 
                  </a>
              </div>
          </Form>
        <hr/>
      </div>
  )
}

export default ProductsTopBar;
