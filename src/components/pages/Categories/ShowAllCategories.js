import React from 'react';
import { Col } from 'react-bootstrap';

const ShowAllCategories = ({categorie}) => {
     const {name , image} = categorie

     return (
          <div>
               <Col>
            <div
              class="
                p-3 border bg-secondary shadow-lg d-flex align-items-center justify-content-between rounded-3">
              <h3 class="text-white">{name}</h3>
              <img height={100} width="100px" src={image} alt="" />
            </div>
            
          </Col>
          </div>
     );
};

export default ShowAllCategories;