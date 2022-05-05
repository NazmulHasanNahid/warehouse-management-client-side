import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const ShowProducts = ({ product }) => {
  const { name, description, img, price, quantity, supliarname , _id} = product;
  return (
    <div>
      
      <Col>
      <Card className="border-0 shadow-lg">
        <Card.Img height={ 300} variant="top" src={img} />
        <Card.Body className="shadow-lg bg-secondary  " >
          <Card.Title> <span className="text-secondary fw-bold">{name}</span> </Card.Title>
          <Card.Text>
            <span className="text-white">{description.slice(0,80)}..</span>
          </Card.Text>
          <Card.Text>
          <span className="text-white">Price : {price}</span>
          </Card.Text>
          <Card.Text>
          <span className="text-white">Quantity : {quantity}</span>
          </Card.Text>
          <Card.Text>
          <span className="text-white">Supliar Name : {supliarname}</span>
          </Card.Text>
          <Card.Text>
          <Link to={`/inventory/${_id}`} >
          <Button  className="w-100" variant="light">Update</Button>
          </Link>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
};

export default ShowProducts;


/*



*/
