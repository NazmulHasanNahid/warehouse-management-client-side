import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import "./inventory.css";

const ShowProducts = ({ product }) => {
  const { name, description, img, price, quantity, supliarname } = product;
  return (
    <div>
      {/* <Col >
        <Card>
          <Card.Img className=" img-fuild " variant="top" src={img}  />
         
          <Card.Body  >
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description.slice(0,100)}
            </Card.Text>
          </Card.Body>

        </Card>
      </Col> */}
      <Card className="cardClass">
    <div style={{textAlign: 'center'}}>
       <Card.Img  className="card-image" variant="top" src={img} />
    </div>
   
    <Card.Body className="">
      <div className="card-text-body">
        <Card.Title>{name}</Card.Title>
        <Card.Text></Card.Text>
        <Card.Text className='card-description'>{description}</Card.Text>
        
          <Button className="movieCard-btn" variant="primary">View Movie</Button>
       
      </div>
    </Card.Body>
  </Card>

      
    </div>
  );
};

export default ShowProducts;
