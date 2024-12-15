import { Link } from "react-router-dom";
import clientLogo from "../Assets/images/logo.png";
const NavBar = () => {
  return (
    <header className="menu-area sticky top-[-1px] bg-white shadow z-[999]">
      <div className="container mx-auto flex justify-between items-center py-6 max-[780px]:px-[20px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="logo-area">
            <img className="normal-logo h-[70px]" src={clientLogo} alt="logo" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 hidden md:flex justify-center space-x-6 text-gray-800 font-medium">
          <Link
            to="/"
            className="text-[#ffda31] font-semibold hover:text-yellow-600 text-[19px]"
          >
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-600 text-[19px]">
            About
          </Link>
          {/* <Link to="/services" className="hover:text-gray-600 text-[19px]">
            Services
          </Link> */}
          <Link to="/products" className="hover:text-gray-600 text-[19px]">
            Products{" "}
          </Link>
          <Link to="/contact" className="hover:text-gray-600 text-[19px]">
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Button */}
          <Link
            to="/contact"
            className="!bg-[#ffda31]  text-[#010d14] !font-[600] !px-[40px] !py-[15px] h-auto !text-[15px] !shadow-none hover:!bg-black !rounded-none hover:text-[#fff] max-[780px]:hidden"
          >
            Let&apos;s Talk
          </Link>

          {/* Hamburger Icon */}
          <button
            id="nav-expander"
            className="md:hidden flex items-center justify-center"
          >
            <div className="grid grid-cols-3 gap-[5px] w-5 h-5">
              {[...Array(9)].map((_, index) => (
                <span
                  key={index}
                  className="w-1.5 h-1.5 bg-black rounded-full"
                ></span>
              ))}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
