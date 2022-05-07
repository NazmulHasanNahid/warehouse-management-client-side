import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./UpComing.css";
import { Col, Container, Row } from "react-bootstrap";
import laptop from "../../../img/upcoming/laptop.jpg";
import swing from "../../../img/upcoming/swing machine.jpg";
import ups from "../../../img/upcoming/ups.jpg";
import mobile from "../../../img/upcoming/mobile1.jpg";
import display from "../../../img/upcoming/display.png";
import projector from "../../../img/upcoming/projector.png";
import pendrive from "../../../img/upcoming/pendrive.jpg";
import webcam from "../../../img/upcoming/webcam.jpg";
import rotimaker from "../../../img/upcoming/rotimaker.jpg";

const UpComing = () => {
  var settings = {
    
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container className="text-center my-5 ">
        <h5 className="fw-bold text-secondary">
          Upcoming Item <br /> ____
        </h5>
        <Slider {...settings}>
          <div>
            <Row className="text-center justify-content-center mt-3">
              <Col lg={6} md={6} sm={12} >
                <Row >
                  <Col className="" lg={4} md={4} sm={12}>
                    <img className="circleImg" src={laptop} alt="" />
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <img className="circleImg" src={pendrive} alt="" />
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <img className="circleImg" src={webcam} alt="" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <Row>
                  <Col lg={4} md={4} sm={12}>
                    <img className="circleImg" src={mobile} alt="" />
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <img className="circleImg" src={projector} alt="" />
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <img className="circleImg" src={display} alt="" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <Row>
                  <Col lg={4} md={4} sm={12}>
                    <img className="circleImg" src={ups} alt="" />
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <img className="circleImg" src={rotimaker} alt="" />
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <img className="circleImg" src={swing} alt="" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default UpComing;
