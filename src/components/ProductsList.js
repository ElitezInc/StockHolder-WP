import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import { LazyLoadImage } from 'react-lazy-load-image-component';

class ProductsList extends Component {
 
  renderCards = (products) => {

    this.state = {
      time: new Date().toLocaleString()
    };

    return(
      <Row xs={3} className="mt-4 mb-4">
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
                </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated {this.state.time}</small>
              </Card.Footer>
            </Card>
          </Col>
          );
        })}
      </Row>
    );}

  render() {
    return (
      <Container>
        { this.renderCards(this.props.data) }
  
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>
    );
  }
}

export default ProductsList;