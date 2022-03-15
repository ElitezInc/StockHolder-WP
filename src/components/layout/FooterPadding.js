import React from 'react';
import { Container, Col, FormControl, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faCar, faWrench } from '@fortawesome/free-solid-svg-icons';

const FooterPadding = () => {

    return (
        <Container className='mt-4'>
            <div className=' d-flex justify-content-around'>
            < Col >
    <p class="mt-3"> © 2022 Templatemount. <br />All rights reserved. </p>
                </Col>
            <Col className="col-6 col-sm-4 col-lg-2">
                <h6 class="titl">Store</h6>
                <ul class="list-menu mb-3">
                    <li> <a href="#">About us</a></li>
                    <li> <a href="#">Find store</a></li>
                    <li> <a href="#">Categories</a></li>
                    <li> <a href="#">Blogs</a></li>
                </ul>
            </Col>
                <Col  className="col-6 col-sm-4 col-lg-2">
                    <h6 class="titl">Information</h6>
                    <ul class="list-menu mb-3">
                        <li> <a href="#">Help center</a></li>
                        <li> <a href="#">Money refund</a></li>
                        <li> <a href="#">Shipping info</a></li>
                        <li> <a href="#">Refund</a></li>
                    </ul>  
                </Col> 
                <Col  className="col-6 col-sm-4 col-lg-2">
                    <h6 class="titl">Support</h6>
                    <ul class="list-menu mb-3">
                        <li> <a href="#">Help center</a></li>
                        <li> <a href="#">Document</a></li>
                        <li> <a href="#">Account restore</a></li>
                        <li> <a href="#">My Order</a></li>
                    </ul>  
                </Col>
            </div>
            <hr/>   
        </Container>
    );
}

export default FooterPadding