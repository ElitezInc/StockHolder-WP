import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Pagination from './PaginationComponent'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const api = new WooCommerceRestApi({
  url: "http://localhost",
  consumerKey: "ck_6c43d9b667acd786614f8faf427a243687a7a81e",
  consumerSecret: "cs_d79dec45583d71e802af4067e9fefb410742bfec",
  version: "wc/v3",
});

class ProductsList extends Component {

  const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProducts();
    }, []);
  
    let fetchProducts = () => {
      api
        .get("products", {
          per_page: 20,
        })
        .then((response) => {
          if (response.status === 200) {
            setProducts(response.data);
          }
        })
        .catch((error) => { console.error(error)});
    };

  pageNavigation() {
    console.log('on nav');
  }
 
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
  
        <Pagination
          itemsCount={145}
          itemsPerPage={15}
          currentPage={5}
          setCurrentPage={this.pageNavigation}
          alwaysShown={false}
        />
      </Container>
    );
  }
}

export default ProductsList;