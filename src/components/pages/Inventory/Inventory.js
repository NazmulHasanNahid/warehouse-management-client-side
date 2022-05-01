import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddProduct from "./AddProduct";
import { toast } from "react-toastify";

const Inventory = () => {
  const { id } = useParams({});
  const [products, setProducts] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleDelet = (id) => {
    const proceed = window.confirm("Are you sure This is deliverd?");
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // if(data.deletedCount){
          // }
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          toast('Your Delivery Successful')
         
        });
    }
  };

  return (
    <div className="container ">
      <h2 className="text-center fw-bold my-5 text-secondary">Manage Inventory <br /> ______ </h2>
      <Row xs={1} md={2} className="g-5 d-flex align-items-center container mx-auto ">
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
              <Card.Text>Supliarname : {products.supliarname}</Card.Text>
            </Card.Body>

            <Button
              onClick={() => handleDelet(products._id)}
              variant="primary mb-2"
            >
              Deliverd
            </Button>
          </Card> 
        </Col>
        <Col>
          <AddProduct />
        </Col>
      </Row>
    </div>
  );
};

export default Inventory;
