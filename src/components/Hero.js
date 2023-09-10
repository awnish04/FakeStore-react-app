import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion

const variantsContainer = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 2,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    delay: 0.8,
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1, // Increase scale on hover
    transition: {
      duration: 0.1, // Transition duration
      yoyo: Infinity, // Infinite animation
    },
  },
};

const Hero = () => {
  return (
    <section className="h-[700px] bg-hero bg-no-repeat bg-cover bg-center py-4 ">
      <div className="container mx-auto flex  h-full px-10 lg:px-24">
        {/* text */}
        <motion.div
          className="flex flex-col justify-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variantsContainer} // Apply the animation variants
        >
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-8 lg:w-12 h-1 bg-[#f49f45] mr-3"></div>
            <span className="text-white">New Trend</span>
          </div>
          <h1 className="uppercase text-white font-bold text-3xl lg:text-7xl  mb-4  ">
            Discover Your Style
            <br />
            <span className="text-lg lg:text-3xl font-medium">
              Shop the Latest Trends at Unbeatable Prices
            </span>
          </h1>

          <motion.div
            variants={buttonVariants}
            whileHover="hover" // Apply the hover variant on hover
            className="self-start uppercase font-semibold text-white bg-[#f49f45] px-8 py-4 rounded-full cursor-pointer"
          >
            <Link to={"/"}>Discover More</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
