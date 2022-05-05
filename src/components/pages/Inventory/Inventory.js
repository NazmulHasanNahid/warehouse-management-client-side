import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);




  
  // const handleDeliverd = () =>{
  //     const newQuantity = parseInt(products.quantity) - 1 ;
  //     const {productQuantity} = newQuantity ;
  //     const url = `http://localhost:5000/quantity/${id}`;
  //     fetch(url, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     body: JSON.stringify(productQuantity),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setProducts({...result , products.quantity : newQuantity} )
  //         toast('Products Deliverd')
          
  //       });
  
  // }
  const handleDeliverd = () =>{
    let quantity = products?.quantity;
    quantity = parseInt(quantity) -1;
    if(quantity<0){
      return alert('Quantity can not be less then zero')
    }
    const url = `http://localhost:5000/quantity/${id}`
    fetch(url , {
      method:'PUT' ,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({quantity})
    
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setProducts({...data , quantity:quantity})
    })
  }
  
  return (
    <div className="container ">
      <h2 className="text-center fw-bold my-5 text-secondary">
        Manage Inventory <br /> ______{" "}
      </h2>
      <Row
        xs={1}
        md={2}
        className="g-5 d-flex align-items-center container mx-auto "
      >
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

            <Button onClick={handleDeliverd} variant="primary mb-2">Deliverd</Button>
          </Card>
        </Col>
        <Col>
          <h3>Add New Stock</h3>
          <form >
            <input type="number" name="quantity" />
            <input  type="submit" value="Add" />
          </form>
        </Col>
      </Row>
      <div className="text-center my-5">
        <Link to="/allProducts">
          <Button>Manage Inventory</Button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
