import React from 'react';
import Navigation from '../layout/Navigation';
import { useEffect, useState } from "react";
import { BuilderComponent, builder } from '@builder.io/react'

const HomePage = () => {
  const [pageJson, setPage] = useState(null);
 
  useEffect(() => {
    builder.get('page', { url: '/' })
      .promise().then(setPage);
  }, []);
 
  return (
    <>
      <Navigation logoName={"logo.svg"} />
      <BuilderComponent model="page" content={pageJson} />
    </>
  );
}

export default HomePage;