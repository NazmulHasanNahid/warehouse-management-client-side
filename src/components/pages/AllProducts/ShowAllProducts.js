import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowAllProducts = ({product}) => {
     const { name, description, img, price, quantity, supliarname , _id} = product;
     return (
          <div>
               <Col >
        <Card> 
          <Card.Img height={300} className=" img-fuild " variant="top" src={img}  />
         
          <Card.Body  >
            <Card.Title>{name.slice(0,20)}</Card.Title>
            <Card.Text>
              {description.slice(0,50)}
            </Card.Text>
            <Card.Text>
              Price : {price}
            </Card.Text>
            <Card.Text>
              Quantity : {quantity}
            </Card.Text>
            <Card.Text>
            supliarname : {supliarname}
            </Card.Text>
          </Card.Body>
          {/* <Link to={`/inventory/${_id}`} >
          <Button  variant="primary">Update</Button>
          </Link> */}
        </Card>
      </Col>
          </div>
     );
};

export default ShowAllProducts;