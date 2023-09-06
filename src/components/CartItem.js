import React, { useContext } from "react";

// import Link
import { Link } from "react-router-dom";

import { IoMdAdd, IoMdRemove, IoMdTrash } from "react-icons/io";

// import cart context
import {CartContext} from "../contexts/CartContext"

const CartItem = ({ item }) => {
  const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:py-2 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[50px]" src={image} alt="product img" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-xs uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div 
            onClick={()=> removeFromCart(id)} 
            className="text-xl cursor-pointer">
              <IoMdTrash className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qut */}
            <div className="flex flex-1 max-w-[100px]items-center h-full border text-primary font-medium ">
              {/* minus icon */}
              <div 
              onClick={()=>decreaseAmount(id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2 ">
                {amount}
              </div>
              {/* plus icon */}
              <div 
              onClick={()=>increaseAmount(id)} 
              className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            {/* items price */}
            <div className="flex-1 flex justify-around items-center">${price} </div>
            {/* final price */}
            {/* making price at 2 decimal */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium ">
              {`$ ${parseFloat(price * amount).toFixed(2)}`} 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
