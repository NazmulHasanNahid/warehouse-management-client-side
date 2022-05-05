import { Button, Col, Row } from "react-bootstrap";
import React, { Children, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  console.log(products);
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id, products]);

  const handleDeliverd = (e) => {
    e.preventDefault();
    let quantity = products?.quantity;
    quantity = parseInt(quantity) - 1;
    if (quantity < 0) {
      return alert("Quantity can not be less then zero");
    }

    const url = `http://localhost:5000/quantity/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())

      .then((data) => {
        setProducts({ ...data, quantity: quantity });
        toast("Successfully Deliverd");
      });
  };

  const handleUpdateQuantity = (e) => {
    e.preventDefault();
    let quantity = products?.quantity;
    const addQuantity = parseInt(e.target.quantity.value);
    if (addQuantity > 0) {
      quantity = parseInt(quantity) + addQuantity;
      const updateInventory = { quantity };
      const url = `http://localhost:5000/quantity/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateInventory),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Quantity Updated");
          e.target.reset();
        })
        .catch((err) => console.log(err));
    } else {
      alert("please insert positive number of quantity");
      e.target.reset();
      return;
    }
  };

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

            <Button onClick={handleDeliverd} variant="primary mb-2">
              Deliverd
            </Button>
          </Card>
        </Col>
        <Col>
          <h5 className="text-secondary my-3">Update Quantity</h5>
          {/* <form onSubmit={handleUpdateQuantity}>
            <input type="number" name="quantity" />
            <input type="submit" value="Add" />
          </form> */}
          <form onSubmit={handleUpdateQuantity}>
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                name="quantity"
              />
            </div>
            <button type="submit" class="btn btn-secondary mt-3">
              Submit
            </button>
          </form>
          <div className="my-3">
        <Link to="/allProducts">
          <Button variant="secondary">Manage Inventory</Button>
        </Link>
      </div>
        </Col>
      </Row>
     
    </div>
  );
};

export default Inventory;
