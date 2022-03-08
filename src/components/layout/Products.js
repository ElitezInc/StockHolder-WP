import React from 'react';
import { Container, Row, Col, Card, CardGroup} from "react-bootstrap";

const Products = ({
  listTitle = "Products List",
  products,
  slider = false
}) => {
    const showProductsList = () => {
      return (
        <Container>
        <Row className="new-products-list d-flex justify-content-center">
          {products.map((product) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6" style={{width: "18rem", marginRight: "15px"}}>
                    <div className="card mt-3">
                      <div>
                        { product.tag ? product.tag == "New" ? <><span className="topbar"> <span className="badge bg-danger"> {product.tag} </span> </span></> :
                        <><span className="topbar"> <span className="badge bg-warning"> Offer </span> </span></> : 
                        <></> }
                        <img height={250} className="card-img-top" src={product.image} />
                      </div>
                      <div className="card-body text-center mt-2">
                        <div className="pt-2">
                          <strong className="me-1">${product.price}</strong>
                          <span href="#" className="title text-truncate">{product.title}</span><br/>
                          <small className="text-muted">{product.attributes}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
          })}
        </Row>
      </Container>
      );
    }

    const showProductsSlider = () => {
      return (
        <Container>
        <Row className="new-products-list d-flex justify-content-center">
          {products.map((product) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6" style={{width: "18rem", marginRight: "15px"}}>
                    <div className="card mt-3">
                      <div>
                        { product.tag ? product.tag == "New" ? <><span className="topbar"> <span className="badge bg-danger"> {product.tag} </span> </span></> :
                        <><span className="topbar"> <span className="badge bg-warning"> Offer </span> </span></> : 
                        <></> }
                        <img height={250} className="card-img-top" src={product.image} />
                      </div>
                      <div className="card-body text-center mt-2">
                        <div className="pt-2">
                          <strong className="me-1">${product.price}</strong>
                          <span href="#" className="title text-truncate">{product.title}</span><br/>
                          <small className="text-muted">{product.attributes}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
          })}
        </Row>
      </Container>
      );
    }
    
    return(
    <>
      <Container className='mt-3 text-center'>
        <Row>
          <h1>{listTitle}</h1>
        </Row>
      </Container>
      { !slider ? showProductsList() : showProductsSlider() }
    </>
    );
}
  
export default Products