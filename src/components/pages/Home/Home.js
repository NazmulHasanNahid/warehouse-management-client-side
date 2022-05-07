import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import ProductsDetail from '../ProductsDetail/ProductsDetail';
import UpComing from '../UpComing/UpComing';

const Home = () => {
     return (
          <div>
              <Banner/>
              <Products/>
              {/* <ProductsDetail/> */}
              <Categories/>
              <UpComing/>
          </div>
     );
};

export default Home;