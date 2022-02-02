import React from 'react';
import { Col, Card, Row, Button, Form } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductList = ({
  products,
  viewAsGrid = true
}) => {
  const displayAsGrid = () => {
    return(
      <Row xs={3}>
        {products.map((product, index) => {
          return (
            <Col key={index} className='mb-4'>
              <Card>
                <LazyLoadImage className='card-img-top'
                  alt={product.images[0].src.alt}
                  height={product.images[0].src.height}
                  src={product.images[0].src.src}
                  width={product.images[0].src.width} />
                <Card.Img variant="top" src={product.images[0].src} />
                <Card.Body>
                  <Card.Title>{product.name.replace(/<\/?[^>]+(>|$)/g, "")}</Card.Title>
                  <Card.Text>
                    {product.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button variant="dark" size="lg">
                      Add to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }

  const displayAsList = () => {
    return(
      <Row xs={1}>
        { products.map((product) => {
          return(
            <Col className='mb-4'>
              <Card>
                <Row>
                  <Col xl={3} md={4}>
                    <a href="#" class="img-wrap"> 
                      <LazyLoadImage className='card-img-top'
                        alt={product.images[0].src.alt}
                        height={product.images[0].src.height}
                        src={product.images[0].src}
                        width={product.images[0].src.width} /> 
                    </a>
                  </Col>
                  <Col xl={6} md={5} sm={7}>
                    <div class="card-body-list mt-3">
                      <a href="#" class="title"> <h5>{product.name.replace(/<\/?[^>]+(>|$)/g, "")}</h5> </a>
                      <p> {product.description.replace(/<\/?[^>]+(>|$)/g, "")} </p>
                    </div>
                  </Col>
                  <Col xl={3} md={3} sm={5}>
                    <div class="info-aside">
                      <div class="price-wrap mt-3">
                        <span class="price"> <h5>${product.price}</h5> </span>  
                      </div>
                      <p class="text-success">Free shipping</p>
                      <br/>
                      <div class="mb-3">
                        <Button variant="dark" size="lg"> Add to cart </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            );
          })
        }
      </Row>
    );
  }

  return(
    <>
      {viewAsGrid ? displayAsGrid() : displayAsList()}
    </>
  );
}

export default ProductList;
