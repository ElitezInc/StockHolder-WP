import React from 'react'
import { Col, Card, Row, Collapse, Container, Form} from 'react-bootstrap';
import { useState } from "react";
import Navigation from '../layout/Navigation';

 const CheckoutPage = () => {

  const [bankOpen, setBankOpen] = useState(true);
  const [paypalOpen, setPaypalOpen] = useState(true);
  const [creditCardOpen, setCreditCardOpen] = useState(true);

  const checkoutStepTop = (step, showBottomLine = true) => {
    return (
      <Card.Title className='mt-4'>
        <div className='d-flex justify-content-around text-center'>
          <Col xs={2} style={{minWidth: "100px"}}>
            <div className={ step == 1 ? "numberCircle payment-step" : "numberCircle" } style={{margin: "auto"}}>1</div>
            <p className="mt-3">Customer information</p>
          </Col>
          <Col xs={2} style={{minWidth: "100px"}}>
            <div className={ step == 2 ? "numberCircle payment-step" : "numberCircle" } style={{margin: "auto"}}>2</div>
            <p className="mt-3">Payment details</p>
          </Col>
          <Col xs={2} style={{minWidth: "100px"}}>
            <div className={ step == 3 ? "numberCircle payment-step" : "numberCircle" } style={{margin: "auto"}}>3</div>
            <p className="mt-3">Order confirmation</p>
          </Col>
        </div>
        { showBottomLine ? <hr className="mb-1" /> : <></> }
      </Card.Title>
    );
  }

  const checkoutStep = (step) => {
    if (step === 1) {
      return (
        <Col xs={12} md={8}>
          <Card className='shadow-sm mb-4 bg-white rounded' style={{padding: "0px !important"}}>
            {checkoutStepTop(step)}
            <Card.Body>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
              <Form>
                <Row className="mb-3">
                  <Col md={6} className="form-group">
                      <label for="inputEmail4">Email</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                  </Col>
                  <Col md={6} className="form-group">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6} className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </Col>
                  <Col md={6} className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6} className="form-group">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </Col>
                  <Col md={3} className="form-group">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </Col>
                  <Col md={3} className="form-group">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-3">
                  <button type="submit" className="btn btn-primary">Next step</button>
                </div>					
              </Form>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    else if (step == 2) {
      return (
        <Col xs={12} md={8}>
          <Card className='shadow-sm mb-4 bg-white rounded' style={{padding: "0px !important"}}>
              {checkoutStepTop(step, false)}
              <Card.Body style={{padding: "0px"}}>
                  <Card.Header>
                    <h5 className="mb-0">
                      <a className="btn btn-link collapsed text-start" href={window.location.href} onClick={(event) => { event.preventDefault(); setBankOpen(!bankOpen); }} style={{width: "100%", textDecoration: "none"}} aria-expanded={bankOpen}>
                          <span>Bank transfer</span>
                      </a>
                    </h5>
                  </Card.Header>
                  <Collapse in={bankOpen}>
                    <Card.Body>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                      moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                      shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                      proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                      aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </Card.Body>
                  </Collapse>

                  
                    <Card.Header>
                    <h5 className="mb-0">
                    <a className="btn btn-link collapsed" href={window.location.href} onClick={(event)=> {event.preventDefault(); setPaypalOpen(!paypalOpen); }} style={{width: "100%", textDecoration: "none"}} data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div className="d-flex justify-content-between">
                        <span>PayPal</span>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="icons">
                            <img src="https://i.imgur.com/7kQEsHU.png" width="30" />
                          </div>
                        </div>
                      </div>
                    </a>
                    </h5>
                    </Card.Header>
                    <Collapse in={paypalOpen}>
                      <Card.Body>
                      <input type="text" className="form-control mb-3" placeholder="Paypal email" />
                      <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Complete payment</button>
                      </div>    
                      </Card.Body>
                      </Collapse>   
                





                      <Card.Header>
                      <a className="btn btn-link collapsed" href={window.location.href}  onClick={(event)=> {event.preventDefault(); setCreditCardOpen(!creditCardOpen); }} style={{width: "100%", textDecoration: "none"}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="d-flex justify-content-between">
                          <span>Credit card</span>
                          <div className="d-flex align-items-center justify-content-between"> 
                            <div className="icons"> 
                              <img src="https://i.imgur.com/2ISgYja.png" width="30" /> 
                              <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
                              <img src="https://i.imgur.com/35tC99g.png" width="30" /> 
                            </div>
                          </div>
                        </div>
                      </a>
                      </Card.Header>
                      <Collapse in={creditCardOpen}>
                    <Card.Body>
                      <span className="font-weight-normal card-text">Card Number</span>
                      <div className="input">
                        <i className="fa fa-credit-card"></i>
                        <input type="text" className="form-control" placeholder="0000 0000 0000 0000" /> 
                      </div>
                      <div className="row mt-3 mb-3">
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">Expiry Date</span>
                          <div className="input"> <i className="fa fa-calendar"></i>
                            <input type="text" className="form-control" placeholder="MM/YY" /> 
                          </div>
                        </div>
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">CVC/CVV</span>
                          <div className="input"> <i className="fa fa-lock"></i>
                            <input type="text" className="form-control" placeholder="000" />
                          </div>
                        </div>
                      </div>
                      <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                      <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Complete payment</button>
                      </div>
                      </Card.Body>
                  </Collapse>
              </Card.Body>
          </Card>
        </Col>
      );
    }
    else {
      return (
        <Col xs={12} md={8}>
            <Card className='shadow-sm mb-4 bg-white rounded' style={{padding: "0px !important"}}>
              {checkoutStepTop(step)}
              <Card.Body>
                <h6 className="card-subtitle mb-2 text-muted ">Card step 3</h6>
              </Card.Body>
            </Card>
        </Col>
      );
    }
  }

   const productsList = () => {
     return(
      <div className="col-12 col-md-4">
         <div className="card shadow-sm bg-white rounded" style={{padding: "0px !important"}}>
           <h5 className="card-title text-center mt-3">Card title
             <hr className="mb-1" />
           </h5>
           <div className="card-body">

             <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
               card's
               content.</p>
           </div>
         </div>
      </div>
     );
   }
  
  return (
    <>
      <Navigation logoName={"logo.svg"} />
      <Container className='mt-3'>
        <Row>
          {checkoutStep(2)}
          {productsList()}
        </Row>
      </Container>
    </>
  );
}

export default CheckoutPage;