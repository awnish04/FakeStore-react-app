import React, { useContext, useState } from "react";

import { ProductContext } from "../contexts/ProductContext";

// import link
import { Link } from "react-router-dom";

// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

// import cart conteext
import { CartContext } from "../contexts/CartContext";

import { motion } from "framer-motion";

const AllProducts = () => {
  const { addToCart } = useContext(CartContext);
  // destruct products
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const productListVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const productCardVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <div>
      <section className=" bg-[#b1d2e3] h-full">
        <div className="container mx-auto  px-24">
          <div className="flex justify-center items-center py-12">
            {/* <div>
              <input
                type="text"
                placeholder="Search Products"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-96 text-center py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 transition-all duration-300"
              />
            </div> */}

            <div class="input-wrapper">
              <button class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="25px"
                  width="25px"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#fff"
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#fff"
                    d="M22 22L20 20"
                  ></path>
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search Products"
                value={searchQuery}
                onChange={handleSearchChange}
                class="input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={productListVariants}
              >
                <motion.div
                  key={product.id}
                  variants={productCardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="bg-white rounded-lg border border-gray-300 h-80 mb-4 relative overflow-hidden group transition">
                    <div className="w-full h-full flex justify-center items-center">
                      {/*image*/}
                      <div className="w-52 mx-auto flex justify-center items-center">
                        <img
                          className="max-h-40 group-hover:scale-110 transition duration-300"
                          src={product.image}
                          alt={`Product: ${product.title}`}
                        />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div>
                      <p className=" absolute top-4 left-4 p-2 text-base lg:text-lg  font-semibold">
                        ${product.price}
                      </p>
                      <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button onClick={() => addToCart(product, product.id)}>
                          <div className="flex justify-center items-center text-white w-10 h-10 text-xl bg-[#f49f45] drop-shadow-xl mb-2">
                            <BsPlus className="text-3xl" />
                          </div>
                        </button>
                        <Link
                          to={`/product/${product.id}`}
                          className="w-10 h-10 text-xl bg-[#b1d2e3] flex justify-center items-center text-white drop-shadow-xl"
                        >
                          <BsEyeFill />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Category & title & price */}
                  <div>
                    <div className="text-base lg:text-lg capitalize text-gray-800 font-medium ">
                      {product.category}
                      <h2 className="text-sm lg:text-sm capitalize font-medium text-gray-800">
                        {product.title}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
