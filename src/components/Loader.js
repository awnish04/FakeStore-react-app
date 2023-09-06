import React from "react";
import {motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease:'easeOut'
      },
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div 
      variants={loaderVariants}
      animate="animationOne"
      className="w-2.5 h-2.5 mx-auto my-40 rounded-full bg-black">
      </motion.div>
    </>
  );
};

export default Loader;

// import React from 'react';

// const Loader = () => {
//   return (
//     <div className="loading-container">
//       <div className="loader"></div>
//     </div>
//   );
// };

// export default Loader;