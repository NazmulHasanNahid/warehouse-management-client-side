import { Button } from "react-bootstrap";
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
  return (
    <div className="w-50 mx-auto">
     
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
       
          <Button variant="primary">Update</Button>
       
      </Card>
    </div>
  );
};

export default Inventory;
