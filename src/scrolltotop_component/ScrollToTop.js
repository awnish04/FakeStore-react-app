// import React, { useEffect } from 'react';

// function ScrollToTop(Component) {
//   return function ScrollToTopComponent(props) {
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, []);

//     return <Component {...props} />;
//   };
// }

// export default ScrollToTop;
// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
