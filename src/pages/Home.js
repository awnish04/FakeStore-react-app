import React from 'react';
// import product context
// import { ProductContext } from '../contexts/ProductContext';

import AllProducts from '../components/AllProducts';

// import components
// import Product from '../components/Product';
import Hero from '../components/Hero';
const Home = () => {
  // // get products from product context
  // const {products} = useContext(ProductContext);
 
  // // get only men's & women's clothing category 

  // const filteredProducts = products.filter((item) => {
  //   return (
  //     item.category === "men's clothing" ||
  //     item.category === "women's clothing" ||
  //     item.category === "electronics" ||
  //     item.category === "jewelry"
  //   );
  // });

  

  return (
  <div>
    <Hero/>
    <AllProducts/>
  </div>
  );
};
export default Home;
