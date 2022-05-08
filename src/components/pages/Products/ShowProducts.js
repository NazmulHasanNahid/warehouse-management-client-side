import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import "./Products.css";

const ShowProducts = ({ product }) => {
  const { name, description, img, price, quantity, supliarname, _id } = product;
  return (
    <div>
      <Col>
        <div class="card mb-3 shadow-lg p-3 border-0">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-md-4">
              <img src={img} class="img-fluid" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-secondary fw-bold">{name}</h5>
                <p class="card-text text-secondary">
                  {description.slice(0, 70)}
                </p>
                <p class="card-text text-secondary">Price : $ {price}</p>
                <p class="card-text text-secondary">Quantity : {quantity}</p>
                <p class="card-text text-secondary">
                  Supliar Name : {supliarname}
                </p>
                <p class="card-text text-secondary">
                  <Link to={`/inventory/${_id}`}>
                    <Button className="w-100" variant="secondary">
                      Update
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default ShowProducts;

/*



*/
