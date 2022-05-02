import React from 'react';
import { Link } from 'react-router-dom';

const ManageItem = () => {
     return (
          <div className='text-center my-5'>
               <Link to="/addItem">
              <button >Add New Item</button>
               </Link>
               
          </div>
     );
};

export default ManageItem;