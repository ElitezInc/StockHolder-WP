import React from 'react';
import { api } from '../../api'
import { Container, Row, Col } from "react-bootstrap";
import Pagination from '../layout/Pagination'
import { useEffect, useState } from "react";
import ProductsFilters from '../layout/ProductsFilters';
import ProductsList from '../layout/ProductsList';
import Navigation from '../layout/Navigation';
import ProductsTopBar from '../layout/ProductsTopBar';
import {useCart} from "react-use-cart";

const ProductsPage = () => {

  const {addItem} = useCart();

  const productsPerPage = 6;

  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [viewAsGrid, setGridView] = useState(true);

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
          <ProductsTopBar onViewToggle={(value) => setGridView(value)} />
          <ProductsList 
            products={products} 
            viewAsGrid={viewAsGrid} 
            onProductAddToCart={(product) => addItem({
              id: product.id,
              img: product.images[0].src,
              name: product.name.replace(/<\/?[^>]+(>|$)/g, ""),
              price: product.price
            } )}
          />
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