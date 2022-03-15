import React from 'react';
import Navigation from '../layout/Navigation';
import { Container} from "react-bootstrap"
import Banner from '../layout/Banner';
import CategoryIcons from '../layout/CategoryIcons';
import Products from '../layout/Products';
import Block from '../layout/Block';
import { API } from '../../api';
import Blockcategory from '../layout/Blockcategory';
import FooterPadding from '../layout/FooterPadding';

const HomePage = () => {

  const productsData = [
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
    {
      "image": "https://via.placeholder.com/300",
      "price": 255,
      "title": "GoPro action camera 4K",
      "attributes": "Model: X-200",
      "tag": "Offer"
    }
  ]

  const newestProducts = [
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
    }
  ]

  const api = new API();

  return (
    <>
      <Navigation />
      <Container fluid className='mt-3'>
        <Banner />
        <CategoryIcons />
        <Products listTitle="Featured Latest Products" products={productsData} />
        <Block />
       </Container>
       <Products listTitle="Newest Products" products={newestProducts} />
       <Blockcategory/>
       <FooterPadding/>
    </>
  );
}

export default HomePage;