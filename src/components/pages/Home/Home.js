import React from 'react';
import Banner from '../Banner/Banner';
import UpComingProducts from '../ExtraSection/UpComingProducts';
import Products from '../Products/Products';

const Home = () => {
     return (
          <div>
              <Banner/>
              <Products/>
              <UpComingProducts/>
          </div>
     );
};

export default Home;