import React, { useContext }  from "react";

// import link
import { Link } from "react-router-dom";

// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

// import cart conteext
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const {addToCart}  = useContext(CartContext);
  // destruct products
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="bg-white rounded-lg border border-gray-200 h-80 mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/*image*/}
          <div className="w-52 mx-auto flex justify-center items-center">
            <img
              className="max-h-40 group-hover:scale-110 transition duration-300"
              src={image}
              alt={`Product: ${title}`}
            />
          </div>
        </div>

        {/* Buttons */}
        <div>
          <p className=" absolute top-4 left-4 p-2 text-base lg:text-lg  font-semibold">
            ${price}
          </p>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <button onClick={() => addToCart(product,id)} >
              <div className="flex justify-center items-center text-white w-10 h-10 text-xl bg-[#f49f45] drop-shadow-xl mb-2">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
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
          {category}
          <h2 className="text-sm lg:text-sm capitalize font-medium text-gray-800">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
