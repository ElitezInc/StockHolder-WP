import React from 'react';
import { Container, Row, Col, Card, CardGroup} from "react-bootstrap";

const NewProducts = () => {
    const data = [
      {
        "image": "https://via.placeholder.com/300",
        "price": 255,
        "title": "GoPro action camera 4K",
        "attributes": "Model: X-200",
        "tag": "New"
      },
      {
        "image": "https://via.placeholder.com/300",
        "price": 255,
        "title": "GoPro action camera 4K",
        "attributes": "Model: X-200",
        "tag": "Offer"
      },
      {
        "image": "https://via.placeholder.com/300",
        "price": 255,
        "title": "GoPro action camera 4K",
        "attributes": "Model: X-200",
        "tag": null
      },
      {
        "image": "https://via.placeholder.com/300",
        "price": 255,
        "title": "GoPro action camera 4K",
        "attributes": "Model: X-200",
        "tag": null
      },
      {
        "image": "https://via.placeholder.com/300",
        "price": 255,
        "title": "GoPro action camera 4K",
        "attributes": "Model: X-200",
        "tag": null
      },
      {
        "image": "https://via.placeholder.com/300",
        "price": 255,
        "title": "GoPro action camera 4K",
        "attributes": "Model: X-200",
        "tag": "New"
      },
      {
        "image": "https://via.placeholder.com/300",
        "price": 255,
        "title": "GoPro action camera 4K",
        "attributes": "Model: X-200",
        "tag": "Offer"
      },
    ]
    
    return(
    <>
      <Container className='mt-3 text-center'>
        <Row>
          <h1>New Products List</h1>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center" className="new-products-list d-flex justify-content-center">
          {data.map((product) => {
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
    </>
    );
}
  
export default NewProducts