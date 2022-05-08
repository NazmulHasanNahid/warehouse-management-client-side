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
      <Roll>
        <div className="card mb-3 shadow-lg  p-3 border-0">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-md-4">
              <img src={img} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-secondary fw-bold">{name}</h5>
                <p className="card-text text-secondary">
                  {description.slice(0, 70)}
                </p>
                <p className="card-text text-secondary">Price : $ {price}</p>
                <p className="card-text text-secondary">Quantity : {quantity}</p>
                <p className="card-text text-secondary">
                  Supliar Name : {supliarname}
                </p>
                <p className="card-text text-secondary">
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
        </Roll>
      </Col>
    </div>
  );
};

export default ShowProducts;

/*



*/
