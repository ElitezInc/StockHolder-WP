import React from 'react';
import { api } from '../../api'
import { Container, Row, Col } from "react-bootstrap";
import Pagination from '../Pagination'
import { useEffect, useState } from "react";
import ProductsFilters from '../ProductsFilters';
import ProductsList from '../ProductsList';
import Navigation from '../Navigation';

const ProductsPage = () => {

  const productsPerPage = 6;

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

  return (
    <>
    <Navigation logoName={"logo.svg"} />
    <Container>
      <Row className="mt-4 mb-4">
        <Col md={3}>
          <ProductsFilters />
        </Col>
        <Col md={9}>
          <ProductsList products={products} viewAsGrid={true} />
          <Pagination
            itemsCount={totalProducts}
            itemsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={pageNavigation}
            alwaysShown={false}
          />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default ProductsPage;