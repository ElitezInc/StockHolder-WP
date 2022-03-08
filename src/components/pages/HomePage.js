import React from 'react';
import Navigation from '../layout/Navigation';
import { Container} from "react-bootstrap"
import Banner from '../layout/Banner';
import CategoryIcons from '../layout/CategoryIcons';
import NewProducts from '../layout/NewProducts';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Container fluid className='mt-3'>
        <Banner />
        <CategoryIcons />
        <NewProducts />
      </Container>
    </>
  );
}

export default HomePage;