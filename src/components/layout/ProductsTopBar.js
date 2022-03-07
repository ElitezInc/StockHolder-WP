import React from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";

const ProductsTopBar = ({
  totalProducts,
  onViewToggle
}) => {
  const [view, setViewValue] = useState(true);

  useEffect(() => { onViewToggle(view); }, [view, onViewToggle]);

  return(
      <div style = {{background: 'white'}}>
          <Form className='d-flex'>
              <span className='me-md-auto'>{totalProducts} Items found</span>
              <Form.Select className='me-2' style={{width: '200px'}} aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Most expensive</option>
                <option value="2">Cheapest</option>
                <option value="3">Most popular</option>
              </Form.Select>
              <div className="btn-group">
                  <a href={window.location.hash} onClick={() => setViewValue(false)} className={view ? 'btn btn-outline-secondary' : 'btn btn-outline-secondary active'}>
                    <FontAwesomeIcon icon ={faBars} />
                  </a>
                  <a href={window.location.hash} onClick={() => setViewValue(true)} className={view ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'}>
                      <FontAwesomeIcon icon ={faTh} /> 
                  </a>
              </div>
          </Form>
        <hr/>
      </div>
  );
  
}

export default ProductsTopBar;
