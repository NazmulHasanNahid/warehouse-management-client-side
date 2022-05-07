import { Button } from 'react-bootstrap';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import ShowAllCategories from './ShowAllCategories';
import Loading from '../Shared/Loading/Loading';

const AllCategories = () => {
     const [categories , setCategories] = useCategories()
     if(categories.length === 0){
          return <Loading/>
     }

     return (
          <div> 
               <h5 className='text-center fw-bold my-3 text-secondary'>All Categories <br /> _____</h5>
             <Row xs={1} md={3}  className="g-4 container mx-auto" >
            {
                 categories.map(categorie => <ShowAllCategories key={categorie._id} categorie={categorie} ></ShowAllCategories>)
            }
            </Row>
            <div className='text-center my-5'>
            <Link to="/addCategory">
            <Button  variant="outline-secondary">Add Category</Button>
            </Link>
            </div>
          </div>
     );
};

export default AllCategories;