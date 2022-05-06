import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useCategories from '../../hooks/useCategories';
import ShowCategories from './ShowCategories';


const Categories = () => {
     const [categories , setCategories] = useCategories()
     return (
          <div className='container'>
               <h3 className='text-secondary my-3 fw-bold text-center my-5'>Categories <br /> _____</h3>
            <Row xs={1} md={3}  className="g-4 container mx-auto" >
            {
                 categories.slice(0,6).map(categorie => <ShowCategories key={categorie._id} categorie={categorie} ></ShowCategories>)
            }
            </Row>
            <div className='text-center my-3'>

            <Link to="/allCategories">
                 <Button variant='outline-secondary'>All Categories</Button>
            </Link>
            </div>
          </div>
     );
};

export default Categories;










