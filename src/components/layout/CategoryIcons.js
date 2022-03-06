import React from 'react';
import { Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faCar, faWrench } from '@fortawesome/free-solid-svg-icons';

const CategoryIcons = () => {
  const data = [
    {
      "icon": faMoneyBill,
      "title": "Category Name"
    },
    {
      "icon": faCar,
      "title": "Category Another"
    },
    {
      "icon": faWrench,
      "title": "Category 2"
    },
  ]

    return(
      <div className="mt-3" style={{backgroundColor:"#e9ecef"}}>
        <Container>
          <Row className="d-flex justify-content-center">
            {data.map((iconData) => {
              return (
                <span style={{width: "150px"}} class="text-center mt-3">
                  <div class="icon-category mb-2rounded d-flex justify-content-center align-items-center mx-auto"> 
                  <FontAwesomeIcon icon={ iconData.icon }/>
                  </div>
                  <p>{ iconData.title }</p>
                </span>
              );
            })}
          </Row> 
        </Container>
      </div>

    );
}

export default CategoryIcons