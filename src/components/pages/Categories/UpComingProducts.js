import React from 'react';
import img1 from '../../../img/monitor.png'
import img2 from '../../../img/monitor2.png'
import img3 from '../../../img/pc.png'

const UpComingProducts = () => {
     return (
          <div className='text-center container my-5'>
               <h3 className='text-secondary my-3 fw-bold'>Upcoming Products</h3>
            <div className='row'>
            <div class="col-lg-4 col-md-6 col-12">
            <div
              class="
                p-3 border bg-warning d-flex align-items-center justify-content-between rounded-3">
              <h1 class="text-white">Monitor</h1>
              <img  height={100}  width="100px" src={img1} alt="" />
            </div>
            
          </div>
            <div class="col-lg-4 col-md-6 col-12">
            <div
              class="
                p-3 border bg-primary d-flex align-items-center justify-content-between rounded-3">
              <h1 class="text-white">All in One Pc</h1>
              <img  height={100}  width="100px" src={img2} alt="" />
            </div>
            
          </div>
            <div class="col-lg-4 col-md-6 col-12">
            <div
              class="
                p-3 border bg-success d-flex align-items-center justify-content-between rounded-3">
              <h1 class="text-white">Desktop</h1>
              <img height={100} width="100px" src={img3} alt="" />
            </div>
            
          </div>
            </div>
          </div>
     );
};

export default UpComingProducts;