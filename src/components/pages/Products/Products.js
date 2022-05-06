import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import useProducts from '../../hooks/useProducts';
import auth from '../Auth/firebase/firebase.init';
import ShowProducts from './ShowProducts';

const Products = () => {
     const [user, loading, error] = useAuthState(auth);

     const [products , setProducts] = useProducts([])
     return (
          <div>
               <h2 className='text-center text-secondary fw-bold  my-5'>Products <br /> ____</h2>
               <Row xs={1} md={2} lg={3} className="g-4 container mx-auto" >
                    {
                         products.slice(0,6).map(product => <ShowProducts product={product} key={product._id}></ShowProducts>)
                    }
               </Row>
          </div>
     );
};

export default Products;