import React from 'react';
import { api } from '../App'
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Pagination from './PaginationComponent'
import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductsList = () => {

  let currentPage = 1;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
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

  const pageNavigation = (pageNum) => {
    currentPage = pageNum;
  }
 
  function renderCards(products) {
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
                <small className="text-muted">Last updated {new Date().toLocaleString()}</small>
              </Card.Footer>
            </Card>
          </Col>
          );
        })}
      </Row>
    );
  }

  return (
    <Container>
      { renderCards(products) }

      <Pagination
        itemsCount={products.length}
        itemsPerPage={20}
        currentPage={currentPage}
        setCurrentPage={pageNavigation}
        alwaysShown={false}
      />
    </Container>
  );
}

export default ProductsList;