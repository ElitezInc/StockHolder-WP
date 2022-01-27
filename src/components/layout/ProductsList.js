import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductList = ({
  products,
  viewAsGrid = true
}) => {
 return(
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
 );
}

export default ProductList;
