import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  console.log(products);
  useEffect(() => {
    const url = `https://limitless-springs-85910.herokuapp.com/products/${id}`;
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

    const url = `https://limitless-springs-85910.herokuapp.com/quantity/${id}`;
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
      const url = `https://limitless-springs-85910.herokuapp.com/quantity/${id}`;
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
      <h2 className="text-center fw-bold my-5 text-secondary custom-underline">
        Inventory
      </h2>
      <div className="card mb-3 shadow-lg p-3 border-0">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-4">
            <img src={products?.img} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-secondary fw-bold">
                {products?.name}
              </h5>
              <p className="card-text text-secondary">
                {products?.description?.slice(0, 70)}
              </p>
              <p className="card-text text-secondary">
                Price : $ {products?.price}
              </p>
              <p className="card-text text-secondary">
                Quantity : {products?.quantity}
              </p>
              <p className="card-text text-secondary">
                Supliar Name : {products?.supliarname}
              </p>
              <p className="card-text text-secondary">
                <Button
                  className="w-100"
                  onClick={handleDeliverd}
                  variant="light "
                >
                  Deliverd
                </Button>
              </p>

              <p className="card-text">
                <form onSubmit={handleUpdateQuantity}>
                  <div className="form-group">
                    <input
                      placeholder="Update Your Quantity"
                      type="number"
                      className="form-control"
                      name="quantity"
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary mt-3">
                    Update
                  </button>
                </form>
              </p>
              <p className="card-text">
                <Link to="/allProducts">
                  <Button variant="secondary">Manage Inventory</Button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
