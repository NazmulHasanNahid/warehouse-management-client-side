import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import UpComingProducts from '../Categories/UpComingProducts';
import Products from '../Products/Products';

const Home = () => {
     return (
          <div>
              <Banner/>
              <Products/>
              {/* <UpComingProducts/> */}
              <Categories/>
          </div>
     );
};

export default Home;