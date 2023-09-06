import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

import { ProductContext } from "../contexts/ProductContext";

import { motion } from "framer-motion";

// import ScrollToTop from "../scrolltotop_component/ScrollToTop";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product base on the id
  const product = products.find((items) => {
    return items.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // animation

  const variantsText = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 2, 
        delay:0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      delay:0.8,
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay:0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  // destructure product
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-34 h-screen lg:h-[670px] flex items-center ">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <motion.img
              src={image}
              className="max-w-[150px] lg:max-w-xs"
              alt="product-img"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imageVariants} // Apply the animation variants
            />
          </div>
          {/* text */}
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variantsText}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-xl lg:text-2xl font-medium mb-2 max-w-md mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-lg lg:text-2xl text-[#EF4722] font-medium mb-6">
              $ {price}
            </div>
            <p className="text-sm lg:text-lg mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="self-start uppercase font-semibold text-white bg-[#f49f45] px-8 py-4 rounded-full cursor-pointer"
            >
              Add to cart
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
