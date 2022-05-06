import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import ProductsDetail from '../ProductsDetail/ProductsDetail';

const Home = () => {
     return (
          <div>
              <Banner/>
              <Products/>
              <Categories/>
              <ProductsDetail/>
          </div>
     );
};

export default Home;