import React, {useContext} from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';


// import components
import Product from '../components/Product';
import Hero from '../components/Hero';
const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext);
 
  // get only men's & women's clothing category 

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "electronics" ||
      item.category === "jewelry"
    );
  });

  

  return (
  <div>
    <Hero/>
    <section className='py-16 bg-[#b1d2e3]'>
      <div className='container mx-auto  px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map ((product) => {
            return (
              <Product product={product} 
            key={product.id} />
            );  
          })}
        </div>
      </div>
    </section>
  </div>
  );
};
export default Home;
