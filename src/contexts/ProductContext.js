import React, { createContext, useState, useEffect } from "react";

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Products state
  const [products, setProduct] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    };
    fetchProducts();
  }, [products]); // Specify products as a dependency
  

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
