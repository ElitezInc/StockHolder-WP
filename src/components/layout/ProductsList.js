import React from 'react';
import { Col, Card, Row, Button} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AuthProvider } from 'react-auth-kit'

const ProductList = ({
  products,
  viewAsGrid = true,
  onProductAddToCart
}) => {
  console.log(products);

  const displayAsGrid = () => {
    return (
      <Row xs={3} className="product-list">
        {products.map((product, index) => {
          return (
            <div key={index} className='mb-4'>
              <Card>
                <LazyLoadImage className='card-img-top'
                    alt={product.image_src.alt}
                    height={product.image_src.height}
                    src={product.image_src}
                    width={product.image_src.width} />
                  <Card.Body>
                  <a href={window.location.href} className="title"> <h5>{product.name.replace(/<\/?[^>]+(>|$)/g, "")}</h5> </a>
                    <div className="card-body-list mt-3" style={{height: '150px', overflow: 'auto'}}>
                      <p> {product.description.replace(/<\/?[^>]+(>|$)/g, "")} </p>
                    </div>
                      <span className="price"> <h5>${product.price}</h5> </span>
                      <Button variant="dark" size="lg" onClick={() => onProductAddToCart(product)}>
                        Add to cart
                      </Button>
                </Card.Body>
              </Card>          
            </div>
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
                    <a href={window.location.href} className="img-wrap"> 
                      <LazyLoadImage className='card-img-top'
                      alt={product.image_src.alt}
                      height={product.image_src.height}
                      src={product.image_src}
                      width={product.image_src.width} />
                    </a>
                  </Col>
                  <Col xl={6} md={5} sm={7}>
                    <div className="card-body-list mt-3">
                      <a href={window.location.href} className="title"> <h5>{product.name.replace(/<\/?[^>]+(>|$)/g, "")}</h5> </a>
                      <p> {product.description.replace(/<\/?[^>]+(>|$)/g, "")} </p>
                    </div>
                  </Col>
                  <Col xl={3} md={3} sm={5}>
                    <div className="info-aside">
                      <div className="price-wrap mt-3">
                        <span className="price"><h5>${product.price}</h5> </span>  
                      </div>
                      <p className="text-success">Free shipping</p>
                      <div className="mb-3">
                      <div className="vr" />
                        <Button variant="dark" size="lg" onClick={() => onProductAddToCart(product)}> Add to cart </Button>
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
