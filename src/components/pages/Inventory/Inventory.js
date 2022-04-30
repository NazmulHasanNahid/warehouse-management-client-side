import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams({});
  const [products, setProducts] = useState({});
  useEffect(() => {
    const url = `https://limitless-springs-85910.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelet = (id) =>{
    const proceed = window.confirm('Are you sure This is deliverd?')
    if(proceed){
        const url = `https://limitless-springs-85910.herokuapp.com/products/${id}`
        fetch(url, {
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          const remaining = products.filter(product => product._id !== id)
          setProducts(remaining)
        })
    }
  }
  return (
    <div className="container my-5">
      <Row xs={1} md={2} className="g-5  container mx-auto ">
      <Col>
      <Card>
        <Card.Img
          height={300}
          className=" img-fuild "
          variant="top"
          src={products.img}
        />

        <Card.Body>
          <Card.Title>{products.name}</Card.Title>
          <Card.Text>{products.description}</Card.Text>
          <Card.Text>Quantity : {products.quantity}</Card.Text>
        </Card.Body>
       
          <Button onClick={()=>handleDelet(products._id)} variant="primary mb-2">Deliverd</Button>
        
       
      </Card>
      </Col>
      <Col>
       <h3 className="text-center fw-bold">Add Products</h3>
      </Col>
      </Row>
     
     
    </div>
  );
};

export default Inventory;
