import React, { useContext} from "react";

// SidebarContext
import { SidebarContext } from "../contexts/SidebarContext";

// CartContext
import { CartContext } from "../contexts/CartContext";

// import icon
import { FaCartShopping } from "react-icons/fa6";

// import Link
import { Link } from "react-router-dom";

// import logo
import Logo from "../img/logo.svg";
const Header = () => {
  // header stats
  
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);


  // changer header color after scrolling starts
  // const [isActive, setIsActive] = useState(false);
  // // event listener
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     window.scrollY > 40? setIsActive(true) : setIsActive(false);
  //   });
  //   <header className={`${isActive? 'bg-[#b1d2e3fa] py-4 shadow-lg' : 'bg-none py-6'} fixed w-full z-10 transition-all`}></header>
  // });
   // changer header color after scrolling ends
  
  return (
    <header className="py-4 fixed  shadow-md bg-[#b1d2e3fa] w-full z-10 transition-all">
      <div className="container flex mx-auto items-center justify-between h-full px-12">
         {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[50px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <FaCartShopping className="text-3xl text-[#f49f45]" />
          <div className="bg-[#EF4722] absolute -right-2 -bottom-2 text-xs w-[18px] h-[18px] text-white rounded-full flex justify-center items-center text-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
