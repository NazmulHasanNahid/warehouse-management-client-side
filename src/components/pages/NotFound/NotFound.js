import React from 'react';
import errorImg from '../../../img/404.jpg'

const NotFound = () => {
     return (
          <div className='text-center'>
               <img  className='img-fluid' src={errorImg} alt="" />
             
          </div>
     );
};

export default NotFound;