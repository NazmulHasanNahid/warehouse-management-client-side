import { Carousel } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

import React from "react";
import img1 from "../../../img/banner1.jpg";
import img2 from "../../../img/banner2.jpg";
import img3 from "../../../img/banner3.jpg";
import img4 from "../../../img/banner4.jpg";
import img5 from "../../../img/banner5.jpg";


const Banner = () => {
  return (
    <div >
       <Fade top>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      </Fade>
    </div>
  );
};

export default Banner;
