import React from 'react';
import {BsFacebook ,  } from 'react-icons/bs';
import {SiInstagram} from 'react-icons/si';
import {BsLinkedin} from 'react-icons/bs';
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
     return (
          <div className=''>
                <div className='footer-bg mt-5 p-5'>
           <Row  xs={1} md={4} className="w-75 mx-auto container">
                <Col>
                <h5 className='fw-bold'>Information</h5>
                <div>
                     <p>About Our Warehouse</p>
                     <p>Electronics</p>
                     <p>Products Import</p>
                     <p>Products Export</p>
                </div>
                </Col>
                <Col>
                <h5 className='fw-bold'>Helpful Links</h5> 
                <div> 
                <p>Services</p>
                <p>Supports</p>
                <p>Terms And Condition</p>
                <p>Privacy</p>
                </div>
                </Col>
                <Col>
                <h5 className='fw-bold'>Products</h5>
                <div>
                     <p>Electronics Item</p>
                     <p>Tv / Freeze</p>
                     <p>Ac / Electric Oven </p>
                     <p>Water Filter / Electric Kettle</p>
                </div>
                </Col>
                <Col>
                    <div>
                    <BsFacebook className='ms-3 text-' size={20}/>
                    <SiInstagram className='ms-3 ' size={20}/>
                    <BsLinkedin className='ms-3 ' size={20}/>
                    <p className='my-3'> <MdOutlineMarkEmailUnread className='mx-3'/> nhnahid.work@gmail.com</p>
                    <p><BsWhatsapp  className='mx-3'/>01646170993</p>
                    </div>
                </Col>
           </Row> <hr />
                <p className='text-center text-secondary mt-3'>Nh-Official © 2022 all rights reserved</p>
          </div>
          </div>
     );
};

export default Footer;