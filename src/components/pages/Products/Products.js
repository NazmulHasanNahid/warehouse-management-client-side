import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowProducts from './ShowProducts';

const Products = () => {
     const [products , setProducts] = useState([])
     useEffect(()=>{
          fetch('https://limitless-springs-85910.herokuapp.com/products')
            .then(res=> res.json())
            .then(data => setProducts(data))
     },[])
     return (
          <div>
               <h2 className='text-center text-secondary fw-bold  my-5'>Products <br /> ____</h2>
               <Row xs={1} md={3} className="g-5  container mx-auto ">
                    {
                         products.map(product => <ShowProducts product={product} key={product._id}></ShowProducts>)
                    }
               </Row>
          </div>
     );
};

export default Products;