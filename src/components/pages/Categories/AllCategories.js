import React from 'react';
import { Row } from 'react-bootstrap';
import useCategories from '../../hooks/useCategories';
import ShowAllCategories from './ShowAllCategories';

const AllCategories = () => {
     const [categories , setCategories] = useCategories()

     return (
          <div> 
               <h5 className='text-center fw-bold my-3 text-secondary'>All Categories <br /> _____</h5>
             <Row xs={1} md={3}  className="g-4 container mx-auto" >
            {
                 categories.map(categorie => <ShowAllCategories key={categorie._id} categorie={categorie} ></ShowAllCategories>)
            }
            </Row>
          </div>
     );
};

export default AllCategories;