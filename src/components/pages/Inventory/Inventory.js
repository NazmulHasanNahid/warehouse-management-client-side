import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
       const url  = `https://limitless-springs-85910.herokuapp.com/products`
       fetch(url ,{
            method:'POST',
            headers:{
                 'content-type':"application/json"
            },
            body: JSON.stringify(data)
       })
       .then(res=> res.json())
       .then(result =>{
            toast('Product Added')
            
       })
     };
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
       <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
        <input className="mb-2" placeholder="Quantity" {...register("quantity", { required: true, maxLength: 20 })} />
        <input className="mb-2" placeholder="supliarname" {...register("supliarname", { required: true, maxLength: 20 })} />
        <textarea className="mb-2" placeholder="Descreption" {...register("description")} />
        <input className="mb-2" placeholder="price" type="number" {...register("price")} />
        <input className="mb-2" placeholder="Photo Url" type="text" {...register("img")} />
        <input type="submit" value="Add" />
      </form>
      </Col>
      </Row>
     
     
    </div>
  );
};

export default Inventory;
