import React from 'react';
import { api } from '../../App'
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";


const ProductList = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = () => {
        api
          .get("products", {
            page: currentPage,
            per_page: productsPerPage
          })
          .then((response) => {
            if (response.status === 200) {
              setTotalProducts(parseInt(response.headers['x-wp-total']));
              setProducts(response.data);
            }
          })
          .catch((error) => { console.error(error)});
      };
      fetchProducts();
    }, [productsPerPage, currentPage]);
  
    const pageNavigation = (pageNum) => {
      if (pageNum !== 0) {
        setCurrentPage(pageNum);
      }
    }
   
    function renderProducts(viewAsGrid = true) {
      return(
        <Col md={9} className="mt-4 mb-4">
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
                  </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated {new Date().toLocaleString()}</small>
                </Card.Footer>
              </Card>
            </Col>
            );
          })}
          </Row>
        </Col>
      );
    }
}

export default ProductList;
