import React from 'react';
import Navigation from '../layout/Navigation';
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap"
import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';
import Banner from '../layout/Banner';
import CategoryIcons from '../layout/CategoryIcons';

const HomePage = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser()

  

  return (
    <>
      <Navigation logoName={"logo.svg"} />
      <Container>
        { isAuthenticated() ? auth().name : 'Not authenticated' }
      </Container>
       <Banner />
       <CategoryIcons />
    </>
  );
}

export default HomePage;