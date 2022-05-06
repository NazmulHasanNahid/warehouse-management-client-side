import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const ShowProducts = ({ product }) => {
  const { name, description, img, price, quantity, supliarname , _id} = product;
  return (
    <div>
      
      <Col>
      <Card className="border-0 shadow-lg p-3">
        <Card.Img height={ 300} variant="top" src={img} />
        <Card.Body className="shadow-lg bg-secondary rounded " >
          <Card.Title> <span className="text-white fw-bold">{name.slice(0,40)}</span> </Card.Title>
          <Card.Text>
            <span className="text-white">{description.slice(0,70)}..</span>
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
