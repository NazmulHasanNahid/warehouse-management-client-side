import { Button, Col, Row } from "react-bootstrap";
import React, { Children, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import updateImg from "../../../img/update.png";

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
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="border-0  shadow-lg">
            <Card.Img
              height={400}
              className=" img-fuild "
              variant="top"
              src={products?.img}
            />
            <Card.Body className="shadow-lg ">
              <Card.Title> <span className="text-secondary fw-bold">{products?.name}</span> </Card.Title>
              <Card.Text> <span className="text-secondary">{products.description?.slice(0, 100)}</span> </Card.Text>
              <Card.Text> <span className="text-secondary">Price : {products?.price}</span> </Card.Text>
              <Card.Text> <span className="text-secondary">Quantity : {products?.quantity}</span> </Card.Text>
              <Card.Text> <span className="text-secondary">Supliarname : {products?.supliarname}</span> </Card.Text>
            </Card.Body>

            <Button onClick={handleDeliverd} variant="secondary ">
              Deliverd
            </Button>
          </Card>
        </Col>
        <Col className="shadow-lg">
          <h5 className="text-secondary my-3 text-center">
            Update Quantity <br /> _______
          </h5>
         <div className="w-50 mx-auto"> <img className="img-fluid" src={updateImg} alt="" /></div>
          <form onSubmit={handleUpdateQuantity}>
            <div class="form-group">
              <input placeholder="Enter Your Quantity" type="number" class="form-control" name="quantity" />
            </div>
            <button type="submit" class="btn btn-secondary mt-3">
              Update
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
