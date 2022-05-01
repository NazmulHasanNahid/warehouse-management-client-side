import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import ShowAllProducts from './ShowAllProducts';

const AllProducts = () => {
     const [products , setProducts] = useProducts()
     
     return (
          <div>
               <h2 className='text-center mt-5'>All Products</h2>
               <Row xs={1} md={3} className="g-5  container mx-auto ">
                    {
                         products.map(product => <ShowAllProducts product={product} key={product._id}></ShowAllProducts> )
                    }
               </Row>
          </div>
     );
};

export default AllProducts;